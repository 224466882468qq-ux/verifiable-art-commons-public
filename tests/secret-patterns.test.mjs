import assert from "node:assert/strict";
import test from "node:test";
import { findForbiddenPatterns } from "../tools/secret-patterns.mjs";

const privateKeyHeader =
  "-----BEGIN " + "OPENSSH PRIVATE KEY-----";
const fineGrainedToken =
  "github_" + "pat_" + "a".repeat(30);
const awsAccessKey =
  "AKIA" + "A".repeat(16);

test("known private key and token formats are rejected", () => {
  assert.deepEqual(
    findForbiddenPatterns(privateKeyHeader),
    ["private-key"]
  );
  assert.deepEqual(
    findForbiddenPatterns(fineGrainedToken),
    ["github-fine-grained-token"]
  );
  assert.deepEqual(
    findForbiddenPatterns(awsAccessKey),
    ["aws-access-key"]
  );
});

test("host paths and service addresses are rejected", () => {
  assert.deepEqual(
    findForbiddenPatterns("C:" + "\\Users\\example\\project"),
    ["windows-user-path"]
  );
  assert.deepEqual(
    findForbiddenPatterns("/" + "home/example/project"),
    ["posix-user-path"]
  );
  assert.deepEqual(
    findForbiddenPatterns("127.0.0.1" + ":18080"),
    ["local-service-url"]
  );
});

test("clean public prose is accepted", () => {
  assert.deepEqual(
    findForbiddenPatterns("Candidate chains remain at height zero."),
    []
  );
});
