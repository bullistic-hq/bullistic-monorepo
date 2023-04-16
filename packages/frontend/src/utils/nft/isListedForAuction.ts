import RELAY_FUTURE_ADDED_VALUE from "constants/RelayFutureAddedValue";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import NftStatusExpress_enum from "types/relay/NftStatusExpress_enum";

export default function isListedForAuction(
  status: NftStatusExpress_enum
): boolean {
  switch (status) {
    case "Listed":
    case "ListingScheduled":
      return true;
    case "Auction":
    case "AirdropCompleted":
    case "AirdropInProgress":
    case "Burned":
    case "ListedEditions":
    case "ListedInstantSale":
    case "Owned":
    case "OwnedStoppedMintingForEditions":
    case "SoldOutEditions":
    case RELAY_FUTURE_ADDED_VALUE:
      return false;
    default:
      return assertUnreachable(status);
  }
}
