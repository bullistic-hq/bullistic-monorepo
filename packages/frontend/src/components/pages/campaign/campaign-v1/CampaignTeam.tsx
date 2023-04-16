import AboutCard from "components/cards/AboutCard";
import useColorModeContext from "hooks/useColorModeContext";
import useFlagsTyped from "hooks/useFlagsTyped";
import BackgroundColorClass from "types/enums/BackgroundColorClass";

type Props = {
  slug: string;
};

export default function CampaignTeam({ slug }: Props) {
  const {
    campaignsConfig: { campaignsBySlug },
  } = useFlagsTyped();
  const campaign = campaignsBySlug[slug];
  const { isLightMode } = useColorModeContext();
  if (campaign == null || campaign.team == null) {
    return null;
  }
  return (
    <AboutCard
      backgroundColorClass={undefined}
      description={campaign.team}
      title="Team"
    />
  );
}
