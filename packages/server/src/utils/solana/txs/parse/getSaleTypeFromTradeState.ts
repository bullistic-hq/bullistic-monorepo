import SaleType from "@bullistic-hq/bullistic-auction-house/dist/types/enum/SaleType";
import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import SortOrder from "bullistic-shared/dist/types/enums/SortOrder";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { getCompareByProperty } from "bullistic-shared/dist/utils/getCompareByProperty";
import getParsedTransactionsForAddress from "src/utils/solana/getParsedTransactionsForAddress";
import getAuctionHouseConstants from "src/utils/solana/getAuctionHouseConstants";
import { decodeAuctionHouseTransaction } from "@bullistic-hq/bullistic-auction-house";

type CreateTradeStateIxData = {
  price: BN;
  saleType: SaleType;
  tokenSize: BN;
  tradeStateBump: number;
  tradeStateSize: Maybe<number>;
};

export default async function getSaleTypeFromTradeState(
  tradeStateAccount: PublicKey
) {
  const parsedTxs = (
    await getParsedTransactionsForAddress(tradeStateAccount)
  ).sort(getCompareByProperty("blockTime", SortOrder.Desc));

  const decodedTransactions = parsedTxs.map((tx) => {
    const decodedTransaction = decodeAuctionHouseTransaction(
      getAuctionHouseConstants().programId,
      tx
    );
    if (
      decodedTransaction == null ||
      decodedTransaction.createTradeState === null
    ) {
      return null;
    }

    return decodedTransaction.createTradeState;
  });

  const mostRecentCreateTradeStateIx = decodedTransactions.find(
    (val) => val != null
  );

  if (mostRecentCreateTradeStateIx == null) {
    // Using old trade state, return auction
    return SaleType.Auction;
  }

  return (mostRecentCreateTradeStateIx.data as CreateTradeStateIxData).saleType;
}
