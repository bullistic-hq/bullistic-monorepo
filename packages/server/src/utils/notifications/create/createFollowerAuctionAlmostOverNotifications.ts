import FollowerAuctionAlmostOverNotificationData from "src/types/notifications/FollowerAuctionAlmostOverNotificationData";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotifications from "src/utils/notifications/create/createNotifications";

export default async function createFollowerAuctionAlmostOverNotifications(
  data: Array<{
    data: FollowerAuctionAlmostOverNotificationData;
    receiverId: string;
    senderId: string;
  }>
): Promise<void> {
  await createNotifications(
    data.map((datum) => ({
      ...datum,
      type: NotificationTypeExpress_Enum.FollowerAuctionAlmostOver,
    }))
  );
}