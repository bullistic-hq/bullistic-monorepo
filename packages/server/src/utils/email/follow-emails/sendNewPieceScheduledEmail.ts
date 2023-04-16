import { Dayjs } from "dayjs";
import { Request } from "express";
import FROM_EMAIL from "src/constants/FromEmail";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import sendEmail from "src/utils/email/sendEmail";
import formatScheduledAuctionTime from "bullistic-shared/dist/utils/dates/formatScheduledAuctionTime";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

export default async function sendNewPieceScheduledEmail(
  templateData: {
    artist?: string;
    imageSrc: Maybe<string>;
    nftLink: string;
    nftName: string;
    price: string;
    scheduledAuctionTime: Dayjs;
    seller: string;
  },
  toEmails: Array<string>,
  req?: Request
) {
  return sendEmail(
    FROM_EMAIL,
    toEmails,
    NotificationTypeExpress_Enum.FollowerNewPieceScheduled,
    {
      ...templateData,
      scheduledAuctionTime: formatScheduledAuctionTime(
        templateData.scheduledAuctionTime.toString(),
        "long"
      ),
    },
    req,
    "broadcast"
  );
}
