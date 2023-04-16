import { Instruction } from "@project-serum/anchor";
import { BULLISTIC_CANDY_MACHINE_IDL } from "@bullistic-hq/bullistic-candy-machine";
import { PartiallyDecodedInstruction, PublicKey } from "@solana/web3.js";
import { Maybe } from "types/UtilityTypes";
import decodeWithIdl from "utils/solana/ix/decodeWithIdl";
import arePublicKeysEqual from "utils/compare/arePublicKeysEqual";

export default function decodeCandyMachineIx(
  ix: PartiallyDecodedInstruction,
  programId: PublicKey,
  onError: (error: Error) => void
): Maybe<Instruction> {
  if (!arePublicKeysEqual(ix.programId, programId)) {
    // If the ix is not a candy machine ix, then don't even bother decoding it.
    return null;
  }

  return decodeWithIdl(ix, BULLISTIC_CANDY_MACHINE_IDL, onError);
}
