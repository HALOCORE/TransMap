"use strict";

// let _PROGRAM_VERSION_FAULTLOC = 1002;

let _TRACE_RULES_PY_JS = {
  "src_prepend": _TRACE_PREPEND_PY,
  "tar_prepend": _TRACE_PREPEND_JS,
  "src_instrumentations": {
    "log-asbool": "__log_asbool([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], @{MATCH})",
    "log-type": "__log_type([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], @{MATCH})",
  },
  "tar_instrumentations": {
    "log-asbool": "__log_asbool([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], @{MATCH})",
    "log-type": "__log_type([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], @{MATCH})",
  },
  "trace_equality": {
    "log-type": {
      "log-type": {
        "Array": ["<class 'list'>", "<class 'collections.deque'>", "<class 'tuple'>"],
        "String": ["<class 'str'>"],
        "Number": ["<class 'int'>", "<class 'float'>"],
        "Map": ["<class 'collections.Counter'>", "<class 'collections.defaultdict'>"],
        "Set": ["<class 'set'>"],
        "none": ["<class 'NoneType'>"],
        "Boolean": ["<class 'bool'>"],
        "Object": ["<class 'set'>", "<class 'collections.Counter'>", "<class 'collections.defaultdict'>", "<class 'dict_values'>", "<class 'dict_items'>"]
      }
    }
  },
  "src_trace_rules": [
    {
      "description": "Log all expressions that is used as conditional expression",
      "query": `[
        (if_statement condition: (expression) @log-asbool.tag-if_cond)
        (elif_clause condition: (expression) @log-asbool.tag-if_cond)
        (conditional_expression (expression) (expression) @log-asbool.tag-if_cond (expression))
      ]`
    },
    {
      "description": "Log all while loop conditions",
      "query": `(while_statement condition: (expression) @log-asbool.tag-while_cond)`
    },
    {
      "description": "Log types of iteration loop's target",
      "query": `[
        (for_statement left: [(pattern) (pattern_list)] right: (_) @log-type.tag-iterloop)
      ]`
    },
    {
      "description": "Log all types of assignments / declarations to variables",
      "query": `[
        (expression_statement (assignment (pattern_list) (expression_list (_) @log-type.tag-declassign)))
        (expression_statement (assignment [(identifier) (subscript)] [(_ !right) (binary_operator) (comparison_operator) (boolean_operator)] @log-type.tag-declassign))
      ]`
    },
    {
      "description": "log types of return values",
      "query": `(return_statement (_) @log-type.tag-return)`
    }
  ],
  "tar_trace_rules": [
    {
      "description": "Log all expressions that is used as conditional expression",
      "query": `(if_statement condition: (parenthesized_expression (_) @log-asbool.tag-if_cond))`
    },
    {
      "description": "Log all while loop conditions",
      "query": `(while_statement condition: (parenthesized_expression (_) @log-asbool.tag-while_cond))`
    },
    {
      "description": "Log types of iteration loop's target",
      "query": `[
        (for_in_statement left: (_) "in" right: (_) @log-type.tag-iterloop)
        (for_in_statement left: (_) "of" right: (_) @log-type.tag-iterloop)
      ]`
    },
    {
      "description": "Log all types of assignments / declarations to variables",
      "query": `[
        (variable_declaration (variable_declarator (identifier) (_ !parameters) @log-type.tag-declassign))
        (lexical_declaration (variable_declarator (identifier) (_ !parameters) @log-type.tag-declassign))
        (expression_statement (assignment_expression [(identifier) (subscript_expression)] (_ !parameters) @log-type.tag-declassign))
      ]`
    },
    {
      "description": "log types of return values",
      "query": `(return_statement (_) @log-type.tag-return)`
    }
  ]
}

let _TRACE_RULES_BY_LANG = {
  "py": {"js": _TRACE_RULES_PY_JS}
};

// function array_dict_push(arr_dict, key, data) {
//   if (!(key in arr_dict)) arr_dict[key] = [];
//   arr_dict[key].push(data);
// }

