import { Instruction } from "@project-serum/anchor";
import { GUMDROP_IDL } from "@bullistic-hq/bullistic-gumdrop";
import { PartiallyDecodedInstruction } from "@solana/web3.js";
import decodeWithIdl from "utils/solana/ix/decodeWithIdl";
import { Maybe } from "types/UtilityTypes";
import emptyFunction from "utils/emptyFunction";

export default function decodeGumdropIx(
  ix: PartiallyDecodedInstruction
): Maybe<Instruction> {
  return decodeWithIdl(ix, GUMDROP_IDL, emptyFunction);
}
