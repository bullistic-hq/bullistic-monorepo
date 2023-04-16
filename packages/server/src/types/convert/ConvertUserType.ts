import { Photo, User } from "@prisma/client";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

type ConvertUserType = User & {
  Photo_PhotoToUser_coverPhotoId: Maybe<Photo>;
  Photo_PhotoToUser_profilePhotoId: Maybe<Photo>;
};

export default ConvertUserType;