// function is_sub_range(child_range, parent_range) {
//   if (child_range[0] >= parent_range[0] && child_range[1] <= parent_range[1]) return true;
//   return false;
// }


// function queryResultTransform(query_dict) {
//   let query_range_dict = {};
//   for (let q in query_dict) {
//     let qmatches = query_dict[q];
//     let main_qmatches = qmatches.filter(x => x[0] === "main");
//     let other_qmatches = qmatches.filter(x => x[0] !== "main");
//     let range_dict = {};
//     for (let qmatch of main_qmatches) {
//       let [capname, ntype, nrange] = qmatch;
//       let [startb, endb] = nrange;
//       if (capname !== "main") throw Error("Unexpected");
//       range_dict[startb + "-" + endb] = {"main_type": ntype, "main_range": nrange, "captures_dict": {"main": [qmatch]}};
//     }
//     for (let qmatch of other_qmatches) {
//       let [capname, ntype, nrange] = qmatch;
//       for (let rkey in range_dict) {
//         let {main_type, main_range, captures_dict} = range_dict[rkey];
//         if (is_sub_range(nrange, main_range)) {
//           array_dict_push(captures_dict, capname, qmatch);
//         }
//       }
//     }
//     query_range_dict[q] = range_dict;
//   }
//   return query_range_dict;
// }





// /////////////////////////////////// TEST ///////////////////////////////////
// /////////////////////////////////// TEST ///////////////////////////////////
// /////////////////////////////////// TEST ///////////////////////////////////
// /////////////////////////////////// TEST ///////////////////////////////////
// /////////////////////////////////// TEST ///////////////////////////////////
// /////////////////////////////////// TEST ///////////////////////////////////

// function get_src_relevant_range(err_tar_range, charmap) {
//   let [err_s, err_e] = err_tar_range;
//   let src_min_s = Infinity;
//   let src_max_e = -1;
//   let overlap_count = 0;
//   for (let {src_c_r, tar_c_r} of charmap) {
//     let [src_s, src_e] = src_c_r;
//     let [tar_s, tar_e] = tar_c_r;
//     if (tar_s < err_e && tar_e > err_s) {
//       //overlapping!
//       src_min_s = Math.min(src_min_s, src_s);
//       src_max_e = Math.max(src_max_e, src_e);
//       overlap_count += 1;
//     }
//   }
//   return [[src_min_s, src_max_e], overlap_count];
// }

// function _convertTestErrToChkErrWithLineMap(test_err, test_code_p1_len, repaired_code, charmap) {
//   let lineno_py = test_err.lineno[1] - test_code_p1_len;
//   if (lineno_py < 0) {
//     if (false) {
//       //TODO: parse test error in test code but is expected instrumentations.
//     }
//     else {
//       //error that is either not detected MyLogError or test code bugs.
//       throw Error("Failed to convert test error: Unknown error in the test code part: " + JSON.stringify(test_err));
//     }
//   }
//   let start_char_idx = repaired_code.split('\n').slice(0,lineno_py).join('\n').length+1;
//   let line_char_num = repaired_code.split('\n')[lineno_py].length;
//   let end_char_idx = start_char_idx + line_char_num;
//   let err_tar_range = [start_char_idx, end_char_idx, [lineno_py, 0], [lineno_py, line_char_num]];
//   let [src_relev_range, overlap_count] = get_src_relevant_range(err_tar_range, charmap);
//   let err_item = {
//     "_err_msg": test_err.error_msg,
//     "__relev_overlap_c": overlap_count,
//     "src_corre_range": null,
//     "src_relev_range": src_relev_range,
//     "err_tar_range": err_tar_range,
//     // "intersect_origins": getIntersectOrigins(err_tar_range, range_origins)
//   }
//   console.log("[convertTestErrToChkErr]", err_item);
//   return err_item;
// }






// /////////////////////////////////// MAIN ///////////////////////////////////
// /////////////////////////////////// MAIN ///////////////////////////////////
// /////////////////////////////////// MAIN ///////////////////////////////////
// /////////////////////////////////// MAIN ///////////////////////////////////
// /////////////////////////////////// MAIN ///////////////////////////////////
// /////////////////////////////////// MAIN ///////////////////////////////////

