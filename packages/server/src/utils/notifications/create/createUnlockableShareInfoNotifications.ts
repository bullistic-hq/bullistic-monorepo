import UnlockableShareInfoNotificationData from "src/types/notifications/UnlockableShareInfoNotificationData";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotifications from "src/utils/notifications/create/createNotifications";

export default async function createUnlockableShareInfoNotifications(
  data: Array<{
    data: UnlockableShareInfoNotificationData;
    receiverId: string;
    senderId: string;
  }>
): Promise<void> {
  await createNotifications(
    data.map((datum) => ({
      ...datum,
      type: NotificationTypeExpress_Enum.UnlockableShareInfo,
    }))
  );
}
