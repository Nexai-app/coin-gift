import { Identity } from "@dfinity/agent";
import { createActor } from "../declarations/nexai";
import {Secp256k1KeyIdentity} from "@dfinity/identity-secp256k1"

const nexai_canisterId = "ouyx4-nyaaa-aaaag-qclkq-cai";



function getIdentityBySeed(seed: string): Identity {
    let identity = Secp256k1KeyIdentity.fromSeedPhrase(seed);
    console.log(identity.getPrincipal().toText());
    return identity;
}

const random = getIdentityBySeed("divorce dove talent buzz similar mention birth wage job dilemma club lizard old that regular door liquid over gauge deny exotic embark push margin")


export const actor = createActor(nexai_canisterId, {
    agentOptions: {
        fetch,
        identity: random
    }
})