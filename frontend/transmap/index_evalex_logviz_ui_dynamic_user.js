"use strict";
if (window._DEBUG_FLAG) {

(async () => {
  const automations = [
    {
      "auto_key": "run_current",
      "handler": {
        "handler_type": "SEQ",
        "child_handlers": [
          {"handler_type": "BUTTON", "bkey": "b_symptom_check"},
          {"handler_type": "BUTTON", "bkey": "b_py_tracepoints"},
          {"handler_type": "BUTTON", "bkey": "b_js_tracepoints"},
          {"handler_type": "BUTTON", "bkey": "b_map_block"},
          {"handler_type": "BUTTON", "bkey": "b_py_instrun"},
          {"handler_type": "BUTTON", "bkey": "b_js_instrun"},
          {"handler_type": "BUTTON", "bkey": "b_traces_cmp"},
        ]
      }
    },
    {
      "auto_key": "run_iterate",
      "handler": {
        "handler_type": "REACTOR",
        "maximum_gas": 1000,
        "reactor": ["transmap_bridge", "rx:dynamic_auto_iterate"],
      }
    },
    {
      "auto_key": "clear_all_anno",
      "handler": {
        "handler_type": "SEQ",
        "child_handlers": [
          {
            "handler_type": "SEND",
            "params": [
              {"constant": "LINE_DECO", "to_param": "anno_type"},
            ],
            "receiver": ["transmap_bridge", "AGEN_empty"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"is_anno": true, "key": "inputpy", "anno_key":"covlines", "from_resp": "result"},
                {"is_anno": true, "key": "inputjs", "anno_key":"covlines", "from_resp": "result"},
                {"is_anno": true, "key": "inputpy", "anno_key":"stmtmap", "from_resp": "result"},
                {"is_anno": true, "key": "inputjs", "anno_key":"stmtmap", "from_resp": "result"},
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              {"constant": "DECO", "to_param": "anno_type"},
            ],
            "receiver": ["transmap_bridge", "AGEN_empty"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"is_anno": true, "key": "inputpy", "anno_key":"trace_err", "from_resp": "result"},
                {"is_anno": true, "key": "inputjs", "anno_key":"trace_err", "from_resp": "result"},
                {"is_anno": true, "key": "inputpy", "anno_key":"tracepointspy_on", "from_resp": "result"},
                {"is_anno": true, "key": "inputjs", "anno_key":"tracepointsjs_on", "from_resp": "result"},
                {"is_anno": true, "key": "inputpy", "anno_key":"tracepointspy_off", "from_resp": "result"},
                {"is_anno": true, "key": "inputjs", "anno_key":"tracepointsjs_off", "from_resp": "result"},
              ]
            }
          },
        ]
      }
    },
    {
      "auto_key": "ui_clear",
      "handler": {
        "handler_type": "UI_UPDATE",
        "updates": [
          {"key": "inputpy", "constant": "# source"},
          {"key": "inputjs", "constant": "// target"},
          // {"key": "inputjs_fixed", "constant": "(js fixed)"},
          // {"key": "errorinjects", "constant": "(errorinjects)"},
          {"key": "testpy", "constant": "#TESTED_PROGRAM"},
          {"key": "testjs", "constant": "//TESTED_PROGRAM"},
          {"key": "stmtmap", "constant": "(stmtmap)"},
          // {"key": "stmtmap_fixed", "constant": "(stmtmap fixed)"},
          // {"key": "stmtmap_ori", "constant": "(stmtmap original)"},
          {"key": "raw_pyrun", "constant": "(Python test result)"},
          {"key": "raw_jsrun", "constant": "(JavaScript test result)"},
          {"key": "result_symptom", "constant": "(JS test symptom)"},
          {"key": "instrumentedpy", "constant": "# instrumented py"},
          {"key": "instrumentedjs", "constant": "// instrumented js"},
          {"key": "resultpy", "constant": "(py trace result)"},
          {"key": "resultjs", "constant": "(js trace result)"},
          {"key": "tar_src_tracepoint_map", "constant": "-"},
          {"key": "cmp_result", "constant": "(trace compare diagnosis)"},
          {"key": "diag_message", "constant": "(trace comparison result message)"},
          {"key": "friendly_cmp_result", "constant": "(trace compare diagnosis)"},
          {"key": "py_variables", "constant": "(py variables)"},
          {"key": "js_variables", "constant": "(js variables)"},
          {"key": "traceconfig", "constant": "null"},
        ]
      }
    },
    {
      "auto_key": "load_casestudy_with_rawmap",
      "handler": {
        "handler_type": "SEQ",
        "child_handlers": [
          {
            "handler_type": "AUTOMATION",
            "auto_key": "ui_clear",
            "recorder_key": null
          },
          {
            "handler_type": "AUTOMATION",
            "auto_key": "clear_all_anno",
            "recorder_key": null
          },
          {
            "handler_type": "SEND",
            "params": [
              // {"key": "user_id", "to_param": "_user_id"},
              {"key": "bench_id", "to_param": "_bench_id"},
              {"key": "target_filename", "to_param": "_target_filename"},
              {"template": "transmap/tests/evalex/real/py_js_codex0err/{_bench_id}", "to_param": "folder_path"}
            ],
            "receiver": ["transmap_bridge", "read_folder"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "inputpy", "from_resp": "source.py"},
                {"key": "testpy", "from_resp": "source_test.py"},
                {"key": "testjs", "from_resp": "target_test.js"},
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              // {"key": "user_id", "to_param": "_user_id"},
              {"key": "bench_id", "to_param": "_bench_id"},
              {"key": "target_filename", "to_param": "_target_filename"},
              {"template": "transmap/tests/evalex/real/py_js_codex0err/{_bench_id}/{_target_filename}", "to_param": "filepath"}
            ],
            "receiver": ["transmap_bridge", "read_data_file"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "inputjs", "from_resp": "filecontent"},
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              // {"key": "user_id", "to_param": "_user_id"},
              {"key": "bench_id", "to_param": "_bench_id"},
              {"key": "target_filename", "to_param": "_target_filename"},
              {"template": "transmap/tests/evalex/real/py_js_codex0err/{_bench_id}/{_target_filename}.srcmap", "to_param": "filepath"}
            ],
            "receiver": ["transmap_bridge", "read_data_file"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "rawmap_completion", "from_resp": "filecontent"},
              ]
            }
          },
          {"handler_type": "BUTTON", "bkey": "b_parseviz_stmtmap_adv"},
          { "handler_type": "BUTTON", "bkey": "b_load_traceconfig_casestudy" }
        ]
      }
    },
    // {
    //   "auto_key": "load_userstudy_with_rawmap",
    //   "handler": {
    //     "handler_type": "SEQ",
    //     "child_handlers": [
    //       {
    //         "handler_type": "AUTOMATION",
    //         "auto_key": "ui_clear",
    //         "recorder_key": null
    //       },
    //       {
    //         "handler_type": "AUTOMATION",
    //         "auto_key": "clear_all_anno",
    //         "recorder_key": null
    //       },
    //       {
    //         "handler_type": "SEND",
    //         "params": [
    //           {"key": "user_id", "to_param": "_user_id"},
    //           {"key": "bench_id", "to_param": "_bench_id"},
    //           {"key": "target_filename", "to_param": "_target_filename"},
    //           {"template": "transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}", "to_param": "folder_path"}
    //         ],
    //         "receiver": ["transmap_bridge", "read_folder"],
    //         "on_resp": {
    //           "handler_type": "UI_UPDATE",
    //           "updates": [
    //             {"key": "inputpy", "from_resp": "source.py"},
    //             {"key": "testpy", "from_resp": "source_test.py"},
    //             {"key": "testjs", "from_resp": "target_test.js"},
    //           ]
    //         }
    //       },
    //       {
    //         "handler_type": "SEND",
    //         "params": [
    //           {"key": "user_id", "to_param": "_user_id"},
    //           {"key": "bench_id", "to_param": "_bench_id"},
    //           {"key": "target_filename", "to_param": "_target_filename"},
    //           {"template": "transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}", "to_param": "filepath"}
    //         ],
    //         "receiver": ["transmap_bridge", "read_data_file"],
    //         "on_resp": {
    //           "handler_type": "UI_UPDATE",
    //           "updates": [
    //             {"key": "inputjs", "from_resp": "filecontent"},
    //           ]
    //         }
    //       },
    //       {
    //         "handler_type": "SEND",
    //         "params": [
    //           {"key": "user_id", "to_param": "_user_id"},
    //           {"key": "bench_id", "to_param": "_bench_id"},
    //           {"key": "target_filename", "to_param": "_target_filename"},
    //           {"template": "transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.srcmap", "to_param": "filepath"}
    //         ],
    //         "receiver": ["transmap_bridge", "read_data_file"],
    //         "on_resp": {
    //           "handler_type": "UI_UPDATE",
    //           "updates": [
    //             {"key": "rawmap_completion", "from_resp": "filecontent"},
    //           ]
    //         }
    //       },
    //       {"handler_type": "BUTTON", "bkey": "b_parseviz_stmtmap"},
    //       { "handler_type": "BUTTON", "bkey": "b_load_traceconfig" }
    //     ]
    //   }
    // },
    // {
    //   "auto_key": "read_traceconfig",
    //   "handler": {
    //     "handler_type": "SEND",
    //     "params": [
    //       {"key": "user_id", "to_param": "_user_id"},
    //       {"key": "bench_id", "to_param": "_bench_id"},
    //       {"key": "target_filename", "to_param": "_target_filename"},
    //       {"template": "transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.traceconfig.json", "to_param": "filepath_0"},
    //       {"template": "transmap/user_study_cmp/user_data_ro/default.traceconfig.json", "to_param": "filepath_1"},
    //     ],
    //     "receiver": ["transmap_bridge", "read_data_file_priority"],
    //     "on_resp": {
    //       "handler_type": "UI_UPDATE",
    //       "updates": [
    //         {"key": "traceconfig", "from_resp": "filecontent"},
    //       ]
    //     }
    //   }
    // },
    {
      "auto_key": "read_traceconfig_casestudy",
      "handler": {
        "handler_type": "SEND",
        "params": [
          // {"key": "user_id", "to_param": "_user_id"},
          {"key": "bench_id", "to_param": "_bench_id"},
          {"key": "target_filename", "to_param": "_target_filename"},
          {"template": "transmap/tests/evalex/real/py_js_codex0err/{_bench_id}/{_target_filename}.traceconfig.json", "to_param": "filepath_0"},
          {"template": "transmap/user_study_cmp/user_data_ro/default.traceconfig.json", "to_param": "filepath_1"},
        ],
        "receiver": ["transmap_bridge", "read_data_file_priority"],
        "on_resp": {
          "handler_type": "UI_UPDATE",
          "updates": [
            {"key": "traceconfig", "from_resp": "filecontent"},
          ]
        }
      }
    },
    // {
    //   "auto_key": "save_traceconfig",
    //   "handler": {
    //     "handler_type": "SEND",
    //     "params": [
    //       {"key": "user_id", "to_param": "_user_id"},
    //       {"key": "bench_id", "to_param": "_bench_id"},
    //       {"key": "target_filename", "to_param": "_target_filename"},
    //       {"template": "transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.traceconfig.json", "to_param": "save_filepath"},
    //       {"key": "traceconfig", "to_param": "save_filecontent"},
    //     ],
    //     "receiver": ["transmap_bridge", "save_data_file"],
    //     "on_resp": {
    //       "handler_type": "UI_UPDATE",
    //       "updates": []
    //     }
    //   }
    // },
    {
      "auto_key": "save_traceconfig_casestudy",
      "handler": {
        "handler_type": "SEND",
        "params": [
          // {"key": "user_id", "to_param": "_user_id"},
          {"key": "bench_id", "to_param": "_bench_id"},
          {"key": "target_filename", "to_param": "_target_filename"},
          {"template": "transmap/tests/evalex/real/py_js_codex0err/{_bench_id}/{_target_filename}.traceconfig.json", "to_param": "save_filepath"},
          {"key": "traceconfig", "to_param": "save_filecontent"},
        ],
        "receiver": ["transmap_bridge", "save_data_file"],
        "on_resp": {
          "handler_type": "UI_UPDATE",
          "updates": []
        }
      }
    },
    // {
    //   "auto_key": "save_userfix_js",
    //   "handler": {
    //     "handler_type": "SEND",
    //     "params": [
    //       {"key": "user_id", "to_param": "_user_id"},
    //       {"key": "bench_id", "to_param": "_bench_id"},
    //       {"key": "target_filename", "to_param": "_target_filename"},
    //       {"template": "transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.userfix.js", "to_param": "save_filepath"},
    //       {"key": "inputjs", "to_param": "save_filecontent"},
    //     ],
    //     "receiver": ["transmap_bridge", "save_data_file"],
    //     "on_resp": {
    //       "handler_type": "UI_UPDATE",
    //       "updates": []
    //     }
    //   }
    // }
  ];

  const hidden_advanced_pannel = {
    "type": "hoverbox",
    "text": "Advanced (Dev)",
    "inner_style": {"left": "5%", "right": "5%", "top": "7%", "bottom": "7%", "width": "90%", "height": "86%"},
    "child": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "button",
              "text": "-- RELOAD Proto Lib --",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"constant": "200", "to_param": "timeout_str"}
                ],
                "receiver": ["transmap_bridge", "reload"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": []
                }
              }
            },
            {
              "type": "label",
              "key": "label_trace_preset",
              "value": "trace preset"
            },
            {
              "type": "input",
              "style": {"maxWidth": "250px"},
              "value": '[1,9,"CF,AD,EX","GEN","CmpF","TpA"]',
              "key": "trace_level_range"
            },
            {
              "type": "input",
              "value": "block_vars_py",
              "key": "our_preset_py"
            },
            {
              "type": "input",
              "value": "block_vars_js",
              "key": "our_preset_js"
            },
            {
              "type": "input",
              "value": "block_vars_py_js",
              "key": "our_preset_cmp"
            },
            {
              "type": "select",
              "key": "check_tag_eq_select",
              "value": "TAG_RELAX",
              "options": ["TAG_RELAX", "TAG_EQ"],
            },
            {
              "type": "input",
              "style": {"maxWidth": "120px"},
              "value": '["CF", "AD", "EX"]',
              "key": "trace_group"
            },
          ]
        },
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "button",
              "bkey": "b_py_tracepoints",
              "text": "(1.1) py tracepoints",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"key": "our_preset_py", "to_param": "preset"},
                  {"key": "trace_group", "to_param": "trace_group_str"},
                  {"key": "inputpy", "to_param": "code"},
                  {"key": "traceconfig", "to_param": "traceconfig_str"}
                ],
                "receiver": ["transmap_bridge", "da_preset_0__tracepoints"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": [
                    {"key": "tracepointspy", "from_resp": "tracepoints"},
                    {"key": "tracepointspy_on", "from_resp": "tracepoints"},
                    {"key": "tracepointspy_off", "constant": "-"},
                  ]
                }
              }
            },
            {
              "type": "button",
              "bkey": "b_js_tracepoints",
              "text": "(1.2) js tracepoints",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"key": "our_preset_js", "to_param": "preset"},
                  {"key": "trace_group", "to_param": "trace_group_str"},
                  {"key": "inputjs", "to_param": "code"},
                  {"key": "traceconfig", "to_param": "traceconfig_str"}
                ],
                "receiver": ["transmap_bridge", "da_preset_0__tracepoints"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": [
                    {"key": "tracepointsjs", "from_resp": "tracepoints"},
                    {"key": "tracepointsjs_on", "from_resp": "tracepoints"},
                    {"key": "tracepointsjs_off", "constant": "-"},
                  ]
                }
              }
            },
            {
              "type": "button",
              "bkey": "b_map_block",
              "text": "(1.3) Map",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "inputpy", "to_param": "src_code"},
                      {"key": "inputjs", "to_param": "tar_code"},
                      {"key": "tracepointspy", "to_param": "src_tracepoints_str"},
                      {"key": "tracepointsjs", "to_param": "tar_tracepoints_str"},
                      {"key": "stmtmap", "to_param": "stmtmap_str"},
                      {"key": "check_tag_eq_select", "to_param": "check_tag_eq_str"},
                      {"key": "traceconfig", "to_param": "traceconfig_str"}
                    ],
                    "receiver": ["transmap_bridge", "map_block_tracepoints_by_stmtmap"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "tracepointspy_on", "from_resp": "src_tracepoints_on"},
                        {"key": "tracepointspy_off", "from_resp": "src_tracepoints_off"},
                        {"key": "tracepointsjs_on", "from_resp": "tar_tracepoints_on"},
                        {"key": "tracepointsjs_off", "from_resp": "tar_tracepoints_off"},
                        {"key": "tar_src_tracepoint_map", "from_resp": "tar_src_tracepoint_map"}
                      ]
                    }
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"constant": "my-monaco-deco-02", "to_param": "deco_class"},
                      {"key": "tracepointspy_on", "to_param": "tracepoints_str"},
                    ],
                    "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"is_anno": true, "key": "inputpy", "anno_key":"tracepointspy_on", "from_resp": "decos"},
                      ]
                    }
                  },
                  // {
                  //   "handler_type": "SEND",
                  //   "params": [
                  //     {"constant": "my-monaco-deco-01", "to_param": "deco_class"},
                  //     {"key": "tracepointspy_off", "to_param": "tracepoints_str"},
                  //   ],
                  //   "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                  //   "on_resp": {
                  //     "handler_type": "UI_UPDATE",
                  //     "updates": [
                  //       {"is_anno": true, "key": "inputpy", "anno_key":"tracepointspy_off", "from_resp": "decos"},
                  //     ]
                  //   }
                  // },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"constant": "my-monaco-deco-02", "to_param": "deco_class"},
                      {"key": "tracepointsjs_on", "to_param": "tracepoints_str"},
                    ],
                    "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"is_anno": true, "key": "inputjs", "anno_key":"tracepointsjs_on", "from_resp": "decos"},
                      ]
                    }
                  },
                  // {
                  //   "handler_type": "SEND",
                  //   "params": [
                  //     {"constant": "my-monaco-deco-01", "to_param": "deco_class"},
                  //     {"key": "tracepointsjs_off", "to_param": "tracepoints_str"},
                  //   ],
                  //   "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                  //   "on_resp": {
                  //     "handler_type": "UI_UPDATE",
                  //     "updates": [
                  //       {"is_anno": true, "key": "inputjs", "anno_key":"tracepointsjs_off", "from_resp": "decos"},
                  //     ]
                  //   }
                  // },
                ]
              }
            },
            {
              "type": "button",
              "text": "Load traceconfig (Case Study)",
              "bkey": "b_load_traceconfig_casestudy",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "read_traceconfig_casestudy",
                "recorder_key": null
              }
            },
            {
              "type": "button",
              "text": "Load traceconfig (User Study)",
              "bkey": "b_load_traceconfig",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "read_traceconfig",
                "recorder_key": null
              }
            },
          ]
        },
        {
          "type": "horizontal",
          "children": [
            {
              "type": "monaco",
              "params": {"lang": "py"},
              "value": "# instrumented",
              "key": "instrumentedpy"
            },
            {
              "type": "monaco",
              "params": {"lang": "js"},
              "value": "// instrumented",
              "key": "instrumentedjs"
            },
            {
              "type": "vertical",
              "children": [
                {
                  "type": "jsontab",
                  // "style": {"height": "70%"},
                  "value": "(tar src tracepoint map)",
                  "key": "tar_src_tracepoint_map"
                },
                {
                  "type": "jsontab",
                  "style": {"height": "30%"},
                  // "value": "(JS test symptom)",
                  "key": "result_symptom"
                },
                {
                  "type": "jsontab",
                  "style": {"height": "65%"},
                  "value": "(traceconfig)", 
                  "value": "(trace compare diagnosis)",
                  "key": "cmp_result"
                },
              ]
            },
            {
              "type": "vertical",
              // "style": {"height": "55%"},
              "children": [
                {
                  "type": "jsontab",
                  "value": "(py trace result)",
                  "key": "resultpy"
                },
                {
                  "type": "jsontab",
                  "value": "(js trace result)",
                  "key": "resultjs"
                },
              ]
            }
          ]
        }
      ]
    }
  };

  const embedded_linemap = { /////////////////// Embedded Linemap Begin ///////////////////
    "type": "hoverbox",
    "text": "Source Map",
    "inner_style": {"left": "5%", "right": "5%", "top": "7%", "bottom": "7%", "width": "90%", "height": "86%"},
    "child": {
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
                  "text": "Clear",
                  "bkey": "b_lm_clear",
                  "on_click": {
                    "handler_type": "UI_UPDATE",
                    "updates": [
                      {"key": "stmtmap", "constant": "-"},
                      {"key": "linemapraw", "constant": "-"},
                      {"key": "rawmap_completion", "constant": "-"},
                    ]
                  }
                },
                {
                  "type": "button",
                  "text": "ParseViz (source map)",
                  "bkey": "b_parseviz_stmtmap",
                  "on_click": {
                    "handler_type": "SEQ",
                    "child_handlers": [
                      {
                        "handler_type": "UI_UPDATE",
                        "updates": [
                          {"key": "stmtmap", "constant": "-"},
                          {"key": "linemapraw", "constant": "-"},
                        ]
                      },
                      {
                        "handler_type": "SEND",
                        "params": [
                          {"key": "inputpy", "to_param": "py_code"},
                          {"key": "inputjs", "to_param": "js_code"},
                          {"key": "rawmap_completion", "to_param": "stmtmap_text"},
                          {"constant": "3", "to_param": "diff_allowed_str"},
                        ],
                        "receiver": ["transmap_bridge", "selfexp_parse_stmtmap2"],
                        "on_resp": {
                          "handler_type": "UI_UPDATE",
                          "updates": [
                            {"key": "stmtmap", "from_resp": "stmtmap"},
                            {"key": "linemapraw", "from_resp": "stmtmapraw"},
                          ]
                        }
                      },
                      {
                        "handler_type": "SEND",
                        "params": [
                          {"key": "stmtmap", "to_param": "stmtmap_str"}
                        ],
                        "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
                        "on_resp": {
                          "handler_type": "UI_UPDATE",
                          "updates": [
                            {"is_anno": true, "key": "inputpy", "anno_key": "stmtmap", "from_resp": "line_decos_src"},
                            {"is_anno": true, "key": "inputjs", "anno_key": "stmtmap", "from_resp": "line_decos_tar"},
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "button",
                  "text": "ParseViz Advanced (source map)",
                  "bkey": "b_parseviz_stmtmap_adv",
                  "on_click": {
                    "handler_type": "SEQ",
                    "child_handlers": [
                      {
                        "handler_type": "UI_UPDATE",
                        "updates": [
                          {"key": "stmtmap", "constant": "-"},
                          {"key": "linemapraw", "constant": "-"},
                        ]
                      },
                      {
                        "handler_type": "SEND",
                        "params": [
                          {"key": "inputpy", "to_param": "py_code"},
                          {"key": "inputjs", "to_param": "js_code"},
                          {"key": "rawmap_completion", "to_param": "stmtmap_text"},
                          {"constant": "3", "to_param": "diff_allowed_str"},
                        ],
                        "receiver": ["transmap_bridge", "selfexp_parse_stmtmap2_adv"],
                        "on_resp": {
                          "handler_type": "UI_UPDATE",
                          "updates": [
                            {"key": "stmtmap", "from_resp": "stmtmap"},
                            {"key": "linemapraw", "from_resp": "stmtmapraw"},
                          ]
                        }
                      },
                      {
                        "handler_type": "SEND",
                        "params": [
                          {"key": "stmtmap", "to_param": "stmtmap_str"}
                        ],
                        "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
                        "on_resp": {
                          "handler_type": "UI_UPDATE",
                          "updates": [
                            {"is_anno": true, "key": "inputpy", "anno_key": "stmtmap", "from_resp": "line_decos_src"},
                            {"is_anno": true, "key": "inputjs", "anno_key": "stmtmap", "from_resp": "line_decos_tar"},
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "monaco",
              "value": "-",
              "key": "rawmap_completion"
            },
          ]
        },
        {
          "type": "vertical",
          "children": [
            {
              "type": "jsontab",
              "value": "(stmtmap)",
              "key": "stmtmap"
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
  }; /////////////////// Embedded Linemap End ///////////////////

  const list_of_step_buttons = [
    {
      "type": "button",
      "bkey": "b_symptom_check",
      "text": "(0)Test",
      "tooltip": "Run the programs (with unit tests) directly. If the execution exits without error, the program is correct. Otherwise, the error messages are shown in the `test result` below.",
      "on_click": {
        "handler_type": "SEQ",
        "child_handlers": [
          {
            "handler_type": "SEND",
            "params": [
              {"key": "inputpy", "to_param": "input"},
              {"key": "testpy", "to_param": "test_driver"},
              {"constant": "py", "to_param": "lang"}
            ],
            "receiver": ["transmap_bridge", "runcode"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "raw_pyrun", "from_resp": "result"}
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              {"key": "inputjs", "to_param": "input"},
              {"key": "testjs", "to_param": "test_driver"},
              {"constant": "js", "to_param": "lang"}
            ],
            "receiver": ["transmap_bridge", "runcode"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "raw_jsrun", "from_resp": "result"}
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              {"key": "inputjs", "to_param": "input"},
              {"key": "testjs", "to_param": "test_driver"},
              {"key": "raw_jsrun", "to_param": "jsrun_result_str"},
            ],
            "receiver": ["transmap_bridge", "extract_symptom_js"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "result_symptom", "from_resp": "result"}
              ]
            }
          }
        ]
      }
    },
    {
      "type": "button",
      "bkey": "b_tracepoint_combo",
      "text": "(1)match tracepoints",
      "tooltip": "This step finds the matching tracepoints between the two programs.\n Most statements can be tracepoints \n(where right before the statement a tracing function is called).",
      "on_click": {
        "handler_type": "SEQ",
        "child_handlers": [
          { "handler_type": "BUTTON", "bkey": "b_py_tracepoints"},
          { "handler_type": "BUTTON", "bkey": "b_js_tracepoints"},
          { "handler_type": "BUTTON", "bkey": "b_map_block"},
        ]  
      }
    },
    {
      "type": "button",
      "bkey": "b_py_instrun",
      "text": "(2)py trace",
      "tooltip": "This step run the instrumented Python program to collect the trace.",
      "on_click": {
        "handler_type": "SEND",
        "params": [
          {"key": "our_preset_py", "to_param": "preset"},
          {"key": "inputpy", "to_param": "code"},
          {"key": "tracepointspy_on", "to_param": "tracepoints_str"},
          {"key": "testpy", "to_param": "test_template"},
          {"key": "matched_covered_lines_py", "to_param": "enabled_lines_str"},
          {"key": "trace_level", "to_param": "trace_level_str"},
          {"constant": "5000", "to_param": "trace_quota_str"},
        ],
        "receiver": ["transmap_bridge", "da_preset_1__instrun"],
        "on_resp": {
          "handler_type": "UI_UPDATE",
          "updates": [
            {"key": "instrumentedpy", "from_resp": "instrumented"},
            {"key": "runnablepy", "from_resp": "runnable"},
            {"key": "resultpy", "from_resp": "result"},
            {"key": "max_trace_level_py", "from_resp": "max_trace_level"}
          ]
        }
      }
    },
    {
      "type": "button",
      "bkey": "b_js_instrun",
      "text": "(3)js trace",
      "tooltip": "This step run the instrumented JavaScript program to collect the trace.",
      "on_click": {
        "handler_type": "SEND",
        "params": [
          {"key": "our_preset_js", "to_param": "preset"},
          {"key": "inputjs", "to_param": "code"},
          {"key": "tracepointsjs_on", "to_param": "tracepoints_str"},
          {"key": "testjs", "to_param": "test_template"},
          {"key": "matched_covered_lines_js", "to_param": "enabled_lines_str"},
          {"key": "trace_level", "to_param": "trace_level_str"},
          {"constant": "5000", "to_param": "trace_quota_str"},
        ],
        "receiver": ["transmap_bridge", "da_preset_1__instrun"],
        "on_resp": {
          "handler_type": "UI_UPDATE",
          "updates": [
            {"key": "instrumentedjs", "from_resp": "instrumented"},
            {"key": "runnablejs", "from_resp": "runnable"},
            {"key": "resultjs", "from_resp": "result"},
            {"key": "debuggingjs", "from_resp": "debugging"},
            {"key": "max_trace_level_js", "from_resp": "max_trace_level"}
          ]
        }
      }
    },
    {
      "type": "button",
      "bkey": "b_traces_cmp",
      "text": "(4) compare traces",
      "tooltip": "This step compares the traces of the two programs. It will try to find the first diverging tracepoint in the trace.",
      "on_click": {
        "handler_type": "SEQ",
        "child_handlers": [
          {
            "handler_type": "SEND",
            "params": [
              {"key": "our_preset_cmp", "to_param": "preset"},
              {"key": "tar_src_tracepoint_map", "to_param": "tar_src_tracepoint_map_str"},
              {"key": "resultpy", "to_param": "src_trace_result_str"},
              {"key": "resultjs", "to_param": "tar_trace_result_str"},
              {"constant": '{"is_last": false}', "to_param": "cmp_config_str"},
              {"key": "traceconfig", "to_param": "traceconfig_str"}
            ],
            "receiver": ["transmap_bridge", "da_preset_2__cmp"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "cmp_result", "from_resp": "result"},
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              {"constant": "my-monaco-ldeco-diffred", "to_param": "deco_class"},
              {"key": "cmp_result", "to_param": "cmp_result_str"},
            ],
            "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_trace_cmp_result"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"is_anno": true, "key": "inputpy", "anno_key": "covlines", "from_resp": "line_decos_src"},
                {"is_anno": true, "key": "inputjs", "anno_key": "covlines", "from_resp": "line_decos_tar"},
                {"is_anno": true, "key": "inputpy", "anno_key": "trace_err", "from_resp": "err_deco_src"},
                {"is_anno": true, "key": "inputjs", "anno_key": "trace_err", "from_resp": "err_deco_tar"}
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              {"key": "cmp_result", "to_param": "cmp_result_str"},
              // {"key": "stmtmap", "to_param": "stmtmap_str"},
              {"key": "tar_src_tracepoint_map", "to_param": "tar_src_tracepoint_map_str"}
            ],
            "receiver": ["transmap_bridge", "get_matched_covered_lines"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "matched_covered_lines_py", "from_resp": "matched_covered_lines_src"},
                {"key": "matched_covered_lines_js", "from_resp": "matched_covered_lines_tar"},
              ]
            }
          },
          {
            "handler_type": "SEND",
            "params": [
              {"key": "cmp_result", "to_param": "cmp_result_str"},
            ],
            "receiver": ["transmap_bridge", "da_friendly_cmp_result"],
            "on_resp": {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "friendly_cmp_result", "from_resp": "aux_info"},
                {"key": "py_variables", "from_resp": "py_vars"},
                {"key": "js_variables", "from_resp": "js_vars"},
                {"key": "diag_message", "from_resp": "result"}
              ]
            }
          },
        ]
      }
    },
    {
      "type": "label",
      "key": "label_level",
      "value": "  | Level:",
    },
    {
      "type": "input",
      "style": {"maxWidth": "50px"},
      "value": "1",
      "key": "trace_level"
    },
    {
      "type": "button",
      "text": "Reset Lv",
      "on_click": {
        "handler_type": "UI_UPDATE",
        "updates": [
          {"key": "trace_level", "constant": "1"},
          {"key": "matched_covered_lines_py", "constant": '"ALL"'},
          {"key": "matched_covered_lines_js", "constant": '"ALL"'},
        ]
      }
    },
    {
      "type": "label",
      "value": "N",
      "prefix": " MaxL Py:",
      "key": "max_trace_level_py"
    },
    {
      "type": "label",
      "value": "N",
      "prefix": "JS:",
      "key": "max_trace_level_js"
    }
  ];

  await logvizSETJSONAsync("com-transmex:dynamic_casestudy.ui", {
    "version": [0, 1],
    "uikey": "dynamic_casestudy",
    "channels": [
      {
        "channel_key": "transmap_bridge",
        "channel_type": "IFRAME_BRIDGE",
        "bridge_url": window._LOGVIZ_TRANSMAP_BRIDGE_URL,
      }
    ],
    "automations": automations,
    "ui": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            // {
            //   "type": "label",
            //   "key": "user_id",
            //   "value": "user_00",
            //   "value_template": "{urlparam:dyn_user_id}"
            // },
            {
              "type": "select",
              "key": "preset",
              "value": "-- unset --",
              "options": ["-- unset --", "new_html", "new_mathgen0", "new_mathgen1", "new_mathgen2", "new_mathgen3", "new_heapq", "new_colorsys"],
              "on_change": {
                "handler_type": "SWITCH",
                "switch_key": "preset",
                "switch_cases": [
                  {
                    "match": "new_html",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_html"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "new_mathgen0",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_mathgen0"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "new_mathgen1",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_mathgen1"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "new_mathgen2",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_mathgen2"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "new_mathgen3",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_mathgen3"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "new_heapq",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_heapq"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "new_colorsys",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "constant": "new_colorsys"},
                        {"key": "target_filename", "constant": "target.fixed.js"},
                      ]
                    }
                  },
                  {
                    "match": "-- unset --",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": []
                    }
                  }
                ]
              }
            },
            {
              "type": "input",
              "style": {"maxWidth": "200px"},
              "value": "stringsim0",
              "value_template": "{urlparam:dyn_bench_id}",
              "key": "bench_id"
            },
            {
              "type": "input",
              "style": {"maxWidth": "200px"},
              "value": "target.err1.js",
              "value_template": "{urlparam:dyn_target_filename}",
              "key": "target_filename"
            },
            {
              "type": "button",
              "bkey": "b_load_casestudy_with_rawmap",
              "style": {"width": "150px", "fontWeight": "bold", "color": "blue"},
              "text": "Load (Case Study)",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "load_casestudy_with_rawmap",
                "recorder_key": null
              }
            },
            // {
            //   "type": "label",
            //   "key": "label_userstudy_stuff",
            //   "value": "    | (For User Study):",
            // },
            // {
            //   "type": "button",
            //   "bkey": "b_load_userstudy_with_rawmap",
            //   "style": {"width": "150px", "fontWeight": "bold", "color": "blue"},
            //   "text": "Load (User Study)",
            //   "on_click": {
            //     "handler_type": "AUTOMATION",
            //     "auto_key": "load_userstudy_with_rawmap",
            //     "recorder_key": null
            //   }
            // },
            
            // {
            //   "type": "button",
            //   "text": "Save your fixed JS (User Study)",
            //   "tooltip": "Save your fixed JavaScript code.",
            //   "bkey": "b_save_userfix_js",
            //   "on_click": {
            //     "handler_type": "AUTOMATION",
            //     "auto_key": "save_userfix_js",
            //     "recorder_key": null
            //   }
            // },
            {
              "type": "label",
              "value": "    | (For Dev):",
              "style": {"flex": "1", "textAlign": "right"},
              "key": "advanced_sep"
            },
            embedded_linemap,
            {
              "type": "hoverbox",
              "text": "Test Templates",
              "child": {
                "type": "horizontal",
                "children": [
                  {
                    "type": "monaco",
                    "params": {"lang": "py"},
                    "value": "#TESTED_PROGRAM",
                    "key": "testpy"
                  },
                  {
                    "type": "monaco",
                    "params": {"lang": "js"},
                    "value": "//TESTED_PROGRAM",
                    "key": "testjs"
                  },
                ]
              }
            },
            hidden_advanced_pannel,
          ]
        },
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "button",
              "text": "AUTO-Iterate",
              "tooltip": "Iteratively perform one-level of tracing and increase the level in a loop, until the max level is reached.",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "run_iterate",
                "recorder_key": null
              }
            },
            {
              "type": "button",
              "text": "AUTO-Once",
              "tooltip": "Perform one-level of tracing (step 0, 1, 2, 3, 4).",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "run_current",
                "recorder_key": null
              }
            },
            {
              "type": "label",
              "key": "label_steps",
              "value": "  | Steps:"
            },
            ...list_of_step_buttons,
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
                  "style": {"height": "70%"},
                  "children": [
                    {
                      "type": "monaco",
                      "params": {"lang": "py"},
                      "value": "# Please click the `Load Case` button first.",
                      "key": "inputpy",
                      "on_selection_change": {
                        "handler_type": "SEQ",
                        "child_handlers": [
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"elem_state": "monaco_range", "to_param": "monaco_range_str"},
                              {"key": "stmtmap", "to_param": "stmtmap_str"},
                              {"constant": "SOURCE", "to_param": "side"},
                            ],
                            "receiver": ["transmap_bridge", "get_mapped_range_for_ui"],
                            "on_resp": {
                              "handler_type": "UI_UPDATE",
                              "updates": [
                                {"key": "TOAST_INFO", "from_resp": "message"},
                                // {"key": "TOAST_ERROR", "constant": "Test error message"},
                              ]
                            }
                          },
                        ]
                      }
                    },
                  ]
                },
                {
                  "type": "horizontal",
                  "style": {"height": "30%"},
                  "children": [
                    {
                      "type": "jsontab",
                      "value": "(Python test result)",
                      "key": "raw_pyrun"
                    },
                  ]
                },
                {
                  "type": "hoverbox",
                  "text": "(Dev)(Debug) Tracepoints and final code (PY)",
                  "child": {
                    "type": "horizontal",
                    "children": [
                      {
                        "type": "monaco",
                        "params": {"lang": "py"},
                        "value": "RUNNABLE_CODE (Python)",
                        "key": "runnablepy"
                      },
                      {
                        "type": "vertical",
                        "children": [
                          {
                            "type": "jsontab",
                            "value": "(py tracepoints)",
                            "key": "tracepointspy"
                          },
                          {
                            "type": "jsontab",
                            "value": "(py tracepoints enabled)",
                            "key": "tracepointspy_on"
                          },
                          {
                            "type": "jsontab",
                            "value": "(py tracepoints disabled)",
                            "key": "tracepointspy_off"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "vertical",
              "children": [
                {
                  "type": "horizontal",
                  "style": {"height": "70%"},
                  "children": [
                    {
                      "type": "monaco",
                      "params": {"lang": "js"},
                      "value": "// Please click the `Load Case` button first.",
                      "key": "inputjs",
                      "on_selection_change": {
                        "handler_type": "SEQ",
                        "child_handlers": [
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"elem_state": "monaco_range", "to_param": "monaco_range_str"},
                              {"key": "stmtmap", "to_param": "stmtmap_str"},
                              {"constant": "TARGET", "to_param": "side"},
                            ],
                            "receiver": ["transmap_bridge", "get_mapped_range_for_ui"],
                            "on_resp": {
                              "handler_type": "UI_UPDATE",
                              "updates": [
                                {"key": "TOAST_INFO", "from_resp": "message"},
                                // {"key": "TOAST_ERROR", "constant": "Test error message"},
                              ]
                            }
                          },
                        ]
                      }
                    },
                  ]
                },
                {
                  "type": "horizontal",
                  "style": {"height": "30%"},
                  "children": [
                    {
                      "type": "jsontab",
                      "value": "(JavaScript test result)",
                      "key": "raw_jsrun"
                    }
                  ]
                },
                {
                  "type": "hoverbox",
                  "text": "(Dev)(Debug) Tracepoints and final code (JS)",
                  "child": {
                    "type": "horizontal",
                    "children": [
                      {
                        "type": "vertical",
                        "children": [
                          {
                            "type": "monaco",
                            "params": {"lang": "js"},
                            "value": "RUNNABLE_CODE (JavaScript)",
                            "key": "runnablejs"
                          },
                          {
                            "type": "jsontab",
                            "value": "-",
                            "key": "debuggingjs"
                          }
                        ]
                      },
                      {
                        "type": "vertical",
                        "children": [
                          {
                            "type": "jsontab",
                            "value": "(tracepoints js)",
                            "key": "tracepointsjs"
                          },
                          {
                            "type": "jsontab",
                            "value": "(js tracepoints enabled)",
                            "key": "tracepointsjs_on"
                          },
                          {
                            "type": "jsontab",
                            "value": "(js tracepoints disabled)",
                            "key": "tracepointsjs_off"
                          },
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "vertical",
              "children": [
                {
                  "type": "vertical",
                  "children": [
                    {
                      "type": "horizontal",
                      "style": {"height": "26%"},
                      "children": [
                        {
                          "type": "textarea",
                          "value": "\"ALL\"",
                          "tooltip": "Suspicious lines (on the Python side) from the last iteration that might be wronly translated (to JavaScript).",
                          "style": {"width": "15%"},
                          "key": "matched_covered_lines_py"
                        },
                        {
                          "type": "textarea",
                          "value": "\"ALL\"",
                          "tooltip": "Suspicious lines (on the JavaScript side) from the last iteration that might be wronly translated (from Python).",
                          "style": {"width": "15%"},
                          "key": "matched_covered_lines_js"
                        },
                        {
                          "type": "vertical",
                          "style": {"width": "70%"},
                          "children": [
                            {
                              "type": "horizontal",
                              "style": {"height": "30px", "min-height": "30px"},
                              "children": [
                                {
                                  "type": "button",
                                  "text": "Save conf (Case)",
                                  "tooltip": "(Optional) Save the traceconfig below.",
                                  "bkey": "b_save_traceconfig_casestudy",
                                  "on_click": {
                                    "handler_type": "AUTOMATION",
                                    "auto_key": "save_traceconfig_casestudy",
                                    "recorder_key": null
                                  }
                                },
                                // {
                                //   "type": "button",
                                //   "text": "Save conf (U)",
                                //   "tooltip": "(Optional) Save the traceconfig below.",
                                //   "bkey": "b_save_traceconfig",
                                //   "on_click": {
                                //     "handler_type": "AUTOMATION",
                                //     "auto_key": "save_traceconfig",
                                //     "recorder_key": null
                                //   }
                                // },
                              ]
                            },
                            {
                              "type": "monaco",
                              "params": {"lang": "json"},
                              "value": "null",
                              "key": "traceconfig"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "label",
                      "key": "diag_message",
                      "value": "(trace comparison result message)",
                      "style": {"height": "56px", "minHeight": "56px", "color": "blueviolet"},
                    },
                    {
                      "type": "jsontab",
                      "style": {"height": "22%"},
                      "value": "(trace compare diagnosis)",
                      "key": "friendly_cmp_result"
                    },
                    {
                      "type": "label",
                      "key": "vars_label",
                      "style": {"min-height": "20px"},
                      "value": "Traced variables at the diverging tracepoint (Py and JS):",
                    },
                    {
                      "type": "horizontal",
                      "style": {"height": "39%"},
                      "children": [
                        {
                          "type": "jsontab",
                          "value": "(py variables)",
                          "tooltip": "Variables values in the Python code at the diverging tracepoint.",
                          "key": "py_variables"
                        },
                        {
                          "type": "jsontab",
                          "value": "(js variables)",
                          "tooltip": "Variables values in the JavaScript code at the diverging tracepoint.",
                          "key": "js_variables"
                        }
                      ]
                    },
                  ]
                },
              ]
            }
          ]
        }
      ]
    }
  });

  await logvizSETJSONAsync("com-transmex:dynamic_userstudy.ui", 
    {"version":[0,1],"uikey":"dynamic_userstudy","channels":[{"channel_key":"transmap_bridge","channel_type":"IFRAME_BRIDGE","bridge_url":"http://127.0.0.1:18000/frontend/transmap/logviz_utils/logviz_bridge.html"}],"automations":[{"auto_key":"run_current","handler":{"handler_type":"SEQ","child_handlers":[{"handler_type":"BUTTON","bkey":"b_symptom_check"},{"handler_type":"BUTTON","bkey":"b_py_tracepoints"},{"handler_type":"BUTTON","bkey":"b_js_tracepoints"},{"handler_type":"BUTTON","bkey":"b_map_block"},{"handler_type":"BUTTON","bkey":"b_py_instrun"},{"handler_type":"BUTTON","bkey":"b_js_instrun"},{"handler_type":"BUTTON","bkey":"b_traces_cmp"}]}},{"auto_key":"run_iterate","handler":{"handler_type":"REACTOR","maximum_gas":1000,"reactor":["transmap_bridge","rx:dynamic_auto_iterate"]}},{"auto_key":"clear_all_anno","handler":{"handler_type":"SEQ","child_handlers":[{"handler_type":"SEND","params":[{"constant":"LINE_DECO","to_param":"anno_type"}],"receiver":["transmap_bridge","AGEN_empty"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"is_anno":true,"key":"inputpy","anno_key":"covlines","from_resp":"result"},{"is_anno":true,"key":"inputjs","anno_key":"covlines","from_resp":"result"},{"is_anno":true,"key":"inputpy","anno_key":"stmtmap","from_resp":"result"},{"is_anno":true,"key":"inputjs","anno_key":"stmtmap","from_resp":"result"}]}},{"handler_type":"SEND","params":[{"constant":"DECO","to_param":"anno_type"}],"receiver":["transmap_bridge","AGEN_empty"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"is_anno":true,"key":"inputpy","anno_key":"trace_err","from_resp":"result"},{"is_anno":true,"key":"inputjs","anno_key":"trace_err","from_resp":"result"},{"is_anno":true,"key":"inputpy","anno_key":"tracepointspy_on","from_resp":"result"},{"is_anno":true,"key":"inputjs","anno_key":"tracepointsjs_on","from_resp":"result"},{"is_anno":true,"key":"inputpy","anno_key":"tracepointspy_off","from_resp":"result"},{"is_anno":true,"key":"inputjs","anno_key":"tracepointsjs_off","from_resp":"result"}]}}]}},{"auto_key":"ui_clear","handler":{"handler_type":"UI_UPDATE","updates":[{"key":"inputpy","constant":"# source"},{"key":"inputjs","constant":"// target"},{"key":"testpy","constant":"#TESTED_PROGRAM"},{"key":"testjs","constant":"//TESTED_PROGRAM"},{"key":"stmtmap","constant":"(stmtmap)"},{"key":"raw_pyrun","constant":"(Python test result)"},{"key":"raw_jsrun","constant":"(JavaScript test result)"},{"key":"result_symptom","constant":"(JS test symptom)"},{"key":"instrumentedpy","constant":"# instrumented py"},{"key":"instrumentedjs","constant":"// instrumented js"},{"key":"resultpy","constant":"(py trace result)"},{"key":"resultjs","constant":"(js trace result)"},{"key":"tar_src_tracepoint_map","constant":"-"},{"key":"cmp_result","constant":"(trace compare diagnosis)"},{"key":"diag_message","constant":"(trace comparison result message)"},{"key":"friendly_cmp_result","constant":"(trace compare diagnosis)"},{"key":"py_variables","constant":"(py variables)"},{"key":"js_variables","constant":"(js variables)"},{"key":"traceconfig","constant":"null"}]}},{"auto_key":"load_userstudy_with_rawmap","handler":{"handler_type":"SEQ","child_handlers":[{"handler_type":"AUTOMATION","auto_key":"ui_clear","recorder_key":null},{"handler_type":"AUTOMATION","auto_key":"clear_all_anno","recorder_key":null},{"handler_type":"SEND","params":[{"key":"user_id","to_param":"_user_id"},{"key":"bench_id","to_param":"_bench_id"},{"key":"target_filename","to_param":"_target_filename"},{"template":"transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}","to_param":"folder_path"}],"receiver":["transmap_bridge","read_folder"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"inputpy","from_resp":"source.py"},{"key":"testpy","from_resp":"source_test.py"},{"key":"testjs","from_resp":"target_test.js"}]}},{"handler_type":"SEND","params":[{"key":"user_id","to_param":"_user_id"},{"key":"bench_id","to_param":"_bench_id"},{"key":"target_filename","to_param":"_target_filename"},{"template":"transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}","to_param":"filepath"}],"receiver":["transmap_bridge","read_data_file"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"inputjs","from_resp":"filecontent"}]}},{"handler_type":"SEND","params":[{"key":"user_id","to_param":"_user_id"},{"key":"bench_id","to_param":"_bench_id"},{"key":"target_filename","to_param":"_target_filename"},{"template":"transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.srcmap","to_param":"filepath"}],"receiver":["transmap_bridge","read_data_file"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"rawmap_completion","from_resp":"filecontent"}]}},{"handler_type":"BUTTON","bkey":"b_parseviz_stmtmap"},{"handler_type":"BUTTON","bkey":"b_load_traceconfig"}]}},{"auto_key":"read_traceconfig","handler":{"handler_type":"SEND","params":[{"key":"user_id","to_param":"_user_id"},{"key":"bench_id","to_param":"_bench_id"},{"key":"target_filename","to_param":"_target_filename"},{"template":"transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.traceconfig.json","to_param":"filepath_0"},{"template":"transmap/user_study_cmp/user_data_ro/default.traceconfig.json","to_param":"filepath_1"}],"receiver":["transmap_bridge","read_data_file_priority"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"traceconfig","from_resp":"filecontent"}]}}},{"auto_key":"save_traceconfig","handler":{"handler_type":"SEND","params":[{"key":"user_id","to_param":"_user_id"},{"key":"bench_id","to_param":"_bench_id"},{"key":"target_filename","to_param":"_target_filename"},{"template":"transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.traceconfig.json","to_param":"save_filepath"},{"key":"traceconfig","to_param":"save_filecontent"}],"receiver":["transmap_bridge","save_data_file"],"on_resp":{"handler_type":"UI_UPDATE","updates":[]}}},{"auto_key":"save_userfix_js","handler":{"handler_type":"SEND","params":[{"key":"user_id","to_param":"_user_id"},{"key":"bench_id","to_param":"_bench_id"},{"key":"target_filename","to_param":"_target_filename"},{"template":"transmap/user_study_cmp/user_data_rw/{_user_id}/{_bench_id}/{_target_filename}.userfix.js","to_param":"save_filepath"},{"key":"inputjs","to_param":"save_filecontent"}],"receiver":["transmap_bridge","save_data_file"],"on_resp":{"handler_type":"UI_UPDATE","updates":[]}}}],"ui":{"type":"vertical","children":[{"type":"horizontal","style":{"height":"30px","min-height":"30px"},"children":[{"type":"label","key":"user_id","value":"user_00","value_template":"{urlparam:dyn_user_id}"},{"type":"input","style":{"maxWidth":"200px"},"value":"stringsim0","value_template":"{urlparam:dyn_bench_id}","key":"bench_id"},{"type":"input","style":{"maxWidth":"200px"},"value":"target.err1.js","value_template":"{urlparam:dyn_target_filename}","key":"target_filename"},{"type":"button","bkey":"b_load_userstudy_with_rawmap","style":{"width":"150px","fontWeight":"bold","color":"blue"},"text":"Load Case","on_click":{"handler_type":"AUTOMATION","auto_key":"load_userstudy_with_rawmap","recorder_key":null}},{"type":"button","text":"Save your fixed JS","tooltip":"Save your fixed JavaScript code.","bkey":"b_save_userfix_js","on_click":{"handler_type":"AUTOMATION","auto_key":"save_userfix_js","recorder_key":null}},{"type":"label","value":"    | (For Dev):","style":{"flex":"1","textAlign":"right"},"key":"advanced_sep"},{"type":"hoverbox","text":"Source Map","inner_style":{"left":"5%","right":"5%","top":"7%","bottom":"7%","width":"90%","height":"86%"},"child":{"type":"horizontal","children":[{"type":"vertical","children":[{"type":"horizontal","style":{"height":"30px","min-height":"30px"},"children":[{"type":"button","text":"Clear","bkey":"b_lm_clear","on_click":{"handler_type":"UI_UPDATE","updates":[{"key":"stmtmap","constant":"-"},{"key":"linemapraw","constant":"-"},{"key":"rawmap_completion","constant":"-"}]}},{"type":"button","text":"ParseViz (source map)","bkey":"b_parseviz_stmtmap","on_click":{"handler_type":"SEQ","child_handlers":[{"handler_type":"UI_UPDATE","updates":[{"key":"stmtmap","constant":"-"},{"key":"linemapraw","constant":"-"}]},{"handler_type":"SEND","params":[{"key":"inputpy","to_param":"py_code"},{"key":"inputjs","to_param":"js_code"},{"key":"rawmap_completion","to_param":"stmtmap_text"},{"constant":"3","to_param":"diff_allowed_str"}],"receiver":["transmap_bridge","selfexp_parse_stmtmap2"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"stmtmap","from_resp":"stmtmap"},{"key":"linemapraw","from_resp":"stmtmapraw"}]}},{"handler_type":"SEND","params":[{"key":"stmtmap","to_param":"stmtmap_str"}],"receiver":["transmap_bridge","AGEN_monaco__line_deco_from_stmtmap"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"is_anno":true,"key":"inputpy","anno_key":"stmtmap","from_resp":"line_decos_src"},{"is_anno":true,"key":"inputjs","anno_key":"stmtmap","from_resp":"line_decos_tar"}]}}]}}]},{"type":"monaco","value":"-","key":"rawmap_completion"}]},{"type":"vertical","children":[{"type":"jsontab","value":"(stmtmap)","key":"stmtmap"},{"type":"jsontab","value":"(linemap raw)","key":"linemapraw"}]}]}},{"type":"hoverbox","text":"Test Templates","child":{"type":"horizontal","children":[{"type":"monaco","params":{"lang":"py"},"value":"#TESTED_PROGRAM","key":"testpy"},{"type":"monaco","params":{"lang":"js"},"value":"//TESTED_PROGRAM","key":"testjs"}]}},{"type":"hoverbox","text":"Advanced (Dev)","inner_style":{"left":"5%","right":"5%","top":"7%","bottom":"7%","width":"90%","height":"86%"},"child":{"type":"vertical","children":[{"type":"horizontal","style":{"height":"30px","min-height":"30px"},"children":[{"type":"button","text":"-- RELOAD Proto Lib --","on_click":{"handler_type":"SEND","params":[{"constant":"200","to_param":"timeout_str"}],"receiver":["transmap_bridge","reload"],"on_resp":{"handler_type":"UI_UPDATE","updates":[]}}},{"type":"label","key":"label_trace_preset","value":"trace preset"},{"type":"input","style":{"maxWidth":"250px"},"value":"[1,9,\"CF,AD,EX\",\"GEN\",\"CmpF\",\"TpA\"]","key":"trace_level_range"},{"type":"input","value":"block_vars_py","key":"our_preset_py"},{"type":"input","value":"block_vars_js","key":"our_preset_js"},{"type":"input","value":"block_vars_py_js","key":"our_preset_cmp"},{"type":"select","key":"check_tag_eq_select","value":"TAG_RELAX","options":["TAG_RELAX","TAG_EQ"]},{"type":"input","style":{"maxWidth":"120px"},"value":"[\"CF\", \"AD\", \"EX\"]","key":"trace_group"}]},{"type":"horizontal","style":{"height":"30px","min-height":"30px"},"children":[{"type":"button","bkey":"b_py_tracepoints","text":"(1.1) py tracepoints","on_click":{"handler_type":"SEND","params":[{"key":"our_preset_py","to_param":"preset"},{"key":"trace_group","to_param":"trace_group_str"},{"key":"inputpy","to_param":"code"},{"key":"traceconfig","to_param":"traceconfig_str"}],"receiver":["transmap_bridge","da_preset_0__tracepoints"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"tracepointspy","from_resp":"tracepoints"},{"key":"tracepointspy_on","from_resp":"tracepoints"},{"key":"tracepointspy_off","constant":"-"}]}}},{"type":"button","bkey":"b_js_tracepoints","text":"(1.2) js tracepoints","on_click":{"handler_type":"SEND","params":[{"key":"our_preset_js","to_param":"preset"},{"key":"trace_group","to_param":"trace_group_str"},{"key":"inputjs","to_param":"code"},{"key":"traceconfig","to_param":"traceconfig_str"}],"receiver":["transmap_bridge","da_preset_0__tracepoints"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"tracepointsjs","from_resp":"tracepoints"},{"key":"tracepointsjs_on","from_resp":"tracepoints"},{"key":"tracepointsjs_off","constant":"-"}]}}},{"type":"button","bkey":"b_map_block","text":"(1.3) Map","on_click":{"handler_type":"SEQ","child_handlers":[{"handler_type":"SEND","params":[{"key":"inputpy","to_param":"src_code"},{"key":"inputjs","to_param":"tar_code"},{"key":"tracepointspy","to_param":"src_tracepoints_str"},{"key":"tracepointsjs","to_param":"tar_tracepoints_str"},{"key":"stmtmap","to_param":"stmtmap_str"},{"key":"check_tag_eq_select","to_param":"check_tag_eq_str"},{"key":"traceconfig","to_param":"traceconfig_str"}],"receiver":["transmap_bridge","map_block_tracepoints_by_stmtmap"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"tracepointspy_on","from_resp":"src_tracepoints_on"},{"key":"tracepointspy_off","from_resp":"src_tracepoints_off"},{"key":"tracepointsjs_on","from_resp":"tar_tracepoints_on"},{"key":"tracepointsjs_off","from_resp":"tar_tracepoints_off"},{"key":"tar_src_tracepoint_map","from_resp":"tar_src_tracepoint_map"}]}},{"handler_type":"SEND","params":[{"constant":"my-monaco-deco-02","to_param":"deco_class"},{"key":"tracepointspy_on","to_param":"tracepoints_str"}],"receiver":["transmap_bridge","AGEN_monaco__deco_from_tracepoints"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"is_anno":true,"key":"inputpy","anno_key":"tracepointspy_on","from_resp":"decos"}]}},{"handler_type":"SEND","params":[{"constant":"my-monaco-deco-02","to_param":"deco_class"},{"key":"tracepointsjs_on","to_param":"tracepoints_str"}],"receiver":["transmap_bridge","AGEN_monaco__deco_from_tracepoints"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"is_anno":true,"key":"inputjs","anno_key":"tracepointsjs_on","from_resp":"decos"}]}}]}},{"type":"button","text":"Load traceconfig","bkey":"b_load_traceconfig","on_click":{"handler_type":"AUTOMATION","auto_key":"read_traceconfig","recorder_key":null}}]},{"type":"horizontal","children":[{"type":"monaco","params":{"lang":"py"},"value":"# instrumented","key":"instrumentedpy"},{"type":"monaco","params":{"lang":"js"},"value":"// instrumented","key":"instrumentedjs"},{"type":"vertical","children":[{"type":"jsontab","value":"(tar src tracepoint map)","key":"tar_src_tracepoint_map"},{"type":"jsontab","style":{"height":"30%"},"key":"result_symptom"},{"type":"jsontab","style":{"height":"65%"},"value":"(trace compare diagnosis)","key":"cmp_result"}]},{"type":"vertical","children":[{"type":"jsontab","value":"(py trace result)","key":"resultpy"},{"type":"jsontab","value":"(js trace result)","key":"resultjs"}]}]}]}}]},{"type":"horizontal","style":{"height":"30px","min-height":"30px"},"children":[{"type":"button","text":"AUTO-Iterate","tooltip":"Iteratively perform one-level of tracing and increase the level in a loop, until the max level is reached.","on_click":{"handler_type":"AUTOMATION","auto_key":"run_iterate","recorder_key":null}},{"type":"button","text":"AUTO-Once","tooltip":"Perform one-level of tracing (step 0, 1, 2, 3, 4).","on_click":{"handler_type":"AUTOMATION","auto_key":"run_current","recorder_key":null}},{"type":"label","key":"label_steps","value":"  | Steps:"},{"type":"button","bkey":"b_symptom_check","text":"(0)Test","tooltip":"Run the programs (with unit tests) directly. If the execution exits without error, the program is correct. Otherwise, the error messages are shown in the `test result` below.","on_click":{"handler_type":"SEQ","child_handlers":[{"handler_type":"SEND","params":[{"key":"inputpy","to_param":"input"},{"key":"testpy","to_param":"test_driver"},{"constant":"py","to_param":"lang"}],"receiver":["transmap_bridge","runcode"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"raw_pyrun","from_resp":"result"}]}},{"handler_type":"SEND","params":[{"key":"inputjs","to_param":"input"},{"key":"testjs","to_param":"test_driver"},{"constant":"js","to_param":"lang"}],"receiver":["transmap_bridge","runcode"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"raw_jsrun","from_resp":"result"}]}},{"handler_type":"SEND","params":[{"key":"inputjs","to_param":"input"},{"key":"testjs","to_param":"test_driver"},{"key":"raw_jsrun","to_param":"jsrun_result_str"}],"receiver":["transmap_bridge","extract_symptom_js"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"result_symptom","from_resp":"result"}]}}]}},{"type":"button","bkey":"b_tracepoint_combo","text":"(1)match tracepoints","tooltip":"This step finds the matching tracepoints between the two programs.\n Most statements can be tracepoints \n(where right before the statement a tracing function is called).","on_click":{"handler_type":"SEQ","child_handlers":[{"handler_type":"BUTTON","bkey":"b_py_tracepoints"},{"handler_type":"BUTTON","bkey":"b_js_tracepoints"},{"handler_type":"BUTTON","bkey":"b_map_block"}]}},{"type":"button","bkey":"b_py_instrun","text":"(2)py trace","tooltip":"This step run the instrumented Python program to collect the trace.","on_click":{"handler_type":"SEND","params":[{"key":"our_preset_py","to_param":"preset"},{"key":"inputpy","to_param":"code"},{"key":"tracepointspy_on","to_param":"tracepoints_str"},{"key":"testpy","to_param":"test_template"},{"key":"matched_covered_lines_py","to_param":"enabled_lines_str"},{"key":"trace_level","to_param":"trace_level_str"},{"constant":"5000","to_param":"trace_quota_str"}],"receiver":["transmap_bridge","da_preset_1__instrun"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"instrumentedpy","from_resp":"instrumented"},{"key":"runnablepy","from_resp":"runnable"},{"key":"resultpy","from_resp":"result"},{"key":"max_trace_level_py","from_resp":"max_trace_level"}]}}},{"type":"button","bkey":"b_js_instrun","text":"(3)js trace","tooltip":"This step run the instrumented JavaScript program to collect the trace.","on_click":{"handler_type":"SEND","params":[{"key":"our_preset_js","to_param":"preset"},{"key":"inputjs","to_param":"code"},{"key":"tracepointsjs_on","to_param":"tracepoints_str"},{"key":"testjs","to_param":"test_template"},{"key":"matched_covered_lines_js","to_param":"enabled_lines_str"},{"key":"trace_level","to_param":"trace_level_str"},{"constant":"5000","to_param":"trace_quota_str"}],"receiver":["transmap_bridge","da_preset_1__instrun"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"instrumentedjs","from_resp":"instrumented"},{"key":"runnablejs","from_resp":"runnable"},{"key":"resultjs","from_resp":"result"},{"key":"debuggingjs","from_resp":"debugging"},{"key":"max_trace_level_js","from_resp":"max_trace_level"}]}}},{"type":"button","bkey":"b_traces_cmp","text":"(4) compare traces","tooltip":"This step compares the traces of the two programs. It will try to find the first diverging tracepoint in the trace.","on_click":{"handler_type":"SEQ","child_handlers":[{"handler_type":"SEND","params":[{"key":"our_preset_cmp","to_param":"preset"},{"key":"tar_src_tracepoint_map","to_param":"tar_src_tracepoint_map_str"},{"key":"resultpy","to_param":"src_trace_result_str"},{"key":"resultjs","to_param":"tar_trace_result_str"},{"constant":"{\"is_last\": false}","to_param":"cmp_config_str"},{"key":"traceconfig","to_param":"traceconfig_str"}],"receiver":["transmap_bridge","da_preset_2__cmp"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"cmp_result","from_resp":"result"}]}},{"handler_type":"SEND","params":[{"constant":"my-monaco-ldeco-diffred","to_param":"deco_class"},{"key":"cmp_result","to_param":"cmp_result_str"}],"receiver":["transmap_bridge","AGEN_monaco__line_deco_from_trace_cmp_result"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"is_anno":true,"key":"inputpy","anno_key":"covlines","from_resp":"line_decos_src"},{"is_anno":true,"key":"inputjs","anno_key":"covlines","from_resp":"line_decos_tar"},{"is_anno":true,"key":"inputpy","anno_key":"trace_err","from_resp":"err_deco_src"},{"is_anno":true,"key":"inputjs","anno_key":"trace_err","from_resp":"err_deco_tar"}]}},{"handler_type":"SEND","params":[{"key":"cmp_result","to_param":"cmp_result_str"},{"key":"tar_src_tracepoint_map","to_param":"tar_src_tracepoint_map_str"}],"receiver":["transmap_bridge","get_matched_covered_lines"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"matched_covered_lines_py","from_resp":"matched_covered_lines_src"},{"key":"matched_covered_lines_js","from_resp":"matched_covered_lines_tar"}]}},{"handler_type":"SEND","params":[{"key":"cmp_result","to_param":"cmp_result_str"}],"receiver":["transmap_bridge","da_friendly_cmp_result"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"friendly_cmp_result","from_resp":"aux_info"},{"key":"py_variables","from_resp":"py_vars"},{"key":"js_variables","from_resp":"js_vars"},{"key":"diag_message","from_resp":"result"}]}}]}},{"type":"label","key":"label_level","value":"  | Level:"},{"type":"input","style":{"maxWidth":"50px"},"value":"1","key":"trace_level"},{"type":"button","text":"Reset Lv","on_click":{"handler_type":"UI_UPDATE","updates":[{"key":"trace_level","constant":"1"},{"key":"matched_covered_lines_py","constant":"\"ALL\""},{"key":"matched_covered_lines_js","constant":"\"ALL\""}]}},{"type":"label","value":"N","prefix":" MaxL Py:","key":"max_trace_level_py"},{"type":"label","value":"N","prefix":"JS:","key":"max_trace_level_js"}]},{"type":"horizontal","children":[{"type":"vertical","children":[{"type":"horizontal","style":{"height":"70%"},"children":[{"type":"monaco","params":{"lang":"py"},"value":"# Please click the `Load Case` button first.","key":"inputpy","on_selection_change":{"handler_type":"SEQ","child_handlers":[{"handler_type":"SEND","params":[{"elem_state":"monaco_range","to_param":"monaco_range_str"},{"key":"stmtmap","to_param":"stmtmap_str"},{"constant":"SOURCE","to_param":"side"}],"receiver":["transmap_bridge","get_mapped_range_for_ui"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"TOAST_INFO","from_resp":"message"}]}}]}}]},{"type":"horizontal","style":{"height":"30%"},"children":[{"type":"jsontab","value":"(Python test result)","key":"raw_pyrun"}]},{"type":"hoverbox","text":"(Dev)(Debug) Tracepoints and final code (PY)","child":{"type":"horizontal","children":[{"type":"monaco","params":{"lang":"py"},"value":"RUNNABLE_CODE (Python)","key":"runnablepy"},{"type":"vertical","children":[{"type":"jsontab","value":"(py tracepoints)","key":"tracepointspy"},{"type":"jsontab","value":"(py tracepoints enabled)","key":"tracepointspy_on"},{"type":"jsontab","value":"(py tracepoints disabled)","key":"tracepointspy_off"}]}]}}]},{"type":"vertical","children":[{"type":"horizontal","style":{"height":"70%"},"children":[{"type":"monaco","params":{"lang":"js"},"value":"// Please click the `Load Case` button first.","key":"inputjs","on_selection_change":{"handler_type":"SEQ","child_handlers":[{"handler_type":"SEND","params":[{"elem_state":"monaco_range","to_param":"monaco_range_str"},{"key":"stmtmap","to_param":"stmtmap_str"},{"constant":"TARGET","to_param":"side"}],"receiver":["transmap_bridge","get_mapped_range_for_ui"],"on_resp":{"handler_type":"UI_UPDATE","updates":[{"key":"TOAST_INFO","from_resp":"message"}]}}]}}]},{"type":"horizontal","style":{"height":"30%"},"children":[{"type":"jsontab","value":"(JavaScript test result)","key":"raw_jsrun"}]},{"type":"hoverbox","text":"(Dev)(Debug) Tracepoints and final code (JS)","child":{"type":"horizontal","children":[{"type":"vertical","children":[{"type":"monaco","params":{"lang":"js"},"value":"RUNNABLE_CODE (JavaScript)","key":"runnablejs"},{"type":"jsontab","value":"-","key":"debuggingjs"}]},{"type":"vertical","children":[{"type":"jsontab","value":"(tracepoints js)","key":"tracepointsjs"},{"type":"jsontab","value":"(js tracepoints enabled)","key":"tracepointsjs_on"},{"type":"jsontab","value":"(js tracepoints disabled)","key":"tracepointsjs_off"}]}]}}]},{"type":"vertical","children":[{"type":"vertical","children":[{"type":"horizontal","style":{"height":"26%"},"children":[{"type":"textarea","value":"\"ALL\"","tooltip":"Suspicious lines (on the Python side) from the last iteration that might be wronly translated (to JavaScript).","style":{"width":"15%"},"key":"matched_covered_lines_py"},{"type":"textarea","value":"\"ALL\"","tooltip":"Suspicious lines (on the JavaScript side) from the last iteration that might be wronly translated (from Python).","style":{"width":"15%"},"key":"matched_covered_lines_js"},{"type":"vertical","style":{"width":"70%"},"children":[{"type":"horizontal","style":{"height":"30px","min-height":"30px"},"children":[{"type":"button","text":"Save traceconfig","tooltip":"(Optional) Save the traceconfig below.","bkey":"b_save_traceconfig","on_click":{"handler_type":"AUTOMATION","auto_key":"save_traceconfig","recorder_key":null}}]},{"type":"monaco","params":{"lang":"json"},"value":"null","key":"traceconfig"}]}]},{"type":"label","key":"diag_message","value":"(trace comparison result message)","style":{"height":"56px","minHeight":"56px","color":"blueviolet"}},{"type":"jsontab","style":{"height":"22%"},"value":"(trace compare diagnosis)","key":"friendly_cmp_result"},{"type":"label","key":"vars_label","style":{"min-height":"20px"},"value":"Traced variables at the diverging tracepoint (Py and JS):"},{"type":"horizontal","style":{"height":"39%"},"children":[{"type":"jsontab","value":"(py variables)","tooltip":"Variables values in the Python code at the diverging tracepoint.","key":"py_variables"},{"type":"jsontab","value":"(js variables)","tooltip":"Variables values in the JavaScript code at the diverging tracepoint.","key":"js_variables"}]}]}]}]}]}}
  );
})();

}