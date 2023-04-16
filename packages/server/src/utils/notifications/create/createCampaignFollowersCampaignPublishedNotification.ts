import { Notification } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotification from "src/utils/notifications/create/createNotification";
import CampaignFollowersCampaignPublishedNotificationData from "src/types/notifications/CampaignFollowersCampaignPublishedNotificationData";

export default async function createCampaignFollowersCampaignPublishedNotification(
  data: CampaignFollowersCampaignPublishedNotificationData,
  receiverId: string,
  senderId: string
): Promise<Maybe<Notification>> {
  return createNotification(
    data,
    receiverId,
    senderId,
    NotificationTypeExpress_Enum.CampaignFollowersCampaignPublished
  );
}
