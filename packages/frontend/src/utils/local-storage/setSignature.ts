import PublicKeyOrString from "bullistic-shared/dist/types/PublicKeyOrString";
import LocalStoragePrefix from "types/enums/LocalStoragePrefix";
import setWithPrefix from "utils/local-storage/setWithPrefix";

export default function setSignature(
  publicKey: PublicKeyOrString,
  signature: string
): void {
  setWithPrefix(LocalStoragePrefix.Signature, publicKey.toString(), signature);
}
