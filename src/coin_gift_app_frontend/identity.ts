import { Identity } from "@dfinity/agent";
import { createActor } from "../declarations/vdb";
import { Secp256k1KeyIdentity } from "@dfinity/identity-secp256k1";

type NETWORK_TYPE = "local" | "ic";

export const DFX_NETWORK = (process.env.DFX_NETWORK || "local") as NETWORK_TYPE;

export const host =
  DFX_NETWORK === "local" ? "http://localhost:4943" : "https://ic0.app";

// const CANISTER_ID_EXTERNAL = process.env.CANISTER_ID_EXTERNAL;
const CANISTER_ID_EXTERNAL = "ouyx4-nyaaa-aaaag-qclkq-cai";
const CANISTER_ID_NEXAI = "b77ix-eeaaa-aaaaa-qaada-cai";

function getIdentityBySeed(seed: string): Identity {
  let identity = Secp256k1KeyIdentity.generate(); /* fromSeedPhrase(seed); */
  console.log(identity.getPrincipal().toText());
  return identity;
}

export const random = getIdentityBySeed(
  "divorce dove talent buzz similar mention birth wage job dilemma club lizard old that regular door liquid over gauge deny exotic embark push margin"
);

export const actor = createActor(CANISTER_ID_NEXAI, {
  agentOptions: {
    host,
    identity: random,
  },
});
