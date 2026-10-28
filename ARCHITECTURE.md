# Architecture

## High-level model

The project separates money from artwork ownership.

```text
Artcoin chain
  - Proof of work
  - Coin issuance
  - Coin balances and transfers
  - Miner fees and block rewards

Artwork chain
  - Proof of work
  - Artwork records
  - Content hashes
  - Edition numbers and ownership
  - Gift and transfer history
  - No Artcoin issuance
```

The two ledgers can reference each other through hashes and domain-bound
transactions. A website may mirror both, but the website is not the sole owner
of truth.

## Public verification

The intended public verification flow is:

1. Verify the network ID, chain ID, genesis commitment and genesis hash.
2. Verify rule signatures against the published rule-signing key.
3. Verify transaction signatures and transaction IDs.
4. Verify block proof of work and cumulative work.
5. Verify Merkle inclusion proofs for artwork or coin transactions.
6. Verify content-addressed artwork files against their SHA-256 hashes.
7. Verify that ownership history is append-only and transfer signatures are
   authorized by the previous owner.

## Current trust boundary

- One writable PostgreSQL state leader currently coordinates governance data.
- Two loopback chain processes are not cross-machine redundancy.
- Tor reachability is not yet independently stable.
- Public websites must not be treated as ownership authorities.
- These limitations must be removed before calling the network fully
  decentralized.

## Design constraints

- Artcoins and artworks use different asset types.
- Artwork transactions do not mint Artcoins.
- Artcoin transactions do not mint or transfer artworks.
- Every transaction is bound to a network domain.
- Node and local-write endpoints reject ambiguous hosts and cross-site writes.
- Historical chain data is not deleted or silently rewritten.
- Rule changes apply to future actions and leave append-only history.