// async function localizeFaultAsync(debug_prefix, src_lang, tar_lang, src_code, tar_code, src_test_code, tar_test_code, linemap) {
//   let errors = [];

//   // preparations
//   let src_driver_code = safeReplace(src_test_code, "#TESTED_PROGRAM", src_code);
//   let tar_driver_code = safeReplace(tar_test_code, "//TESTED_PROGRAM", tar_code);
//   if (src_driver_code.indexOf(src_code) < 0) throw Error("Failed to create src_driver_code");
//   if (tar_driver_code.indexOf(tar_code) < 0) throw Error("Failed to create tar_driver_code");
//   let tar_driver_code_line_offset = tar_test_code.split("//TESTED_PROGRAM")[0].split("\n").length;
//   let charmap = linemapToCharmap(src_code, tar_code, linemap);
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "charmap (for error-injected code)", charmap); 


//   // ------------ trace checks -------------
//   let trace_rules = _TRACE_RULES_BY_LANG[src_lang][tar_lang];
//   let {src_trace_rules, tar_trace_rules, trace_equality, src_instrumentations, tar_instrumentations, src_prepend, tar_prepend} = trace_rules;
//   let [src_tracepoints, tar_tracepoints, tar_src_label_pos_log_map, src_tracepoints_off, tar_tracepoints_off] = await _getTracepointPairsFilteredByCharmapAsync(debug_prefix, src_lang, src_code, tar_lang, tar_code, src_trace_rules, tar_trace_rules, charmap);
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "trace_equality", trace_equality); 
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "tar_src_label_pos_log_map", tar_src_label_pos_log_map); 
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "src_tracepoints_off", src_tracepoints_off); 
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "tar_tracepoints_off", tar_tracepoints_off); 
//   let [src_trace_result, src_ready_code] = await _traceRunCollectAsync(debug_prefix, src_lang, src_code, src_test_code, src_tracepoints, src_instrumentations, src_prepend, 10000);
//   let [tar_trace_result, tar_ready_code] = await _traceRunCollectAsync(debug_prefix, tar_lang, tar_code, tar_test_code, tar_tracepoints, tar_instrumentations, tar_prepend, src_trace_result[0].length);
//   let trace_error = await _diagnoseTracePairsAsync(debug_prefix, src_lang, src_code, src_trace_result, tar_lang, tar_code, tar_trace_result, tar_src_label_pos_log_map, trace_equality);
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "trace_error", trace_error); 
//   if (trace_error !== null) errors.push(trace_error);


//   // ------------ assertion checks -------------
//   let _ASSERTS_BY_LANG = {
//     "py": {"js": _ASSERTS_PY_JS}
//   };  
//   let checks = _ASSERTS_BY_LANG[src_lang][tar_lang];
//   let check_match_pairs = await _getCheckMatchPairsAsync(debug_prefix, checks, src_code, tar_code, charmap);
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "match_pairs", check_match_pairs); 
//   let check_errors = await _resolveChecksMatchesAsync(check_match_pairs, checks, src_code, src_driver_code, tar_code, tar_driver_code);   // Check node mapping and evaluate condition.
//   errors.push(...check_errors);


//   // -------------- test check --------------
//   let test_result = await standaloneRunAsync(tar_driver_code, "js");
//   console.log("[test_result]", test_result);
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "Test result (run target driver code)", test_result);
//   let test_error = null;
//   if (test_result.is_success == false) {
//     test_error = _convertTestErrToChkErrWithLineMap(test_result.error, tar_driver_code_line_offset, tar_code, charmap);
//     errors.push(test_error);
//     await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "Parsed test error", test_error);
//   }

//   // return result
//   await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "errors_found", errors); 
//   return errors;
// }


// function faultlocCheck(src_lang, tar_lang, src_code, tar_code, linemap_result) {
//   return {"is_success": false};
// }

// function faultlocCheckAgg(check_results) {
//   return {"program_version": _PROGRAM_VERSION_FAULTLOC, "is_success": false, check_results};
// }