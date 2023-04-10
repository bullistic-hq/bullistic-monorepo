import styles from "css/grids/campaigns/CampaignFundingTierPreviewGridFullWidth.module.css";
import joinClasses from "utils/joinClasses";

type Props = {
  children: any;
  className?: string;
};

export default function CampaignFundingTierPreviewGridFullWidth({
  children,
  className,
}: Props): JSX.Element {
  return <div className={joinClasses(styles.grid, className)}>{children}</div>;
}
