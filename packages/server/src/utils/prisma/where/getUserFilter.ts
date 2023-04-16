import { Prisma } from "@prisma/client";
import { MaybeUndef } from "bullistic-shared/dist/types/UtilityTypes";
import isPublicKey from "bullistic-shared/dist/utils/solana/isPublicKey";
import invariant from "tiny-invariant";

export default function getUserFilter(
  address: MaybeUndef<string>,
  username: MaybeUndef<string>
): Prisma.UserWhereUniqueInput {
  invariant(
    address != null || username != null,
    "One of address or username should be non-null"
  );

  if (username != null) {
    if (isPublicKey(username)) {
      // This case accounts for the fact that we can either use usernames or user addresses
      // in order to visit a profile.
      // For example, both of these go to the same profile:
      // - https://bullistic.xyz/@4xwR8Je1JnDc1CfRbnwVa41GbjniEb9UHbXMgqEV2ST1
      // - https://bullistic.xyz/@maxwelladams
      return {
        id: username,
      };
    }

    return {
      username,
    };
  }

  return {
    id: address!,
  };
}
