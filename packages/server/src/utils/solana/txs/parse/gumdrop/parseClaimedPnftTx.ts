import { ParsedTransactionWithMeta } from "@solana/web3.js";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import dayjs from "src/utils/dates/dayjsex";
import getNftCreatorFromMint from "src/utils/prisma/getNftCreatorFromMint";
import { NftTransactionTypeExpress_Enum } from "src/__generated__/generated";
import NftTransactionOnchain from "src/types/NftTransactionOnchain";
import { DecodedBullisticGumdropTransactionResult } from "@bullistic-hq/bullistic-gumdrop";

export default async function parseClaimedPnftTx(
  tx: ParsedTransactionWithMeta,
  decodedTransaction: Maybe<DecodedBullisticGumdropTransactionResult>
): Promise<Maybe<{ tx: NftTransactionOnchain }>> {
  if (decodedTransaction == null || decodedTransaction.claimEdition == null) {
    return null;
  }

  const claimEditionIx = decodedTransaction.claimEdition;

  const { limitedEditionMint: tokenMintForIx, payer } =
    claimEditionIx.accountsMap;

  const { creatorAddress } = await getNftCreatorFromMint(tokenMintForIx.pubkey);
  if (creatorAddress == null) {
    return null;
  }

  const txid = tx.transaction.signatures[0];
  return {
    tx: {
      creatorId: creatorAddress,
      fromAddress: creatorAddress,
      id: txid,
      mint: tokenMintForIx.pubkey.toString(),
      priceInLamports: null,
      timeCreated: dayjs.unix(tx.blockTime!).toDate(),
      toAddress: payer.pubkey.toString(),
      txid,
      type: NftTransactionTypeExpress_Enum.ClaimedPnft,
    },
  };
}
