import {
  ParsedInstruction,
  PartiallyDecodedInstruction,
} from "@solana/web3.js";
import IsIxResult from "bullistic-shared/dist/types/IsIxResult";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import isCandyMachineIx from "bullistic-shared/dist/utils/solana/txs/parse/isCandyMachineIx";
import loadCandyMachineSdk from "src/utils/solana/loadCandyMachineSdk";

export default async function isSoldGenerativeMintIx(
  ix: ParsedInstruction | PartiallyDecodedInstruction,
  onDecodeError: (e: Error) => void
): Promise<Maybe<IsIxResult>> {
  const candyMachineSdk = loadCandyMachineSdk();
  const programId = candyMachineSdk.candyMachineProgramId;

  return isCandyMachineIx(ix, ["mintNft"], programId, onDecodeError);
}
