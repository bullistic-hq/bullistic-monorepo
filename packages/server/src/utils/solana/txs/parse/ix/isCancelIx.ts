import {
  ParsedInstruction,
  PartiallyDecodedInstruction,
} from "@solana/web3.js";
import isAuctionHouseIx from "bullistic-shared/dist/utils/solana/txs/parse/isAuctionHouseIx";
import getAuctionHouseConstants from "src/utils/solana/getAuctionHouseConstants";

export default function isCancelIx(
  ix: ParsedInstruction | PartiallyDecodedInstruction,
  onDecodeError: (e: Error) => void
) {
  return isAuctionHouseIx(
    ix,
    ["cancel", "cancelV2"],
    getAuctionHouseConstants().programId,
    onDecodeError
  );
}
