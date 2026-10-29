import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../", import.meta.url)));
const manifestPath = join(root, "release", "release-manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const failures = [];

for (const entry of manifest.files) {
  try {
    const bytes = readFileSync(join(root, entry.path));
    const digest = createHash("sha256").update(bytes).digest("hex");
    if (bytes.length !== entry.bytes) {
      failures.push(`${entry.path}: byte length mismatch`);
    }
    if (digest !== entry.sha256) {
      failures.push(`${entry.path}: SHA-256 mismatch`);
    }
  } catch (error) {
    failures.push(`${entry.path}: ${error.code ?? "read failed"}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "passed",
  manifest: "release/release-manifest.json",
  releaseTag: manifest.releaseTag,
  files: manifest.files.length
}));
