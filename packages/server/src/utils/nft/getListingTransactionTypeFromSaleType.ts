import SaleType from "@bullistic-hq/bullistic-auction-house/dist/types/enum/SaleType";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import { NftTransactionTypeExpress_Enum } from "src/__generated__/generated";

export default function getListingTransactionTypeFromSaleType(
  saleType: SaleType
) {
  switch (saleType) {
    case SaleType.InstantSale:
      return NftTransactionTypeExpress_Enum.ListedInstantSale;
    case SaleType.Auction:
    case SaleType.Offer:
      return NftTransactionTypeExpress_Enum.Listed;
    default:
      return assertUnreachable(saleType);
  }
}
