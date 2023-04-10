import { GraphQLObjectType } from "graphql";
import IActivityNotificationGqlType, {
  IACTIVITY_NOTIFICATION_FIELDS,
} from "src/schema/interface/IActivityNotificationGqlType";
import ActivityNotificationNftInfoGqlType from "src/schema/object/notifications/ActivityNotificationNftInfoGqlType";
import Typename from "src/types/enums/Typename";
import gqlNonNull from "src/utils/graphql/gqlNonNull";

const ActivityNotificationOwnerAuctionEndedNoBidsGqlType =
  new GraphQLObjectType({
    fields: {
      ...IACTIVITY_NOTIFICATION_FIELDS,
      nftInfo: { type: gqlNonNull(ActivityNotificationNftInfoGqlType) },
    },
    interfaces: [IActivityNotificationGqlType],
    name: Typename.ActivityNotificationOwnerAuctionEndedNoBids,
  });

export default ActivityNotificationOwnerAuctionEndedNoBidsGqlType;
