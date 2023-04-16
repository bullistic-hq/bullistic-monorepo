import OwnerOtherBidReceivedNotificationData from "src/types/notifications/OwnerOtherBidReceivedNotificationData";
import { Notification } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotification from "src/utils/notifications/create/createNotification";

export default async function createOwnerOtherBidReceivedNotification(
  data: OwnerOtherBidReceivedNotificationData,
  receiverId: string,
  senderId: string
): Promise<Maybe<Notification>> {
  return createNotification(
    data,
    receiverId,
    senderId,
    NotificationTypeExpress_Enum.OwnerOtherBidReceived
  );
}
