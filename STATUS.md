# Current Status

Last verified: 2026-10-28

## Public boundary

The project is a v1 candidate prototype. No public economy is active.

| Item | Current state |
|---|---|
| Active public rule | `rule-000047` |
| Public mining | Closed |
| Public minting | Closed |
| Public transfers and gifts | Closed |
| Nominations and voting writes | Closed |
| Artcoin chain height | `0` |
| Artcoin supply | `0` |
| Artwork chain height | `0` |
| Artwork count | `0` |
| External independent nodes | None |
| External PostgreSQL replica | None |
| Cross-machine failover proven | No |
| Official asset takeover | Not started |

## Publicly reproducible in this repository

- Public candidate-state data and its consistency tests.
- Configuration leak-pattern checks with synthetic regression tests.
- Standard MIT licensing for included code and documentation.
- Isolated read-only GitHub checks.
- Public Ed25519 release-key fingerprint and signed release verification flow.

## Internal prototype claims not yet reproducible from this public archive

- Desktop miner and cross-process chain synchronization.
- Full evidence for PostgreSQL backup and restore checks.
- Rule-signing implementation and production signing keys.
- Independent external-node and cross-machine failover tests.

Implementation does not mean public activation. Public writes remain disabled
until consensus, independent-node, database-recovery, content-storage and legal
reviews are complete.

## Known limitations

- The current Tor entry has not been proven reliably reachable from independent
  clients.
- The project still has one writable PostgreSQL primary and no external standby.
- Artwork v1 legacy minting is frozen from height 1; an artwork-v2 authorization
  network with real 2-of-3 review keys is not active.
- The 24 temporal/cultural seats are a research draft, not a finalized issuance
  list.
- Long-term image and 3D content storage is not yet operational.
- Public identity is not proof of one unique human.
- GitHub publication is not peer review or a security certification.

## Reporting errors

Please include expected behavior, observed behavior, reproduction steps and
public evidence. Never upload wallet files, seed phrases, private logs, database
dumps, personal identity documents or production credentials.
