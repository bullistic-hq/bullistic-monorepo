import OwnerAuctionEndedNotificationData from "src/types/notifications/OwnerAuctionEndedNotificationData";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotifications from "src/utils/notifications/create/createNotifications";

export default async function createOwnerAuctionEndedNotifications(
  data: Array<{
    data: OwnerAuctionEndedNotificationData;
    receiverId: string;
    senderId: string;
  }>
): Promise<void> {
  await createNotifications(
    data.map((datum) => ({
      ...datum,
      type: NotificationTypeExpress_Enum.OwnerAuctionEnded,
    }))
  );
}
