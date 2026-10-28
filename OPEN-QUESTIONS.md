# Open Questions

These questions are intentionally public. A good answer should state
assumptions, failure cases and evidence.

## Identity and Sybil resistance

- Can participation limits avoid biometric identity while resisting bulk
  account creation?
- Which device, payment and network-link signals are acceptable, and which are
  too invasive?
- How should appeals work without exposing private identity documents?

## Public randomness

- How should the protocol bind a deadline, participant set, artwork and rule
  version to a future public random round?
- What happens if the random beacon is unavailable or equivocates?
- How can a verifier reproduce the result without trusting a website?

## Artwork ownership

- What is the smallest wallet-native proof of artwork ownership?
- How should content hashes bind images and 3D models across storage providers?
- How should an artwork-v2 2-of-3 authorization network be audited?

## Economics

- How can fees fund miners without promising investment returns?
- What rules prevent mirror operators from receiving newly minted coins merely
  for staying online?
- How should fixed nomination fees split between maintenance and a public
  recycle pool?

## Database recovery

- How can a second physical PostgreSQL site prove leader fencing?
- Which signed backup manifest fields are sufficient for anti-rollback checks?
- How should a restore role be sandboxed to avoid running untrusted SQL as a
  superuser?

## Content preservation

- Should images and 3D files use IPFS, BitTorrent, content-addressed HTTP or a
  hybrid?
- How many independent replicas are enough for long-term availability?
- How should takedown and copyright disputes be recorded without deleting
  evidence?

## Twenty-four temporal seats

- Which 24 cultural and historical seats give broad geographic and temporal
  coverage?
- What authoritative provenance is required before a representative is
  eligible?
- How should edition caps reflect scarcity without pretending to determine
  artistic value?
