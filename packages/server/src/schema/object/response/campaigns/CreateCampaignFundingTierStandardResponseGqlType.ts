import { GraphQLObjectType } from "graphql";
import CampaignV2GqlType from "src/schema/object/campaigns/CampaignV2GqlType";
import Typename from "src/types/enums/Typename";
import gqlNonNull from "src/utils/graphql/gqlNonNull";

const CreateCampaignFundingTierStandardResponseGqlType = new GraphQLObjectType({
  fields: {
    campaign: { type: gqlNonNull(CampaignV2GqlType) },
  },
  name: Typename.CreateCampaignFundingTierStandardResponse,
});

export default CreateCampaignFundingTierStandardResponseGqlType;
