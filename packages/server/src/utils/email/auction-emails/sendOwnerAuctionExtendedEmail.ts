import { Request } from "express";
import FROM_EMAIL from "src/constants/FromEmail";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import sendEmail from "src/utils/email/sendEmail";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

export default async function sendOwnerAuctionExtendedEmail(
  templateData: {
    imageSrc: Maybe<string>;
    nftLink: string;
    nftName: string;
    numMinutes: number;
  },
  toEmail: string,
  req?: Request
) {
  return sendEmail(
    FROM_EMAIL,
    toEmail,
    NotificationTypeExpress_Enum.OwnerAuctionExtended,
    templateData,
    req
  );
}
