import NftKind from "bullistic-shared/dist/types/enums/NftKind";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";

export default function shouldShowOffersForNftKind(nftKind: NftKind): boolean {
  switch (nftKind) {
    case NftKind.MasterEditionWithNonzeroSupply:
    case NftKind.MasterEditionWithUnlimitedSupply:
    case NftKind.PnftMasterEdition:
      return false;
    case NftKind.StandardEditionPrintNonzeroSupply:
    case NftKind.StandardEditionPrintUnlimitedSupply:
    case NftKind.PnftStandardEdition:
    case NftKind.Generative:
    case NftKind.OneOfOne:
      return true;
    default:
      return assertUnreachable(nftKind);
  }
}
