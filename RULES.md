# Rule Summary: R47 Candidate

This is a readable summary of the current candidate parameters. It is not a
claim that public mining or issuance is active.

## Artcoin

- Maximum supply: `21,000,000` Artcoins.
- Initial block reward: `50` Artcoins.
- Halving interval: `210,000` blocks.
- Target block time: `600` seconds.
- Difficulty retarget interval: `2,016` blocks.
- Consensus: SHA-256 proof of work with a full 256-bit target.
- Final reward: only the remaining supply, then no new subsidy.
- After the cap, miners receive actual transaction fees only.

## Fees

- Ordinary Artcoin gifts: `0.001` Artcoin per coin.
- Ordinary artwork transfers: based on the artwork's issued-edition count.
- Ordinary transfer fees: `100%` to the block miner.
- Artwork mining ticket: `0.001` Artcoin, no additional network fee.
- Candidate nomination: `1` Artcoin, split `50%` maintenance and `50%`
  public recycle pool.
- Mirror nodes receive no automatic share of ordinary transfers.

## Artwork transfer tiers

| Issued editions | Current Artcoin transfer fee |
|---|---:|
| 1-64 | `0.05` |
| 65-512 | `0.02` |
| 513-4,096 | `0.01` |
| 4,097-16,384 | `0.005` |
| 16,385 or more | `0.002` |
| Genesis commemorative | `0.001` |

The fee is charged per artwork. It is not based on a claimed market price or
the price of a sale.

## Artwork result model

- Artwork mining never creates additional Artcoins.
- Base artwork result: `95%` study copy and `5%` resonance original.
- Resonance probability decreases as remaining transferable editions run out.
- Resonance originals are capped at `16,384` per work.
- Study copies are non-transferable and unlimited unless a future signed rule
  changes that boundary.
- Collection originals are one per first-time champion.
- Annual unique status upgrades an existing collection original; it does not
  create a duplicate.

## Artwork v1 freeze

- Legacy artwork-v1 minting is disabled from height `1`.
- Historical verification below the activation height is preserved.
- Artwork transfers remain part of the protocol design.
- A new artwork-v2 authorization network must be reviewed before public
  artwork minting can open.

## Current chain parameters

```json
{
  "artcoin": {
    "networkId": "onion-art-v1",
    "chainId": "oac-v1",
    "genesisHash": "b469025989778765323c802143193636f1bf29527e36837b08df5b25b451c729",
    "configHash": "5ad7c25c2c71ee69acb354fc639c1dc9657c5fc33a50d81ab16a663a96abded9"
  },
  "artwork": {
    "networkId": "onion-art-artworks-v1",
    "chainId": "oac-artworks-v1",
    "genesisHash": "d6c2bc1360468c14d41d48ad9d949a2b89fdfd666c196531ba589b1e52d4727b",
    "configHash": "02441b973f122d4a66be2bcaa4b4ff119b2abe82992fb2dfdc6b8dddae9a3a13",
    "legacyMintDisabledFromHeight": 1
  }
}
```

The machine-readable public copy is in
[data/rule-000047-public.json](data/rule-000047-public.json).
