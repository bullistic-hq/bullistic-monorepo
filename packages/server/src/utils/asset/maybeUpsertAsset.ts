import getContentTypeFromFilename from "bullistic-shared/dist/utils/getContentTypeFromFilename";
import { Maybe, MaybeUndef } from "bullistic-shared/dist/types/UtilityTypes";
import { Asset, Prisma } from "@prisma/client";
import { v4 } from "uuid";
import getAssetPathFromBullisticAssetSrc from "src/utils/asset/getAssetPathFromBullisticAssetSrc";
import PrismaTransactionClient from "src/types/PrismaTransactionClient";

// TODO: add support for video?
export default async function maybeUpsertAsset(
  prisma: PrismaTransactionClient,
  assetSrc: MaybeUndef<string>,
  existingAssetId: MaybeUndef<string>,
  assetDataOverrides?: Partial<Prisma.AssetCreateInput>
): Promise<Maybe<Asset>> {
  if (assetSrc == null) {
    return null;
  }

  // TODO: support arbitrary URLs by using uploadFileFromUrl
  const assetPath = getAssetPathFromBullisticAssetSrc(assetSrc);
  if (assetSrc != null && assetPath == null) {
    throw new Error(
      "Invalid URI for asset -- the asset must be uploaded to our Firebase storage bucket"
    );
  }
  const assetPathWithoutParams = assetPath!.split("?")[0];

  const assetCreateOrUpdate = {
    contentType: getContentTypeFromFilename(assetPathWithoutParams),
    downloadUrl: assetSrc!,
    path: assetPathWithoutParams,
    ...(assetDataOverrides ?? {}),
  };
  return assetSrc != null
    ? prisma.asset.upsert({
        create: assetCreateOrUpdate,
        update: assetCreateOrUpdate,
        where: { id: existingAssetId ?? v4() },
      })
    : null;
}
