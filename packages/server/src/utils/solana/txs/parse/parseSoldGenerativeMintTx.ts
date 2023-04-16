import { ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
import { Maybe, Resolved } from "bullistic-shared/dist/types/UtilityTypes";
import NftTransactionOnchain from "src/types/NftTransactionOnchain";
import dayjs from "src/utils/dates/dayjsex";
import { NftTransactionTypeExpress_Enum } from "src/__generated__/generated";
import isBotTaxedTransaction from "bullistic-shared/dist/utils/solana/txs/parse/isBotTaxedTransaction";
import convertPrice from "src/utils/convert/convertPrice";
import loadCandyMachineSdk from "src/utils/solana/loadCandyMachineSdk";
import BullisticCandyMachineSdk, {
  DecodedBullisticCandyMachineTransactionResult,
} from "@bullistic-hq/bullistic-candy-machine";
import getCurrencyInfoForTreasuryMint from "src/utils/solana/txs/parse/getCurrencyInfoForTreasuryMint";
import { WRAPPED_SOL_MINT } from "bullistic-shared/dist/constants/SolanaConstants";
import maybeNumber from "bullistic-shared/dist/utils/numbers/maybeNumber";

type CandyMachineInfo = {
  candyMachine: Resolved<
    ReturnType<BullisticCandyMachineSdk["fetchCandyMachine"]>
  >;
  seriesInfo: Resolved<
    ReturnType<BullisticCandyMachineSdk["fetchCandyMachineCollectionPda"]>
  >;
};

async function getCandyMachineInfo(address: PublicKey) {
  try {
    const candyMachineSdk = loadCandyMachineSdk();
    const [candyMachineInfo, seriesInfo] = await Promise.all([
      candyMachineSdk.fetchCandyMachine(address),
      candyMachineSdk.fetchCandyMachineCollectionPda(address),
    ]);

    return {
      candyMachine: candyMachineInfo,
      seriesInfo,
    };
  } catch {
    return null;
  }
}

export default async function parseSoldGenerativeMintTx(
  tx: ParsedTransactionWithMeta,
  decodedTransaction: Maybe<DecodedBullisticCandyMachineTransactionResult>
): Promise<
  Maybe<{
    candyMachineInfo: Maybe<CandyMachineInfo>;
    tx: NftTransactionOnchain;
  }>
> {
  if (isBotTaxedTransaction(tx)) {
    return null;
  }

  if (decodedTransaction == null || decodedTransaction.mintNft == null) {
    return null;
  }

  const mintNftIx = decodedTransaction.mintNft;

  const {
    mint: mintForIx,
    candyMachine: candyMachineForIx,
    buyer,
    creatorAuthority,
  } = mintNftIx.accountsMap;

  const candyMachineInfo = await getCandyMachineInfo(candyMachineForIx.pubkey);

  const treasuryMint = candyMachineInfo?.candyMachine?.treasuryMint;
  const currencyInfo = await getCurrencyInfoForTreasuryMint(
    treasuryMint ?? WRAPPED_SOL_MINT
  );

  const price = maybeNumber(mintNftIx.data.expectedPrice as Maybe<string>);

  const txid = tx.transaction.signatures[0];
  return {
    candyMachineInfo,
    tx: {
      creatorId: creatorAuthority.pubkey.toString(),
      fromAddress: creatorAuthority.pubkey.toString(),
      id: txid,
      mint: mintForIx.pubkey.toString(),
      price:
        price != null && currencyInfo != null
          ? convertPrice(price, currencyInfo)
          : null,
      priceInLamports: price,
      timeCreated: dayjs.unix(tx.blockTime!).toDate(),
      toAddress: buyer.pubkey.toString(),
      txid,
      type: NftTransactionTypeExpress_Enum.SoldGenerativeMint,
    },
  };
}
