import { getErrorMessageFromCandyMachineIdl } from "@bullistic-hq/bullistic-candy-machine";
import { getErrorMessageFromGumdropIdl } from "@bullistic-hq/bullistic-gumdrop";
import { Maybe } from "graphql/jsutils/Maybe";
import getErrorMessageFromAuctionHouseIdl from "utils/solana/errors/getErrorMessageFromAuctionHouseIdl";

/**
 * Our Solana programs use different error code offsets to avoid error code
 * collisions in this parsing function. Each program should have a unique
 * offset. See more details here: https://www.notion.so/bullistic/Anchor-Error-Code-Offsets-406acbe31c7a475fad4a787b56d94fb7
 */
export default function getProgramErrorMessage(
  errorCode: number
): Maybe<string> {
  return (
    getErrorMessageFromAuctionHouseIdl(errorCode) ??
    getErrorMessageFromGumdropIdl(errorCode) ??
    getErrorMessageFromCandyMachineIdl(errorCode)
  );
}
