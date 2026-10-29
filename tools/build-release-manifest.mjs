import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../", import.meta.url)));
const outputPath = join(root, "release", "release-manifest.json");
const excluded = new Set([
  "release/release-manifest.json",
  "release/release-manifest.json.sig"
]);
const version = process.env.RELEASE_VERSION ?? "0.1.0-public.1";
const releaseTag = `v${version}`;
const createdAt = process.env.RELEASE_CREATED_AT;
const baseCommit =
  process.env.RELEASE_BASE_COMMIT ??
  execFileSync(
    "git",
    ["rev-parse", "HEAD"],
    { cwd: root, encoding: "utf8" }
  ).trim();
const fingerprint =
  process.env.RELEASE_KEY_FINGERPRINT ??
  "SHA256:M8k7jouMOhYU8ekX3g54qj7J0kAPnAwDbTznmPE498Q";

if (!createdAt) {
  console.error("Set RELEASE_CREATED_AT to a fixed ISO-8601 timestamp.");
  process.exit(1);
}

const trackedFiles = execFileSync(
  "git",
  ["ls-files"],
  { cwd: root, encoding: "utf8" }
).split(/\r?\n/).filter(Boolean);

const files = trackedFiles
  .map((path) => path.replaceAll("\\", "/"))
  .filter((path) => !excluded.has(path))
  .sort()
  .map((path) => {
    const bytes = readFileSync(join(root, path));
    return {
      path,
      bytes: bytes.length,
      sha256: createHash("sha256").update(bytes).digest("hex")
    };
  });

const rule = JSON.parse(readFileSync(
  join(root, "data", "rule-000047-public.json"),
  "utf8"
));
const manifest = {
  schemaVersion: 1,
  project: "Verifiable Art Commons",
  version,
  releaseTag,
  createdAt,
  baseCommit,
  ruleId: rule.ruleId,
  signing: {
    algorithm: "Ed25519",
    identity: "verifiable-art-commons-release",
    namespace: "verifiable-art-commons",
    fingerprint,
    publicKey: "security/release-signing-key.pub"
  },
  files
};

writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  status: "written",
  path: relative(root, outputPath).replaceAll("\\", "/"),
  files: files.length,
  releaseTag
}));
