import { Prisma } from "@prisma/client";
import { MaybeUndef } from "bullistic-shared/dist/types/UtilityTypes";
import isPublicKey from "bullistic-shared/dist/utils/solana/isPublicKey";
import invariant from "tiny-invariant";

export default function getCreatorFilter(
  creatorAddress: MaybeUndef<string>,
  creatorUsername: MaybeUndef<string>
): Prisma.NftWhereInput {
  invariant(
    creatorAddress != null || creatorUsername != null,
    "One of creatorAddress or creatorUsername should be non-null"
  );

  if (creatorUsername != null) {
    if (isPublicKey(creatorUsername)) {
      // This case accounts for the fact that we can either use usernames or user addresses
      // in order to visit a profile.
      // For example, both of these go to the same profile:
      // - https://bullistic.xyz/@4xwR8Je1JnDc1CfRbnwVa41GbjniEb9UHbXMgqEV2ST1
      // - https://bullistic.xyz/@maxwelladams
      return {
        creatorId: creatorUsername,
      };
    }

    return {
      Creator: {
        username: creatorUsername,
      },
    };
  }

  return {
    creatorId: creatorAddress!,
  };
}
