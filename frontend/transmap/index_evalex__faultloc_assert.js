"use strict";

////////////// Obsolete Assertion Mode //////////////
let _ASSERTS_PY_JS = [];


/////////////////////////////////// ASSERT ///////////////////////////////////
/////////////////////////////////// ASSERT ///////////////////////////////////
/////////////////////////////////// ASSERT ///////////////////////////////////
/////////////////////////////////// ASSERT ///////////////////////////////////
/////////////////////////////////// ASSERT ///////////////////////////////////
/////////////////////////////////// ASSERT ///////////////////////////////////

function parse_assumption(assump, src_code, tar_code, src_captures_dict, tar_captures_dict) {
  let condtype = assump[0];
  if (condtype === "==") {
    let parse_l = parse_assumption(assump[1], src_code, tar_code, src_captures_dict, tar_captures_dict);
    let parse_r = parse_assumption(assump[2], src_code, tar_code, src_captures_dict, tar_captures_dict);
    return {
      evaluator: (resps) => {
        let val_L = parse_l["evaluator"](resps);
        let val_R = parse_r["evaluator"](resps);
        if (typeof(val_L) !== "string") throw Error("Invalid val_L");
        if (typeof(val_R) !== "string") throw Error("Invalid val_L");
        return val_L === val_R;
      },
      ana_requests: parse_l["ana_requests"].concat(parse_r["ana_requests"])
    };
  } else if (condtype === "const") {
    return {
      evaluator: (resps) => assump[1],
      ana_requests: []
    };
  } else if (condtype === "match_src") {
    return {
      evaluator: (resps) => {
        let [start, end] = src_captures_dict[assump[1]][0][2];
        if (typeof(start) !== "number" || typeof(end) !== "number") throw Error("Invalid match_src.");
        return src_code.slice(start, end);
      },
      ana_requests: []
    };
  } else if (condtype === "match_tar") {
    return {
      evaluator: (resps) => {
        let [start, end] = tar_captures_dict[assump[1]][0][2];
        if (typeof(start) !== "number" || typeof(end) !== "number") throw Error("Invalid match_src.");
        return tar_code.slice(start, end);
      },
      ana_requests: []
    };
  } else if (condtype.startsWith("$")) {
    // this is a request!
    if (assump.length !== 2) throw Error("parse_assumption unexpected length");
    let [req_name, cap_key] = assump;
    if (!(cap_key in src_captures_dict)) throw Error("parse_assumption unexpected cap_key not in dict");
    let caps = src_captures_dict[cap_key];
    let ana_requests = [];
    if (caps.length !== 1) throw Error("parse_assumption unexpected cap size not 1");
    let cap = caps[0];
    ana_requests.push({"request": req_name, "node_range": cap[2], "node_type": cap[1]})
    //question: is node_type necessary?
    
    return {
      evaluator: (resps) => resps[cap[2][0] + "-" + cap[2][1]][req_name],
      ana_requests: ana_requests
    }
  } else {
    throw Error("parse_assumption unknown code_type: " + condtype);
  }
}


