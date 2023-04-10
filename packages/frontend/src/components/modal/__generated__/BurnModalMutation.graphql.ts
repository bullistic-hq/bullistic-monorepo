/**
 * @generated SignedSource<<bebccc63e1e2ed8f38f189c084f3dd57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UnlockableWinnerUserEmailInput = {
  viewerId?: string | null;
};
export type BurnModalMutation$variables = {
  connections: ReadonlyArray<string>;
  creator: string;
  mint: string;
  txid: string;
  unlockableWinnerUserEmailInput: UnlockableWinnerUserEmailInput;
};
export type BurnModalMutation$data = {
  readonly insertNftTransaction: {
    readonly transaction: {
      readonly " $fragmentSpreads": FragmentRefs<"NftTransaction_NftTransactionExpress">;
    };
    readonly updatedMetadataAccount: {
      readonly " $fragmentSpreads": FragmentRefs<"NftPageContent_MetadataAccount">;
    };
  };
};
export type BurnModalMutation = {
  response: BurnModalMutation$data;
  variables: BurnModalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "creator"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "mint"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "txid"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "unlockableWinnerUserEmailInput"
},
v5 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "creatorId",
        "variableName": "creator"
      },
      {
        "kind": "Variable",
        "name": "fromUserId",
        "variableName": "creator"
      },
      {
        "kind": "Variable",
        "name": "mint",
        "variableName": "mint"
      },
      {
        "kind": "Literal",
        "name": "price",
        "value": null
      },
      {
        "kind": "Variable",
        "name": "toUserId",
        "variableName": "creator"
      },
      {
        "kind": "Variable",
        "name": "txid",
        "variableName": "txid"
      },
      {
        "kind": "Literal",
        "name": "type",
        "value": "Burned"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "edition",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxSupply",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shortSymbol",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "photoUrl",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "PhotoExpress",
  "kind": "LinkedField",
  "name": "ProfilePhoto",
  "plural": false,
  "selections": [
    (v16/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
},
v18 = [
  (v15/*: any*/),
  (v17/*: any*/),
  (v10/*: any*/)
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentType",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "videoPlaybackId",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v24 = [
  (v10/*: any*/),
  (v16/*: any*/)
],
v25 = [
  (v10/*: any*/),
  (v15/*: any*/),
  (v17/*: any*/)
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mint",
  "storageKey": null
},
v28 = [
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "CurrencyExpress",
    "kind": "LinkedField",
    "name": "currencyInfo",
    "plural": false,
    "selections": [
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BurnModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "InsertNftTransactionResponse",
        "kind": "LinkedField",
        "name": "insertNftTransaction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NftTransactionExpress",
            "kind": "LinkedField",
            "name": "transaction",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "NftTransaction_NftTransactionExpress"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MetadataAccount",
            "kind": "LinkedField",
            "name": "updatedMetadataAccount",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "NftPageContent_MetadataAccount"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "BurnModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "InsertNftTransactionResponse",
        "kind": "LinkedField",
        "name": "insertNftTransaction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NftTransactionExpress",
            "kind": "LinkedField",
            "name": "transaction",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "auctionCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fromAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "NftTransactionNftInfo",
                "kind": "LinkedField",
                "name": "nftInfo",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Price",
                "kind": "LinkedField",
                "name": "price",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CurrencyExpress",
                    "kind": "LinkedField",
                    "name": "currencyInfo",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "source",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "timeCreated",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "toAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "txid",
                "storageKey": null
              },
              (v14/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "usdPrice",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserExpress",
                "kind": "LinkedField",
                "name": "From",
                "plural": false,
                "selections": (v18/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserExpress",
                "kind": "LinkedField",
                "name": "To",
                "plural": false,
                "selections": (v18/*: any*/),
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "transaction",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "NftTransactionsEdge"
              }
            ]
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MetadataAccount",
            "kind": "LinkedField",
            "name": "updatedMetadataAccount",
            "plural": false,
            "selections": [
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "assetHeight",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "assetWidth",
                "storageKey": null
              },
              (v19/*: any*/),
              (v20/*: any*/),
              {
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
                  },
                  {
                    "alias": "listingCardImage",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "image",
                    "storageKey": null
                  },
                  (v21/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetExpress",
                "kind": "LinkedField",
                "name": "nonstandardAsset",
                "plural": false,
                "selections": [
                  (v19/*: any*/),
                  (v22/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetDarkModeInfo",
                    "kind": "LinkedField",
                    "name": "darkModeInfo",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "NftExpress",
                "kind": "LinkedField",
                "name": "nft",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "creatorId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ownerId",
                    "storageKey": null
                  },
                  (v23/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SeriesExpress",
                    "kind": "LinkedField",
                    "name": "Series",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v14/*: any*/),
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
                        "concreteType": "PhotoExpress",
                        "kind": "LinkedField",
                        "name": "AvatarPhoto",
                        "plural": false,
                        "selections": (v24/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserExpress",
                        "kind": "LinkedField",
                        "name": "Creator",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserExpress",
                    "kind": "LinkedField",
                    "name": "Creator",
                    "plural": false,
                    "selections": (v25/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NftDisclosureExpress",
                    "kind": "LinkedField",
                    "name": "disclosures",
                    "plural": true,
                    "selections": [
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "details",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CandyMachineExpress",
                    "kind": "LinkedField",
                    "name": "CandyMachine",
                    "plural": false,
                    "selections": [
                      (v26/*: any*/),
                      (v10/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isImported",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "masterEditionMint",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserExpress",
                    "kind": "LinkedField",
                    "name": "Owner",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
                      (v10/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PhotoExpress",
                        "kind": "LinkedField",
                        "name": "ProfilePhoto",
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
                    "name": "isMasterEdition",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isPnft",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "maxSupplyOnchain",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "maxSupplyOfMasterEdition",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "numberOfStandardEditionsMinted",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "auctionEndTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "auctionHoldingPeriodEndTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isOffPlatform",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Price",
                    "kind": "LinkedField",
                    "name": "priceV2",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CurrencyExpress",
                        "kind": "LinkedField",
                        "name": "currencyInfo",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v27/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Price",
                    "kind": "LinkedField",
                    "name": "priceLastSoldV2",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "scheduledAuctionTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "auctionDurationInSeconds",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "timeExtensionDurationInSeconds",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TickSizeInfo",
                    "kind": "LinkedField",
                    "name": "tickSizeInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "tickSizeConstantInLamports",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "antiBotProtectionEnabled",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "editionAllowlistEnabled",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "editionPublicSaleStartTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "editionBuyLimitPerAddress",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EditionPriceInfo",
                    "kind": "LinkedField",
                    "name": "editionPriceInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "allowlistPriceInFullDecimals",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "priceFunctionType",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "priceParams",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startingPriceInLamports",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "seriesRarityRanking",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "editionAllowlistSaleStartTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "CampaignFundingTier",
                    "plural": false,
                    "selections": [
                      (v26/*: any*/),
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CampaignBenefitExpress",
                            "kind": "LinkedField",
                            "name": "benefits",
                            "plural": true,
                            "selections": [
                              (v21/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
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
                    "kind": "ScalarField",
                    "name": "auctionWinnerId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "pnftIdForAuction",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Price",
                    "kind": "LinkedField",
                    "name": "priceLastListedV2",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserExpress",
                    "kind": "LinkedField",
                    "name": "AuctionWinner",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
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
                    "concreteType": "MetadataCreator",
                    "kind": "LinkedField",
                    "name": "creators",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "address",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "share",
                        "storageKey": null
                      },
                      (v23/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserExpress",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": (v25/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "requestId",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sellerFeeBasisPoints",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NftAttribute",
                    "kind": "LinkedField",
                    "name": "attributes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "traitType",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "value",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v27/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "primarySaleHappened",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "videoPreviewPlaybackId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "numberOfBidsForCurrentAuction",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "tags",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UnlockableExpress",
                "kind": "LinkedField",
                "name": "unlockable",
                "plural": false,
                "selections": [
                  (v26/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Price",
                    "kind": "LinkedField",
                    "name": "activationPrice",
                    "plural": false,
                    "selections": (v28/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "activationPriceInLamports",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "category",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetExpress",
                    "kind": "LinkedField",
                    "name": "asset",
                    "plural": false,
                    "selections": [
                      (v19/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "path",
                        "storageKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UnlockableWinnerExpress",
                    "kind": "LinkedField",
                    "name": "unlockableWinners",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasBuyerDismissedShareInfoCta",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "input",
                            "variableName": "unlockableWinnerUserEmailInput"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "userEmail",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "userId",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasCreatorDismissedSeeInfoCta",
                        "storageKey": null
                      },
                      (v10/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserExpress",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v15/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v21/*: any*/),
                  (v13/*: any*/)
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
    "cacheID": "4bd14d60dc1e53f6e70cc6da24eb82e7",
    "id": null,
    "metadata": {},
    "name": "BurnModalMutation",
    "operationKind": "mutation",
    "text": "mutation BurnModalMutation(\n  $creator: String!\n  $mint: String!\n  $txid: String!\n  $unlockableWinnerUserEmailInput: UnlockableWinnerUserEmailInput!\n) {\n  insertNftTransaction(input: {creatorId: $creator, fromUserId: $creator, toUserId: $creator, mint: $mint, txid: $txid, type: Burned}) {\n    transaction {\n      ...NftTransaction_NftTransactionExpress\n      id\n    }\n    updatedMetadataAccount {\n      ...NftPageContent_MetadataAccount\n      id\n    }\n  }\n}\n\nfragment AcceptOfferModal_MetadataAccount on MetadataAccount {\n  id\n  mint\n  data {\n    name\n    creators {\n      address\n    }\n  }\n  nft {\n    priceV2 {\n      amount\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    status\n    creatorId\n    ownerId\n    id\n  }\n  ...SettleSaleModalContent_MetadataAccount\n  ...useSettleSale_MetadataAccount\n}\n\nfragment AddToAllowlistModal_MetadataAccount on MetadataAccount {\n  mint\n}\n\nfragment ArtistPillButtonForUserExpress_UserExpress on UserExpress {\n  username\n  ProfilePhoto {\n    photoUrl\n    id\n  }\n}\n\nfragment AssetForAssetExpress_AssetExpress on AssetExpress {\n  contentType\n  downloadUrl\n  darkModeInfo {\n    downloadUrl\n  }\n  videoPlaybackId\n}\n\nfragment AuctionSettingsModal_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    priceV2 {\n      ...useGetCurrencyConfigForPrice_Price\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    auctionDurationInSeconds\n    scheduledAuctionTime\n    timeExtensionDurationInSeconds\n    tickSizeInfo {\n      tickSizeConstantInLamports\n    }\n    id\n  }\n}\n\nfragment BidModal_MetadataAccount on MetadataAccount {\n  mint\n  data {\n    name\n  }\n  nft {\n    CampaignFundingTier {\n      __typename\n      ...CampaignBenefitsSection_CampaignFundingTierStandard\n      id\n    }\n    priceV2 {\n      amount\n      currencyInfo {\n        decimals\n        name\n        id\n      }\n      ...useGetCurrencyConfigForPrice_Price\n      ...useAuctionHouseSdkForPrice_Price\n      ...useNftPriceSymbol_Price\n    }\n    auctionEndTime\n    auctionWinnerId\n    creatorId\n    ownerId\n    status\n    tickSizeInfo {\n      tickSizeConstantInLamports\n    }\n    id\n  }\n  numberOfBidsForCurrentAuction\n  ...ListingCardForMetadata_MetadataAccount\n  ...useUnlockablePurchaseMessage_MetadataAccount\n}\n\nfragment BurnModal_MetadataAccount on MetadataAccount {\n  mint\n}\n\nfragment BuyEditionModalPriceInput_Price on Price {\n  currencyInfo {\n    name\n    id\n  }\n  ...PriceWithSymbol_Price\n  ...useGetCurrencyConfigForPrice_Price\n  ...useFormattedNftPrice_Price\n  ...useNftPriceSymbol_Price\n}\n\nfragment BuyEditionModal_MetadataAccount on MetadataAccount {\n  assetHeight\n  assetWidth\n  nft {\n    editionPublicSaleStartTime\n    editionBuyLimitPerAddress\n    editionPriceInfo {\n      allowlistPriceInFullDecimals\n      priceFunctionType\n    }\n    priceV2 {\n      amount\n      currencyInfo {\n        decimals\n        id\n      }\n      ...BuyEditionModalPriceInput_Price\n      ...useFormattedNftPrice_Price\n    }\n    id\n  }\n  ...useBuyEdition_MetadataAccount\n  ...BuyNowGenericModalForMetadataAccount_MetadataAccount\n}\n\nfragment BuyNowGenericModalForMetadataAccount_MetadataAccount on MetadataAccount {\n  data {\n    name\n  }\n  nft {\n    CampaignFundingTier {\n      __typename\n      ...CampaignBenefitsSection_CampaignFundingTierStandard\n      id\n    }\n    priceV2 {\n      ...BuyNowGenericModal_Price\n    }\n    id\n  }\n  ...ListingCardForMetadata_MetadataAccount\n}\n\nfragment BuyNowGenericModal_Price on Price {\n  currencyInfo {\n    name\n    id\n  }\n  ...PriceWithSymbol_Price\n  ...useFormattedNftPrice_Price\n}\n\nfragment BuyNowModal_MetadataAccount on MetadataAccount {\n  mint\n  data {\n    creators {\n      address\n    }\n  }\n  nft {\n    auctionWinnerId\n    creatorId\n    priceV2 {\n      amount\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    ownerId\n    id\n  }\n  ...useSettleSale_MetadataAccount\n  ...BuyNowGenericModalForMetadataAccount_MetadataAccount\n  ...useUnlockablePurchaseMessage_MetadataAccount\n}\n\nfragment CampaignBenefitsSection_CampaignFundingTierStandard on CampaignFundingTierStandard {\n  benefits {\n    description\n    id\n  }\n}\n\nfragment CancelListingModal_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    creatorId\n    priceV2 {\n      amount\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    status\n    id\n  }\n}\n\nfragment CancelOfferModal_MetadataAccount on MetadataAccount {\n  id\n  mint\n}\n\nfragment ChangePriceForEditionsConstantOrMinimumPrice_MetadataAccount on MetadataAccount {\n  nft {\n    priceV2 {\n      amount\n      currencyInfo {\n        decimals\n        id\n      }\n      ...useGetCurrencyConfigForPrice_Price\n    }\n    id\n  }\n  ...useChangePriceForEditions_MetadataAccount\n}\n\nfragment ChangePriceForEditionsLinearPrice_MetadataAccount on MetadataAccount {\n  nft {\n    priceV2 {\n      currencyInfo {\n        decimals\n        id\n      }\n      ...useGetCurrencyConfigForPrice_Price\n    }\n    editionPriceInfo {\n      priceParams\n      startingPriceInLamports\n    }\n    id\n  }\n  ...useChangePriceForEditions_MetadataAccount\n}\n\nfragment ChangePriceForEditionsModalContent_MetadataAccount on MetadataAccount {\n  ...ChangePriceForEditionsConstantOrMinimumPrice_MetadataAccount\n  ...ChangePriceForEditionsLinearPrice_MetadataAccount\n}\n\nfragment ChangePriceForEditionsModal_MetadataAccount on MetadataAccount {\n  ...ChangePriceForEditionsModalContent_MetadataAccount\n}\n\nfragment ChangePriceModal_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    creatorId\n    priceV2 {\n      amount\n      currencyInfo {\n        decimals\n        id\n      }\n      ...useAuctionHouseSdkForPrice_Price\n      ...useGetCurrencyConfigForPrice_Price\n    }\n    status\n    scheduledAuctionTime\n    id\n  }\n}\n\nfragment ClaimPnftModal_AuctionNft_MetadataAccount on MetadataAccount {\n  assetHeight\n  assetWidth\n  mint\n}\n\nfragment CollaboratorApprovalModal_MetadataAccount on MetadataAccount {\n  id\n  mint\n  data {\n    creators {\n      address\n      requestId\n    }\n    name\n  }\n  nft {\n    id\n    creatorId\n    Creator {\n      id\n      username\n    }\n  }\n  ...ListingCardForMetadata_MetadataAccount\n}\n\nfragment CrossmintButtonWrapper_MetadataAccount on MetadataAccount {\n  mint\n  primarySaleHappened\n  nft {\n    ownerId\n    priceV2 {\n      currencyInfo {\n        name\n        id\n      }\n    }\n    status\n    id\n  }\n  unlockable {\n    __typename\n    id\n  }\n  ...CrossmintModal_MetadataAccount\n}\n\nfragment CrossmintButton_MetadataAccount on MetadataAccount {\n  mint\n  data {\n    creators {\n      address\n    }\n    name\n  }\n  nft {\n    ownerId\n    priceV2 {\n      amount\n    }\n    id\n  }\n  offchainData {\n    description\n    image\n  }\n}\n\nfragment CrossmintModal_MetadataAccount on MetadataAccount {\n  ...CrossmintButton_MetadataAccount\n}\n\nfragment DeleteModal_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    numberOfStandardEditionsMinted\n    id\n  }\n  ...useNftKind_MetadataAccount\n}\n\nfragment EditTagsModal_MetadataAccount on MetadataAccount {\n  mint\n  tags\n}\n\nfragment GenerativeKindLabel_MetadataAccount on MetadataAccount {\n  nft {\n    CandyMachine {\n      maxSupply\n      id\n    }\n    Series {\n      ...useSeriesLinkRelativeForSeriesExpress_SeriesExpress\n      id\n    }\n    id\n  }\n}\n\nfragment HowAuctionsWorkButton_MetadataAccount on MetadataAccount {\n  ...HowAuctionsWorkModal_MetadataAccount\n}\n\nfragment HowAuctionsWorkModal_MetadataAccount on MetadataAccount {\n  nft {\n    auctionDurationInSeconds\n    timeExtensionDurationInSeconds\n    priceV2 {\n      currencyInfo {\n        decimals\n        shortSymbol\n        symbol\n        id\n      }\n    }\n    tickSizeInfo {\n      tickSizeConstantInLamports\n    }\n    id\n  }\n}\n\nfragment ListEditionsConstantOrMinimumPrice_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  ...useListEditionsForSale_MetadataAccount\n}\n\nfragment ListEditionsLinearPrice_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  ...useListEditionsForSale_MetadataAccount\n}\n\nfragment ListEditionsModalContent_MetadataAccount on MetadataAccount {\n  ...ListEditionsConstantOrMinimumPrice_MetadataAccount\n  ...ListEditionsLinearPrice_MetadataAccount\n}\n\nfragment ListEditionsModal_MetadataAccount on MetadataAccount {\n  ...ListEditionsModalContent_MetadataAccount\n}\n\nfragment ListNftButton_MetadataAccount on MetadataAccount {\n  ...ListNftModal_MetadataAccount\n  ...ListNftContextProvider_MetadataAccount\n}\n\nfragment ListNftContextProvider_MetadataAccount on MetadataAccount {\n  ...ListingContext_MetadataAccount\n}\n\nfragment ListNftForAuctionSteps_MetadataAccount on MetadataAccount {\n  ...ListNftForAuction_MetadataAccount\n  ...ListNftForAuctionWithPnft_MetadataAccount\n  ...ListNftForAuctionWithUnlockable_MetadataAccount\n}\n\nfragment ListNftForAuctionWithPnft_MetadataAccount on MetadataAccount {\n  mint\n  ...useListNftForSale_MetadataAccount\n}\n\nfragment ListNftForAuctionWithUnlockable_MetadataAccount on MetadataAccount {\n  ...useListNftForSale_MetadataAccount\n}\n\nfragment ListNftForAuction_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  ...useListNftForSale_MetadataAccount\n}\n\nfragment ListNftForInstantSaleSteps_MetadataAccount on MetadataAccount {\n  ...ListNftForInstantSale_MetadataAccount\n  ...ListNftForInstantSaleWithUnlockable_MetadataAccount\n}\n\nfragment ListNftForInstantSaleWithUnlockable_MetadataAccount on MetadataAccount {\n  ...useListNftForSale_MetadataAccount\n}\n\nfragment ListNftForInstantSale_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  ...useListNftForSale_MetadataAccount\n}\n\nfragment ListNftModal_MetadataAccount on MetadataAccount {\n  ...useNftKind_MetadataAccount\n  ...ListEditionsModal_MetadataAccount\n  ...ListOneOfOneModal_MetadataAccount\n}\n\nfragment ListOneOfOneModalContent_MetadataAccount on MetadataAccount {\n  ...ListNftForAuctionSteps_MetadataAccount\n  ...ListNftForInstantSaleSteps_MetadataAccount\n}\n\nfragment ListOneOfOneModal_MetadataAccount on MetadataAccount {\n  ...ListOneOfOneModalContent_MetadataAccount\n}\n\nfragment ListingCardForMetadata_MetadataAccount on MetadataAccount {\n  assetHeight\n  assetWidth\n  contentType\n  primarySaleHappened\n  videoPlaybackId\n  videoPreviewPlaybackId\n  data {\n    name\n    creators {\n      address\n      share\n      status\n      user {\n        ProfilePhoto {\n          photoUrl\n          id\n        }\n        id\n      }\n    }\n  }\n  offchainData {\n    listingCardImage: image\n  }\n  nft {\n    creatorId\n    isImported\n    status\n    Creator {\n      ...ArtistPillButtonForUserExpress_UserExpress\n      id\n    }\n    ...useDoesNftHaveDisclosure_NftExpress\n    id\n  }\n  ...useNftLinkForMetadataAccount_MetadataAccount\n  ...useNftKind_MetadataAccount\n  ...ListingCardNftKindPill_MetadataAccount\n  ...NftPageContext_MetadataAccount\n  ...NftOtherInfo_MetadataAccount\n}\n\nfragment ListingCardNftKindPill_MetadataAccount on MetadataAccount {\n  nft {\n    edition\n    status\n    id\n  }\n  ...useEditionSupply_MetadataAccount\n  ...useNftKind_MetadataAccount\n}\n\nfragment ListingContext_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  nft {\n    creatorId\n    id\n  }\n  data {\n    creators {\n      address\n    }\n  }\n  tags\n}\n\nfragment MakeAnOfferModal_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    CampaignFundingTier {\n      __typename\n      ...CampaignBenefitsSection_CampaignFundingTierStandard\n      id\n    }\n    auctionWinnerId\n    creatorId\n    ownerId\n    status\n    priceV2 {\n      currencyInfo {\n        name\n        id\n      }\n    }\n    id\n  }\n  primarySaleHappened\n  data {\n    creators {\n      address\n    }\n  }\n  ...ListingCardForMetadata_MetadataAccount\n  ...useUnlockablePurchaseMessage_MetadataAccount\n}\n\nfragment MasterEditionWithNonzeroSupplyKindLabel_MetadataAccount on MetadataAccount {\n  ...useEditionSupply_MetadataAccount\n}\n\nfragment MasterEditionWithUnlimitedSupplyKindLabel_MetadataAccount on MetadataAccount {\n  nft {\n    status\n    id\n  }\n  ...useEditionSupply_MetadataAccount\n}\n\nfragment NftActionButton_MetadataAccount on MetadataAccount {\n  id\n  nft {\n    id\n    editionAllowlistEnabled\n    editionAllowlistSaleStartTime\n    editionPublicSaleStartTime\n    isOffPlatform\n    ownerId\n    status\n  }\n  numberOfBidsForCurrentAuction\n  ...MakeAnOfferModal_MetadataAccount\n  ...HowAuctionsWorkButton_MetadataAccount\n  ...BidModal_MetadataAccount\n  ...BuyEditionModal_MetadataAccount\n  ...BuyNowModal_MetadataAccount\n  ...ListNftButton_MetadataAccount\n  ...NftTimeExtensionInfo_MetadataAccount\n  ...SettleModal_MetadataAccount\n  ...CancelOfferModal_MetadataAccount\n  ...useNftKind_MetadataAccount\n}\n\nfragment NftAllowlistInfo_MetadataAccount on MetadataAccount {\n  nft {\n    editionAllowlistEnabled\n    editionAllowlistSaleStartTime\n    editionPublicSaleStartTime\n    ownerId\n    status\n    id\n  }\n}\n\nfragment NftAttributes_MetadataAccount on MetadataAccount {\n  data {\n    attributes {\n      traitType\n      value\n    }\n  }\n  nft {\n    seriesRarityRanking\n    CandyMachine {\n      maxSupply\n      id\n    }\n    id\n  }\n}\n\nfragment NftCollaboratorCard_MetadataAccount on MetadataAccount {\n  id\n  data {\n    creators {\n      address\n      share\n      status\n      user {\n        id\n        username\n      }\n    }\n    name\n  }\n  nft {\n    creatorId\n    CandyMachine {\n      __typename\n      id\n    }\n    Creator {\n      username\n      ProfilePhoto {\n        photoUrl\n        id\n      }\n      id\n    }\n    id\n  }\n  ...CollaboratorApprovalModal_MetadataAccount\n}\n\nfragment NftEllipsisShadowButton_MetadataAccount on MetadataAccount {\n  ...NftOptions_MetadataAccount\n  ...NftOptionsModals_MetadataAccount\n  ...OtherNftBottomDrawer_MetadataAccount\n}\n\nfragment NftInfoDisclosures_MetadataAccount on MetadataAccount {\n  nft {\n    disclosures {\n      details\n      type\n    }\n    id\n  }\n}\n\nfragment NftInfo_MetadataAccount on MetadataAccount {\n  id\n  nft {\n    id\n    creatorId\n    Creator {\n      id\n      username\n      ProfilePhoto {\n        id\n        photoUrl\n      }\n    }\n    Owner {\n      id\n      username\n      ProfilePhoto {\n        id\n        photoUrl\n      }\n    }\n    ownerId\n    status\n  }\n  data {\n    name\n    creators {\n      address\n      share\n      status\n      user {\n        id\n        username\n        ProfilePhoto {\n          photoUrl\n          id\n        }\n      }\n    }\n  }\n  offchainData {\n    description\n  }\n  ...NftAllowlistInfo_MetadataAccount\n  ...CrossmintButtonWrapper_MetadataAccount\n  ...NftTransaction_MetadataAccount\n  ...NftEllipsisShadowButton_MetadataAccount\n  ...NftInfoDisclosures_MetadataAccount\n  ...NftListedEllipsisShadowButton_MetadataAccount\n  ...NftPrice_MetadataAccount\n  ...NftActionButton_MetadataAccount\n  ...NftOffer_MetadataAccount\n  ...NftKindLabel_MetadataAccount\n  ...PnftInfo_MetadataAccount\n  ...useNftKind_MetadataAccount\n  ...NftPageUnlockableInfo_MetadataAccount\n  ...UnlockableModalContainer_MetadataAccount\n}\n\nfragment NftKindLabel_MetadataAccount on MetadataAccount {\n  ...useNftKind_MetadataAccount\n  ...GenerativeKindLabel_MetadataAccount\n  ...MasterEditionWithNonzeroSupplyKindLabel_MetadataAccount\n  ...MasterEditionWithUnlimitedSupplyKindLabel_MetadataAccount\n  ...PnftStandardEditionKindLabel_MetadataAccount\n  ...StandardEditionPrintNonzeroSupplyKindLabel_MetadataAccount\n  ...StandardEditionPrintUnlimitedSupplyKindLabel_MetadataAccount\n}\n\nfragment NftLeftInfoEditionInfo_MetadataAccount on MetadataAccount {\n  nft {\n    antiBotProtectionEnabled\n    editionAllowlistEnabled\n    editionPublicSaleStartTime\n    editionBuyLimitPerAddress\n    status\n    id\n  }\n  ...NftLeftInfoEditionPriceLine_MetadataAccount\n  ...useEditionSupply_MetadataAccount\n  ...useNftKind_MetadataAccount\n}\n\nfragment NftLeftInfoEditionPriceLine_MetadataAccount on MetadataAccount {\n  nft {\n    editionAllowlistEnabled\n    editionPublicSaleStartTime\n    priceV2 {\n      ...useNftPriceSymbol_Price\n      currencyInfo {\n        decimals\n        id\n      }\n    }\n    editionPriceInfo {\n      allowlistPriceInFullDecimals\n      priceFunctionType\n      priceParams\n      startingPriceInLamports\n    }\n    id\n  }\n}\n\nfragment NftLeftInfo_MetadataAccount on MetadataAccount {\n  mint\n  data {\n    name\n    sellerFeeBasisPoints\n  }\n  nft {\n    auctionDurationInSeconds\n    status\n    timeExtensionDurationInSeconds\n    priceV2 {\n      ...useNftPriceSymbol_Price\n      currencyInfo {\n        decimals\n        id\n      }\n    }\n    tickSizeInfo {\n      tickSizeConstantInLamports\n    }\n    Series {\n      name\n      slug\n      type\n      AvatarPhoto {\n        photoUrl\n        id\n      }\n      Creator {\n        username\n        id\n      }\n      id\n    }\n    id\n  }\n  ...NftLeftInfoEditionInfo_MetadataAccount\n  ...NftTags_MetadataAccount\n  ...NftAttributes_MetadataAccount\n}\n\nfragment NftListedEllipsisShadowButton_MetadataAccount on MetadataAccount {\n  ...NftListedOptions_MetadataAccount\n  ...NftListedOptionsModals_MetadataAccount\n}\n\nfragment NftListedOptionsModals_MetadataAccount on MetadataAccount {\n  ...AddToAllowlistModal_MetadataAccount\n  ...AuctionSettingsModal_MetadataAccount\n  ...EditTagsModal_MetadataAccount\n  ...CancelListingModal_MetadataAccount\n  ...ChangePriceModal_MetadataAccount\n  ...ChangePriceForEditionsModal_MetadataAccount\n  ...RefreshMetadataModal_MetadataAccount\n  ...StopMintingModal_MetadataAccount\n  ...DeleteModal_MetadataAccount\n}\n\nfragment NftListedOptions_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    CampaignFundingTier {\n      __typename\n      id\n    }\n    creatorId\n    ownerId\n    isOffPlatform\n    maxSupply\n    editionAllowlistEnabled\n    numberOfStandardEditionsMinted\n    status\n    id\n  }\n}\n\nfragment NftOffer_MetadataAccount on MetadataAccount {\n  ...AcceptOfferModal_MetadataAccount\n  ...CancelOfferModal_MetadataAccount\n}\n\nfragment NftOptionsModals_MetadataAccount on MetadataAccount {\n  ...BurnModal_MetadataAccount\n  ...RefreshMetadataModal_MetadataAccount\n  ...TransferModal_MetadataAccount\n  ...DeleteModal_MetadataAccount\n}\n\nfragment NftOptions_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    CampaignFundingTier {\n      __typename\n      id\n    }\n    creatorId\n    isOffPlatform\n    numberOfStandardEditionsMinted\n    ownerId\n    status\n    id\n  }\n}\n\nfragment NftOtherInfo_MetadataAccount on MetadataAccount {\n  nft {\n    auctionEndTime\n    isOffPlatform\n    maxSupply\n    numberOfStandardEditionsMinted\n    priceV2 {\n      ...PriceWithSymbol_Price\n    }\n    priceLastSoldV2 {\n      ...PriceWithSymbol_Price\n    }\n    scheduledAuctionTime\n    status\n    id\n  }\n  numberOfBidsForCurrentAuction\n}\n\nfragment NftPageContent_MetadataAccount on MetadataAccount {\n  id\n  assetHeight\n  assetWidth\n  contentType\n  videoPlaybackId\n  offchainData {\n    image\n  }\n  nonstandardAsset {\n    ...AssetForAssetExpress_AssetExpress\n    id\n  }\n  nft {\n    creatorId\n    ownerId\n    status\n    Series {\n      id\n      type\n      ...NftPageNextInThisSeriesSection_SeriesExpress\n    }\n    Creator {\n      id\n      username\n    }\n    ...useDoesNftHaveDisclosure_NftExpress\n    id\n  }\n  ...NftCollaboratorCard_MetadataAccount\n  ...NftLeftInfo_MetadataAccount\n  ...NftPageContext_MetadataAccount\n  ...NftInfo_MetadataAccount\n  ...OtherNftBottomDrawer_MetadataAccount\n  ...OwnedNftBottomDrawer_MetadataAccount\n  ...NftPageUnlockableSection_MetadataAccount\n}\n\nfragment NftPageContext_MetadataAccount on MetadataAccount {\n  nft {\n    auctionEndTime\n    auctionHoldingPeriodEndTime\n    id\n  }\n}\n\nfragment NftPageNextInThisSeriesSection_SeriesExpress on SeriesExpress {\n  id\n  slug\n  type\n  AvatarPhoto {\n    id\n    photoUrl\n  }\n  Creator {\n    username\n    id\n  }\n}\n\nfragment NftPageUnlockableInfo_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  nft {\n    creatorId\n    id\n  }\n  unlockable {\n    category\n    asset {\n      contentType\n      path\n      id\n    }\n    unlockableWinners {\n      ...UnlockableLabel_UnlockableWinnerExpress\n      ...useUnlockableCtaType_UnlockableWinnerExpress\n      id\n    }\n    id\n  }\n  ...useNftKind_MetadataAccount\n  ...UnlockableLabel_MetadataAccount\n  ...useUnlockableCtaType_MetadataAccount\n}\n\nfragment NftPageUnlockableSection_MetadataAccount on MetadataAccount {\n  id\n  primarySaleHappened\n  nft {\n    status\n    id\n  }\n  unlockable {\n    activationPrice {\n      ...useFormattedNftPrice_Price\n      ...useNftPriceSymbol_Price\n    }\n    category\n    description\n    name\n    asset {\n      contentType\n      path\n      id\n    }\n    ...UnlockableTinyLabel_UnlockableExpress\n    id\n  }\n}\n\nfragment NftPrice_MetadataAccount on MetadataAccount {\n  nft {\n    auctionEndTime\n    auctionWinnerId\n    maxSupply\n    numberOfStandardEditionsMinted\n    priceV2 {\n      ...PriceWithSymbol_Price\n    }\n    priceLastSoldV2 {\n      ...PriceWithSymbol_Price\n    }\n    scheduledAuctionTime\n    status\n    id\n  }\n  numberOfBidsForCurrentAuction\n  ...useNftKind_MetadataAccount\n}\n\nfragment NftTags_MetadataAccount on MetadataAccount {\n  tags\n}\n\nfragment NftTimeExtensionInfo_MetadataAccount on MetadataAccount {\n  nft {\n    auctionEndTime\n    timeExtensionDurationInSeconds\n    id\n  }\n}\n\nfragment NftTransaction_MetadataAccount on MetadataAccount {\n  ...useNftKindNullable_MetadataAccount\n}\n\nfragment NftTransaction_NftTransactionExpress on NftTransactionExpress {\n  auctionCount\n  comment\n  fromAddress\n  nftInfo {\n    edition\n    maxSupply\n  }\n  price {\n    ...PriceWithSymbol_Price\n    ...useFormattedNftPrice_Price\n    currencyInfo {\n      name\n      id\n    }\n  }\n  source\n  timeCreated\n  toAddress\n  txid\n  type\n  usdPrice\n  From {\n    username\n    ProfilePhoto {\n      photoUrl\n      id\n    }\n    id\n  }\n  To {\n    username\n    ProfilePhoto {\n      photoUrl\n      id\n    }\n    id\n  }\n}\n\nfragment OtherNftBottomDrawer_MetadataAccount on MetadataAccount {\n  ...NftOptions_MetadataAccount\n  ...NftOptionsModals_MetadataAccount\n}\n\nfragment OwnedNftBottomDrawer_MetadataAccount on MetadataAccount {\n  ...NftListedOptions_MetadataAccount\n  ...NftListedOptionsModals_MetadataAccount\n}\n\nfragment PnftInfo_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  nft {\n    pnftIdForAuction\n    id\n  }\n  ...ClaimPnftModal_AuctionNft_MetadataAccount\n}\n\nfragment PnftStandardEditionKindLabel_MetadataAccount on MetadataAccount {\n  nft {\n    edition\n    id\n  }\n  ...useNftLinkForMetadataAccount_MetadataAccount\n}\n\nfragment PriceWithSymbolText_Price on Price {\n  ...useFormattedNftPrice_Price\n  ...useNftPriceSymbol_Price\n}\n\nfragment PriceWithSymbol_Price on Price {\n  ...PriceWithSymbolText_Price\n}\n\nfragment RefreshMetadataModal_MetadataAccount on MetadataAccount {\n  mint\n}\n\nfragment SettleModal_MetadataAccount on MetadataAccount {\n  mint\n  data {\n    creators {\n      address\n    }\n    name\n  }\n  nft {\n    auctionWinnerId\n    creatorId\n    ownerId\n    priceV2 {\n      amount\n      currencyInfo {\n        name\n        id\n      }\n      ...useAuctionHouseSdkForPrice_Price\n      ...useFormattedNftPrice_Price\n      ...useNftPriceSymbol_Price\n    }\n    priceLastListedV2 {\n      amount\n      ...useFormattedNftPrice_Price\n      ...useNftPriceSymbol_Price\n    }\n    AuctionWinner {\n      ...SettleSaleModalContent_UserExpress\n      id\n    }\n    id\n  }\n  ...useSettleSale_MetadataAccount\n  ...SettleSaleModalContent_MetadataAccount\n}\n\nfragment SettleSaleModalContent_MetadataAccount on MetadataAccount {\n  contentType\n  offchainData {\n    image\n  }\n  nft {\n    Owner {\n      ...ArtistPillButtonForUserExpress_UserExpress\n      id\n    }\n    id\n  }\n}\n\nfragment SettleSaleModalContent_UserExpress on UserExpress {\n  ...ArtistPillButtonForUserExpress_UserExpress\n}\n\nfragment StandardEditionPrintNonzeroSupplyKindLabel_MetadataAccount on MetadataAccount {\n  nft {\n    edition\n    id\n  }\n  ...useEditionSupply_MetadataAccount\n  ...useNftLinkForMetadataAccount_MetadataAccount\n}\n\nfragment StandardEditionPrintUnlimitedSupplyKindLabel_MetadataAccount on MetadataAccount {\n  nft {\n    edition\n    isImported\n    id\n  }\n  ...useEditionSupply_MetadataAccount\n  ...useNftLinkForMetadataAccount_MetadataAccount\n}\n\nfragment StopMintingModal_MetadataAccount on MetadataAccount {\n  ...useStopMintingForEditions_MetadataAccount\n}\n\nfragment TransferModal_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    creatorId\n    ownerId\n    id\n  }\n}\n\nfragment UnlockableDetailsModalContent_MetadataAccount on MetadataAccount {\n  unlockable {\n    category\n    description\n    name\n    asset {\n      contentType\n      path\n      id\n    }\n    ...UnlockableTinyLabel_UnlockableExpress\n    id\n  }\n  ...UnlockableDetailsModalCtaLabel_MetadataAccount\n}\n\nfragment UnlockableDetailsModalCtaLabel_MetadataAccount on MetadataAccount {\n  nft {\n    Creator {\n      id\n      username\n    }\n    id\n  }\n  unlockable {\n    unlockableWinners {\n      hasBuyerDismissedShareInfoCta\n      hasCreatorDismissedSeeInfoCta\n      userEmail(input: $unlockableWinnerUserEmailInput)\n      user {\n        id\n        username\n      }\n      id\n    }\n    id\n  }\n  ...useNftKind_MetadataAccount\n}\n\nfragment UnlockableLabel_MetadataAccount on MetadataAccount {\n  data {\n    name\n  }\n  nft {\n    creatorId\n    Creator {\n      username\n      id\n    }\n    id\n  }\n}\n\nfragment UnlockableLabel_UnlockableWinnerExpress on UnlockableWinnerExpress {\n  hasBuyerDismissedShareInfoCta\n  userEmail(input: $unlockableWinnerUserEmailInput)\n  userId\n}\n\nfragment UnlockableModalContainer_MetadataAccount on MetadataAccount {\n  unlockable {\n    unlockableWinners {\n      userEmail(input: $unlockableWinnerUserEmailInput)\n      id\n    }\n    id\n  }\n  ...useNftKind_MetadataAccount\n  ...UnlockableShareInfoModalContent_MetadataAccount\n  ...UnlockableSeeInfoModalContent_MetadataAccount\n  ...UnlockableDetailsModalContent_MetadataAccount\n}\n\nfragment UnlockableSeeInfoModalContent_MetadataAccount on MetadataAccount {\n  data {\n    name\n  }\n  unlockable {\n    id\n    asset {\n      contentType\n      path\n      id\n    }\n    unlockableWinners {\n      hasCreatorDismissedSeeInfoCta\n      userEmail(input: $unlockableWinnerUserEmailInput)\n      user {\n        id\n        username\n      }\n      id\n    }\n  }\n  ...useNftKind_MetadataAccount\n}\n\nfragment UnlockableShareInfoModalContent_MetadataAccount on MetadataAccount {\n  data {\n    name\n  }\n  nft {\n    Creator {\n      username\n      id\n    }\n    id\n  }\n  unlockable {\n    id\n    unlockableWinners {\n      hasBuyerDismissedShareInfoCta\n      userEmail(input: $unlockableWinnerUserEmailInput)\n      id\n    }\n  }\n  ...useNftKind_MetadataAccount\n}\n\nfragment UnlockableTinyLabel_UnlockableExpress on UnlockableExpress {\n  activationPrice {\n    ...useFormattedNftPrice_Price\n    ...useNftPriceSymbol_Price\n  }\n}\n\nfragment useAuctionHouseSdkForPrice_Price on Price {\n  currencyInfo {\n    name\n    id\n  }\n}\n\nfragment useBuyEdition_MetadataAccount on MetadataAccount {\n  mint\n  data {\n    creators {\n      address\n    }\n  }\n  nft {\n    antiBotProtectionEnabled\n    creatorId\n    editionBuyLimitPerAddress\n    ownerId\n    priceV2 {\n      amount\n      currencyInfo {\n        name\n        id\n      }\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    id\n  }\n}\n\nfragment useChangePriceForEditions_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    editionAllowlistEnabled\n    editionAllowlistSaleStartTime\n    editionPublicSaleStartTime\n    editionPriceInfo {\n      allowlistPriceInFullDecimals\n    }\n    priceV2 {\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    id\n  }\n}\n\nfragment useDoesNftHaveDisclosure_NftExpress on NftExpress {\n  disclosures {\n    type\n  }\n}\n\nfragment useEditionSupply_MetadataAccount on MetadataAccount {\n  nft {\n    maxSupply\n    maxSupplyOfMasterEdition\n    numberOfStandardEditionsMinted\n    id\n  }\n  ...useNftKind_MetadataAccount\n}\n\nfragment useFormattedNftPrice_Price on Price {\n  amount\n  currencyInfo {\n    decimals\n    id\n  }\n}\n\nfragment useGetCurrencyConfigForCurrencyExpress_CurrencyExpress on CurrencyExpress {\n  decimals\n  symbol\n  shortSymbol\n  name\n  mint\n}\n\nfragment useGetCurrencyConfigForPrice_Price on Price {\n  currencyInfo {\n    ...useGetCurrencyConfigForCurrencyExpress_CurrencyExpress\n    id\n  }\n}\n\nfragment useListEditionsForSale_MetadataAccount on MetadataAccount {\n  mint\n  tags\n}\n\nfragment useListNftForSale_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    creatorId\n    id\n  }\n  tags\n}\n\nfragment useNftKindNullable_MetadataAccount on MetadataAccount {\n  nft {\n    isMasterEdition\n    isPnft\n    maxSupplyOnchain\n    maxSupplyOfMasterEdition\n    CandyMachine {\n      __typename\n      id\n    }\n    id\n  }\n}\n\nfragment useNftKind_MetadataAccount on MetadataAccount {\n  nft {\n    isMasterEdition\n    isPnft\n    maxSupplyOnchain\n    maxSupplyOfMasterEdition\n    CandyMachine {\n      __typename\n      id\n    }\n    id\n  }\n}\n\nfragment useNftLinkForMetadataAccount_MetadataAccount on MetadataAccount {\n  assetHeight\n  assetWidth\n  mint\n  nft {\n    masterEditionMint\n    Creator {\n      username\n      id\n    }\n    Owner {\n      username\n      id\n    }\n    id\n  }\n}\n\nfragment useNftPriceSymbol_Price on Price {\n  currencyInfo {\n    symbol\n    shortSymbol\n    id\n  }\n}\n\nfragment useSeriesLinkRelativeForSeriesExpress_SeriesExpress on SeriesExpress {\n  slug\n  type\n  Creator {\n    username\n    id\n  }\n}\n\nfragment useSettleSale_MetadataAccount on MetadataAccount {\n  id\n  primarySaleHappened\n  nft {\n    creatorId\n    ownerId\n    pnftIdForAuction\n    id\n  }\n  unlockable {\n    id\n    activationPriceInLamports\n  }\n}\n\nfragment useStopMintingForEditions_MetadataAccount on MetadataAccount {\n  mint\n  nft {\n    creatorId\n    priceV2 {\n      ...useAuctionHouseSdkForPrice_Price\n    }\n    id\n  }\n}\n\nfragment useUnlockableCtaType_MetadataAccount on MetadataAccount {\n  nft {\n    creatorId\n    id\n  }\n}\n\nfragment useUnlockableCtaType_UnlockableWinnerExpress on UnlockableWinnerExpress {\n  hasBuyerDismissedShareInfoCta\n  hasCreatorDismissedSeeInfoCta\n  userEmail(input: $unlockableWinnerUserEmailInput)\n  userId\n}\n\nfragment useUnlockablePurchaseMessage_MetadataAccount on MetadataAccount {\n  primarySaleHappened\n  unlockable {\n    activationPrice {\n      ...useFormattedNftPrice_Price\n      ...useNftPriceSymbol_Price\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "99e397e02e622c0d556a7632b40295ee";

export default node;
