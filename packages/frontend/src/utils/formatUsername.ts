import { Maybe, MaybeUndef } from "bullistic-shared/dist/types/UtilityTypes";
import shortenAddress from "utils/shortenAddress";
import isPublicKey from "bullistic-shared/dist/utils/solana/isPublicKey";

export default function formatUsername(
  username: MaybeUndef<string>
): Maybe<string> {
  if (username == null) {
    return null;
  }

  if (isPublicKey(username)) {
    return shortenAddress(username);
  }

  return username;
}
