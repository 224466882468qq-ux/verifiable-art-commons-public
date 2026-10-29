# Public Release Records

Each release record contains:

- release version and tag;
- preceding commit used to create the release;
- active public rule ID;
- SHA-256 and byte length for each included public file;
- public signing-key fingerprint;
- detached Ed25519 signature.

Release records are append-only. Never replace the files or signature of a
previous release.

Verification instructions are in `security/README.md`.
