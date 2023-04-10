/**
 * @generated SignedSource<<777f980d1a80c61e377584a7a5dbbaf7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSubmissionStatus_enum = "Approved" | "ApprovedWithoutVoting" | "Pending" | "Rejected" | "VoteActive" | "%future added value";
export type NftStatus_enum = "AirdropCompleted" | "AirdropInProgress" | "Auction" | "Burned" | "Listed" | "ListedEditions" | "ListedInstantSale" | "ListingScheduled" | "Owned" | "OwnedStoppedMintingForEditions" | "SoldOutEditions" | "%future added value";
export type SeriesType_enum = "GenerativeMint" | "UserCurated" | "%future added value";
export type VoteReason_enum = "BreaksGuidelines" | "Duplicate" | "LowQuality" | "VoteFailed" | "%future added value";
export type VoteType_enum = "Approve" | "PrescreenApprove" | "PrescreenReject" | "Reject" | "ReportSubmission" | "Skip" | "Upvote" | "%future added value";
export type order_by = "asc" | "asc_nulls_first" | "asc_nulls_last" | "desc" | "desc_nulls_first" | "desc_nulls_last" | "%future added value";
export type Series_order_by = {
  AvatarPhoto?: Photo_order_by | null;
  CoverPhoto?: Photo_order_by | null;
  Creator?: User_order_by | null;
  Nfts_aggregate?: Nft_aggregate_order_by | null;
  avatarPhotoId?: order_by | null;
  coverPhotoId?: order_by | null;
  creatorId?: order_by | null;
  description?: order_by | null;
  id?: order_by | null;
  logoAsset?: Asset_order_by | null;
  logoAssetId?: order_by | null;
  mint?: order_by | null;
  name?: order_by | null;
  nameLength?: order_by | null;
  nftOrder?: order_by | null;
  slug?: order_by | null;
  timeCreated?: order_by | null;
  timeLastAddedTo?: order_by | null;
  type?: order_by | null;
};
export type Photo_order_by = {
  description?: order_by | null;
  id?: order_by | null;
  photoUrl?: order_by | null;
  storagePath?: order_by | null;
  timeCreated?: order_by | null;
  title?: order_by | null;
  userId?: order_by | null;
};
export type User_order_by = {
  ArtistSubmissions_aggregate?: ArtistSubmission_aggregate_order_by | null;
  CoverPhoto?: Photo_order_by | null;
  CreatorStory?: CreatorStory_order_by | null;
  DiscordAuth?: DiscordAuth_order_by | null;
  Followed_aggregate?: UserFollows_aggregate_order_by | null;
  Followers_aggregate?: UserFollows_aggregate_order_by | null;
  ProfilePhoto?: Photo_order_by | null;
  bio?: order_by | null;
  coverPhotoId?: order_by | null;
  discordHandle?: order_by | null;
  displayName?: order_by | null;
  email?: order_by | null;
  emailBlocklist?: order_by | null;
  hasCompletedSignup?: order_by | null;
  hasTakenCollectorSurvey2023?: order_by | null;
  hasTakenCreatorSurvey2023?: order_by | null;
  hasUnseenActivity?: order_by | null;
  id?: order_by | null;
  instagramName?: order_by | null;
  isCollector?: order_by | null;
  isCollector2?: order_by | null;
  isWhitelisted?: order_by | null;
  profilePhotoId?: order_by | null;
  seriesOrder?: order_by | null;
  shouldBlurNsfwContent?: order_by | null;
  shouldSeeDiscordOnboardingPrompt?: order_by | null;
  timeCreated?: order_by | null;
  twitterName?: order_by | null;
  username?: order_by | null;
  usernameLength?: order_by | null;
  websiteUrl?: order_by | null;
};
export type ArtistSubmission_aggregate_order_by = {
  count?: order_by | null;
  max?: ArtistSubmission_max_order_by | null;
  min?: ArtistSubmission_min_order_by | null;
};
export type ArtistSubmission_max_order_by = {
  artProcess?: order_by | null;
  artistStatement?: order_by | null;
  discordHandle?: order_by | null;
  id?: order_by | null;
  instagramName?: order_by | null;
  timeCreated?: order_by | null;
  twitterName?: order_by | null;
  userId?: order_by | null;
  websiteUrl?: order_by | null;
};
export type ArtistSubmission_min_order_by = {
  artProcess?: order_by | null;
  artistStatement?: order_by | null;
  discordHandle?: order_by | null;
  id?: order_by | null;
  instagramName?: order_by | null;
  timeCreated?: order_by | null;
  twitterName?: order_by | null;
  userId?: order_by | null;
  websiteUrl?: order_by | null;
};
export type CreatorStory_order_by = {
  colorScheme?: order_by | null;
  goals?: order_by | null;
  headline?: order_by | null;
  id?: order_by | null;
  inspiration?: order_by | null;
  process?: order_by | null;
  userId?: order_by | null;
};
export type DiscordAuth_order_by = {
  DiscordAuthToDiscordRoles_aggregate?: DiscordAuthToDiscordRole_aggregate_order_by | null;
  authorizationNonce?: order_by | null;
  discordHandle?: order_by | null;
  discordUserId?: order_by | null;
  hasConnectedDiscordAccount?: order_by | null;
  hasJoinedDiscordServer?: order_by | null;
  id?: order_by | null;
  timeCreated?: order_by | null;
  userId?: order_by | null;
};
export type DiscordAuthToDiscordRole_aggregate_order_by = {
  count?: order_by | null;
  max?: DiscordAuthToDiscordRole_max_order_by | null;
  min?: DiscordAuthToDiscordRole_min_order_by | null;
};
export type DiscordAuthToDiscordRole_max_order_by = {
  discordAuthId?: order_by | null;
  discordRoleId?: order_by | null;
  id?: order_by | null;
  timeCreated?: order_by | null;
};
export type DiscordAuthToDiscordRole_min_order_by = {
  discordAuthId?: order_by | null;
  discordRoleId?: order_by | null;
  id?: order_by | null;
  timeCreated?: order_by | null;
};
export type UserFollows_aggregate_order_by = {
  count?: order_by | null;
  max?: UserFollows_max_order_by | null;
  min?: UserFollows_min_order_by | null;
};
export type UserFollows_max_order_by = {
  followedId?: order_by | null;
  followerId?: order_by | null;
  id?: order_by | null;
  timeCreated?: order_by | null;
};
export type UserFollows_min_order_by = {
  followedId?: order_by | null;
  followerId?: order_by | null;
  id?: order_by | null;
  timeCreated?: order_by | null;
};
export type Nft_aggregate_order_by = {
  avg?: Nft_avg_order_by | null;
  count?: order_by | null;
  max?: Nft_max_order_by | null;
  min?: Nft_min_order_by | null;
  stddev?: Nft_stddev_order_by | null;
  stddev_pop?: Nft_stddev_pop_order_by | null;
  stddev_samp?: Nft_stddev_samp_order_by | null;
  sum?: Nft_sum_order_by | null;
  var_pop?: Nft_var_pop_order_by | null;
  var_samp?: Nft_var_samp_order_by | null;
  variance?: Nft_variance_order_by | null;
};
export type Nft_avg_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_max_order_by = {
  auctionCount?: order_by | null;
  campaignFundingTierId?: order_by | null;
  creatorId?: order_by | null;
  edition?: order_by | null;
  id?: order_by | null;
  masterEdition?: order_by | null;
  masterEditionMint?: order_by | null;
  maxSupply?: order_by | null;
  metadataId?: order_by | null;
  mint?: order_by | null;
  ownerId?: order_by | null;
  priceLastSoldCurrencyId?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesId?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
  standardEdition?: order_by | null;
  timeCreated?: order_by | null;
  timeLastEditionSoldPrimary?: order_by | null;
};
export type Nft_min_order_by = {
  auctionCount?: order_by | null;
  campaignFundingTierId?: order_by | null;
  creatorId?: order_by | null;
  edition?: order_by | null;
  id?: order_by | null;
  masterEdition?: order_by | null;
  masterEditionMint?: order_by | null;
  maxSupply?: order_by | null;
  metadataId?: order_by | null;
  mint?: order_by | null;
  ownerId?: order_by | null;
  priceLastSoldCurrencyId?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesId?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
  standardEdition?: order_by | null;
  timeCreated?: order_by | null;
  timeLastEditionSoldPrimary?: order_by | null;
};
export type Nft_stddev_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_stddev_pop_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_stddev_samp_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_sum_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_var_pop_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_var_samp_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Nft_variance_order_by = {
  auctionCount?: order_by | null;
  edition?: order_by | null;
  maxSupply?: order_by | null;
  priceLastSoldForInLamports?: order_by | null;
  seriesRarityBasisPoints?: order_by | null;
  seriesRarityRanking?: order_by | null;
};
export type Asset_order_by = {
  artistSubmissionId?: order_by | null;
  arweaveTxid?: order_by | null;
  campaignGalleryAssetCampaignId?: order_by | null;
  contentType?: order_by | null;
  downloadUrl?: order_by | null;
  downloadUrlDarkMode?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  path?: order_by | null;
  pathDarkMode?: order_by | null;
  postId?: order_by | null;
  premintPreviewAssetCandyMachineId?: order_by | null;
  userId?: order_by | null;
  videoPlaybackId?: order_by | null;
  width?: order_by | null;
};
export type Series_bool_exp = {
  AvatarPhoto?: Photo_bool_exp | null;
  CoverPhoto?: Photo_bool_exp | null;
  Creator?: User_bool_exp | null;
  Nfts?: Nft_bool_exp | null;
  _and?: ReadonlyArray<Series_bool_exp> | null;
  _not?: Series_bool_exp | null;
  _or?: ReadonlyArray<Series_bool_exp> | null;
  avatarPhotoId?: uuid_comparison_exp | null;
  coverPhotoId?: uuid_comparison_exp | null;
  creatorId?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  logoAsset?: Asset_bool_exp | null;
  logoAssetId?: uuid_comparison_exp | null;
  mint?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  nameLength?: Int_comparison_exp | null;
  nftOrder?: jsonb_comparison_exp | null;
  slug?: String_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  timeLastAddedTo?: timestamptz_comparison_exp | null;
  type?: SeriesType_enum_comparison_exp | null;
};
export type Photo_bool_exp = {
  _and?: ReadonlyArray<Photo_bool_exp> | null;
  _not?: Photo_bool_exp | null;
  _or?: ReadonlyArray<Photo_bool_exp> | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  photoUrl?: String_comparison_exp | null;
  storagePath?: String_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  userId?: String_comparison_exp | null;
};
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: ReadonlyArray<string> | null;
  _iregex?: string | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: ReadonlyArray<string> | null;
  _niregex?: string | null;
  _nlike?: string | null;
  _nregex?: string | null;
  _nsimilar?: string | null;
  _regex?: string | null;
  _similar?: string | null;
};
export type uuid_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type timestamptz_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type User_bool_exp = {
  ArtistSubmissions?: ArtistSubmission_bool_exp | null;
  CoverPhoto?: Photo_bool_exp | null;
  CreatorStory?: CreatorStory_bool_exp | null;
  DiscordAuth?: DiscordAuth_bool_exp | null;
  Followed?: UserFollows_bool_exp | null;
  Followers?: UserFollows_bool_exp | null;
  ProfilePhoto?: Photo_bool_exp | null;
  _and?: ReadonlyArray<User_bool_exp> | null;
  _not?: User_bool_exp | null;
  _or?: ReadonlyArray<User_bool_exp> | null;
  bio?: String_comparison_exp | null;
  coverPhotoId?: uuid_comparison_exp | null;
  discordHandle?: String_comparison_exp | null;
  displayName?: String_comparison_exp | null;
  email?: String_comparison_exp | null;
  emailBlocklist?: jsonb_comparison_exp | null;
  hasCompletedSignup?: Boolean_comparison_exp | null;
  hasTakenCollectorSurvey2023?: Boolean_comparison_exp | null;
  hasTakenCreatorSurvey2023?: Boolean_comparison_exp | null;
  hasUnseenActivity?: Boolean_comparison_exp | null;
  id?: String_comparison_exp | null;
  instagramName?: String_comparison_exp | null;
  isCollector?: Boolean_comparison_exp | null;
  isCollector2?: Boolean_comparison_exp | null;
  isWhitelisted?: Boolean_comparison_exp | null;
  profilePhotoId?: uuid_comparison_exp | null;
  seriesOrder?: jsonb_comparison_exp | null;
  shouldBlurNsfwContent?: Boolean_comparison_exp | null;
  shouldSeeDiscordOnboardingPrompt?: Boolean_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  twitterName?: String_comparison_exp | null;
  username?: String_comparison_exp | null;
  usernameLength?: Int_comparison_exp | null;
  websiteUrl?: String_comparison_exp | null;
};
export type ArtistSubmission_bool_exp = {
  Assets?: Asset_bool_exp | null;
  User?: User_bool_exp | null;
  Votes?: Vote_bool_exp | null;
  _and?: ReadonlyArray<ArtistSubmission_bool_exp> | null;
  _not?: ArtistSubmission_bool_exp | null;
  _or?: ReadonlyArray<ArtistSubmission_bool_exp> | null;
  artProcess?: String_comparison_exp | null;
  artistStatement?: String_comparison_exp | null;
  discordHandle?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  instagramName?: String_comparison_exp | null;
  isCopyrightVerified?: Boolean_comparison_exp | null;
  status?: ArtistSubmissionStatus_enum_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  twitterName?: String_comparison_exp | null;
  userId?: String_comparison_exp | null;
  websiteUrl?: String_comparison_exp | null;
};
export type Asset_bool_exp = {
  _and?: ReadonlyArray<Asset_bool_exp> | null;
  _not?: Asset_bool_exp | null;
  _or?: ReadonlyArray<Asset_bool_exp> | null;
  artistSubmissionId?: uuid_comparison_exp | null;
  arweaveTxid?: String_comparison_exp | null;
  campaignGalleryAssetCampaignId?: uuid_comparison_exp | null;
  contentType?: String_comparison_exp | null;
  downloadUrl?: String_comparison_exp | null;
  downloadUrlDarkMode?: String_comparison_exp | null;
  height?: Int_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  path?: String_comparison_exp | null;
  pathDarkMode?: String_comparison_exp | null;
  postId?: uuid_comparison_exp | null;
  premintPreviewAssetCandyMachineId?: uuid_comparison_exp | null;
  userId?: String_comparison_exp | null;
  videoPlaybackId?: String_comparison_exp | null;
  width?: Int_comparison_exp | null;
};
export type Int_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: ReadonlyArray<number> | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: ReadonlyArray<number> | null;
};
export type Vote_bool_exp = {
  ArtistSubmission?: ArtistSubmission_bool_exp | null;
  User?: User_bool_exp | null;
  _and?: ReadonlyArray<Vote_bool_exp> | null;
  _not?: Vote_bool_exp | null;
  _or?: ReadonlyArray<Vote_bool_exp> | null;
  artistSubmissionId?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  reason?: VoteReason_enum_comparison_exp | null;
  reportReasons?: jsonb_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  userId?: String_comparison_exp | null;
  voteType?: VoteType_enum_comparison_exp | null;
};
export type VoteReason_enum_comparison_exp = {
  _eq?: VoteReason_enum | null;
  _in?: ReadonlyArray<VoteReason_enum> | null;
  _is_null?: boolean | null;
  _neq?: VoteReason_enum | null;
  _nin?: ReadonlyArray<VoteReason_enum> | null;
};
export type jsonb_comparison_exp = {
  _cast?: jsonb_cast_exp | null;
  _contained_in?: any | null;
  _contains?: any | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _has_key?: string | null;
  _has_keys_all?: ReadonlyArray<string> | null;
  _has_keys_any?: ReadonlyArray<string> | null;
  _in?: ReadonlyArray<any> | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: ReadonlyArray<any> | null;
};
export type jsonb_cast_exp = {
  String?: String_comparison_exp | null;
};
export type VoteType_enum_comparison_exp = {
  _eq?: VoteType_enum | null;
  _in?: ReadonlyArray<VoteType_enum> | null;
  _is_null?: boolean | null;
  _neq?: VoteType_enum | null;
  _nin?: ReadonlyArray<VoteType_enum> | null;
};
export type Boolean_comparison_exp = {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: ReadonlyArray<boolean> | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: ReadonlyArray<boolean> | null;
};
export type ArtistSubmissionStatus_enum_comparison_exp = {
  _eq?: ArtistSubmissionStatus_enum | null;
  _in?: ReadonlyArray<ArtistSubmissionStatus_enum> | null;
  _is_null?: boolean | null;
  _neq?: ArtistSubmissionStatus_enum | null;
  _nin?: ReadonlyArray<ArtistSubmissionStatus_enum> | null;
};
export type CreatorStory_bool_exp = {
  _and?: ReadonlyArray<CreatorStory_bool_exp> | null;
  _not?: CreatorStory_bool_exp | null;
  _or?: ReadonlyArray<CreatorStory_bool_exp> | null;
  colorScheme?: Int_comparison_exp | null;
  goals?: String_comparison_exp | null;
  headline?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  inspiration?: String_comparison_exp | null;
  process?: String_comparison_exp | null;
  userId?: String_comparison_exp | null;
};
export type DiscordAuth_bool_exp = {
  DiscordAuthToDiscordRoles?: DiscordAuthToDiscordRole_bool_exp | null;
  _and?: ReadonlyArray<DiscordAuth_bool_exp> | null;
  _not?: DiscordAuth_bool_exp | null;
  _or?: ReadonlyArray<DiscordAuth_bool_exp> | null;
  authorizationNonce?: String_comparison_exp | null;
  discordHandle?: String_comparison_exp | null;
  discordUserId?: String_comparison_exp | null;
  hasConnectedDiscordAccount?: Boolean_comparison_exp | null;
  hasJoinedDiscordServer?: Boolean_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  userId?: String_comparison_exp | null;
};
export type DiscordAuthToDiscordRole_bool_exp = {
  DiscordAuth?: DiscordAuth_bool_exp | null;
  DiscordRole?: DiscordRole_bool_exp | null;
  _and?: ReadonlyArray<DiscordAuthToDiscordRole_bool_exp> | null;
  _not?: DiscordAuthToDiscordRole_bool_exp | null;
  _or?: ReadonlyArray<DiscordAuthToDiscordRole_bool_exp> | null;
  discordAuthId?: uuid_comparison_exp | null;
  discordRoleId?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
};
export type DiscordRole_bool_exp = {
  _and?: ReadonlyArray<DiscordRole_bool_exp> | null;
  _not?: DiscordRole_bool_exp | null;
  _or?: ReadonlyArray<DiscordRole_bool_exp> | null;
  id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
};
export type UserFollows_bool_exp = {
  Followed?: User_bool_exp | null;
  Follower?: User_bool_exp | null;
  _and?: ReadonlyArray<UserFollows_bool_exp> | null;
  _not?: UserFollows_bool_exp | null;
  _or?: ReadonlyArray<UserFollows_bool_exp> | null;
  followedId?: String_comparison_exp | null;
  followerId?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
};
export type Nft_bool_exp = {
  Creator?: User_bool_exp | null;
  _and?: ReadonlyArray<Nft_bool_exp> | null;
  _not?: Nft_bool_exp | null;
  _or?: ReadonlyArray<Nft_bool_exp> | null;
  auctionCount?: Int_comparison_exp | null;
  campaignFundingTierId?: uuid_comparison_exp | null;
  creatorId?: String_comparison_exp | null;
  edition?: Int_comparison_exp | null;
  hasBeenSold?: Boolean_comparison_exp | null;
  id?: String_comparison_exp | null;
  isImported?: Boolean_comparison_exp | null;
  isMasterEdition?: Boolean_comparison_exp | null;
  isPnft?: Boolean_comparison_exp | null;
  masterEdition?: String_comparison_exp | null;
  masterEditionMint?: String_comparison_exp | null;
  maxSupply?: Int_comparison_exp | null;
  metadataId?: String_comparison_exp | null;
  mint?: String_comparison_exp | null;
  ownerId?: String_comparison_exp | null;
  priceLastSoldCurrencyId?: uuid_comparison_exp | null;
  priceLastSoldForInLamports?: bigint_comparison_exp | null;
  seriesId?: String_comparison_exp | null;
  seriesRarityBasisPoints?: numeric_comparison_exp | null;
  seriesRarityRanking?: Int_comparison_exp | null;
  standardEdition?: String_comparison_exp | null;
  status?: NftStatus_enum_comparison_exp | null;
  timeCreated?: timestamptz_comparison_exp | null;
  timeLastEditionSoldPrimary?: timestamptz_comparison_exp | null;
};
export type bigint_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: ReadonlyArray<number> | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: ReadonlyArray<number> | null;
};
export type numeric_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: ReadonlyArray<any> | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: ReadonlyArray<any> | null;
};
export type NftStatus_enum_comparison_exp = {
  _eq?: NftStatus_enum | null;
  _in?: ReadonlyArray<NftStatus_enum> | null;
  _is_null?: boolean | null;
  _neq?: NftStatus_enum | null;
  _nin?: ReadonlyArray<NftStatus_enum> | null;
};
export type SeriesType_enum_comparison_exp = {
  _eq?: SeriesType_enum | null;
  _in?: ReadonlyArray<SeriesType_enum> | null;
  _is_null?: boolean | null;
  _neq?: SeriesType_enum | null;
  _nin?: ReadonlyArray<SeriesType_enum> | null;
};
export type ExploreSeriesGridPaginationQuery$variables = {
  after?: string | null;
  first?: number | null;
  orderBy?: ReadonlyArray<Series_order_by> | null;
  where?: Series_bool_exp | null;
};
export type ExploreSeriesGridPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ExploreSeriesGrid_Query">;
};
export type ExploreSeriesGridPaginationQuery = {
  response: ExploreSeriesGridPaginationQuery$data;
  variables: ExploreSeriesGridPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "order_by",
    "variableName": "orderBy"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "photoUrl",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExploreSeriesGridPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ExploreSeriesGrid_Query"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExploreSeriesGridPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SeriesConnection",
        "kind": "LinkedField",
        "name": "Series_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SeriesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Series",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Photo",
                    "kind": "LinkedField",
                    "name": "AvatarPhoto",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "Creator",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "username",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Photo",
                        "kind": "LinkedField",
                        "name": "ProfilePhoto",
                        "plural": false,
                        "selections": (v3/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "where",
                        "value": {
                          "status": {
                            "_neq": "Burned"
                          }
                        }
                      }
                    ],
                    "concreteType": "Nft_aggregate",
                    "kind": "LinkedField",
                    "name": "Nfts_aggregate",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Nft_aggregate_fields",
                        "kind": "LinkedField",
                        "name": "aggregate",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "count",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "Nfts_aggregate(where:{\"status\":{\"_neq\":\"Burned\"}})"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "order_by",
          "where"
        ],
        "handle": "connection",
        "key": "ExploreSeriesGrid_Series_connection",
        "kind": "LinkedHandle",
        "name": "Series_connection"
      }
    ]
  },
  "params": {
    "cacheID": "154c29525ca52c10950d03ef0838ec81",
    "id": null,
    "metadata": {},
    "name": "ExploreSeriesGridPaginationQuery",
    "operationKind": "query",
    "text": "query ExploreSeriesGridPaginationQuery(\n  $after: String\n  $first: Int\n  $orderBy: [Series_order_by!]\n  $where: Series_bool_exp\n) {\n  ...ExploreSeriesGrid_Query\n}\n\nfragment ArtistPillButtonForUser_User on User {\n  id\n  username\n  ProfilePhoto {\n    id\n    photoUrl\n  }\n}\n\nfragment ExploreSeriesGrid_Query on query_root {\n  Series_connection(after: $after, first: $first, order_by: $orderBy, where: $where) {\n    edges {\n      node {\n        id\n        ...SeriesCard_Series\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SeriesCardImageForUser_User on User {\n  ...ArtistPillButtonForUser_User\n}\n\nfragment SeriesCard_Series on Series {\n  id\n  slug\n  name\n  type\n  AvatarPhoto {\n    id\n    photoUrl\n  }\n  Creator {\n    id\n    username\n    ...SeriesCardImageForUser_User\n  }\n  Nfts_aggregate(where: {status: {_neq: Burned}}) {\n    aggregate {\n      count\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "63bfc806c9a6709bb18ddd16eb8f9689";

export default node;
