/**
 * @generated SignedSource<<37d83db821fe513a99881e9ba789227e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpsertCampaignGalleryInput = {
  campaignId: string;
  galleryAssets: ReadonlyArray<AssetInput>;
  youtubeVideoHref?: string | null;
};
export type AssetInput = {
  arweaveTxid?: string | null;
  contentType: string;
  dimensions?: AssetDimensionsInput | null;
  downloadUrl: string;
  path: string;
};
export type AssetDimensionsInput = {
  height: number;
  width: number;
};
export type CampaignGalleryModalMutation$variables = {
  input: UpsertCampaignGalleryInput;
};
export type CampaignGalleryModalMutation$data = {
  readonly CampaignsNamespace: {
    readonly upsertCampaignGallery: {
      readonly campaign: {
        readonly galleryAssets: ReadonlyArray<{
          readonly contentType: string;
          readonly dimensions: {
            readonly height: number;
            readonly width: number;
          } | null;
          readonly downloadUrl: string;
          readonly id: string;
          readonly path: string;
        }> | null;
        readonly youtubeVideoHref: string | null;
        readonly " $fragmentSpreads": FragmentRefs<"CampaignPageDraftModeContent_CampaignV2">;
      };
    };
  };
};
export type CampaignGalleryModalMutation = {
  response: CampaignGalleryModalMutation$data;
  variables: CampaignGalleryModalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentType",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetDimensions",
  "kind": "LinkedField",
  "name": "dimensions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "height",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "width",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "youtubeVideoHref",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "videoPlaybackId",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "videoPreviewPlaybackId",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "MetadataOffchain",
  "kind": "LinkedField",
  "name": "offchainData",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetHeight",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetWidth",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mint",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "masterEditionMint",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v19 = [
  (v18/*: any*/),
  (v6/*: any*/)
],
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "UserExpress",
  "kind": "LinkedField",
  "name": "Creator",
  "plural": false,
  "selections": (v19/*: any*/),
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "UserExpress",
  "kind": "LinkedField",
  "name": "Owner",
  "plural": false,
  "selections": (v19/*: any*/),
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "goalAmount",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentAmount",
  "storageKey": null
},
v24 = [
  (v18/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "PhotoExpress",
    "kind": "LinkedField",
    "name": "ProfilePhoto",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "photoUrl",
        "storageKey": null
      },
      (v6/*: any*/)
    ],
    "storageKey": null
  },
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CampaignGalleryModalMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CampaignsNamespaceMutationResponse",
        "kind": "LinkedField",
        "name": "CampaignsNamespace",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UpsertCampaignGalleryResponse",
            "kind": "LinkedField",
            "name": "upsertCampaignGallery",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CampaignV2",
                "kind": "LinkedField",
                "name": "campaign",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CampaignPageDraftModeContent_CampaignV2"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetExpress",
                    "kind": "LinkedField",
                    "name": "galleryAssets",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CampaignGalleryModalMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CampaignsNamespaceMutationResponse",
        "kind": "LinkedField",
        "name": "CampaignsNamespace",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UpsertCampaignGalleryResponse",
            "kind": "LinkedField",
            "name": "upsertCampaignGallery",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CampaignV2",
                "kind": "LinkedField",
                "name": "campaign",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "colorScheme",
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "tagline",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetExpress",
                    "kind": "LinkedField",
                    "name": "galleryAssets",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AssetDarkModeInfo",
                        "kind": "LinkedField",
                        "name": "darkModeInfo",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/),
                      (v6/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "fundingTiers",
                    "plural": true,
                    "selections": [
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v6/*: any*/),
                          (v8/*: any*/),
                          (v11/*: any*/),
                          {
                            "alias": "metadataAccountsForPreview",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 3
                              }
                            ],
                            "concreteType": "MetadataAccountsConnection",
                            "kind": "LinkedField",
                            "name": "metadataAccounts",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MetadataAccountsEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MetadataAccount",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v6/*: any*/),
                                      (v2/*: any*/),
                                      (v9/*: any*/),
                                      (v12/*: any*/),
                                      (v13/*: any*/),
                                      (v14/*: any*/),
                                      (v15/*: any*/),
                                      (v16/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "NftExpress",
                                        "kind": "LinkedField",
                                        "name": "nft",
                                        "plural": false,
                                        "selections": [
                                          (v17/*: any*/),
                                          (v20/*: any*/),
                                          (v21/*: any*/),
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "metadataAccounts(first:3)"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CampaignBenefitExpress",
                            "kind": "LinkedField",
                            "name": "benefits",
                            "plural": true,
                            "selections": [
                              (v11/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "nftOrder",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 300
                              }
                            ],
                            "concreteType": "MetadataAccountsConnection",
                            "kind": "LinkedField",
                            "name": "metadataAccounts",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MetadataAccountsEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MetadataAccount",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v6/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "NftExpress",
                                        "kind": "LinkedField",
                                        "name": "nft",
                                        "plural": false,
                                        "selections": [
                                          (v6/*: any*/),
                                          (v17/*: any*/),
                                          (v20/*: any*/),
                                          (v21/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v16/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "MetadataAccountData",
                                        "kind": "LinkedField",
                                        "name": "data",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "name",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v2/*: any*/),
                                      (v9/*: any*/),
                                      (v12/*: any*/),
                                      (v13/*: any*/),
                                      (v14/*: any*/),
                                      (v15/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "metadataAccounts(first:300)"
                          }
                        ],
                        "type": "CampaignFundingTierStandard",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CampaignAbout",
                    "kind": "LinkedField",
                    "name": "about",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "campaign",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "contactInfo",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "creator",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "risksAndChallenges",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "timeline",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "goalProgressSymbol",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "goal",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v22/*: any*/),
                          (v23/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CurrencyExpress",
                            "kind": "LinkedField",
                            "name": "currency",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "decimals",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "shortSymbol",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "symbol",
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "CampaignMonetaryGoal",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v22/*: any*/),
                          (v23/*: any*/)
                        ],
                        "type": "CampaignSaleCountGoal",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserExpress",
                    "kind": "LinkedField",
                    "name": "creator",
                    "plural": false,
                    "selections": (v24/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CampaignTeamMemberExpress",
                    "kind": "LinkedField",
                    "name": "teamMembers",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserExpress",
                        "kind": "LinkedField",
                        "name": "member",
                        "plural": false,
                        "selections": (v24/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5586f85563b43956867b4ac7a7d021c1",
    "id": null,
    "metadata": {},
    "name": "CampaignGalleryModalMutation",
    "operationKind": "mutation",
    "text": "mutation CampaignGalleryModalMutation(\n  $input: UpsertCampaignGalleryInput!\n) {\n  CampaignsNamespace {\n    upsertCampaignGallery(input: $input) {\n      campaign {\n        ...CampaignPageDraftModeContent_CampaignV2\n        galleryAssets {\n          contentType\n          downloadUrl\n          path\n          dimensions {\n            height\n            width\n          }\n          id\n        }\n        youtubeVideoHref\n        id\n      }\n    }\n  }\n}\n\nfragment ArtistPillButtonForUserExpress_UserExpress on UserExpress {\n  username\n  ProfilePhoto {\n    photoUrl\n    id\n  }\n}\n\nfragment AssetForAssetExpress_AssetExpress on AssetExpress {\n  contentType\n  downloadUrl\n  darkModeInfo {\n    downloadUrl\n  }\n  videoPlaybackId\n}\n\nfragment CampaignAboutModal_CampaignV2 on CampaignV2 {\n  id\n  about {\n    campaign\n    contactInfo\n    creator\n    risksAndChallenges\n    timeline\n  }\n}\n\nfragment CampaignArtistPillButtons_CampaignV2 on CampaignV2 {\n  creator {\n    ...ArtistPillButtonForUserExpress_UserExpress\n    id\n  }\n  teamMembers {\n    member {\n      ...ArtistPillButtonForUserExpress_UserExpress\n      id\n    }\n  }\n}\n\nfragment CampaignDraftAboutCard_CampaignV2 on CampaignV2 {\n  about {\n    campaign\n    contactInfo\n    creator\n    risksAndChallenges\n    timeline\n  }\n}\n\nfragment CampaignDraftBiddingInfo_CampaignV2 on CampaignV2 {\n  ...CampaignDraftCampaignProgressTowardsGoal_CampaignV2\n}\n\nfragment CampaignDraftCampaignProgressTowardsGoal_CampaignV2 on CampaignV2 {\n  goalProgressSymbol\n  goal {\n    __typename\n    ... on CampaignMonetaryGoal {\n      ...CampaignProgressForCampaignMonetaryGoal_CampaignMonetaryGoal\n    }\n    ... on CampaignSaleCountGoal {\n      ...CampaignProgressForCampaignSaleCountGoal_CampaignSaleCountGoal\n    }\n  }\n}\n\nfragment CampaignDraftChecklist_CampaignV2 on CampaignV2 {\n  about {\n    campaign\n    contactInfo\n    creator\n    risksAndChallenges\n    timeline\n  }\n  galleryAssets {\n    id\n  }\n  fundingTiers {\n    __typename\n    ... on CampaignFundingTierStandard {\n      metadataAccountsForPreview: metadataAccounts(first: 3) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CampaignFundingTierManageNftsModal_CampaignFundingTierStandard on CampaignFundingTierStandard {\n  id\n}\n\nfragment CampaignGalleryModal_CampaignV2 on CampaignV2 {\n  id\n  galleryAssets {\n    contentType\n    downloadUrl\n    path\n    dimensions {\n      height\n      width\n    }\n    id\n  }\n  youtubeVideoHref\n}\n\nfragment CampaignHeaderStatusBanner_CampaignV2 on CampaignV2 {\n  slug\n  status\n  creator {\n    username\n    id\n  }\n}\n\nfragment CampaignHeroAssets_AssetExpress on AssetExpress {\n  ...AssetForAssetExpress_AssetExpress\n}\n\nfragment CampaignPageDraftModeContent_CampaignV2 on CampaignV2 {\n  id\n  colorScheme\n  title\n  tagline\n  status\n  galleryAssets {\n    ...CampaignHeroAssets_AssetExpress\n    id\n  }\n  youtubeVideoHref\n  ...ManageFundingTiersModal_CampaignV2\n  ...FundingTierSectionForCampaignV2_CampaignV2\n  ...CampaignAboutModal_CampaignV2\n  ...CampaignGalleryModal_CampaignV2\n  ...CampaignDraftAboutCard_CampaignV2\n  ...CampaignDraftBiddingInfo_CampaignV2\n  ...CampaignArtistPillButtons_CampaignV2\n  ...CampaignDraftChecklist_CampaignV2\n  ...CampaignHeaderStatusBanner_CampaignV2\n}\n\nfragment CampaignProgressForCampaignMonetaryGoal_CampaignMonetaryGoal on CampaignMonetaryGoal {\n  goalAmount\n  currentAmount\n  currency {\n    decimals\n    shortSymbol\n    symbol\n    id\n  }\n}\n\nfragment CampaignProgressForCampaignSaleCountGoal_CampaignSaleCountGoal on CampaignSaleCountGoal {\n  goalAmount\n  currentAmount\n}\n\nfragment EditFundingTierModal_CampaignFundingTierStandard on CampaignFundingTierStandard {\n  description\n  title\n  benefits {\n    description\n    id\n  }\n  id\n}\n\nfragment FundingTierCardForCampaignFundingTierStandard_CampaignFundingTierStandard on CampaignFundingTierStandard {\n  description\n  title\n  metadataAccountsForPreview: metadataAccounts(first: 3) {\n    edges {\n      node {\n        ...FundingTierNftPreviewAssets_MetadataAccount\n        id\n      }\n    }\n  }\n  ...EditFundingTierModal_CampaignFundingTierStandard\n  ...CampaignFundingTierManageNftsModal_CampaignFundingTierStandard\n  ...FundingTierNftsContext_CampaignFundingTierStandard\n}\n\nfragment FundingTierNftPreviewAssets_MetadataAccount on MetadataAccount {\n  id\n  ...NftAssetForMetadataAccount_MetadataAccount\n}\n\nfragment FundingTierNftsContext_CampaignFundingTierStandard on CampaignFundingTierStandard {\n  id\n  nftOrder\n  metadataAccounts(first: 300) {\n    edges {\n      node {\n        id\n        nft {\n          id\n        }\n        mint\n        ...GenericNftSearchRow_MetadataAccount\n        ...GenericNftSearchDndRow_MetadataAccount\n      }\n    }\n  }\n}\n\nfragment FundingTierSectionForCampaignV2_CampaignV2 on CampaignV2 {\n  ...ManageFundingTiersModal_CampaignV2\n  id\n  fundingTiers {\n    __typename\n    ... on CampaignFundingTierStandard {\n      id\n      ...FundingTierCardForCampaignFundingTierStandard_CampaignFundingTierStandard\n    }\n  }\n  status\n}\n\nfragment GenericNftSearchDndRow_MetadataAccount on MetadataAccount {\n  id\n  ...GenericNftSearchRow_MetadataAccount\n}\n\nfragment GenericNftSearchRow_MetadataAccount on MetadataAccount {\n  id\n  data {\n    name\n  }\n  ...NftAssetForMetadataAccount_MetadataAccount\n}\n\nfragment ManageFundingTierRow_CampaignFundingTierStandard on CampaignFundingTierStandard {\n  id\n  title\n}\n\nfragment ManageFundingTiersModal_CampaignV2 on CampaignV2 {\n  id\n  fundingTiers {\n    __typename\n    ... on CampaignFundingTierStandard {\n      ...ManageFundingTierRow_CampaignFundingTierStandard\n      id\n    }\n  }\n  status\n}\n\nfragment NftAssetForMetadataAccount_MetadataAccount on MetadataAccount {\n  contentType\n  videoPlaybackId\n  videoPreviewPlaybackId\n  offchainData {\n    image\n  }\n  ...useNftLinkForMetadataAccount_MetadataAccount\n}\n\nfragment useNftLinkForMetadataAccount_MetadataAccount on MetadataAccount {\n  assetHeight\n  assetWidth\n  mint\n  nft {\n    masterEditionMint\n    Creator {\n      username\n      id\n    }\n    Owner {\n      username\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ea3e7bf4ddd54a355895211aa0639f2d";

export default node;
