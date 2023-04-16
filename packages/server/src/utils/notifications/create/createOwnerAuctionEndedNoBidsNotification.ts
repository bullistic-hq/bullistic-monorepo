import OwnerAuctionEndedNoBidsNotificationData from "src/types/notifications/OwnerAuctionEndedNoBidsNotificationData";
import { Notification } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotification from "src/utils/notifications/create/createNotification";

export default async function createOwnerAuctionEndedNoBidsNotification(
  data: OwnerAuctionEndedNoBidsNotificationData,
  receiverId: string
): Promise<Maybe<Notification>> {
  return createNotification(
    data,
    receiverId,
    null,
    NotificationTypeExpress_Enum.OwnerAuctionEndedNoBids
  );
}
