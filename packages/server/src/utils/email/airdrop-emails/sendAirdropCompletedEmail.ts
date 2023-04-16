import { Request } from "express";
import FROM_EMAIL from "src/constants/FromEmail";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";
import sendEmail from "src/utils/email/sendEmail";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

export default async function sendAirdropCompletedEmail(
  templateData: {
    airdropCreatorUsername: string;
    airdropNftName: string;
    imageSrc: Maybe<string>;
    link: string;
  },
  toEmail: string,
  req?: Request
) {
  return sendEmail(
    FROM_EMAIL,
    toEmail,
    NotificationTypeExpress_Enum.AirdropCompleted,
    templateData,
    req
  );
}
