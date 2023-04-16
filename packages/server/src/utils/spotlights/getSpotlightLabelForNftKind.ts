import NftKind from "bullistic-shared/dist/types/enums/NftKind";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";

export default function getSpotlightLabelForNftKind(nftKind: NftKind): string {
  switch (nftKind) {
    case NftKind.MasterEditionWithNonzeroSupply:
    case NftKind.MasterEditionWithUnlimitedSupply:
      return "Editions Spotlight";
    case NftKind.Generative:
    case NftKind.OneOfOne:
      return "1/1 Spotlight";
    case NftKind.PnftMasterEdition:
    case NftKind.PnftStandardEdition:
    case NftKind.StandardEditionPrintNonzeroSupply:
    case NftKind.StandardEditionPrintUnlimitedSupply:
      // Realistically, we would never spotlight these things
      // but if we did, we can just override it with a more appropriate value
      return "NFT Spotlight";
    default:
      return assertUnreachable(nftKind);
  }
}
