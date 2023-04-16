import UnlockableDeclinedToSharedInfoNotificationData from "src/types/notifications/UnlockableDeclinedToSharedInfoNotificationData";
import { Notification } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotification from "src/utils/notifications/create/createNotification";

export default async function createUnlockableDeclinedToSharedInfoNotification(
  data: UnlockableDeclinedToSharedInfoNotificationData,
  receiverId: string,
  senderId: string
): Promise<Maybe<Notification>> {
  return createNotification(
    data,
    receiverId,
    senderId,
    NotificationTypeExpress_Enum.UnlockableDeclinedToSharedInfo
  );
}
