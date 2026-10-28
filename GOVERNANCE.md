# Collaboration and Governance

Public access, code contribution and production control are separate things.

| Role | Can do | Cannot do |
|---|---|---|
| Visitor | Read public material and open Issues | Write to production |
| Researcher | Submit proposals, counterexamples and reproductions | Change `main` or production |
| Code contributor | Fork and open Pull Requests | Push directly to `main` |
| Reviewer | Review assigned proposals and tests | Change consensus or sign releases alone |
| Maintainer | Merge ordinary reviewed changes | Change rules, wallets or production access alone |
| Release signer | Sign an approved release | Use keys without public review |
| Project owner | Steward repository and infrastructure | Rewrite historical ownership or remove public evidence |

New collaborators begin with Issue or Pull Request access. They do not receive
server accounts, database access, wallets, signing keys or administrative
permissions.

## Change classes

- Documentation, tests and non-consensus tooling: normal review.
- Consensus, issuance, fees, ownership or identity rules: public design note,
  threat analysis, tests, compatibility statement and signed activation plan.
- Emergency security changes: minimal private handling followed by an
  append-only public explanation after users are protected.

## Main branch

The intended public development policy is:

- no direct pushes by external contributors;
- one focused change per Pull Request;
- passing tests and secret scans;
- source and test evidence for consensus changes;
- project owner retains final merge authority;
- released history is corrected by adding records, not silently rewriting it.
