# Security Policy

## Reporting

Please use GitHub's private vulnerability reporting feature for this repository.
Do not open a public Issue for an unpatched vulnerability.

Include:

- affected component and expected security property;
- minimum reproduction steps;
- impact and preconditions;
- suggested mitigation, if known;
- whether the issue affects money, ownership, identity, availability or
  privacy.

Never send:

- private keys, seed phrases or wallet files;
- production database dumps or logs containing personal data;
- Tor hidden-service keys;
- administrator tokens or server credentials;
- another person's private information.

## Current boundary

- The public economy is closed.
- Both candidate chains are at height zero.
- Independent external nodes and PostgreSQL failover are not yet validated.
- The project is not a production wallet, custodian or investment service.

## Safe research

Allowed without prior coordination:

- reading public documents;
- testing your own local clone;
- deterministic unit tests using synthetic keys;
- source review and reproducible reports.

Not allowed:

- attacking real users or third-party infrastructure;
- accessing data without authorization;
- denial-of-service testing against public services;
- social engineering, credential theft or persistence.
