"use strict";

if (window._DEBUG_FLAG) {

(async () => {
  await logvizSETJSONAsync("com-transmex:jsonviz.ui", {
    "version": [0, 1],
    "uikey": "jsonviz",
    "channels": [
      {
        "channel_key": "transmap_bridge",
        "channel_type": "IFRAME_BRIDGE",
        "bridge_url": window._LOGVIZ_TRANSMAP_BRIDGE_URL,
      }
    ],
    "automations": [],
    "ui": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "style": { "height": "30px", "min-height": "30px" },
          "children": [
            {
              "type": "button",
              "bkey": "b_viz_json",
              "text": "Viz",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"key": "json_input", "to_param": "json_str"},
                ],
                "receiver": ["transmap_bridge", "util_parse_json"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": [
                    {"key": "json_viz", "from_resp": "json_obj"},
                  ]
                }
              },
            }
          ]
        },
        {
          "type": "horizontal",
          "children": [
            {
              "type": "textarea",
              "key": "json_input",
              "value": "(Paste json here)"
            },
            {
              "type": "jsontab",
              "key": "json_viz",
              "value": "(To be displayed)"
            }
          ]
        }
      ]
    }
  });

  const embedded_translator = {
    "type": "hoverbox",
    "text": "Translator",
    // "inner_style": {"left": "7%", "right": "7%", "top": "7%", "bottom": "7%", "width": "86%", "height": "86%"},
    "child": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "button",
              "bkey": "b_translate",
              "text": "Translate (temp=0)",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"key": "trans_py_code", "to_param": "py_code"},
                ],
                "receiver": ["transmap_bridge", "translate_py_js"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": [
                    {"key": "trans_js_code", "from_resp": "result"}
                  ]
                }
              }
            }
          ]
        },
        {
          "type": "horizontal",
          "children": [
            {
              "type": "monaco",
              "params": {"lang": "py"},
              "value": "print('hello')",
              "key": "trans_py_code"
            },
            {
              "type": "monaco",
              "params": {"lang": "js"},
              "value": "console.log('hello');",
              "key": "trans_js_code"
            },
          ]
        }
      ]
    }
  };
  const embedded_linemap = { 
    /////////////////// Embedded Linemap Begin ///////////////////
    "type": "hoverbox",
    "text": "SourceMap",
    "inner_style": {"left": "7%", "right": "7%", "top": "7%", "bottom": "7%", "width": "86%", "height": "86%"},
    "child": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "children": [
            {
              "type": "monaco",
              "params": {"lang": "py"},
              "value": "print('hello')",
              "key": "map_py_code"
            },
            {
              "type": "monaco",
              "params": {"lang": "js"},
              "value": "console.log('hello');",
              "key": "map_js_code"
            },
            {
              "type": "vertical",
              "children": [
                {
                  "type": "horizontal",
                  "style": {"height": "30px", "min-height": "30px"},
                  "children": [
                    {
                      "type": "input", 
                      "value": "_CODEX_PROMPT_TEMPLATE_TRANS_NESTED_STMT_MAP2_2_PY_JS", 
                      "key": "prompt_name", 
                    },
                    {
                      "type": "button", 
                      "text": "Load Prompt", 
                      "bkey": "b_load_prompt",
                      "on_click": {
                        "handler_type": "SEND",
                        "params": [
                          {"key": "prompt_name", "to_param": "prompt_name"}
                        ],
                        "receiver": ["transmap_bridge", "read_codex_prompt"],
                        "on_resp": {
                          "handler_type": "UI_UPDATE",
                          "updates": [
                            {"key": "prompt_tpl", "from_resp": "prompt"}
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "monaco",
                  "value": "",
                  "key": "prompt_tpl"
                },
              ]
            }
          ]
        },
        {
          "type": "horizontal",
          "children": [
            {
              "type": "vertical",
              "children": [
                {
                  "type": "horizontal",
                  "style": {"height": "30px", "min-height": "30px"},
                  "children": [
                    {
                      "type": "button",
                      "text": "Completion",
                      "bkey": "b_map_completion",
                      "on_click": {
                        "handler_type": "SEND",
                        "params": [
                          {"key": "map_py_code", "to_param": "py_code"},
                          {"key": "map_js_code", "to_param": "js_code"},
                          {"key": "prompt_tpl", "to_param": "prompt_tpl"}
                        ],
                        "receiver": ["transmap_bridge", "selfexp_py_js"],
                        "on_resp": {
                          "handler_type": "UI_UPDATE",
                          "updates": [
                            {"key": "map_completion", "from_resp": "result"}
                          ]
                        }
                      }
                    },
                    {
                      "type": "button",
                      "text": "ParseViz (stmtmap)",
                      "bkey": "b_parseviz_stmtmap",
                      "on_click": {
                        "handler_type": "SEQ",
                        "child_handlers": [
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"key": "map_py_code", "to_param": "py_code"},
                              {"key": "map_js_code", "to_param": "js_code"},
                              {"key": "map_completion", "to_param": "stmtmap_text"},
                            ],
                            "receiver": ["transmap_bridge", "selfexp_parse_stmtmap2"],
                            "on_resp": {
                              "handler_type": "UI_UPDATE",
                              "updates": [
                                {"key": "linemap", "from_resp": "stmtmap"},
                                {"key": "linemapraw", "from_resp": "stmtmapraw"},
                              ]
                            }
                          },
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"key": "linemap", "to_param": "stmtmap_str"}
                            ],
                            "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
                            "on_resp": {
                              "handler_type": "UI_UPDATE",
                              "updates": [
                                {"is_anno": true, "key": "map_py_code", "anno_key": "stmtmap", "from_resp": "line_decos_src"},
                                {"is_anno": true, "key": "map_js_code", "anno_key": "stmtmap", "from_resp": "line_decos_tar"},
                              ]
                            }
                          }
                        ]
                      }
                    },
                  ]
                },
                {
                  "type": "textarea",
                  "value": "-",
                  "key": "map_completion"
                },
              ]
            },
            {
              "type": "jsontab",
              "value": "(linemap)",
              "key": "linemap"
            },
            {
              "type": "jsontab",
              "value": "(linemap raw)",
              "key": "linemapraw"
            }
          ]
        }
      ]
    }
  };

  await logvizSETJSONAsync("com-transmex:trans_map_long.ui", {
    "version": [0, 1],
    "uikey": "trans_map_long",
    "channels": [
      {
        "channel_key": "transmap_bridge",
        "channel_type": "IFRAME_BRIDGE",
        "bridge_url": window._LOGVIZ_TRANSMAP_BRIDGE_URL,
      }
    ],
    "automations": [],
    "ui": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "style": { "height": "30px", "min-height": "30px" },
          "children": [
            {
              "type": "label",
              "value": "real",
              "key": "category"
            },
            {
              "type": "label",
              "value": "py_js_codex0err",
              "key": "langpair"
            },
            {
              "type": "input",
              "value": "stringsim0",
              "autocomplete": { "ac_type": "DATALIST", "list_key": "bench_id_list" },
              "key": "bench_id"
            },
            {
              "type": "ac_datalist",
              "key": "bench_id_list",
            },
            {
              "type": "button",
              "b_key": "b_load",
              "text": "Load Python Code and JS Template",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "UI_UPDATE",
                    "updates": [
                      {"key": "py_code", "constant": "-"},
                      {"key": "js_code", "constant": "-"},
                      {"key": "py_test", "constant": "-"},
                      {"key": "js_test", "constant": "-"},
                      {"key": "raw_map_pieces", "constant": ""},
                      {"key": "raw_map_merged", "constant": "-"},
                    ]
                  },
                  {
                    "handler_type": "BUTTON", "bkey": "b_load_prompt"
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "category", "to_param": "category"},
                      {"key": "langpair", "to_param": "langpair"},
                      {"key": "bench_id", "to_param": "bench_id"},
                    ],
                    "receiver": ["transmap_bridge", "read_benchmark"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "py_code", "from_resp": "source.py"},
                        {"key": "js_code", "from_resp": "target_tmpl.js"},
                        {"key": "py_test", "from_resp": "source_test.py"},
                        {"key": "js_test", "from_resp": "target_test.js"},
                      ]
                    }
                  },
                ]
              }
            },
            // {
            //   "type": "button",
            //   "bkey": "b_load_ids",
            //   "text": "Load IDs",
            //   "on_click": {
            //     "handler_type": "SEND",
            //     "params": [
            //       { "key": "category", "to_param": "category" },
            //       { "key": "langpair", "to_param": "langpair" },
            //     ],
            //     "receiver": ["transmap_bridge", "get_task_bench_ids"],
            //     "on_resp": {
            //       "handler_type": "UI_UPDATE",
            //       "updates": [
            //         { "key": "bench_id_list", "from_resp": "result" },
            //       ]
            //     }
            //   }
            // },
            {
              "type": "label",
              "value": "------",
              "key": "label_rand1"
            },
            {
              "type": "hoverbox",
              "text": "TestWrapper",
              // "inner_style": {"left": "7%", "right": "7%", "top": "7%", "bottom": "7%", "width": "86%", "height": "86%"},
              "child": {
                "type": "horizontal",
                "children": [
                  {
                    "type": "monaco",
                    "params": {"lang": "py"},
                    "value": "# Python Test Wrapper (to be filled)",
                    "key": "py_test"
                  },
                  {
                    "type": "monaco",
                    "params": {"lang": "js"},
                    "value": "// JavaScript Test Wrapper (to be filled)",
                    "key": "js_test"
                  }
                ]
              }
            },
            embedded_translator,
            embedded_linemap,
            {
              "type": "label",
              "value": "(trans seg)",
              "key": "trans_working_seg"
            },
            {
              "type": "button",
              "b_key": "b_translate_next",
              "text": "Trans Next",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "py_code", "to_param": "py_code"},
                      {"key": "js_code", "to_param": "js_code_wip"},
                    ],
                    "receiver": ["transmap_bridge", "translong_next_py_extract"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "trans_working_seg", "from_resp": "trans_working_seg"},
                        {"key": "trans_py_code", "from_resp": "extracted_py_code"},
                        {"key": "trans_js_code", "constant": "//waiting for translation..."}
                      ]
                    }
                  },
                  { "handler_type": "BUTTON", "bkey": "b_translate"},
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "js_code", "to_param": "js_code_wip"},
                      {"key": "trans_js_code", "to_param": "translated_js_code"},
                      {"key": "trans_working_seg", "to_param": "trans_working_seg"}
                    ],
                    "receiver": ["transmap_bridge", "translong_next_js_fill"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "js_code", "from_resp": "updated_js_code"},
                      ]
                    }
                  },
                ]
              }
            },
            {
              "type": "label",
              "value": "(map seg)",
              "key": "map_working_seg"
            },
            {
              "type": "button",
              "b_key": "b_srcmap_next",
              "text": "Map Next",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "py_code", "to_param": "py_code"},
                      {"key": "js_code", "to_param": "js_code"},
                      {"key": "raw_map_pieces", "to_param": "raw_map_pieces_wip"},
                    ],
                    "receiver": ["transmap_bridge", "maplong_next_extract"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "map_py_code", "from_resp": "code_to_map_py"},
                        {"key": "map_js_code", "from_resp": "code_to_map_js"},
                        {"key": "map_working_seg", "from_resp": "map_working_seg"},
                        {"key": "linemap", "constant": "-"},
                        {"key": "linemapraw", "constant": "-"},
                        {"key": "map_completion", "constant": "-"},
                      ]
                    }
                  },
                  { "handler_type": "BUTTON", "bkey": "b_map_completion" },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "raw_map_pieces", "to_param": "raw_map_pieces_wip"},
                      {"key": "map_completion", "to_param": "map_completion"},
                      {"key": "map_working_seg", "to_param": "map_working_seg"}
                    ],
                    "receiver": ["transmap_bridge", "maplong_next_fill"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "raw_map_pieces", "from_resp": "updated_raw_map_pieces"},
                      ]
                    }
                  },
                ]
              }
            },
            {
              "type": "button",
              "b_key": "b_merge_map",
              "text": "Merge Map",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "raw_map_pieces", "to_param": "raw_map_pieces"}
                    ],
                    "receiver": ["transmap_bridge", "maplong_merge_rawmap_pieces"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "raw_map_merged", "from_resp": "raw_map_merged"}
                      ]
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "type": "horizontal",
          "children": [
            {
              "type": "monaco",
              "params": {"lang": "py"},
              "value": "# Python Code (long)",
              "key": "py_code"
            },
            {
              "type": "monaco",
              "params": {"lang": "js"},
              "value": "// JavaScript Translation (Work in Progress);",
              "key": "js_code"
            }
          ]
        },
        {
          "type": "horizontal",
          "children": [
            {
              "type": "textarea",
              "value": "(raw map unmerged)",
              "key": "raw_map_pieces"
            },
            {
              "type": "textarea",
              "value": "(raw map merged)",
              "key": "raw_map_merged"
            },
          ]
        }
      ]
    }
  });
})();

}