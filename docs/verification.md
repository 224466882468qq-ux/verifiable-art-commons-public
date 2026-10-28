# Public Verification

## Repository checks

Run:

```sh
npm run check
```

The check validates the public status JSON and rejects common private-data
patterns, secret file extensions, absolute host paths and Tor addresses.

## Claims to verify

Published examples should be checked against:

- network ID and chain ID;
- genesis commitment and genesis hash;
- configuration hash;
- rule ID and rule hash;
- transaction signature and canonical transaction ID;
- proof-of-work target and cumulative work;
- Merkle inclusion proof;
- SHA-256 content hash.

## What this repository does not prove

- that a public economy is active;
- that a website is the official owner of an artwork;
- that one public identity is one unique human;
- that a candidate server is highly available;
- that a Git commit is an audit or peer-reviewed result.
