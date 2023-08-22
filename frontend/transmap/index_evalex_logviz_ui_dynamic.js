"use strict";
if (window._DEBUG_FLAG) {

(async () => {
  await logvizSETJSONAsync("com-transmex:dynamic_summary.ui", {
    "version": [0, 1],
    "uikey": "dynamic_summary",
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
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            // {
            //   "type": "input",
            //   "value": "leetcode",
            //   "key": "category"
            // },
            {
              "type": "select",
              "key": "category",
              "value": "leetcode",
              "options": ["leetcode", "gfg", "humanevalx"], // , "pre-real"
            },
            {
              "type": "input",
              "value": "py_js_codex0err",
              "key": "langpair",
              "style": {"maxWidth": "100px"}
            },
            // {
            //   "type": "input",
            //   "value": "L0018_4Sum_py",
            //   "autocomplete": {"ac_type": "DATALIST", "list_key": "bench_id_list"},
            //   "key": "bench_id"
            // },
            {
              "type": "ac_datalist",
              "key": "bench_id_list",
            },
            {
              "type": "button",
              "bkey": "b_load_ids",
              "text": "Load IDs",
              "on_click": {
                "handler_type": "SEND",
                "params": [
                  {"key": "category", "to_param": "category"},
                  {"key": "langpair", "to_param": "langpair"},
                ],
                "receiver": ["transmap_bridge", "get_task_main_bench_ids"],
                "on_resp": {
                  "handler_type": "UI_UPDATE",
                  "updates": [
                    {"key": "bench_id_list", "from_resp": "result"},
                  ]
                }
              }
            },
          
            {
              "type": "button",
              "bkey": "b_summary",
              "text": "Collect Summary",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "UI_UPDATE",
                    "updates": [
                      {"key": "summary_info", "constant": "Loading benchmark IDs..."}
                    ]
                  },
                  {
                    "handler_type": "BUTTON", "bkey": "b_load_ids"
                  },
                  {
                    "handler_type": "UI_UPDATE",
                    "updates": [
                      {"key": "summary_info", "constant": "Collecting Summary. Please wait..."}
                    ]
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "category", "to_param": "category"},
                      {"key": "langpair", "to_param": "langpair"},
                      {"key": "bench_id_list", "to_param": "bench_ids_str"},
                      {"template": "SUMMARY-{category}", "to_param": "summary_key"}
                    ],
                    "receiver": ["transmap_bridge", "dynamic_summary"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "summary_info", "from_resp": "metadata"}
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "button",
              "bkey": "b_summary_per_inj",
              "text": "Collect Summary Per Mistake",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "UI_UPDATE",
                    "updates": [
                      {"key": "summary_info", "constant": "Loading benchmark IDs..."}
                    ]
                  },
                  {
                    "handler_type": "BUTTON", "bkey": "b_load_ids"
                  },
                  {
                    "handler_type": "UI_UPDATE",
                    "updates": [
                      {"key": "summary_info", "constant": "Collect Summary Per Mistake. Please wait..."}
                    ]
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "category", "to_param": "category"},
                      {"key": "langpair", "to_param": "langpair"},
                      {"key": "bench_id_list", "to_param": "bench_ids_str"},
                      {"template": "SUMMARY_PER_M-{category}", "to_param": "summary_key"}
                    ],
                    "receiver": ["transmap_bridge", "dynamic_summary_per_inj"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "summary_info", "from_resp": "metadata"}
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
              "type": "jsontab",
              "value": "-",
              "key": "summary_info"
            }
          ]
        }
      ]
    }
  });

  await logvizSETJSONAsync("com-transmex:dynamic_micros.ui", {
    "version": [0, 1],
    "uikey": "dynamic_micros",
    "channels": [
      {
        "channel_key": "transmap_bridge",
        "channel_type": "IFRAME_BRIDGE",
        "bridge_url": window._LOGVIZ_TRANSMAP_BRIDGE_URL,
      }
    ],
    "automations": [
      {
        "auto_key": "init",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {"handler_type": "BUTTON", "bkey": "b_load_prompt"},
          ]
        }
      },
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
            {"key": "inputjs_fixed", "constant": "(js fixed)"},
            {"key": "errorinjects", "constant": "(errorinjects)"},
            {"key": "testpy", "constant": "(test py)"},
            {"key": "testjs", "constant": "(test js)"},
            {"key": "stmtmap", "constant": "(stmtmap using)"},
            {"key": "stmtmap_fixed", "constant": "(stmtmap fixed)"},
            {"key": "stmtmap_ori", "constant": "(stmtmap original)"},
            {"key": "raw_jsrun", "constant": "(raw_jsrun)"},
            {"key": "result_symptom", "constant": "(result_symptom)"},
            {"key": "instrumentedpy", "constant": "# instrumented py"},
            {"key": "instrumentedjs", "constant": "// instrumented js"},
            {"key": "resultpy", "constant": "(result py)"},
            {"key": "resultjs", "constant": "(result js)"},
            {"key": "tar_src_tracepoint_map", "constant": "-"},
            {"key": "cmp_result", "constant": "-"},
            {"key": "traceconfig", "constant": "null"},
          ]
        }
      },
      {
        "auto_key": "ui_clear_for_errinject",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {
              "handler_type": "AUTOMATION",
              "auto_key": "clear_all_anno",
              "recorder_key": null
            },
            {
              "handler_type": "UI_UPDATE",
              "updates": [
                {"key": "tracepointspy", "constant": "-"},
                {"key": "tracepointspy_on", "constant": "-"},
                {"key": "tracepointspy_off", "constant": "-"},
                {"key": "tracepointsjs", "constant": "-"},
                {"key": "tracepointsjs_on", "constant": "-"},
                {"key": "tracepointsjs_off", "constant": "-"},
                {"key": "instrumentedpy", "constant": "-"},
                {"key": "instrumentedjs", "constant": "-"},
                {"key": "resultpy", "constant": "-"},
                {"key": "resultjs", "constant": "-"},
                {"key": "tar_src_tracepoint_map", "constant": "-"},
                {"key": "cmp_result", "constant": "-"},
                {"key": "trace_level", "constant": "1"},
                {"key": "trace_group", "constant": "[\"CF\", \"AD\", \"EX\"]"},
                {"key": "matched_covered_lines_js", "constant": "\"ALL\""},
                {"key": "matched_covered_lines_py", "constant": "\"ALL\""},
                {"key": "stmtmap", "constant": "(stmtmap to be generated)"}
              ]
            }
          ]
        }
      },
      {
        "auto_key": "load_dbg_data_basic",
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
                {"key": "category", "to_param": "category"},
                {"key": "langpair", "to_param": "langpair"},
                {"key": "bench_id", "to_param": "bench_id"},
              ],
              "receiver": ["transmap_bridge", "read_benchmark"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "inputpy", "from_resp": "source.py"},
                  {"key": "inputjs", "from_resp": "target.js"},
                  {"key": "testpy", "from_resp": "source_test.py"},
                  {"key": "testjs", "from_resp": "target_test.js"},
                ]
              }
            },
          ]
        }
      },
      {
        "auto_key": "load_long_with_rawmap",
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
                {"key": "category", "to_param": "category"},
                {"key": "langpair", "to_param": "langpair"},
                {"key": "bench_id", "to_param": "bench_id"},
                // {"key": "target_filename", "to_param": "_target_filename"},
                // TODO: support templating from params -> on_resp if having time!
              ],
              "receiver": ["transmap_bridge", "read_benchmark"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "inputpy", "from_resp": "source.py"},
                  // {"key": "inputjs", "from_resp": "target.js"},
                  {"key": "testpy", "from_resp": "source_test.py"},
                  {"key": "testjs", "from_resp": "target_test.js"},
                ]
              }
            },
            {
              "handler_type": "SEND",
              "params": [
                {"key": "category", "to_param": "_category"},
                {"key": "langpair", "to_param": "_langpair"},
                {"key": "bench_id", "to_param": "_bench_id"},
                {"key": "target_filename", "to_param": "_target_filename"},
                {"template": "transmap/tests/evalex/{_category}/{_langpair}/{_bench_id}/{_target_filename}", "to_param": "filepath"}
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
                {"key": "category", "to_param": "_category"},
                {"key": "langpair", "to_param": "_langpair"},
                {"key": "bench_id", "to_param": "_bench_id"},
                {"key": "target_filename", "to_param": "_target_filename"},
                {"template": "transmap/tests/evalex/{_category}/{_langpair}/{_bench_id}/{_target_filename}.srcmap", "to_param": "filepath"}
              ],
              "receiver": ["transmap_bridge", "read_data_file"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "rawmap_completion", "from_resp": "filecontent"},
                ]
              }
            },
            { "handler_type": "BUTTON", "bkey": "b_load_traceconfig" }
          ]
        }
      },
      {
        "auto_key": "load_dbg_precomp_stmtmap",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {
              "handler_type": "SEND",
              "params": [
                {"key": "category", "to_param": "_category"},
                {"key": "langpair", "to_param": "_langpair"},
                {"key": "bench_id", "to_param": "_bench_id"},
                {"template": "transmap/tests/tempex/dynamic/{_category}/{_langpair}/{_bench_id}/stmtmap.json", "to_param": "filepath"}
              ],
              "receiver": ["transmap_bridge", "read_data_file"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "stmtmap", "from_resp": "filecontent"},
                  {"key": "stmtmap_ori", "from_resp": "filecontent"},
                ]
              }
            },
            {
              "handler_type": "SEND",
              "params": [
                {"key": "stmtmap", "to_param": "stmtmap_str"},
              ],
              "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"is_anno": true, "key": "inputpy", "anno_key":"stmtmap", "from_resp": "line_decos_src"},
                  {"is_anno": true, "key": "inputjs", "anno_key":"stmtmap", "from_resp": "line_decos_tar"},
                ]
              }
            }
          ]
        }
      },
      {
        "auto_key": "load_dbg_data",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {
              "handler_type": "AUTOMATION",
              "auto_key": "load_dbg_data_basic",
              "recorder_key": null
            },
            {
              "handler_type": "AUTOMATION",
              "auto_key": "load_dbg_precomp_stmtmap",
              "recorder_key": null
            }
          ]
        }
      },
      {
        "auto_key": "load_data_basic",
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
                {"key": "category", "to_param": "category"},
                {"key": "langpair", "to_param": "langpair"},
                {"key": "bench_id", "to_param": "bench_id"},
              ],
              "receiver": ["transmap_bridge", "read_benchmark"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "inputpy", "from_resp": "source.py"},
                  {"key": "inputjs", "from_resp": "target.js"},
                  {"key": "testpy", "from_resp": "source_test.py"},
                  {"key": "testjs", "from_resp": "target_test.js"},
                  {"key": "inputjs_fixed", "from_resp": "target.fixed.js"},
                  {"key": "errorinjects", "from_resp": "injects.json"},
                ]
              }
            },
          ]
        }
      },
      {
        "auto_key": "load_precomp_stmtmap",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {
              "handler_type": "SEND",
              "params": [
                {"key": "category", "to_param": "_category"},
                {"key": "langpair", "to_param": "_langpair"},
                {"key": "bench_id", "to_param": "_bench_id"},
                {"template": "transmap/tests/tempex/dynamic/{_category}/{_langpair}/{_bench_id}/stmtmap.json", "to_param": "filepath"}
              ],
              "receiver": ["transmap_bridge", "read_data_file"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "stmtmap", "from_resp": "filecontent"},
                  {"key": "stmtmap_ori", "from_resp": "filecontent"},
                ]
              }
            },
            {
              "handler_type": "SEND",
              "params": [
                {"key": "stmtmap", "to_param": "stmtmap_str"},
              ],
              "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"is_anno": true, "key": "inputpy", "anno_key":"stmtmap", "from_resp": "line_decos_src"},
                  {"is_anno": true, "key": "inputjs", "anno_key":"stmtmap", "from_resp": "line_decos_tar"},
                ]
              }
            },
            {
              "handler_type": "SEND",
              "params": [
                {"key": "inputjs", "to_param": "code_ori"},
                {"key": "stmtmap_ori", "to_param": "stmtmap_ori_str"},
                {"key": "errorinjects", "to_param": "errorinjects_str"},
                {"key": "inputjs_fixed", "to_param": "code_fixed"}
              ],
              "receiver": ["transmap_bridge", "revert_error_injects_to_get_fixed_stmtmap"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"key": "stmtmap_fixed", "from_resp": "reverted_stmtmap"}
                ]
              }
            },
            {
              "handler_type": "SEND",
              "params": [
                {"key": "stmtmap_fixed", "to_param": "stmtmap_str"},
              ],
              "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": [
                  {"is_anno": true, "key": "inputjs_fixed", "anno_key":"stmtmap", "from_resp": "line_decos_tar"},
                ]
              }
            },
          ]
        }
      },
      {
        "auto_key": "load_data",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {
              "handler_type": "AUTOMATION",
              "auto_key": "load_data_basic",
              "recorder_key": null
            },
            {
              "handler_type": "AUTOMATION",
              "auto_key": "load_precomp_stmtmap",
              "recorder_key": null
            },
          ]
        }
      },
      {
        "auto_key": "auto_gen_stmtmap",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {"handler_type": "BUTTON", "bkey": "b_lm_clear"},
            {"handler_type": "BUTTON", "bkey": "b_completion"},
            {"handler_type": "BUTTON", "bkey": "b_parseviz_stmtmap"},
          ]
        }
      },
      {
        "auto_key": "run_one_bench_id",
        "handler": {
          "handler_type": "REACTOR",
          "maximum_gas": 1000,
          "reactor": ["transmap_bridge", "rx:dynamic_run_one_bench_id"],
        }
      },
      {
        "auto_key": "run_all_bench_ids",
        "handler": {
          "handler_type": "REACTOR",
          "maximum_gas": 90000,
          "reactor": ["transmap_bridge", "rx:dynamic_run_all_bench_ids"],
        }
      },
      {
        "auto_key": "export_srcmap_one",
        "handler": {
          "handler_type": "REACTOR",
          "maximum_gas": 90000,
          "reactor": ["transmap_bridge", "rx:dynamic_sourcemap_export_one"],
        }
      },
      {
        "auto_key": "export_srcmap_all",
        "handler": {
          "handler_type": "REACTOR",
          "maximum_gas": 90000,
          "reactor": ["transmap_bridge", "rx:dynamic_sourcemap_export_all"],
        }
      },
      {
        "auto_key": "remove_output",
        "handler": {
          "handler_type": "SEQ",
          "child_handlers": [
            {
              "handler_type": "SEND",
              "params": [
                {"key": "category", "to_param": "_category"},
                {"key": "langpair", "to_param": "_langpair"},
                {"key": "bench_id", "to_param": "_bench_id"},
                {"template": "dynamic/{_category}/{_langpair}/{_bench_id}/trace_cmp_result.*.json", "to_param": "glob_0"},
                {"template": "dynamic/{_category}/{_langpair}/{_bench_id}/symptom.*.json", "to_param": "glob_1"},
                {"template": "dynamic/{_category}/{_langpair}/{_bench_id}/errors.json", "to_param": "filepath_0"},
              ],
              "receiver": ["transmap_bridge", "tempex_files_delete"],
              "on_resp": {
                "handler_type": "UI_UPDATE",
                "updates": []
              }
            }
          ]
        }
      },
      // {
      //   "auto_key": "load_todo_ids",
      //   "handler": {
      //     "handler_type": "SEND",
      //     "params": [
      //       {"key": "category", "to_param": "category"},
      //       {"key": "langpair", "to_param": "langpair"},
      //       {"constant": `["OR", ["NO", "target.fixed.js"], ["NO", "injects.json"]]`, "to_param": "filter_str"}
      //     ],
      //     "receiver": ["transmap_bridge", "get_task_bench_ids_with_filter"],
      //     "on_resp": {
      //       "handler_type": "UI_UPDATE",
      //       "updates": [
      //         {"key": "bench_id_list", "from_resp": "result"},
      //       ]
      //     }
      //   }
      // },
      // {
      //   "auto_key": "load_work_ids",
      //   "handler": {
      //     "handler_type": "SEND",
      //     "params": [
      //       {"key": "category", "to_param": "category"},
      //       {"key": "langpair", "to_param": "langpair"},
      //       {"constant": `["AND", ["HAS", "target.fixed.js"], ["HAS", "injects.json"]]`, "to_param": "filter_str"}
      //     ],
      //     "receiver": ["transmap_bridge", "get_task_bench_ids_with_filter"],
      //     "on_resp": {
      //       "handler_type": "UI_UPDATE",
      //       "updates": [
      //         {"key": "bench_id_list", "from_resp": "result"},
      //       ]
      //     }
      //   }
      // }
    ],
    "ui": {
      "type": "vertical",
      "children": [
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "button",
              "style": {"color": "blue"},
              "text": "INIT & Load Bench IDs",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "AUTOMATION",
                    "auto_key": "init"
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "category", "to_param": "category"},
                      {"key": "langpair", "to_param": "langpair"},
                    ],
                    "receiver": ["transmap_bridge", "get_task_main_bench_ids"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id_list", "from_resp": "result"},
                        {"key": "bench_id", "from_resp": "id1"}
                      ]
                    }
                  },
                  { "handler_type": "BUTTON", "bkey": "b_bench_go_left" },
                ]
              }
            },
            // {
            //   "type": "button",
            //   "bkey": "b_load_ids",
            //   "text": "All IDs",
            //   "on_click": {
            //     "handler_type": "SEND",
            //     "params": [
            //       {"key": "category", "to_param": "category"},
            //       {"key": "langpair", "to_param": "langpair"},
            //     ],
            //     "receiver": ["transmap_bridge", "get_task_main_bench_ids"],
            //     "on_resp": {
            //       "handler_type": "UI_UPDATE",
            //       "updates": [
            //         {"key": "bench_id_list", "from_resp": "result"},
            //       ]
            //     }
            //   }
            // },
            {
              "type": "select",
              "key": "preset",
              "value": "leetcode",
              "options": ["pre-leetcode", "pre-gfg", "pre-humanevalx"], // , "pre-real"
              "on_change": {
                "handler_type": "SWITCH",
                "switch_key": "preset",
                "switch_cases": [
                  {
                    "match": "pre-leetcode", 
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "category", "constant": "leetcode"},
                        {"key": "langpair", "constant": "py_js_codex0err"},
                        {"key": "bench_id", "constant": "L"},
                      ]
                    }
                  },
                  {
                    "match": "pre-gfg",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "category", "constant": "gfg"},
                        {"key": "langpair", "constant": "py_js_codex0err"},
                        {"key": "bench_id", "constant": "GFG"},
                      ]
                    }
                  },
                  {
                    "match": "pre-humanevalx",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "category", "constant": "humanevalx"},
                        {"key": "langpair", "constant": "py_js_codex0err"},
                        {"key": "bench_id", "constant": "H"},
                      ]
                    }
                  },
                  {
                    "match": "pre-real",
                    "handler": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "category", "constant": "real"},
                        {"key": "langpair", "constant": "py_js_codex0err"},
                        {"key": "bench_id", "constant": "strsim0"},
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "input",
              "style": {"maxWidth": "80px"},
              "value": "leetcode",
              "key": "category"
            },
            {
              "type": "input",
              "style": {"maxWidth": "120px"},
              "value": "py_js_codex0err",
              "key": "langpair"
            },
            {
              "type": "input",
              "value": "L0017_LetterCombinationsofaPhoneNumber_py",
              "autocomplete": {"ac_type": "DATALIST", "list_key": "bench_id_list"},
              "key": "bench_id"
            },
            {
              "type": "ac_datalist",
              "key": "bench_id_list",
            },
            {
              "type": "button",
              "text": "<",
              "bkey": "b_bench_go_left",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "bench_id", "to_param": "current_id"},
                      {"key": "bench_id_list", "to_param": "all_ids_str"},
                      {"constant": "-1", "to_param": "offset_str"}
                    ],
                    "receiver": ["transmap_bridge", "get_id_in_list_by_offset"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "from_resp": "new_id"},
                        {"key": "index_status", "from_resp": "index_status"},
                      ]
                    }
                  },
                  { "handler_type": "BUTTON", "bkey": "b_load_dbg_data_basic" },
                ]
              }
            },
            {
              "type": "button",
              "text": ">",
              "bkey": "b_bench_go_right",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "bench_id", "to_param": "current_id"},
                      {"key": "bench_id_list", "to_param": "all_ids_str"},
                      {"constant": "1", "to_param": "offset_str"}
                    ],
                    "receiver": ["transmap_bridge", "get_id_in_list_by_offset"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "bench_id", "from_resp": "new_id"},
                        {"key": "index_status", "from_resp": "index_status"},
                      ]
                    }
                  },
                  { "handler_type": "BUTTON", "bkey": "b_load_dbg_data_basic" },
                ]
              }
            },
            {
              "type": "label",
              "value": "?/?",
              "key": "index_status"
            },
            // {
            //   "type": "button",
            //   "bkey": "b_load_work_ids",
            //   "text": "Fixed IDs",
            //   "on_click": {
            //     "handler_type": "AUTOMATION",
            //     "auto_key": "load_work_ids",
            //     "recorder_key": null
            //   }
            // },
            // {
            //   "type": "button",
            //   "bkey": "b_load_todo_ids",
            //   "text": "TODO IDs",
            //   "on_click": {
            //     "handler_type": "AUTOMATION",
            //     "auto_key": "load_todo_ids",
            //     "recorder_key": null
            //   }
            // },
          ]
        },
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "hoverbox",
              "text": "Map/Fixed/Inj",
              "child": {
                "type": "horizontal",
                "children": [
                  {
                    "type": "vertical",
                    "children": [
                      // {
                      //   "type": "textarea",
                      //   "style": {"height": "70%"},
                      //   "value": "(stmtmap)",
                      //   "key": "stmtmap"
                      // },
                      {
                        "type": "horizontal",
                        "style": {"height": "30%"},
                        "children": [
                          {
                            "type": "textarea",
                            "value": "(stmtmap ori)",
                            "key": "stmtmap_ori"
                          },
                          {
                            "type": "textarea",
                            "value": "(stmtmap fixed. Obsolete.)",
                            "key": "stmtmap_fixed"
                          }
                        ]
                      },
                      {
                        "type": "monaco",
                        "params": {"lang": "js", "readOnly": true},
                        "value": "//the fixed code (read-only, for error injection)",
                        "key": "inputjs_fixed"
                      },
                    ]
                  },
                  {
                    "type": "vertical",
                    "children": [
                      {
                        "type": "textarea",
                        "value": "(error injects)",
                        "key": "errorinjects"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "hoverbox",
              "text": "Tests (py/js)",
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
            { /////////////////// Embedded Linemap Begin ///////////////////
              "type": "hoverbox",
              "text": "Linemap",
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
                  },
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
                            "text": "Completion",
                            "bkey": "b_completion",
                            "on_click": {
                              "handler_type": "SEND",
                              "params": [
                                {"key": "inputpy", "to_param": "py_code"},
                                {"key": "inputjs", "to_param": "js_code"},
                                {"key": "prompt_tpl", "to_param": "prompt_tpl"}
                              ],
                              "receiver": ["transmap_bridge", "selfexp_py_js"],
                              "on_resp": {
                                "handler_type": "UI_UPDATE",
                                "updates": [
                                  {"key": "rawmap_completion", "from_resp": "result"}
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
                                    {"key": "inputpy", "to_param": "py_code"},
                                    {"key": "inputjs", "to_param": "js_code"},
                                    {"key": "rawmap_completion", "to_param": "stmtmap_text"},
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
                            "text": "ParseViz Advanced (stmtmap)",
                            "bkey": "b_parseviz_stmtmap_adv",
                            "on_click": {
                              "handler_type": "SEQ",
                              "child_handlers": [
                                {
                                  "handler_type": "SEND",
                                  "params": [
                                    {"key": "inputpy", "to_param": "py_code"},
                                    {"key": "inputjs", "to_param": "js_code"},
                                    {"key": "rawmap_completion", "to_param": "stmtmap_text"},
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
            }, /////////////////// Embedded Linemap End ///////////////////
            {
              "type": "label",
              "value": "Bench",
            },
            {
              "type": "button",
              "bkey": "b_load_data_basic",
              "text": "Load (basic)",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "load_data_basic",
                "recorder_key": null
              }
            },
            // {
            //   "type": "button",
            //   "bkey": "b_load_data",
            //   "text": "Load (ctim)",
            //   "style": {"color": "gray"},
            //   "on_click": {
            //     "handler_type": "AUTOMATION",
            //     "auto_key": "load_data",
            //     "recorder_key": null
            //   }
            // },
            // {
            //   "type": "button",
            //   "bkey": "b_load_dbg_data",
            //   "text": "Load DBG (m)",
            //   "style": {"color": "gray"},
            //   "on_click": {
            //     "handler_type": "AUTOMATION",
            //     "auto_key": "load_dbg_data",
            //     "recorder_key": null
            //   }
            // },
            {
              "type": "input",
              "style": {"maxWidth": "50px"},
              "value": "0",
              "key": "errorinject_idx"
            },
            {
              "type": "button",
              "bkey": "b_apply_errinject_basic",
              "text": "Apply Inj Basic",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "AUTOMATION",
                    "auto_key": "ui_clear_for_errinject",
                    "recorder_key": null
                  },
                  {
                    "handler_type": "SEND",
                    "params": [
                      {"key": "errorinject_idx", "to_param": "errorinject_idxes_str"},
                      {"key": "errorinjects", "to_param": "errorinjects_str"},
                      {"key": "inputjs_fixed", "to_param": "fixed_code"},
                    ],
                    "receiver": ["transmap_bridge", "apply_error_inject_multiple_nomap"],
                    "on_resp": {
                      "handler_type": "UI_UPDATE",
                      "updates": [
                        {"key": "inputjs", "from_resp": "err_applied_code"},
                      ]
                    }
                  },
                ]
              }
            },
            {
              "type": "button",
              "bkey": "b_gen_stmtmap",
              "text": "Generate Stmtmap",
              "on_click": {
                "handler_type": "SEQ",
                "child_handlers": [
                  {
                    "handler_type": "AUTOMATION",
                    "auto_key": "auto_gen_stmtmap",
                    "recorder_key": null
                  }
                ]
              }
            },
            // {
            //   "type": "button",
            //   "bkey": "b_apply_errinject",
            //   "text": "Apply Inj (m)",
            //   "style": {"color": "gray"},
            //   "on_click": {
            //     "handler_type": "SEQ",
            //     "child_handlers": [
            //       {
            //         "handler_type": "AUTOMATION",
            //         "auto_key": "ui_clear_for_errinject",
            //         "recorder_key": null
            //       },
            //       {
            //         "handler_type": "SEND",
            //         "params": [
            //           {"key": "errorinject_idx", "to_param": "errorinject_idx_str"},
            //           {"key": "errorinjects", "to_param": "errorinjects_str"},
            //           {"key": "stmtmap_fixed", "to_param": "stmtmap_str"},
            //           {"key": "inputjs_fixed", "to_param": "fixed_code"},
            //         ],
            //         "receiver": ["transmap_bridge", "apply_error_inject"],
            //         "on_resp": {
            //           "handler_type": "UI_UPDATE",
            //           "updates": [
            //             {"key": "stmtmap", "from_resp": "err_applied_stmtmap"},
            //             {"key": "inputjs", "from_resp": "err_applied_code"},
            //           ]
            //         }
            //       },
            //       {
            //         "handler_type": "SEND",
            //         "params": [
            //           {"key": "stmtmap", "to_param": "stmtmap_str"},
            //         ],
            //         "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_stmtmap"],
            //         "on_resp": {
            //           "handler_type": "UI_UPDATE",
            //           "updates": [
            //             {"is_anno": true, "key": "inputpy", "anno_key":"stmtmap", "from_resp": "line_decos_src"},
            //             {"is_anno": true, "key": "inputjs", "anno_key":"stmtmap", "from_resp": "line_decos_tar"},
            //           ]
            //         }
            //       },
            //     ]
            //   }
            // },
            {
              "type": "label",
              "key": "label_meaningless",
              "value": "----------",
            },
            {
              "type": "button",
              "text": "AUTO-Curr",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "run_current",
                "recorder_key": null
              }
            },
            {
              "type": "input",
              "style": {"maxWidth": "250px"},
              "value": '[1,9,"CF,AD,EX","GEN","CmpF","TpA"]',
              "key": "trace_level_range"
            },
            {
              "type": "label",
              "value": "?/?",
              "key": "auto_1_status"
            },
            {
              "type": "button",
              "text": "AUTO-1",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "run_one_bench_id",
                "recorder_key": null
              }
            },
            {
              "type": "button",
              "text": "Clear-1",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "remove_output",
                "recorder_key": null
              }
            },
            {
              "type": "label",
              "value": "?/?",
              "key": "auto_n_status"
            },
            {
              "type": "button",
              "text": "AUTO-N",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "run_all_bench_ids",
                "recorder_key": null
              }
            },
            {
              "type": "label",
              "key": "label_export_srcmap",
              "value": "   ExpoMap",
            },
            {
              "type": "button",
              "text": "AUTO-MAP-1",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "export_srcmap_one",
                "recorder_key": null
              }
            },
            {
              "type": "button",
              "text": "AUTO-MAP-N",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "export_srcmap_all",
                "recorder_key": null
              }
            },
          ]
        },
        {
          "type": "horizontal",
          "style": {"height": "30px", "min-height": "30px"},
          "children": [
            {
              "type": "label",
              "key": "label_debug_use",
              "value": "Debug & Use",
            },
            {
              "type": "button",
              "bkey": "b_load_dbg_data_basic",
              "text": "Load DBG (py/target.js)",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "load_dbg_data_basic",
                "recorder_key": null
              }
            },
            {
              "type": "input",
              "style": {"maxWidth": "120px"},
              "value": "target.fixed.js",
              "key": "target_filename"
            },
            {
              "type": "button",
              "bkey": "b_load_long_with_rawmap",
              "text": "Load Long (py/*.js/*.srcmap)",
              "on_click": {
                "handler_type": "AUTOMATION",
                "auto_key": "load_long_with_rawmap",
                "recorder_key": null
              }
            },
            {
              "type": "button",
              "bkey": "b_parse_raw_stmtmap",
              "text": "Parse Raw Stmtmap",
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
                  {"handler_type": "BUTTON", "bkey": "b_parseviz_stmtmap_adv"},
                ]
              }
            },
            {
              "type": "hoverbox",
              "text": "traceconfig",
              "child": {
                "type": "vertical",
                "children": [
                  {
                    "type": "horizontal",
                    "style": {"height": "30px", "min-height": "30px"},
                    "children": [
                      {
                        "type": "button",
                        "text": "Load traceconfig",
                        "bkey": "b_load_traceconfig",
                        "on_click": {
                          "handler_type": "SEND",
                          "params": [
                            {"key": "category", "to_param": "_category"},
                            {"key": "langpair", "to_param": "_langpair"},
                            {"key": "bench_id", "to_param": "_bench_id"},
                            {"key": "target_filename", "to_param": "_target_filename"},
                            {"template": "transmap/tests/evalex/{_category}/{_langpair}/{_bench_id}/{_target_filename}.traceconfig.json", "to_param": "filepath"}
                          ],
                          "receiver": ["transmap_bridge", "read_data_file"],
                          "on_resp": {
                            "handler_type": "UI_UPDATE",
                            "updates": [
                              {"key": "traceconfig", "from_resp": "filecontent"},
                            ]
                          }
                        }
                      },
                      {
                        "type": "button",
                        "text": "Save traceconfig",
                        "bkey": "b_save_traceconfig",
                        "on_click": {
                          "handler_type": "SEND",
                          "params": [
                            {"key": "category", "to_param": "category"},
                            {"key": "langpair", "to_param": "langpair"},
                            {"key": "bench_id", "to_param": "bench_id"},
                            {"key": "target_filename", "to_param": "_target_filename"},
                            {"template": "{_target_filename}.traceconfig.json", "to_param": "save_filename"},
                            {"key": "traceconfig", "to_param": "save_filecontent"}
                          ],
                          "receiver": ["transmap_bridge", "save_in_benchmark"],
                          "on_resp": {
                            "handler_type": "UI_UPDATE",
                            "updates": []
                          }
                        }
                      }
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
                  "children": [
                    {
                      "type": "monaco",
                      "params": {"lang": "py"},
                      "value": "a, b = 1 / 6, 5\nprint(a, 1 + 3, 2 * 5 + 6)\nfor i in range(b):\n  print(i * i)",
                      "key": "inputpy"
                    },
                    {
                      "type": "monaco",
                      "params": {"lang": "py"},
                      "value": "# instrumented",
                      "key": "instrumentedpy"
                    },
                  ]
                },
                {
                  "type": "horizontal",
                  "style": {"height": "30px", "min-height": "30px"},
                  "children": [
                    {
                      "type": "input",
                      "value": "block_vars_py",
                      "key": "our_preset_py"
                    },
                    {
                      "type": "button",
                      "bkey": "b_py_tracepoints",
                      "text": "(1) py tracepoints",
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
                      "bkey": "b_py_instrun",
                      "text": "(4) py instrun",
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
                      "text": "-- RELOAD --",
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
                    }
                  ]
                },
                {
                  "type": "horizontal",
                  "children": [
                    {
                      // "type": "jsontab",
                      "type": "lunajson", 
                      "value": "(py trace result)",
                      "key": "resultpy"
                    },
                    {
                      "type": "vertical",
                      "children": [
                        {
                          "type": "jsontab",
                          "value": "(raw js run)",
                          "key": "raw_jsrun"
                        },
                        {
                          "type": "jsontab",
                          "value": "(js symptom)",
                          "key": "result_symptom"
                        },
                        {
                          "type": "horizontal",
                          "style": {"maxHeight": "25px"},
                          "children": [
                            {
                              "type": "input",
                              "style": {"maxWidth": "120px"},
                              "value": '["CF", "AD", "EX"]',
                              "key": "trace_group"
                            },
                            {
                              "type": "input",
                              "style": {"maxWidth": "50px"},
                              "value": "1",
                              "key": "trace_level"
                            },
                            {
                              "type": "label",
                              "value": "N",
                              "prefix": " Py-MaxL: ",
                              "key": "max_trace_level_py"
                            },
                            {
                              "type": "label",
                              "value": "N",
                              "prefix": " Js-MaxL: ",
                              "key": "max_trace_level_js"
                            }
                          ]
                        },
                        {
                          "type": "horizontal",
                          "children": [
                            {
                              "type": "textarea",
                              "value": "\"ALL\"",
                              "key": "matched_covered_lines_py"
                            },
                            {
                              "type": "textarea",
                              "value": "\"ALL\"",
                              "key": "matched_covered_lines_js"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                // {
                //   "type": "horizontal",
                //   "style": {"height": "30px", "min-height": "30px"},
                //   "children": [
                //     {
                //       "type": "input",
                //       "value": "python3 /opt/dynapyt/simple.py MyBlockVarsAnalysis",
                //       "key": "commandpy"
                //     },
                //     {
                //       "type": "button",
                //       "text": "Dynamic Analysis (DynaPyt, py)",
                //       "on_click": {
                //         "handler_type": "SEND",
                //         "params": [
                //           {"key": "commandpy", "to_param": "command_str"},
                //           {"constant": "10", "to_param": "timeout_str"},
                //           {"key": "inputpy", "to_param": "code"},
                //           {"key": "testpy", "to_param": "test_template"}
                //         ],
                //         "receiver": ["transmap_bridge", "run_dynamic_analysis"],
                //         "on_resp": {
                //           "handler_type": "UI_UPDATE",
                //           "updates": [
                //             {"key": "instrumentedpy", "from_resp": "instrumented"},
                //             {"key": "resultpy", "from_resp": "result"},
                //           ]
                //         }
                //       }
                //     },
                //   ]
                // },
                {
                  "type": "hoverbox",
                  "text": "Details: Tracepoints and final code (PY)",
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
                  "children": [
                    {
                      "type": "monaco",
                      "params": {"lang": "js"},
                      "value": "var a = 5;\nlet b = a * 2;",
                      "key": "inputjs"
                    },
                    {
                      "type": "monaco",
                      "params": {"lang": "js"},
                      "value": "// instrumented",
                      "key": "instrumentedjs"
                    },
                  ]
                },
                {
                  "type": "horizontal",
                  "style": {"height": "30px", "min-height": "30px"},
                  "children": [
                    {
                      "type": "button",
                      "bkey": "b_symptom_check",
                      "text": "(0) Symptom",
                      "on_click": {
                        "handler_type": "SEQ",
                        "child_handlers": [
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
                      "type": "input",
                      "value": "block_vars_js",
                      "key": "our_preset_js"
                    },
                    {
                      "type": "button",
                      "bkey": "b_js_tracepoints",
                      "text": "(2) js tracepoints",
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
                      "type": "select",
                      "key": "check_tag_eq_select",
                      "value": "TAG_RELAX",
                      "options": ["TAG_RELAX", "TAG_EQ"],
                      // "on_change": { // nop. TODO: ignore on_change if not exists
                      //   "handler_type": "UI_UPDATE",
                      //   "updates": []
                      // }
                    },
                    {
                      "type": "button",
                      "bkey": "b_map_block",
                      "text": "(3) Map",
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
                              {"constant": "my-monaco-deco-00", "to_param": "deco_class"},
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
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"constant": "my-monaco-deco-01", "to_param": "deco_class"},
                              {"key": "tracepointspy_off", "to_param": "tracepoints_str"},
                            ],
                            "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                            "on_resp": {
                              "handler_type": "UI_UPDATE",
                              "updates": [
                                {"is_anno": true, "key": "inputpy", "anno_key":"tracepointspy_off", "from_resp": "decos"},
                              ]
                            }
                          },
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"constant": "my-monaco-deco-00", "to_param": "deco_class"},
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
                          {
                            "handler_type": "SEND",
                            "params": [
                              {"constant": "my-monaco-deco-01", "to_param": "deco_class"},
                              {"key": "tracepointsjs_off", "to_param": "tracepoints_str"},
                            ],
                            "receiver": ["transmap_bridge", "AGEN_monaco__deco_from_tracepoints"],
                            "on_resp": {
                              "handler_type": "UI_UPDATE",
                              "updates": [
                                {"is_anno": true, "key": "inputjs", "anno_key":"tracepointsjs_off", "from_resp": "decos"},
                              ]
                            }
                          },
                        ]
                      }
                    },
                    {
                      "type": "button",
                      "bkey": "b_js_instrun",
                      "text": "(5) js instrun",
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
                      "type": "input",
                      "value": "block_vars_py_js",
                      "key": "our_preset_cmp"
                    },
                    {
                      "type": "button",
                      "bkey": "b_traces_cmp",
                      "text": "(6) Cmp F",
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
                              {"constant": "my-monaco-ldeco-covblue", "to_param": "deco_class"},
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
                          }
                        ]
                      }
                    },
                    // {
                    //   "type": "button",
                    //   "bkey": "b_traces_cmp_last",
                    //   "text": "(6) Compare L",
                    //   "on_click": {
                    //     "handler_type": "SEQ",
                    //     "child_handlers": [
                    //       {
                    //         "handler_type": "SEND",
                    //         "params": [
                    //           {"key": "our_preset_cmp", "to_param": "preset"},
                    //           {"key": "tar_src_tracepoint_map", "to_param": "tar_src_tracepoint_map_str"},
                    //           {"key": "resultpy", "to_param": "src_trace_result_str"},
                    //           {"key": "resultjs", "to_param": "tar_trace_result_str"},
                    //           {"constant": '{"is_last": true}', "to_param": "cmp_config_str"}
                    //         ],
                    //         "receiver": ["transmap_bridge", "da_preset_2__cmp"],
                    //         "on_resp": {
                    //           "handler_type": "UI_UPDATE",
                    //           "updates": [
                    //             {"key": "cmp_result", "from_resp": "result"},
                    //           ]
                    //         }
                    //       },
                    //       {
                    //         "handler_type": "SEND",
                    //         "params": [
                    //           {"constant": "my-monaco-ldeco-covblue", "to_param": "deco_class"},
                    //           {"key": "cmp_result", "to_param": "cmp_result_str"},
                    //         ],
                    //         "receiver": ["transmap_bridge", "AGEN_monaco__line_deco_from_trace_cmp_result"],
                    //         "on_resp": {
                    //           "handler_type": "UI_UPDATE",
                    //           "updates": [
                    //             {"is_anno": true, "key": "inputpy", "anno_key": "covlines", "from_resp": "line_decos_src"},
                    //             {"is_anno": true, "key": "inputjs", "anno_key": "covlines", "from_resp": "line_decos_tar"},
                    //             {"is_anno": true, "key": "inputpy", "anno_key": "trace_err", "from_resp": "err_deco_src"},
                    //             {"is_anno": true, "key": "inputjs", "anno_key": "trace_err", "from_resp": "err_deco_tar"}
                    //           ]
                    //         }
                    //       },
                    //       {
                    //         "handler_type": "SEND",
                    //         "params": [
                    //           {"key": "cmp_result", "to_param": "cmp_result_str"},
                    //           // {"key": "stmtmap", "to_param": "stmtmap_str"},
                    //           {"key": "tar_src_tracepoint_map", "to_param": "tar_src_tracepoint_map_str"}
                    //         ],
                    //         "receiver": ["transmap_bridge", "get_matched_covered_lines"],
                    //         "on_resp": {
                    //           "handler_type": "UI_UPDATE",
                    //           "updates": [
                    //             {"key": "matched_covered_lines_py", "from_resp": "matched_covered_lines_src"},
                    //             {"key": "matched_covered_lines_js", "from_resp": "matched_covered_lines_tar"},
                    //           ]
                    //         }
                    //       }
                    //     ]
                    //   }
                    // }
                  ]
                },
                {
                  "type": "horizontal",
                  "children": [
                    {
                      // "type": "jsontab",
                      "type": "lunajson",
                      "value": "(js trace result)",
                      "key": "resultjs"
                    },
                    {
                      "type": "vertical",
                      "children": [
                        {
                          "type": "jsontab",
                          "value": "(tar src tracepoint map)",
                          "key": "tar_src_tracepoint_map"
                        },
                        {
                          "type": "jsontab",
                          "value": "(trace compare diagnose)",
                          "key": "cmp_result"
                        }
                      ]
                    }
                  ]
                },
                // {
                //   "type": "horizontal",
                //   "style": {"height": "30px", "min-height": "30px"},
                //   "children": [
                //     {
                //       "type": "input",
                //       "value": "node /opt/iroh/simple.js analysis_1",
                //       "key": "commandjs"
                //     },
                //     {
                //       "type": "button",
                //       "text": "Dynamic Analysis (Iroh, js)",
                //       "on_click": {
                //         "handler_type": "SEND",
                //         "params": [
                //           {"key": "commandjs", "to_param": "command_str"},
                //           {"constant": "10", "to_param": "timeout_str"},
                //           {"key": "inputjs", "to_param": "code"},
                //           {"key": "testjs", "to_param": "test_template"}
                //         ],
                //         "receiver": ["transmap_bridge", "run_dynamic_analysis"],
                //         "on_resp": {
                //           "handler_type": "UI_UPDATE",
                //           "updates": [
                //             {"key": "instrumentedjs", "from_resp": "instrumented"},
                //             {"key": "resultjs", "from_resp": "result"}
                //           ]
                //         }
                //       }
                //     },
                //   ]
                // },
                {
                  "type": "hoverbox",
                  "text": "Details: Tracepoints and final code (JS)",
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
          ]
        }
      ]
    }
  });
})();

}