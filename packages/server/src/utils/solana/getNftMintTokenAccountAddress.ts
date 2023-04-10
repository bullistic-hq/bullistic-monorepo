import { PublicKey, TokenAccountBalancePair } from "@solana/web3.js";
import { Maybe } from "formfn-shared/dist/types/UtilityTypes";
import ConnectionWrapper from "src/utils/solana/rpc/ConnectionWrapper";

/**
 * Returns true if token accounts are valid for an NFT mint.
 */
function isValidTokenAccountBalancePairArr(
  pairs: Array<TokenAccountBalancePair>
): boolean {
  const amountSum = pairs.reduce(
    (acc, currVal) => acc + (currVal.uiAmount ?? 0),
    0
  );

  return pairs.every((pair) => pair.decimals === 0) && amountSum === 1;
}

/**
 * @param mintAddress the address of an NFT's mint account
 * @returns the token account that owns the NFT
 */
export default async function getNftMintTokenAccountAddress(
  mintAddress: PublicKey
): Promise<Maybe<PublicKey>> {
  try {
    const { value: pairs } = await ConnectionWrapper.getTokenLargestAccounts(
      mintAddress
    );
    if (!isValidTokenAccountBalancePairArr(pairs)) {
      return null;
    }
    const tokenAccountsWithBalance = pairs.filter((val) => val.uiAmount === 1);

    if (tokenAccountsWithBalance.length === 0) {
      return null;
    }

    return tokenAccountsWithBalance[0].address;
  } catch {
    return null;
  }
}
