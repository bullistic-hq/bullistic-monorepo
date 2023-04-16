import RELAY_FUTURE_ADDED_VALUE from "constants/RelayFutureAddedValue";
import CampaignStatusExpress_enum from "types/relay/CampaignStatusExpress_enum";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";

export default function isManageFundingTiersAllowed(
  status: CampaignStatusExpress_enum
) {
  switch (status) {
    case "Approved":
    case "Draft":
    case "Published":
      return true;
    case "Concluded":
    case "Pending":
    case "Rejected":
    case RELAY_FUTURE_ADDED_VALUE:
      return false;
    default:
      return assertUnreachable(status);
  }
}
