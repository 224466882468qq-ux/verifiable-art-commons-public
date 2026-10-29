# Contributing

Thank you for reviewing the project.

## Before opening an Issue

- Read `STATUS.md` and `RULES.md`.
- Search existing Issues.
- Use synthetic data; never upload private keys, wallet files, seed phrases,
  database dumps, production logs or personal identity documents.
- Do not publish an unpatched vulnerability. Use GitHub's private security
  reporting flow instead.

## Good first contributions

- independent review of rule text;
- reproducible threat models;
- protocol test vectors;
- verification scripts with no network access;
- accessibility and translation review;
- PostgreSQL failover scenarios;
- content-addressed storage experiments;
- public-data schema validation;
- citation and provenance research.

## Pull Requests

1. Open or find a focused Issue.
2. Fork the repository.
3. Keep the change small and explain its threat or failure model.
4. Add or update tests.
5. Run:

```sh
npm run check
```

6. Describe compatibility impact and any new trust assumptions.
7. Do not add deployment credentials, binary wallets, private infrastructure
   data or copyrighted artwork without a separate license review.
8. Sign off every commit with `git commit -s` to certify that you have the
   right to submit the contribution under the repository's MIT License.

## Consensus and economic changes

A consensus or economics Pull Request must include:

- current behavior and proposed behavior;
- affected network and transaction versions;
- replay and migration behavior;
- historical-data impact;
- failure and rollback cases;
- test vectors;
- public activation and signing plan.

## Contribution recognition

Contributors may choose a public alias. A contribution record may be added to an
append-only contributor file after review. Recognition does not automatically
grant ownership, administrator rights, revenue, voting power or control of
official domains and signing keys.