// this function returns a list of errors in the code.
async function _resolveChecksMatchesAsync(match_pairs, checks, src_code, src_driver_code, tar_code, tar_driver_code) {
  let errors = [];
  let idx_checks = checks.map((c, idx) => [idx, c]);
  let [direct_idx_checks, delayed_idx_checks] = arrayFilter(idx_checks, (x) => x[1]["type"] === "match_error");
  let direct_idxs = direct_idx_checks.map(([idx, c]) => idx);
  let [direct_match_pairs, rest_match_pairs] = arrayFilter(match_pairs, (mp) => direct_idxs.indexOf(mp["check_idx"]) >= 0);
  
  // proposed fix function
  function generateProposedFix(template, src_match_info, tar_match_info, src_code, tar_code) {
    console.log("[generateProposedFix]", template, src_match_info, tar_match_info);
    src_match_info["captures_dict"]
    function _temp_capture_repl(temp, cap_dict, context) {
      let result = temp;
      for (let cap_key in cap_dict) {
        let cap_insts = cap_dict[cap_key];
        if (cap_insts.length !== 1) continue;
        let [_, cap_ntype, cap_range] = cap_insts[0];
        let cap_text = context.slice(cap_range[0], cap_range[1]);
        result = result.replace("@{" + cap_key + "}", cap_text);
      }
      return result;
    }
    let after_src = _temp_capture_repl(template, src_match_info["captures_dict"], src_code);
    let after_tar = _temp_capture_repl(after_src, tar_match_info["captures_dict"], tar_code);
    if (after_tar.indexOf("@{") >= 0) throw Error("Unexpected. Template contains '@{', maybe it is not fully initialized.");
    return after_tar;
  }
  
  //step 1: process direct checks.
  for (let direct_mp of direct_match_pairs) {
    let {check_idx, src_range_key, tar_range_key, src_match_info, tar_match_info} = direct_mp;
    let {type, src_query, tar_query, tar_replacement, _err_msg} = checks[check_idx];
    if (direct_idxs.indexOf(check_idx) < 0) throw Error("Unexpected");
    let err_item = {
      "_err_msg": _err_msg,
      "src_corre_range": src_match_info["main_range"],
      "src_relev_range": null,
      "err_tar_range": tar_match_info["main_range"],
      // "intersect_origins": getIntersectOrigins(tar_match_info["main_range"], range_origins) 
    }
    if (tar_replacement) err_item["proposed_fix"] = generateProposedFix(tar_replacement, src_match_info, tar_match_info, src_code, tar_code);
    errors.push(err_item);
  }
  //step 2: process rest_checks.
  // -- step 2.1: aggregate analysis requests 
  let all_analysis_requests = [];
  let rest_mp_with_cond_evaluators = [];
  for (let rest_mp of rest_match_pairs) {
    let {check_idx, src_range_key, tar_range_key, src_match_info, tar_match_info} = rest_mp;
    let check = checks[check_idx];
    let {type, src_query, tar_query, tar_replacement, _err_msg} = check;
    if (type === "match_assume") {
      let assumption = check["assumption"];
      let parsed_assumption_cond = parse_assumption(assumption, src_code, tar_code, src_match_info["captures_dict"], tar_match_info["captures_dict"]);
      let {evaluator, ana_requests} = parsed_assumption_cond;
      all_analysis_requests = all_analysis_requests.concat(ana_requests);
      rest_mp_with_cond_evaluators.push([rest_mp, evaluator]);
    } else {
      throw Error("Unsupported match type: " + type);
    }
  }
  // -- step 2.2: resolve analysis requests
  console.log("all_analysis_requests:", all_analysis_requests);
  let resp = await runNeoRequestsDynAsync(src_driver_code, src_code, "py", all_analysis_requests);
  if ("error_msg" in resp) throw Error("Failed neo ana requests:" + JSON.stringify(resp));
  let {ana_responses, timespan_s} = resp;
  console.log("all_analysis_responses:", ana_responses);
  // -- step 2.3: do all condition checks
  for (let [rest_mp, evaluator] of rest_mp_with_cond_evaluators) {
    let is_true = evaluator(ana_responses);
    if (is_true === true) continue;
    if (is_true !== false) throw Error("Invalid evaluator result: " + is_true);
    let {check_idx, src_range_key, tar_range_key, src_match_info, tar_match_info} = rest_mp;
    let {type, src_query, tar_query, tar_replacement, _err_msg} = checks[check_idx];
    if (type === "match_assume") {
      let err_item = {
        "_err_msg": _err_msg,
        "src_corre_range": src_match_info["main_range"],
        "src_relev_range": null,
        "err_tar_range": tar_match_info["main_range"],
        "analysis": ana_responses
      };
      if (tar_replacement) err_item["proposed_fix"] = generateProposedFix(tar_replacement, src_match_info, tar_match_info, src_code, tar_code);
      errors.push(err_item);
    } else {
      throw Error("Unsupported match type: " + type);
    }
  }
  return errors;
}


