import { Notification } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import createNotification from "src/utils/notifications/create/createNotification";
import CampaignCommunityNewUpdateSharedNotificationData from "src/types/notifications/CampaignCommunityNewUpdateSharedNotificationData";

export default async function createCampaignCommunityNewUpdateSharedNotification(
  data: CampaignCommunityNewUpdateSharedNotificationData,
  receiverId: string
): Promise<Maybe<Notification>> {
  return createNotification(
    data,
    receiverId,
    null,
    NotificationTypeExpress_Enum.CampaignCommunityNewUpdateShared
  );
}
