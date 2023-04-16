import { PriceFunctionType } from "@bullistic-hq/bullistic-auction-house";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import PriceFunctionTypeExpress_enum from "types/relay/PriceFunctionTypeExpress_enum";

export default function convertPriceFunctionTypeToRelay(
  priceFunctionType: PriceFunctionType
): PriceFunctionTypeExpress_enum {
  switch (priceFunctionType) {
    case PriceFunctionType.Constant:
      return "Constant";
    case PriceFunctionType.Linear:
      return "Linear";
    case PriceFunctionType.Minimum:
      return "Minimum";
    default:
      return assertUnreachable(priceFunctionType);
  }
}
