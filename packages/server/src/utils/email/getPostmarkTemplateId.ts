import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import PostmarkTemplateId from "src/types/enums/PostmarkTemplateId";
import { NotificationTypeExpress_Enum } from "src/__generated__/generated";

export default function getPostmarkTemplateId(
  notificationType: NotificationTypeExpress_Enum
) {
  switch (notificationType) {
    case NotificationTypeExpress_Enum.AirdropCompleted:
      return PostmarkTemplateId.AirdropCompleted;
    case NotificationTypeExpress_Enum.AirdropGiftReceived:
      return PostmarkTemplateId.AirdropGiftReceived;
    case NotificationTypeExpress_Enum.BidderAuctionAlmostOver:
      return PostmarkTemplateId.BidderAuctionAlmostOver;
    case NotificationTypeExpress_Enum.BidderAuctionExtended:
      return PostmarkTemplateId.BidderAuctionExtended;
    case NotificationTypeExpress_Enum.BidderAuctionSettled:
      return PostmarkTemplateId.BidderAuctionSettled;
    case NotificationTypeExpress_Enum.BidderClaimPnft:
      return PostmarkTemplateId.BidderClaimPnft;
    case NotificationTypeExpress_Enum.BidderClaimPnftReminder:
      return PostmarkTemplateId.BidderClaimPnftReminder;
    case NotificationTypeExpress_Enum.BidderLostAuction:
      return PostmarkTemplateId.BidderLostAuction;
    case NotificationTypeExpress_Enum.BidderOutbid:
      return PostmarkTemplateId.BidderOutbid;
    case NotificationTypeExpress_Enum.BidderWonAuction:
      return PostmarkTemplateId.BidderWonAuction;
    case NotificationTypeExpress_Enum.BuyerOfferAccepted:
      return PostmarkTemplateId.BuyerOfferAccepted;
    case NotificationTypeExpress_Enum.BonkClaim:
      return PostmarkTemplateId.BonkClaim;
    case NotificationTypeExpress_Enum.BuyerOfferExpired:
      return PostmarkTemplateId.BuyerOfferExpired;
    case NotificationTypeExpress_Enum.CampaignAddedAsTeamMember:
      return PostmarkTemplateId.CampaignAddedAsTeamMember;
    case NotificationTypeExpress_Enum.CampaignApproved:
      return PostmarkTemplateId.CampaignApproved;
    case NotificationTypeExpress_Enum.CampaignCommunityNewUpdateShared:
      return PostmarkTemplateId.CampaignCommunityNewUpdateShared;
    case NotificationTypeExpress_Enum.CampaignFollowersCampaignPublished:
      return PostmarkTemplateId.CampaignFollowerCampaignPublished;
    case NotificationTypeExpress_Enum.CampaignGoalReachedXPercent:
      return PostmarkTemplateId.CampaignGoalReachedXPercent;
    case NotificationTypeExpress_Enum.CampaignRejected:
      return PostmarkTemplateId.CampaignRejected;
    case NotificationTypeExpress_Enum.CampaignRejectedWithFeedback:
      return PostmarkTemplateId.CampaignRejectedWithFeedback;
    case NotificationTypeExpress_Enum.CollabRequest:
      return PostmarkTemplateId.CollabRequest;
    case NotificationTypeExpress_Enum.CreatorSecondarySale:
      return PostmarkTemplateId.CreatorSecondarySale;
    case NotificationTypeExpress_Enum.FollowerNewEditionsListed:
      return PostmarkTemplateId.FollowerNewEditionsListed;
    case NotificationTypeExpress_Enum.FollowerNewPieceListed:
      return PostmarkTemplateId.FollowerNewPieceListed;
    case NotificationTypeExpress_Enum.FollowerNewPieceListedSecondary:
      return PostmarkTemplateId.FollowerNewPieceListedSecondary;
    case NotificationTypeExpress_Enum.FollowerNewPieceScheduled:
      return PostmarkTemplateId.FollowerNewPieceScheduled;
    case NotificationTypeExpress_Enum.FollowerScheduledAuctionIsLive:
      return PostmarkTemplateId.FollowerScheduledAuctionIsLive;
    case NotificationTypeExpress_Enum.InviteReceived:
      return PostmarkTemplateId.InviteReceived;
    case NotificationTypeExpress_Enum.InvitesConvertedToCreator:
      return PostmarkTemplateId.InvitesConvertedToCreator;
    case NotificationTypeExpress_Enum.InvitesInviteeAcceptedInvite:
      return PostmarkTemplateId.InvitesInviteeAcceptedInvite;
    case NotificationTypeExpress_Enum.OwnerAuctionEnded:
      return PostmarkTemplateId.OwnerAuctionEnded;
    case NotificationTypeExpress_Enum.OwnerAuctionEndedNoBids:
      return PostmarkTemplateId.OwnerAuctionEndedNoBids;
    case NotificationTypeExpress_Enum.OwnerAuctionExtended:
      return PostmarkTemplateId.OwnerAuctionExtended;
    case NotificationTypeExpress_Enum.OwnerAuctionSettled:
      return PostmarkTemplateId.OwnerAuctionSettled;
    case NotificationTypeExpress_Enum.OwnerEditionSold:
      return PostmarkTemplateId.OwnerEditionSold;
    case NotificationTypeExpress_Enum.OwnerEditionsSoldOut:
      return PostmarkTemplateId.OwnerEditionsSoldOut;
    case NotificationTypeExpress_Enum.OwnerFirstBidReceived:
      return PostmarkTemplateId.OwnerFirstBidReceived;
    case NotificationTypeExpress_Enum.OwnerOfferReceived:
      return PostmarkTemplateId.OwnerOfferReceived;
    case NotificationTypeExpress_Enum.OwnerOtherBidReceived:
      return PostmarkTemplateId.OwnerOtherBidReceived;
    case NotificationTypeExpress_Enum.OwnerPieceSoldAsInstantSale:
      return PostmarkTemplateId.OwnerPieceSoldAsInstantSale;
    case NotificationTypeExpress_Enum.PnftDropClosed:
      return PostmarkTemplateId.PnftDropClosed;
    case NotificationTypeExpress_Enum.UnlockableDeclinedToSharedInfo:
      return PostmarkTemplateId.UnlockableDeclinedToSharedInfo;
    case NotificationTypeExpress_Enum.UnlockableInfoShared:
      return PostmarkTemplateId.UnlockableInfoShared;
    case NotificationTypeExpress_Enum.UnlockableShareInfo:
      return PostmarkTemplateId.UnlockableShareInfo;
    case NotificationTypeExpress_Enum.VotingApproved:
      return PostmarkTemplateId.VotingApproved;
    case NotificationTypeExpress_Enum.VotingBrokeGuidelines:
      return PostmarkTemplateId.VotingBrokeGuidelines;
    case NotificationTypeExpress_Enum.VotingDuplicate:
      return PostmarkTemplateId.VotingDuplicate;
    case NotificationTypeExpress_Enum.VotingRejected:
      return PostmarkTemplateId.VotingRejected;
    case NotificationTypeExpress_Enum.OwnerGenerativeMintSoldOut:
      return PostmarkTemplateId.OwnerGenerativeMintSoldOut;
    case NotificationTypeExpress_Enum.NewFollower:
      return PostmarkTemplateId.NewFollower;
    case NotificationTypeExpress_Enum.FollowerAuctionAlmostOver:
      throw new Error("Not supported yet");
    default:
      return assertUnreachable(notificationType);
  }
}
