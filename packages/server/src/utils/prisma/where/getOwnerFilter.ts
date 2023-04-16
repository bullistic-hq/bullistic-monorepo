import { Prisma } from "@prisma/client";
import { MaybeUndef } from "bullistic-shared/dist/types/UtilityTypes";
import isPublicKey from "bullistic-shared/dist/utils/solana/isPublicKey";
import invariant from "tiny-invariant";

export default function getOwnerFilter(
  ownerAddress: MaybeUndef<string>,
  ownerUsername: MaybeUndef<string>
): Prisma.NftWhereInput {
  invariant(
    ownerAddress != null || ownerUsername != null,
    "One of ownerAddress or ownerUsername should be non-null"
  );

  if (ownerUsername != null) {
    if (isPublicKey(ownerUsername)) {
      // This case accounts for the fact that we can either use usernames or user addresses
      // in order to visit a profile.
      // For example, both of these go to the same profile:
      // - https://bullistic.xyz/@4xwR8Je1JnDc1CfRbnwVa41GbjniEb9UHbXMgqEV2ST1
      // - https://bullistic.xyz/@maxwelladams
      return {
        ownerId: ownerUsername,
      };
    }

    return {
      Owner: {
        username: ownerUsername,
      },
    };
  }

  return {
    ownerId: ownerAddress!,
  };
}
