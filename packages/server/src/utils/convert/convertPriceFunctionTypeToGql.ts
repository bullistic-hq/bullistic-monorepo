import { PriceFunctionType } from "@bullistic-hq/bullistic-auction-house";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import { PriceFunctionTypeExpress_Enum } from "src/__generated__/generated";

export default function convertPriceFunctionTypeToGql(
  priceFunctionType: PriceFunctionType
): PriceFunctionTypeExpress_Enum {
  switch (priceFunctionType) {
    case PriceFunctionType.Constant:
      return PriceFunctionTypeExpress_Enum.Constant;
    case PriceFunctionType.Linear:
      return PriceFunctionTypeExpress_Enum.Linear;
    case PriceFunctionType.Minimum:
      return PriceFunctionTypeExpress_Enum.Minimum;
    default:
      return assertUnreachable(priceFunctionType);
  }
}
