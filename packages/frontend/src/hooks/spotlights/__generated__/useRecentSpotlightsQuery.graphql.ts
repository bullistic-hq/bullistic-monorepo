/**
 * @generated SignedSource<<9508a1f2899966716171bb961cfcfc28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useRecentSpotlightsQuery$variables = {
  after?: string | null;
  first: number;
};
export type useRecentSpotlightsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useRecentSpotlights_Query">;
};
export type useRecentSpotlightsQuery = {
  response: useRecentSpotlightsQuery$data;
  variables: useRecentSpotlightsQuery$variables;
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
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useRecentSpotlightsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "useRecentSpotlights_Query"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useRecentSpotlightsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SpotlightResponse",
        "kind": "LinkedField",
        "name": "SpotlightNamespace",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "SpotlightsConnection",
            "kind": "LinkedField",
            "name": "recentSpotlights",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SpotlightsEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SpotlightExpress",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SpotlightInfo",
                        "kind": "LinkedField",
                        "name": "spotlightInfo",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "label",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
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
                            "kind": "ScalarField",
                            "name": "statusOverride",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "contentType",
                                "storageKey": null
                              },
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "videoPlaybackId",
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "UserExpress",
                            "kind": "LinkedField",
                            "name": "users",
                            "plural": true,
                            "selections": [
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
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v2/*: any*/)
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
                        "name": "startTime",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endTime",
                        "storageKey": null
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
            "filters": null,
            "handle": "connection",
            "key": "RecentSpotlights_Query_recentSpotlights",
            "kind": "LinkedHandle",
            "name": "recentSpotlights"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4a45399a5b3e3722cc582a8da6bf593e",
    "id": null,
    "metadata": {},
    "name": "useRecentSpotlightsQuery",
    "operationKind": "query",
    "text": "query useRecentSpotlightsQuery(\n  $after: String\n  $first: Int!\n) {\n  ...useRecentSpotlights_Query\n}\n\nfragment ArtistPillButtonForUserExpress_UserExpress on UserExpress {\n  username\n  ProfilePhoto {\n    photoUrl\n    id\n  }\n}\n\nfragment AssetForAssetExpress_AssetExpress on AssetExpress {\n  contentType\n  downloadUrl\n  darkModeInfo {\n    downloadUrl\n  }\n  videoPlaybackId\n}\n\nfragment SpotlightArtistPills_SpotlightExpress on SpotlightExpress {\n  spotlightInfo {\n    users {\n      ...ArtistPillButtonForUserExpress_UserExpress\n      id\n    }\n  }\n}\n\nfragment SpotlightAssetWithOverlay_SpotlightExpress on SpotlightExpress {\n  startTime\n  endTime\n  spotlightInfo {\n    asset {\n      ...AssetForAssetExpress_AssetExpress\n      id\n    }\n  }\n}\n\nfragment SpotlightCard_SpotlightExpress on SpotlightExpress {\n  spotlightInfo {\n    label\n    title\n    status\n    statusOverride\n  }\n  ...SpotlightGoToUrlOrShowDetailsModal_SpotlightExpress\n  ...SpotlightAssetWithOverlay_SpotlightExpress\n  ...SpotlightArtistPills_SpotlightExpress\n}\n\nfragment SpotlightDetailsModal_SpotlightExpress on SpotlightExpress {\n  spotlightInfo {\n    label\n    title\n    description\n  }\n  ...SpotlightAssetWithOverlay_SpotlightExpress\n  ...SpotlightArtistPills_SpotlightExpress\n}\n\nfragment SpotlightGoToUrlOrShowDetailsModal_SpotlightExpress on SpotlightExpress {\n  spotlightInfo {\n    url\n  }\n  ...SpotlightDetailsModal_SpotlightExpress\n}\n\nfragment SpotlightsGridForSpotlights_SpotlightExpress on SpotlightExpress {\n  id\n  ...SpotlightCard_SpotlightExpress\n}\n\nfragment useRecentSpotlights_Query on query_root {\n  SpotlightNamespace {\n    recentSpotlights(after: $after, first: $first) {\n      edges {\n        node {\n          ...SpotlightsGridForSpotlights_SpotlightExpress\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8afa76451a78c3f771026dbfbac2927c";

export default node;
