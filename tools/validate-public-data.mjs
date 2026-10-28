import {
  lstatSync,
  readFileSync,
  readdirSync
} from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../", import.meta.url)));
const forbiddenExtensions = new Set([
  ".db",
  ".dpapi",
  ".dump",
  ".env",
  ".key",
  ".log",
  ".oaenc",
  ".p12",
  ".pem",
  ".pfx",
  ".pgdump",
  ".sqlite",
  ".sqlite3",
  ".tar",
  ".tgz",
  ".zip"
]);
const forbiddenPatterns = [
  {
    name: "private-key",
    expression: /-----BEGIN (?:EC |RSA )?PRIVATE KEY-----/
  },
  {
    name: "database-url",
    expression: /postgres(?:ql)?:\/\//
  },
  {
    name: "windows-user-path",
    expression: /[A-Za-z]:\\Users\\/
  },
  {
    name: "production-path",
    expression: /\/var\/lib\/|\/etc\/systemd\/|\/opt\/onion/
  },
  {
    name: "tor-address",
    expression: /[a-z2-7]{56}\.onion/i
  },
  {
    name: "local-service-url",
    expression: /(?:127\.0\.0\.1|localhost):\d{2,5}/
  },
  {
    name: "github-token",
    expression: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/
  }
];
const ignoredDirectories = new Set([".git", "node_modules"]);
const failures = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;
    const path = join(directory, entry.name);
    const stats = lstatSync(path);
    if (stats.isSymbolicLink()) {
      failures.push(`${relative(root, path)}: symbolic links are not allowed`);
      continue;
    }
    if (stats.isDirectory()) {
      walk(path);
      continue;
    }
    if (!stats.isFile()) continue;
    checkFile(path, stats.size);
  }
}

function checkFile(path, bytes) {
  const relativePath = relative(root, path).replaceAll("\\", "/");
  if (forbiddenExtensions.has(extname(path).toLowerCase())) {
    failures.push(`${relativePath}: forbidden extension`);
  }
  if (bytes > 2 * 1024 * 1024) {
    failures.push(`${relativePath}: file exceeds 2 MiB`);
  }
  const text = readFileSync(path, "utf8");
  for (const rule of forbiddenPatterns) {
    if (rule.expression.test(text)) {
      failures.push(`${relativePath}: ${rule.name}`);
    }
  }
}

walk(root);

const status = JSON.parse(readFileSync(
  join(root, "data", "rule-000047-public.json"),
  "utf8"
));
const expected = {
  ruleId: "rule-000047",
  publicEconomyOpen: false,
  publicMiningOpen: false,
  maximumSupplyMicro: 21000000000000,
  initialSubsidyMicro: 50000000,
  halvingIntervalBlocks: 210000,
  targetBlockMs: 600000,
  retargetIntervalBlocks: 2016,
  artcoinHeight: 0,
  artcoinIssuedMicro: 0,
  artworkHeight: 0,
  artworkCount: 0
};
const observed = {
  ruleId: status.ruleId,
  publicEconomyOpen: status.activation.publicEconomyOpen,
  publicMiningOpen: status.activation.publicMiningOpen,
  maximumSupplyMicro: status.artcoin.maximumSupplyMicro,
  initialSubsidyMicro: status.artcoin.initialSubsidyMicro,
  halvingIntervalBlocks: status.artcoin.halvingIntervalBlocks,
  targetBlockMs: status.artcoin.targetBlockMs,
  retargetIntervalBlocks: status.artcoin.retargetIntervalBlocks,
  artcoinHeight: status.currentChainState.artcoinHeight,
  artcoinIssuedMicro: status.currentChainState.artcoinIssuedMicro,
  artworkHeight: status.currentChainState.artworkHeight,
  artworkCount: status.currentChainState.artworkCount
};
for (const [key, value] of Object.entries(expected)) {
  if (observed[key] !== value) {
    failures.push(`data/rule-000047-public.json: ${key} mismatch`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(JSON.stringify({
  status: "safe",
  ruleId: status.ruleId,
  checkedFiles: "recursive",
  findings: 0
}));