async function _getCheckMatchPairsAsync(debug_prefix, checks, src_code, tar_code, charmap) {
  if (!Array.isArray(checks)) throw Error("Expecting checks to be an array");
  let src_query_dict = {};
  let tar_query_dict = {};
  for (let check of checks) {
    let {src_query, tar_query, tar_query_exclude} = check;
    src_query_dict[src_query] = null;
    tar_query_dict[tar_query] = null;
    if (tar_query_exclude) tar_query_dict[tar_query_exclude] = null;
  }
  src_query_dict = await myTreeSitterQueriesAsync("py", src_code, src_query_dict, false);
  tar_query_dict = await myTreeSitterQueriesAsync("js", tar_code, tar_query_dict, false);
  console.log("src_query_dict:", src_query_dict);
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "tsq_src", src_query_dict);
  console.log("tar_query_dict:", tar_query_dict);
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "tsq_tar", tar_query_dict);  

  //associate query results with (query, main) and node mapping
  let src_query_range_dict = queryResultTransform(src_query_dict);
  let tar_query_range_dict = queryResultTransform(tar_query_dict);  //expected: {query: {node_id: {cap_name: node_id}}}

  function _get_containing_range_and_map(range_key, charmap) {
    let range_vals = range_key.split("-");
    if (range_vals.length !== 2) throw Error("Unexpected");
    let [range_a, range_b] = [parseInt(range_vals[0]), parseInt(range_vals[1])];
    for (let {src_c_r, tar_c_r} of charmap) {
      let [rka, rkb] = src_c_r;
      if (range_a >= rka && range_a <= rkb) {
        if (!(range_b >= rka && range_b <= rkb)) throw Error("Unexpected");
        return [src_c_r, tar_c_r];
      }
    }
    return null;
  }

  //Collect check matches for each check
  let match_pairs = [];
  for (let check_idx = 0; check_idx < checks.length; check_idx ++) {
    let check = checks[check_idx];
    let check_type = check["type"];
    let {src_query, tar_query, tar_query_exclude} = check;
    let src_query_result = src_query_range_dict[src_query];
    let tar_query_result = tar_query_range_dict[tar_query];
    let tar_query_exclude_result = tar_query_exclude ? tar_query_range_dict[tar_query_exclude] : {};
    // for each src query result, find the correponding tar query result.
    for (let src_range_key in src_query_result) {
      let range_and_map = _get_containing_range_and_map(src_range_key, charmap);
      if (range_and_map === null) throw Error("Match doesn't contain intended src_range");
      let [expected_src_range, expected_tar_range] = range_and_map;
      // find the tar_range that corresponding to the tar query result.
      let is_found = false;
      for (let tar_range_key in tar_query_result) {
        let [tar_start, tar_end] = tar_range_key.split("-").map(x => parseInt(x));
        let is_in_range = false;
        if (tar_start >= expected_tar_range[0] && tar_start <= expected_tar_range[1] && tar_end >= expected_tar_range[0] && tar_end <= expected_tar_range[1]) {
          is_in_range = true;
        }
        if (is_in_range && (!(tar_range_key in tar_query_exclude_result))) {
          if (is_found) throw Error("Unexpected. Double found.");
          let match_pair = {
            "src_range_key": src_range_key,
            "tar_range_key": tar_range_key,
            "src_match_info": src_query_result[src_range_key],
            "tar_match_info": tar_query_result[tar_range_key],
            "check_idx": check_idx
          };
          is_found = true;
          match_pairs.push(match_pair);
        }
      }
    }
  }
  console.log("match_pairs:", match_pairs);
  return match_pairs;
}
