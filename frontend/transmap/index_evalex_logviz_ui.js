"use strict";

if (window._DEBUG_FLAG) {
//////////////////////////////// ASYNC INIT ////////////////////////////////
(async () => {
  // post UI metadata
  await logvizSETJSONAsync("com-transmex:treesitter.ui", {
    "version": [0, 1],
    "uikey": "treesitter",
    "channels": [
      {
        "channel_key": "transmap_bridge",
        "channel_type": "IFRAME_BRIDGE",
        "bridge_url": window._LOGVIZ_TRANSMAP_BRIDGE_URL,
      }
    ],
    "ui": {
      "type": "vertical",
      "children": [
        {
          "type": "monaco",
          "value": "a = 5\nprint('hello' + str(a))",
          "key": "input_code"
        },
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "input",
              "value": "py",
              "key": "lang"
            },
            {
              "type": "button",
              "text": "Parse",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"key": "lang", "to_param": "lang"},
                  {"key": "input_code", "to_param": "code"}
                ],
                "receiver": ["transmap_bridge", "tsparse"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": [
                    {"key": "ast_tree", "from_resp": "result"}
                  ]
                }
              }
            },
          ]
        },
        
        {
          "type": "jsontab",
          "value": "-",
          "key": "ast_tree"
        },
        {
          "type": "monaco",
          "value": "(call) @log-type.tag-call",
          "key": "ts_query"
        },
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "button",
              "text": "Query & Visualize (Normal)",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers" : [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "lang", "to_param": "lang"},
                      {"key": "input_code", "to_param": "code"},
                      {"key": "ts_query", "to_param": "query"}
                    ],
                    "receiver": ["transmap_bridge", "tsquery"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "ts_query_result", "from_resp": "result"}
                      ]
                    }
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"constant": "my-monaco-deco-00", "to_param": "deco_class"},
                      {"key": "ts_query_result", "to_param": "tracepoints_str"},
                    ],
                    "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"is_anno": true, "key": "input_code", "anno_key":"tracepoints", "from_resp": "decos"},
                      ]
                    }
                  },
                ]
              }
            },
            {
              "type": "button",
              "text": "Query & Visualize (Grouped)",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers" : [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "lang", "to_param": "lang"},
                      {"key": "input_code", "to_param": "code"},
                      {"key": "ts_query", "to_param": "query"}
                    ],
                    "receiver": ["transmap_bridge", "tsquery_grouped"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "ts_query_result", "from_resp": "result"}
                      ]
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "type": "jsontab",
          "value": "-",
          "key": "ts_query_result"
        }
      ]
    }
  });
})();

}