import Environment from "bullistic-shared/dist/types/Environment";
import getEnvironment from "utils/getEnvironment";
import AuctionHouseConstants from "bullistic-shared/dist/types/AuctionHouseConstants";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import {
  AUCTION_HOUSE_INFO_DEVNET,
  AUCTION_HOUSE_INFO_MAINNET,
  AUCTION_HOUSE_INFO_TESTNET,
} from "bullistic-shared/dist/constants/AuctionHouseInfoConstants";

export default function getAuctionHouseConstants(
  environment = getEnvironment()
): AuctionHouseConstants {
  switch (environment) {
    case Environment.Testnet:
      return AUCTION_HOUSE_INFO_TESTNET;
    case Environment.Local:
    case Environment.Development:
      return AUCTION_HOUSE_INFO_DEVNET;
    case Environment.Production:
      return AUCTION_HOUSE_INFO_MAINNET;
    default:
      return assertUnreachable(environment);
  }
}
