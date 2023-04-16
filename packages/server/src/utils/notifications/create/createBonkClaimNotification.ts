import { Notification } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotification from "src/utils/notifications/create/createNotification";

export default async function createBonkClaimNotification(
  receiverId: string
): Promise<Maybe<Notification>> {
  return createNotification(
    {},
    receiverId,
    null,
    NotificationTypeExpress_Enum.BonkClaim
  );
}
