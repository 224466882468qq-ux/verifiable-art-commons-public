import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const data = JSON.parse(readFileSync(
  new URL("../data/rule-000047-public.json", import.meta.url),
  "utf8"
));

test("public economy remains closed at candidate state", () => {
  assert.equal(data.ruleId, "rule-000047");
  assert.equal(data.activation.published, true);
  assert.equal(data.activation.publicEconomyOpen, false);
  assert.equal(data.activation.publicMiningOpen, false);
  assert.equal(data.activation.publicMintingOpen, false);
  assert.equal(data.activation.publicTransfersOpen, false);
});

test("chain identities and supply schedule are frozen", () => {
  assert.equal(data.artcoin.maximumSupplyMicro, 21_000_000_000_000);
  assert.equal(data.artcoin.initialSubsidyMicro, 50_000_000);
  assert.equal(data.artcoin.halvingIntervalBlocks, 210_000);
  assert.equal(data.artcoin.targetBlockMs, 600_000);
  assert.equal(data.artcoin.retargetIntervalBlocks, 2_016);
  assert.equal(data.artwork.legacyMintDisabledFromHeight, 1);
  assert.equal(data.artwork.issuesArtcoins, false);
});

test("ordinary fees and node boundaries match the stated model", () => {
  assert.equal(data.fees.ordinaryTransferMinerShareBps, 10_000);
  assert.equal(data.fees.nominationMaintenanceShareBps, 5_000);
  assert.equal(data.fees.nominationRecycleShareBps, 5_000);
  assert.equal(data.fees.artcoinGiftFeeMicroPerCoin, 1_000);
  assert.equal(data.fees.artworkTicketMicro, 1_000);
  assert.equal(data.fees.artworkTicketExtraNetworkFeeMicro, 0);
  assert.equal(data.nodes.automaticProtocolPayoutEnabled, false);
  assert.equal(data.nodes.mayMintArtcoins, false);
});

test("public snapshot contains no active chain height", () => {
  assert.equal(data.currentChainState.artcoinHeight, 0);
  assert.equal(data.currentChainState.artcoinIssuedMicro, 0);
  assert.equal(data.currentChainState.artworkHeight, 0);
  assert.equal(data.currentChainState.artworkCount, 0);
});
