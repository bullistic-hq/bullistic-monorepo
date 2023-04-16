import Environment from "bullistic-shared/dist/types/Environment";
import AuctionHouseInfo from "bullistic-shared/dist/types/AuctionHouseInfo";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import { CurrencyNameExpress_Enum } from "src/__generated__/generated";
import getSharedCurrencyEnumFromGqlCurrency from "src/utils/solana/getSharedCurrencyEnumFromGqlCurrency";
import getTreasuryMintForCurrency from "bullistic-shared/dist/utils/auction-house/getTreasuryMintForCurrency";
import getAuctionHouseAccountKeyForCurrency from "bullistic-shared/dist/utils/auction-house/getAuctionHouseAccountKeyForCurrency";

/**
 * This only exists so that getAuctionHouseInfo can be easily mocked.
 */
export default function getAuctionHouseInfoImpl(
  currency: CurrencyNameExpress_Enum,
  environment: Environment
): AuctionHouseInfo {
  const sharedCurrencyEnum = getSharedCurrencyEnumFromGqlCurrency(currency);
  const treasuryMint = getTreasuryMintForCurrency(
    environment,
    sharedCurrencyEnum
  );
  const auctionHouse = getAuctionHouseAccountKeyForCurrency(
    environment,
    sharedCurrencyEnum
  );
  switch (environment) {
    case Environment.Testnet:
      return {
        auctionHouse,
        treasuryMint,
      };
    case Environment.Local:
    case Environment.Development:
      return {
        auctionHouse,
        treasuryMint,
      };
    case Environment.Production:
      return {
        auctionHouse,
        treasuryMint,
      };
    default:
      return assertUnreachable(environment);
  }
}
