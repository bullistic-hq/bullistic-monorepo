import Environment from "bullistic-shared/dist/types/Environment";
import getEnvironment from "utils/getEnvironment";
import AuctionHouseInfo from "bullistic-shared/dist/types/AuctionHouseInfo";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import Currency from "types/relay/Currency";
import getSharedCurrencyEnumFromGqlCurrency from "utils/solana/misc/getSharedCurrencyEnumFromGqlCurrency";
import getTreasuryMintForCurrency from "bullistic-shared/dist/utils/auction-house/getTreasuryMintForCurrency";
import getAuctionHouseAccountKeyForCurrency from "bullistic-shared/dist/utils/auction-house/getAuctionHouseAccountKeyForCurrency";

export default function getAuctionHouseInfo(
  currency: Currency,
  environment = getEnvironment()
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
      return { auctionHouse, treasuryMint };
    case Environment.Local:
    case Environment.Development:
      return { auctionHouse, treasuryMint };
    case Environment.Production:
      return { auctionHouse, treasuryMint };
    default:
      return assertUnreachable(environment);
  }
}
