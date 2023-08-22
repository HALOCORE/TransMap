"use strict";

let _TRACE_PREPEND_PY = `
import json
__safe_log = print
__trace_quota = R_MAX_TRACE_COUNT_R
__trace_level = R_TRACE_LEVEL_R
__trace_enable_lines = R_TRACE_ENABLE_LINES_R
def __log_asbool(p, x): 
  global __trace_quota
  pos = f"[{p[0]},{p[1]},{p[2]},{p[3]}]"
  __trace_quota -= 1
  if (__trace_quota < 0): raise Exception("MyTraceError: Trace Quota Exceeded")
  __safe_log(f"\\nTRA {pos} | true | \\n" if x else f"\\nTRA {pos} | false | \\n")
  return x

from collections import deque, defaultdict, Counter
import queue
def __summ(x):
  typestr = str(type(x))
  if isinstance(x, bool): return ["B", "T"] if x is True else ["B", "F"]
  elif isinstance(x, int): return ["N", str(x)]
  elif isinstance(x, float): return ["N", str(x)[:-2]] if str(x).endswith(".0") else ["N", str(x)]
  elif isinstance(x, list) or isinstance(x, tuple) or typestr == "<class 'collections.deque'>" or isinstance(x, queue.Queue): 
    if isinstance(x, queue.Queue):
      x = x.queue
    if len(x) > 0:
      arr = ["A", len(x)]
      for i in range(min(len(x) - 1, 20)): arr.append(__summ(x[i]))
      arr.append(__summ(x[-1]))
      return arr
    else: return ["A", 0]
  elif isinstance(x, str): return ["S", len(x), x[:20]]
  elif isinstance(x, set): 
    retval = ["SET"]
    for v in x: retval.append(__summ(v))
    return retval
  elif isinstance(x, dict) or isinstance(x, Counter) or isinstance(x, defaultdict): 
    retval = ["DICT"]
    for k in x: retval.append([__summ(k), __summ(x[k])])
    return retval
  else:
    return "UNKNOWN"

def __log_type(p, x):
  global __trace_quota
  pos = f"[{p[0]},{p[1]},{p[2]},{p[3]}]"
  __trace_quota -= 1
  if (__trace_quota < 0): raise Exception("MyTraceError: Trace Quota Exceeded")
  __safe_log(f"\\nTRA {pos} | {typestr} | {json.dumps(__summ(x), separators=(',', ':'))}\\n")
  return x

__lno_set = set()
__lno_last = -1
def _rec_lno(lineno):
  global __lno_set, __lno_last
  __lno_set.add(lineno)
  __lno_last = lineno

def _log_symbol(p, locals, level):
  global __trace_quota, __lno_set
  if __trace_level < level: return
  if p[0] not in __trace_enable_lines: return
  __trace_quota -= 1
  if (__trace_quota < 0): 
    return # not throwing exception for now.
    raise Exception("MyTraceError: Trace Quota Exceeded")
  # logging logic
  pos = f"[{p[0]},{p[1]},{p[2]},{p[3]}]"
  trimed_locals = {}
  for k in locals:
    val = locals[k]
    if not k.startswith("_"):
      typestr = str(type(val))
      trimed_locals[k] = __summ(val)
  __safe_log(f"\\nTRA {pos} | {json.dumps(trimed_locals, separators=(',', ':'))} |  |# {sorted(list(__lno_set))}\\n")
  __lno_set = set()

def __log_exception(e):
  __safe_log("TOTALLY UNEXPECTED! source program has exception during tracing:\\n  " + str(e))
`;

let _TRACE_PREPEND_JS = `
"use strict";
let __safe_log = console.log;
let __trace_quota = R_MAX_TRACE_COUNT_R;
let __trace_level = R_TRACE_LEVEL_R;
let __trace_enable_lines = R_TRACE_ENABLE_LINES_R;
function __log_asbool(p, x){ 
  let pos = "[" + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "]";
  __trace_quota -= 1;
  if (__trace_quota < 0) throw Error("MyTraceError: Trace Quota Exceeded");
  __safe_log(x ? "\\nTRA " + pos + " | true | \\n" : "\\nTRA " + pos + " | false | \\n");
  return x;
}

function __summ(x) {
  let tpx = typeof x;
  if (tpx === "boolean") return x === true ? ["B","T"] : ["B","F"];
  else if (tpx === "number") {
    let sv = String(x);
    if (sv === "Infinity" || x > 1e300) sv = "inf";
    else if (sv === "-Infinity" || x < -1e300) sv = "-inf";
    return ["N", sv];
  }
  else if (Array.isArray(x)) {
    if (x.length > 0) {
      let arr = ["A", x.length];
      for (let i = 0; i < Math.min(x.length - 1, 20); i++) arr.push(__summ(x[i]));
      arr.push(__summ(x.at(-1)));
      return arr;
    }
    else return ["A", 0];
  }
  else if (tpx === "string") return ["S", x.length, x.slice(0, 20)];
  else if (x instanceof Set) {
   let retval = ["SET"];
   for (let v of x) {retval.push(__summ(v));}
   return retval;
  }
  else if (x?.constructor === Object && !(x._trace_ignore)) {
    let retval = ["DICT"];
    for (let k in x) {retval.push([__summ(k), __summ(x[k])]);}
   return retval;
  }
  else if (x?.constructor === Map) {
    let retval = ["DICT"];
    x.forEach((k, v) => {
      retval.push([__summ(k), __summ(v)]);
    });
   return retval;
  }
  else return "UNKNOWN";
}

function __log_type(p, x){ 
  let pos = "[" + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "]";
  __trace_quota -= 1;
  if (__trace_quota < 0) throw Error("MyTraceError: Trace Quota Exceeded");
  let typestr = (x === null || x === undefined) ? "none" : String(x.__proto__.constructor).split("() {")[0].replace("function ", "");
  __safe_log("\\nTRA " + pos + " | " + typestr + " | " + __summ(x) + "\\n");
  return x;
}

let __lno_set = new Set();
let __lno_last = -1;
function _rec_lno(lineno) {
  __lno_set.add(lineno);
  __lno_last = lineno;
}

function _log_symbol(p, locals, level) {
  if (__trace_level < level) return;
  if (!__trace_enable_lines.has(p[0])) return;
  __trace_quota -= 1;
  if (__trace_quota < 0) {
    return; // not throwing exception for now
    throw Error("MyTraceError: Trace Quota Exceeded");
  }
  // logging logic
  let pos = "[" + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "]";
  let trimed_locals = {};
  for (let k in locals) {
    let val = locals[k];
    if (!k.startsWith("_")) {
      trimed_locals[k] = __summ(val);
    }
  }
  __safe_log("\\nTRA " + pos + " | " + JSON.stringify(trimed_locals) + " |  |# [" + Array.from(__lno_set).sort((a, b) => (a - b)).join(", ") + "]\\n");
  __lno_set.clear();
}

function __log_exception(e) {
  __safe_log("\\nERR | " + JSON.stringify({"last_lineno": __lno_last, "err_msg": String(e)}) + " |  |# [" + Array.from(__lno_set).sort((a, b) => (a - b)).join(", ") + "]\\n");
  __lno_set.clear();
}
`;





/////////////////////////////////// TRACE ///////////////////////////////////
/////////////////////////////////// TRACE ///////////////////////////////////
/////////////////////////////////// TRACE ///////////////////////////////////
/////////////////////////////////// TRACE ///////////////////////////////////
/////////////////////////////////// TRACE ///////////////////////////////////
/////////////////////////////////// TRACE ///////////////////////////////////

function _extractTraceFromStdout(stdout) {
  let lines = stdout.split("\n");
  let trace_lines = lines.filter(x => x.startsWith("TRA [") || x.startsWith("ERR "));
  let trace = [];
  for (let tline of trace_lines) {
    let [main_str, comment_str] = tline.split(" |# ");
    let splits = main_str.split(" | ");
    if (splits.length !== 3) throw Error("Unexpected trace format");
    let [bef, aft, detail] = splits;
    let trace_data = [aft, detail];
    if (bef.startsWith("TRA [")) {
      let pos_str = bef.slice("TRA ".length);
      let pos_data = JSON.parse(pos_str);
      trace.push({"LPOS": pos_data, "DATA": trace_data, "COMT": comment_str});
    } else if (bef === "ERR") {
      trace.push({"ERR_DATA": trace_data, "COMT": comment_str});
    } else {
      throw Error("Unexpected trace line: " + tline);
    }
  }
  return trace;
}

async function __getQueryMatchesFromTraceRulesAsync(lang, code, trace_rules) {
  let queries = trace_rules.map(x => x.query);
  let ignoring_regexes = [
    /\/\/\/\/\/ Segment IGNORE BEGIN[\s\S]+?\/\/\/\/\/ Segment IGNORE END/gm,
    /##### Segment IGNORE BEGIN[\s\S]+?##### Segment IGNORE END/gm
  ];
  return await __getQueryMatchesFromQueriesAsync(lang, code, queries, ignoring_regexes);
}

function get_ignoring_ranges (code, ignoring_regexes) {
  let ranges = [];
  for (let reg of ignoring_regexes) {
    let all_matches = [...code.matchAll(reg)];
    for (let ma of all_matches) {
      let start_idx = ma.index;
      let end_idx = ma.index + ma[0].length;
      ranges.push([start_idx, end_idx]);
    }
  }
  return ranges;
}

function in_any_range(ranges, range) {
  let [start, end] = range;
  for (let [rs, re] of ranges) {
    if (start >= rs && end <= re) return true;
  }
  return false;
}

async function __getQueryMatchesFromQueriesAsync(lang, code, queries, ignoring_regexes) {
  let ignoring_ranges = ignoring_regexes ? get_ignoring_ranges (code, ignoring_regexes) : [];
  let query_dict = {};
  for (let q of queries) query_dict[q] = null;
  query_dict = await myTreeSitterQueriesAsync(lang, code, query_dict, false);
  let matches = [];
  let off_match_dict = {};
  for (let q in query_dict) {
    for (let match of query_dict[q]) {
      let [label, nt, range] = match;
      if (label.startsWith("TAG-MATCH-OFF")) {
        let tag = label.split(".").at(-1);
        if (!(tag in off_match_dict)) off_match_dict[tag] = {};
        off_match_dict[tag][range[0] + "," + range[1]] = true;
      } else {
        matches.push(match);
      }
    }
  }
  let filtered_matches = matches.filter(x => {
    // check if in range
    if (in_any_range(ignoring_ranges, [x[2][0], x[2][1]])) {
      return false;
    }

    let tag = x[0].split(".").at(-1);
    if (!(tag in off_match_dict)) return true;
    let rk = x[2][0] + "," + x[2][1];
    if (!(rk in off_match_dict[tag])) return true;
    return false;
  })
  return filtered_matches;
}

async function __getGroupedQueryMatchesFromQueriesAsync(lang, code, queries) {
  let query_dict = {};
  for (let q of queries) query_dict[q] = null;
  query_dict = await myTreeSitterQueriesAsync(lang, code, query_dict, true);
  let group_matches = [];
  for (let q in query_dict) {
    group_matches = group_matches.concat(query_dict[q]);
  }
  return group_matches;
}


async function _filterTracepointsByStmtmapAsync(src_code, tar_code, src_tracepoints, tar_tracepoints, stmtmap, check_tag_eq = true, traceconfig = null) {
  // Definition of bucket is changed! 
  // Now the bucket can only fit target ranges that cover all lines.
  let disable_src_lines = [];
  if (traceconfig !== null && typeof traceconfig === "object") {
    if ("disable_src_lines" in traceconfig) {
      disable_src_lines = traceconfig["disable_src_lines"];
    }
  }
  function _get_containing_map_entry(src_lineno) {
    for (let entry of stmtmap.linemap_s) {
      let {src_ls} = entry;
      if (src_ls.indexOf(src_lineno) >= 0) {
        if (src_lineno === Math.min(...src_ls)) return ["MIN", entry];
        else if (src_lineno === Math.max(...src_ls)) return ["MAX", entry];
        else return ["MIDDLE", entry];
      }
    }
    return ["NONE", null];
  }
  function _get_tar_lineno_pos_against_map_entry(entry, tar_lineno) {
    let {tar_ls} = entry;
    if (tar_ls.indexOf(tar_lineno) >= 0) {
      if (tar_lineno === Math.min(...tar_ls)) return "MIN";
      else if (tar_lineno === Math.max(...tar_ls)) return "MAX";
      else return "MIDDLE";
    }
    return "NONE";
  }
  let src_tps_on = [];
  let src_tps_off = [];
  let tar_tps_on = [];
  let tar_tps_off = [];
  let tar_src_tp_map = {};
  for (let src_tp of src_tracepoints) {
    // The match process: for each source match (anchor), if it is always on then enable. Otherwise, check if it is 
    // compute tar range. 
    // If there is one and only one anchor in target that is at the top of the atom range, consider matching, ~~cover all lines of tar range~~,
    // Otherwise not a match. 
    let [tp_tag, tp_nt, tp_range] = src_tp;
    let tp_tags = tp_tag.split(".");
    if (tp_tags.at(-1).endsWith("-ALWAYSON")){
      src_tps_on.push(src_tp);
      continue;
    }
    let [startIdx, endIdx, [startRow, startCol], [endRow, endCol]] = tp_range;
    if (endCol === 0) {
      throw Error("Unexpected! Tracepoint end point col is 0");
    }
    if (_lines_pattern_check(disable_src_lines, startRow + 1)) {
      continue; // do not turn on this.
    }

    let [pos, map_entry] = _get_containing_map_entry(startRow); // when matching tracepoint, only considering the `startRow`.
    if (pos === "NONE") {
      // TO BE FIXED! Now just skip those no-match tracepoints
      // throw Error("Unexpected! Tracepoint startRow is not in stmtmap (src)! " + JSON.stringify(tp_range));
      throw Error("\nPython tracepoint on line " + (startRow + 1) + " has no corresponding line mapping in JavaScript. \nConsider disabling source line " + (startRow + 1) + " in the traceconfig (top-right corner). \nFor example: ..\"disable_src_lines\": [" + (startRow + 1) + "]..");
    }

    let last_tp_tag = tp_tags.at(-1);
    // only consider those types of tp
    if (last_tp_tag.endsWith("-beforemap") || last_tp_tag.endsWith("-aftermap")) {
      // check if is line boundary
      let is_at_line_start = true;
      for (let i = startIdx - 1; i >= 0; i--) {
        if (i < 0 || src_code[i] === '\n') break;
        if(src_code[i] !== ' ' && src_code[i] !== '\t') {
          is_at_line_start = false; 
        }
      }
      if (!is_at_line_start) {
        continue;
        // %%%%% ignore this src tracepoint if it is not at the start of a line. go to next!
      }
      
      let expect_tar_pos = null;
      if (tp_tags.at(-1).endsWith("-beforemap")) {
        if (pos === "MIN") {
          expect_tar_pos = "MIN";
        } else continue; // %%%%% ignore this src tracepoint if it is not at the boundary of the source map. go to next!
      }
      else if (tp_tags.at(-1).endsWith("-aftermap")) {
        throw Error("Not handled! Semantic unclear.");
      }
      else {
        throw Error("Not handled! Semantic unclear for: " + tp_tags.at(-1));
      }
      if (expect_tar_pos === null) throw Error("Unexpected! expect_tar_pos is null. pos: " + pos);
  
      let matching_tar_tps = tar_tracepoints.filter(tar_tp => {
        // check against expected tar_pos
        let [tar_tp_tag, tar_tp_nt, tar_tp_range] = tar_tp;
        let tar_tp_tags = tar_tp_tag.split(".");
        if (tar_tp_tags.at(-1).endsWith("-ALWAYSON")) return false; // matching part ignores the ALWAYSON ones.
        let [tarStartIdx, tarEndIdx, [tarStartRow, tarStartCol], [tarEndRow, tarEndCol]] = tar_tp_range;
        if (expect_tar_pos === "MIN") {
          if(_get_tar_lineno_pos_against_map_entry(map_entry, tarStartRow) === "MIN") {
            // check if it is all space before the start of the match
            for (let i = tarStartIdx - 1; i >= 0; i--) {
              if (i < 0 || tar_code[i] === '\n') break;
              if(tar_code[i] !== ' ' && tar_code[i] !== '\t') return false;
            }
            return true;
          }
        } else if (expect_tar_pos === "WITHIN") {
          throw Error("Unhandled case in filter. expect_tar_pos = " + expect_tar_pos);
          //if(["WITHIN", "MIN"].includes(_get_tar_lineno_pos_against_map_entry(map_entry, tarStartRow))) return true;
        } else {
          throw Error("Unhandled case in filter. expect_tar_pos = " + expect_tar_pos);
        }
        return false;
      });
      if (matching_tar_tps.length !== 1) {
        src_tps_off.push(src_tp);
      } else if (check_tag_eq && src_tp[0] !== matching_tar_tps[0][0]) {
        //also check for tag equivalent!
        src_tps_off.push(src_tp);
      }
      else {
        let tar_tp = matching_tar_tps[0];
        src_tps_on.push(src_tp);
        tar_tps_on.push(tar_tp);
        let sp = src_tp[2];
        let tp = tar_tp[2];
        let src_label_pos_key = `[${sp[2][0]},${sp[2][1]},${sp[3][0]},${sp[3][1]}]`;
        let tar_label_pos_key = `[${tp[2][0]},${tp[2][1]},${tp[3][0]},${tp[3][1]}]`;
        tar_src_tp_map[tar_label_pos_key] = [src_label_pos_key, src_tp[0].split(".")[0], tar_tp[0].split(".")[0]];
      }
    }
    else {
      throw Error("Unsupported tracepoint kind: " + last_tp_tag);
    }
  }
  //everything not in tar_tps_on should be in tar_tps_off
  for (let tar_tp of tar_tracepoints) {
    if (tar_tp[0].split(".").at(-1).endsWith("-ALWAYSON")) tar_tps_on.push(tar_tp);
    else if (tar_tps_on.indexOf(tar_tp) < 0) tar_tps_off.push(tar_tp);
  }
  return [src_tps_on, tar_tps_on, src_tps_off, tar_tps_off, tar_src_tp_map];
}


async function _getTracepointPairsFilteredByCharmapAsync(debug_prefix, src_lang, src_code, tar_lang, tar_code, src_trace_rules, tar_trace_rules, charmap) {
  let src_matches = await __getQueryMatchesFromTraceRulesAsync(src_lang, src_code, src_trace_rules);
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "src_matches (not filtered) " + src_lang, src_matches); 
  let tar_matches = await __getQueryMatchesFromTraceRulesAsync(tar_lang, tar_code, tar_trace_rules);
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "tar_matches (not filtered) " + tar_lang, tar_matches); 
  //match labels by charmap
  function _bucketizeLabelMatches(bucket_ranges, tracepoints) {
    let bucket_dict = {};
    for (let [start, end] of bucket_ranges) {
      bucket_dict[`${start}-${end}`] = [];
    }
    for (let label_match of tracepoints) {
      let [label, nt_name, range] = label_match;
      if (label.split(".").at(-1).endsWith("-ALWAYSON")) {
        throw Error("Not handled -ALWAYSON.");
      }
      let [ch_start, ch_end, pos_start, pos_end] = range;
      let is_found = false;
      for (let [start, end] of bucket_ranges) {
        //check for intersection
        if (ch_start >= start && ch_end <= end) {
          if (is_found) throw Error("Unexpected");
          is_found = true;
          bucket_dict[`${start}-${end}`].push(label_match);
        }
      }
      if (is_found === false) {
        throw Error("Matched label that cannot be bucketized: " + JSON.stringify(label_match));
      }
    }
    return bucket_dict;
  }
  let src_buckets = charmap.map(x => x["src_c_r"]);
  let tar_buckets = charmap.map(x => x["tar_c_r"]);
  let bucketized_src_labels = _bucketizeLabelMatches(src_buckets, src_matches);
  let bucketized_tar_labels = _bucketizeLabelMatches(tar_buckets, tar_matches);
  //pairs of buckets
  let bucket_pairs = [];
  for (let ch_range_pair of charmap) {
    let {src_c_r, tar_c_r} = ch_range_pair;
    let src_key = src_c_r.join("-");
    let tar_key = tar_c_r.join("-");
    let src_labels = bucketized_src_labels[src_key];
    let tar_labels = bucketized_tar_labels[tar_key];
    if (!(Array.isArray(src_labels) && Array.isArray(tar_labels))) {
      throw Error("Unexpected");
    }
    bucket_pairs.push({
      src_c_r, tar_c_r, src_labels, tar_labels
    });
  }
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "bucket_pairs", bucket_pairs); 
  // filter out labels that are not matched
  let src_matches_all = [], tar_matches_all = [], tar_src_label_pos_log_map = {};
  let src_tracepoints_off = [], tar_tracepoints_off = [];
  for (let {src_c_r, tar_c_r, src_labels, tar_labels} of bucket_pairs) {
    //group them according to tag
    let src_grouped_matches = groupBy(src_labels, x => x[0].split(".")[1]);
    let tar_grouped_matches = groupBy(tar_labels, x => x[0].split(".")[1]);
    for (let k in src_grouped_matches) {
      let src_g = src_grouped_matches[k];
      if (k in tar_grouped_matches) {
        let tar_g = tar_grouped_matches[k];
        if (src_g.length === tar_g.length) {
          src_matches_all.push(...src_g);
          tar_matches_all.push(...tar_g);
          for (let i = 0; i < src_g.length; i++) {
            let sp = src_g[i][2];
            let tp = tar_g[i][2];
            let src_label_pos_key = `[${sp[2][0]},${sp[2][1]},${sp[3][0]},${sp[3][1]}]`;
            let tar_label_pos_key = `[${tp[2][0]},${tp[2][1]},${tp[3][0]},${tp[3][1]}]`;
            if (tar_label_pos_key in tar_src_label_pos_log_map) {
              throw Error("Unexpected! Label range duplicated");
            }
            tar_src_label_pos_log_map[tar_label_pos_key] = [src_label_pos_key, src_g[i][0].split(".")[0], tar_g[i][0].split(".")[0]];
          }
        } else {
          src_tracepoints_off.push(...src_g);
          tar_tracepoints_off.push(...tar_g);
        }
      } else {
        src_tracepoints_off.push(...src_grouped_matches[k]);
      }
    }
    for (let k in tar_grouped_matches) {
      if (!(k in src_grouped_matches)) tar_tracepoints_off.push(...tar_grouped_matches[k]);
    }
  }
  function _sort_tracepoints(tps) {
    tps.sort((a, b) => a[2][0] * 10000 + a[2][1] - (b[2][0] * 10000 + b[2][1]));
  }
  _sort_tracepoints(src_matches_all);
  _sort_tracepoints(tar_matches_all);
  _sort_tracepoints(src_tracepoints_off);
  _sort_tracepoints(tar_tracepoints_off);
  return [src_matches_all, tar_matches_all, tar_src_label_pos_log_map, src_tracepoints_off, tar_tracepoints_off];
}

function _tracepointsInstrument(code, lang, tracepoints, instrumentations) {
  let replacements = [];
  for (let match of tracepoints) {
    let [label, nt_name, range] = match;
    let [start_chpos, end_chpos, start_pos, end_pos] = range;
    let label_segs = label.split(".");
    let first_seg = label_segs[0];
    if (first_seg.startsWith("log-")) {
      let template = instrumentations[first_seg];
      if (template === undefined) {
        throw Error("instrumentation template not found: " + first_seg);
      }
      let original_text = code.slice(start_chpos, end_chpos);
      let repl_text = safeReplace(template, "@{MATCH}", original_text);
      repl_text = safeReplace(repl_text, "@{START_CH}", start_chpos);
      repl_text = safeReplace(repl_text, "@{END_CH}", end_chpos);
      repl_text = safeReplace(repl_text, "@{START_PL}", start_pos[0]);
      repl_text = safeReplace(repl_text, "@{START_PC}", start_pos[1]);
      repl_text = safeReplace(repl_text, "@{END_PL}", end_pos[0]);
      repl_text = safeReplace(repl_text, "@{END_PC}", end_pos[1]);
      replacements.push({
        "start_idx": start_chpos,
        "end_idx": end_chpos,
        "proposer_id": label,
        "repl": repl_text
      });
    }
  }
  let [instru_code, instru_origins, instru_maps] = stringReplacementsApply(code, replacements);
  console.log("[instru_code]:\n" + instru_code);
  return instru_code;
}

async function _runCodeAndCollectTraceAsync(runnable_code, lang) {
  let test_result = await standaloneRunAsync(runnable_code, lang, true);
  if ("error_msg" in test_result) {
    return [false, null, null, null, test_result["error_msg"]];
  }
  let {is_success, stdout, stderr} = test_result;
  let trace = _extractTraceFromStdout(stdout);
  return [is_success, trace, stdout, stderr, null];
}

async function _traceRunCollectAsync(debug_prefix, lang, code, driver_code, tracepoints, instrumentations, prepend_code, maximum_trace_count = 10000) {
  if (typeof prepend_code !== "string") throw Error("Prepend code is not string");
  prepend_code = safeReplace(prepend_code, "R_MAX_TRACE_COUNT_R", String(maximum_trace_count));
  prepend_code = safeReplace(prepend_code, "R_TRACE_LEVEL_R", String(99));
  //TODO: replace R_TRACE_ENABLE_LINES_R depends on lang
  let all_lines = [...Array(code.split("\n").length + 2).keys()];
  if (lang === "py") prepend_code = safeReplace(prepend_code, "R_TRACE_ENABLE_LINES_R",  "set(" + JSON.stringify(all_lines) + ")");
  else if (lang == "js") prepend_code = safeReplace(prepend_code, "R_TRACE_ENABLE_LINES_R", "new Set(" + JSON.stringify(all_lines) + ")");
  else throw Error("[_traceRunCollectAsync] Unknown lang: " + lang);

  let instru_code = _tracepointsInstrument(code, lang, tracepoints, instrumentations);
  let runnable_code = prepend_code + "\n" + instantiateTestCode(lang, driver_code, instru_code);
  console.log("[runnable_code]:\n" + runnable_code);
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "runnable_code (for trace) " + lang, runnable_code); 

  let [is_success, trace, stdout, stderr, error_msg] = await _runCodeAndCollectTraceAsync(runnable_code, lang);
  if (error_msg !== null) {
    await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "[ERROR] Trace failed to run", test_result["error_msg"]); 
    throw Error("Trace failed to run");
  }

  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "run STDERR " + lang, stderr); 
  if (stderr.indexOf("MyTraceError:") >= 0) {
    await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "[NOTICE] MyTraceError occured, stop early."); 
  }
  await _DEBUG_logviz_log_append_async(debug_prefix, "floc", "trace " + lang, trace); 
  return [[is_success, trace, stdout, stderr], runnable_code];
}

async function  _diagnoseTracePairsAsync(debug_prefix, src_lang, src_code, src_trace_result, tar_lang, tar_code, tar_trace_result, tar_src_label_pos_log_map, trace_equality) {
  let [src_is_success, src_trace, src_stdout, src_stderr] = src_trace_result;
  let [tar_is_success, tar_trace, tar_stdout, tar_stderr] = tar_trace_result;
  if (!src_is_success) throw Error("[_diagnoseTracePairsAsync] Unexpected! Trace of srouce is not successful.");
  function __traceErrorGen(idx, src_te, tar_te, expected_src_key, description) {
    return {
      idx, description,
      src_tentry: src_te, tar_tentry: tar_te, expect_src: expected_src_key,
    };
  }
  for (let i = 0; i < src_trace.length; i++) {
    let src_te = src_trace[i];
    if (tar_trace.length <= i) {
      return __traceErrorGen(i, src_te, null, null, "Incomplete TRACE");
    }
    let tar_te = tar_trace[i];
    let src_lpos = src_te["LPOS"], [src_dat, src_summ] = src_te["DATA"];
    let tar_lpos = tar_te["LPOS"], [tar_dat, tar_summ] = tar_te["DATA"];
    let tar_key = "[" + tar_lpos.join(",") + "]";
    let src_key = "[" + src_lpos.join(",") + "]";
    let [expected_src_key, src_logger, tar_logger] = tar_src_label_pos_log_map[tar_key];
    if (expected_src_key !== src_key) {
      return __traceErrorGen(i, src_te, tar_te, tar_src_label_pos_log_map[tar_key], "Mismatch TRACE POINT");
    }

    if (src_dat !== tar_dat) {
      let eq_found = false;
      if (src_logger in trace_equality) {
        if (tar_logger in trace_equality[src_logger]) {
          if (tar_dat in trace_equality[src_logger][tar_logger]) {
            let acceptable_values = trace_equality[src_logger][tar_logger][tar_dat];
            if (acceptable_values.indexOf(src_dat) >= 0) {
              eq_found = true;
            }
          }
        }
      }
      if (!eq_found) return __traceErrorGen(i, src_te, tar_te, tar_src_label_pos_log_map[tar_key], "Mismatch DATA");
      if (src_summ !== tar_summ) return __traceErrorGen(i, src_te, tar_te, tar_src_label_pos_log_map[tar_key], "Mismatch DATA Detail");
    }
  }
  return null;
}



/////////////////////////////////// ANALYSIS ///////////////////////////////////
/////////////////////////////////// ANALYSIS ///////////////////////////////////
/////////////////////////////////// ANALYSIS ///////////////////////////////////
/////////////////////////////////// ANALYSIS ///////////////////////////////////
/////////////////////////////////// ANALYSIS ///////////////////////////////////
/////////////////////////////////// ANALYSIS ///////////////////////////////////

window.TRACE_PRESETS_0__TRACEPOINTS_F = {
  "block_vars_py": trace_preset_0_tracepoints__block_vars_py,
  "block_vars_js": trace_preset_1_tracepoints__block_vars_js
}

window.TRACE_PRESETS_1__INSTRUN_F = {
  "block_vars_py": trace_preset_1_instrun__block_vars_py,
  "block_vars_js": trace_preset_1_instrun__block_vars_js
}

window.TRACE_PRESETS_2__CMP_F = {
  "block_vars_py_js": trace_preset_2_cmp__block_vars_py_js
}

let IND_SPACES = Array.from(new Array(50).keys()).map(x => (new Array(x).fill(" ")).join(""));
function _trace_instrumentor(code, matches, ind_matches, ind_size, instrumentations, additional_tmpl_resolver) {
  let max_trace_level = -1;
  function _get_ind_level(range) {
    let [ch_start, ch_end] = range;
    let ind_level = 0;
    for (let [tag, nt_name, ind_range] of ind_matches) {
      if (tag !== "ind") throw Error("Unexpected tag (not valid for indentation)");
      let [ind_ch_start, ind_ch_end] = ind_range;
      if (ch_start >= ind_ch_start && ch_end <= ind_ch_end) ind_level += 1;
    }
    return ind_size * ind_level;
  }
  let replacements = [];
  let {priority, templates} = instrumentations;
  function _replace_phs(text, range, match) {
    let [start_chpos, end_chpos, start_pos, end_pos] = range;
    let tracep_level = _get_ind_level(range) / ind_size;
    max_trace_level = Math.max(max_trace_level, tracep_level);
    let repl_text = safeReplace(text, "@{MATCH}", match);
    repl_text = safeReplace(repl_text, "@{MATCH_IND_LEVEL}", IND_SPACES[_get_ind_level(range)]);
    repl_text = safeReplace(repl_text, "@{TRACEP_LEVEL}", tracep_level);
    repl_text = safeReplace(repl_text, "@{START_CH}", start_chpos);
    repl_text = safeReplace(repl_text, "@{END_CH}", end_chpos);
    repl_text = safeReplace(repl_text, "@{START_PL}", start_pos[0]);
    repl_text = safeReplace(repl_text, "@{START_PC}", start_pos[1]);
    repl_text = safeReplace(repl_text, "@{END_PL}", end_pos[0]);
    repl_text = safeReplace(repl_text, "@{END_PC}", end_pos[1]);
    if (repl_text.indexOf("@{RESO:LOCALS}") >= 0) {
      let to_replace = additional_tmpl_resolver("RESO:LOCALS", range, match);
      repl_text = safeReplace(repl_text, "@{RESO:LOCALS}", to_replace);
    }
    return repl_text;
  }

  let disable_range_dict = {};
  for (let match of matches) {
    let [label, nt_name, range] = match;
    
    let label_segs = label.split(".");
    let first_seg = label_segs[0];
    let second_seg = label_segs[1];
    if (first_seg.startsWith("log-") || first_seg.startsWith("patch-")) {
      //check if disabled
      if (second_seg in disable_range_dict) {
        let is_disabled = false;
        for (let dis_range of disable_range_dict[second_seg]) {
          if (dis_range[0] <= range[0] && dis_range[1] >= range[1]) {is_disabled = true; break;}
        }
        if (is_disabled) continue;
      }
      //not disabled, normal
      let template = templates[first_seg];
      let temp_pri = priority.indexOf(first_seg);
      if (typeof template === "string") {
        throw Error("string template is not supported. Use before and after instead.");
      }

      let [start_chpos, end_chpos, start_pos, end_pos] = range;
      let {before, after} = template;
      let original_text = code.slice(start_chpos, end_chpos);

      if (before !== null) {
        let before_ins = _replace_phs(before, range, original_text);
        replacements.push({
          "_priority": - (temp_pri * 10000 + original_text.length),
          "start_idx": start_chpos,
          "end_idx": start_chpos,
          "proposer_id": label + "-BEF",
          "repl": before_ins
        });
      }

      if (after !== null) {
        let after_ins = _replace_phs(after, range, original_text);
        replacements.push({
          "_priority": + (temp_pri * 10000 + original_text.length),
          "start_idx": end_chpos,
          "end_idx": end_chpos,
          "proposer_id": label + "-AFT",
          "repl": after_ins
        });
      }
    } else if (first_seg === "TAG-DISABLE-INSTRU") {
      let disable_tag = label_segs[1];
      if (!(disable_tag in disable_range_dict)) disable_range_dict[disable_tag] = [];
      disable_range_dict[disable_tag].push(range);
    } else {
      throw Error("Unsupported tracepoint: " + first_seg);
    }
  }
  replacements.sort((a, b) => a.start_idx !== b.start_idx ? a.start_idx - b.start_idx : a._priority - b._priority);
  let [instru_code, instru_origins, instru_maps] = stringReplacementsApply(code, replacements);
  console.log("[instru_code]:\n" + instru_code);
  return [instru_code, max_trace_level];
}

function _fill_prepend_code(prepend, lang, trace_quota, trace_level, trace_enable_lines) {
  prepend = safeReplace(prepend, "R_MAX_TRACE_COUNT_R", String(trace_quota));
  prepend = safeReplace(prepend, "R_TRACE_LEVEL_R", String(trace_level));
  if (lang === "py") {
    prepend = safeReplace(prepend, "R_TRACE_ENABLE_LINES_R", "set(" + JSON.stringify(trace_enable_lines) + ")");
  } else if (lang === "js") {
    prepend = safeReplace(prepend, "R_TRACE_ENABLE_LINES_R", "new Set(" + JSON.stringify(trace_enable_lines) + ")");
  } else throw Error("[_fill_prepend_code] Unknown lang: " + lang);
  return prepend;
}


async function trace_preset_0_tracepoints__block_vars_py(code, trace_group) {
  let trace_rules = [
    // {
    //   "description": "log types of return values",
    //   "query": `(return_statement (_) @log-type.tag-return)`
    // },
    // {
    //   "description": "log all binary op type",
    //   "query": `(binary_operator) @log-type.tag-binaryexpr`
    // }
    {
      "description": "check before assignment and declaration",
      "group": "AD",
      "query": `(expression_statement [(assignment) (augmented_assignment)]) @log-symbols-before.tag-assdecl-beforemap`
    },
    {
      "description": "check before expr statements",
      "group": "EX",
      "query": `(expression_statement [(call)]) @log-symbols-before.tag-expr-beforemap`
    },
    {
      "description": "check before if stmt",
      "group": "CF",
      "query": `(if_statement (_)) @log-symbols-before.tag-ifbef-beforemap`
    },
    {
      "description": "check before for stmt",
      "group": "CF",
      "query": `(for_statement (_)) @log-symbols-before.tag-forbef-beforemap`
    },
    {
      "description": "check before while stmt",
      "group": "CF",
      "query": `(while_statement (_)) @log-symbols-before.tag-whilebef-beforemap`
    },
    {
      "description": "check before return stmt",
      "group": "CF",
      "query": `(return_statement (_)) @log-symbols-before.tag-returnbef-beforemap`
    },
    {
      "description": "disable some statements for lineno logging",
      "group": "ON",
      "query": `(decorated_definition (decorator) definition: (function_definition) @TAG-MATCH-OFF.tag-linecov-ALWAYSON)`
    },
    {
      "description": "disable def in class for lineno logging",
      "group": "ON",
      "query": `(class_definition body: (block (function_definition) @TAG-MATCH-OFF.tag-linecov-ALWAYSON))`
    },
    {
      "description": "log lineno before all stmt",
      "group": "ON",
      "query": `([(expression_statement) (break_statement) (continue_statement) (global_statement) (delete_statement) (assert_statement) (raise_statement) (return_statement) (import_statement) (import_from_statement) (while_statement) (if_statement) (for_statement) (decorated_definition) (function_definition) (class_definition) (with_statement)]) @patch-reclineno.tag-linecov-ALWAYSON`
    },
  ];
  let filtered_trace_rules = trace_rules.filter(x => (!trace_group) || x.group === "ON" || trace_group.includes(x.group));
  let matches = await __getQueryMatchesFromTraceRulesAsync("py", code, filtered_trace_rules);
  return {tracepoints: matches};
}

async function trace_preset_1_instrun__block_vars_py(code, tracepoints, test_template, trace_quota, enabled_lines, trace_level) {

  let instrumentations = {
    "priority": ["log-asbool", "log-type", "patch-reclineno", "log-symbols-before"],
    "templates": {
      "log-asbool": {
        "instype": "SIMPLE",
        "before": "__log_asbool([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], ",
        "after": ")",
      },
      "log-type": {
        "instype": "SIMPLE",
        "before": "__log_type([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], ", 
        "after": ")",
      },
      "log-symbols-before": {
        "instype": "SIMPLE",
        "before": "\n@{MATCH_IND_LEVEL}_log_symbol([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], locals(), @{TRACEP_LEVEL})\n@{MATCH_IND_LEVEL}",
        "after": null 
      },
      "patch-reclineno": {
        "instype": "SIMPLE",
        "before": "\n@{MATCH_IND_LEVEL}_rec_lno(@{START_PL});\n@{MATCH_IND_LEVEL}",
        "after": null 
      },
    },
    "ind_level_resolver": {
      "query": "[((block) @ind)]"
    }
  };

  let prepend = _TRACE_PREPEND_PY;
  let ind_matches = await __getQueryMatchesFromQueriesAsync("py", code, [instrumentations["ind_level_resolver"]["query"]]);

  function _get_py_ind_size(code) {
    let det_code = "\n" + code;
    const regexes = [
      /\ndef .*?:[ ]*\n([ ]+)\S/gm,
      /\ndef [^\)]*?\)[^\):]*:[ ]*\n([ ]+)\S/gm,
      /\ndef [^\)]*?\):[ ]*\n[ ]*\n([ ]+)\S/gm,
    ];
    let match = null;
    for (let regex of regexes) {
      match = regex.exec(det_code);
      if (match) break;
    }
    if (match === null || match === undefined) {
      throw Error("[INSTRU] Failed to get_py_ind_size. No match.");
    }
    if (match[1] === "  ") return 2;
    else if (match[1] === "    ") return 4;
    else {
      throw Error("[INSTRU] Failed to get_py_ind_size. Unexpected: '" + match[1] + "'");
      return 4;
    }
  }
  let ind_size = _get_py_ind_size(code);
  let [instrumented, max_trace_level] = _trace_instrumentor(code, tracepoints, ind_matches, ind_size, instrumentations);
  if (enabled_lines === "ALL") enabled_lines = [...Array(code.split("\n").length + 2).keys()];
  let filled_prepend = _fill_prepend_code(prepend, "py", trace_quota, trace_level, enabled_lines);
  let runnable = filled_prepend + safeReplace(test_template, "#TESTED_PROGRAM", instrumented);
  runnable = safeReplace(runnable, "\ntest()\n", "\ntry:\n    test()\nexcept Exception as e:\n    __log_exception(e)\n    raise e");
  let result = await _runCodeAndCollectTraceAsync(runnable, "py");
  return {instrumented, runnable, result, max_trace_level};
}


async function trace_preset_1_tracepoints__block_vars_js(code, trace_group) {
  let trace_rules = [
    {
      "description": "exclude decl/assign inside for from being traced",
      "group": "AD",
      "query": "(for_statement initializer: (_) @TAG-MATCH-OFF.tag-assdecl-beforemap condition: (_) @TAG-MATCH-OFF.tag-assdecl-beforemap increment: (_) @TAG-MATCH-OFF.tag-assdecl-beforemap)"
    },
    {
      "description": "check before assignment and declaration",
      "group": "AD",
      "query": `[(expression_statement [(assignment_expression) (augmented_assignment_expression)]) (lexical_declaration) (variable_declaration)] @log-symbols-before.tag-assdecl-beforemap`
    },
    {
      "description": "check before expr statements",
      "group": "EX",
      "query": `(expression_statement [(call_expression)]) @log-symbols-before.tag-expr-beforemap`
    },
    {
      "description": "check before if stmt",
      "group": "CF",
      "query": `(if_statement (_)) @log-symbols-before.tag-ifbef-beforemap`
    },
    {
      "description": "check before for stmt",
      "group": "CF",
      "query": `(for_statement (_)) @log-symbols-before.tag-forbef-beforemap`
    },
    {
      "description": "check before for_in stmt",
      "group": "CF",
      "query": `(for_in_statement (_)) @log-symbols-before.tag-forbef-beforemap`
    },
    {
      "description": "check before while stmt",
      "group": "CF",
      "query": `(while_statement (_)) @log-symbols-before.tag-whilebef-beforemap`
    },
    {
      "description": "check before return stmt",
      "group": "CF",
      "query": `(return_statement (_)) @log-symbols-before.tag-returnbef-beforemap`
    },
    {
      "description": "patch for (...) ... into for (...) { ... }",
      "group": "ON",
      "query": "(for_statement body: [(break_statement) (continue_statement) (do_statement) (expression_statement) (for_in_statement) (for_statement) (if_statement) (import_statement) (return_statement) (switch_statement) (throw_statement) (try_statement) (while_statement) (with_statement)] @patch-block.tag-ALWAYSON)"
    },
    {
      "description": "patch else ... into else { ... }",
      "group": "ON",
      "query": "(if_statement alternative: (else_clause [(break_statement) (continue_statement) (do_statement) (expression_statement) (for_in_statement) (for_statement) (if_statement) (import_statement) (return_statement) (switch_statement) (throw_statement) (try_statement) (while_statement) (with_statement) (variable_declaration) (lexical_declaration)] @patch-block.tag-ALWAYSON)) "
    },
    {
      "description": "patch if (..) xxx into if (..) { xxx }",
      "group": "ON",
      "query": "(if_statement consequence: [(break_statement) (continue_statement) (do_statement) (expression_statement) (for_in_statement) (for_statement) (if_statement) (import_statement) (return_statement) (switch_statement) (throw_statement) (try_statement) (while_statement) (with_statement) (variable_declaration) (lexical_declaration)] @patch-block.tag-ALWAYSON)"
    },
    {
      "description": "disable some statement for lineno logging",
      "group": "ON",
      "query": `(for_statement initializer: (_) @TAG-MATCH-OFF.tag-linecov-ALWAYSON condition: (_) @TAG-MATCH-OFF.tag-linecov-ALWAYSON increment: (_) @TAG-MATCH-OFF.tag-linecov-ALWAYSON)`
    },
    {
      "description": "log lineno before every statement",
      "group": "ON",
      "query": `([(function_declaration) (lexical_declaration) (variable_declaration) (break_statement) (continue_statement) (do_statement) (expression_statement) (for_in_statement) (for_statement) (if_statement) (import_statement) (return_statement) (switch_statement) (throw_statement) (try_statement) (while_statement) (with_statement)]) @patch-reclineno.tag-linecov-ALWAYSON`
    }
  ];
  let filtered_trace_rules = trace_rules.filter(x => (!trace_group) || x.group === "ON" || trace_group.includes(x.group));
  let matches = await __getQueryMatchesFromTraceRulesAsync("js", code, filtered_trace_rules);
  return {tracepoints: matches};
}


async function trace_preset_1_instrun__block_vars_js(code, tracepoints, test_template, trace_quota, enabled_lines, trace_level) {
  let instrumentations = {
    "priority": ["log-asbool", "log-type", "patch-reclineno", "log-symbols-before", "patch-block"],
    "templates": {
      "log-asbool": {
        "instype": "SIMPLE",
        "before": "__log_asbool([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], ",
        "after": ")",
      },
      "log-type": {
        "instype": "SIMPLE",
        "before": "__log_type([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], ", 
        "after": ")",
      },
      "log-symbols-before": {
        "instype": "SIMPLE",
        "before": "\n@{MATCH_IND_LEVEL}_log_symbol([@{START_PL},@{START_PC}, @{END_PL},@{END_PC}], @{RESO:LOCALS}, @{TRACEP_LEVEL});\n@{MATCH_IND_LEVEL}",
        "after": null 
      },
      "patch-reclineno": {
        "instype": "SIMPLE",
        "before": "\n@{MATCH_IND_LEVEL}_rec_lno(@{START_PL});\n@{MATCH_IND_LEVEL}",
        "after": null 
      },
      "patch-block": {
        "instype": "SIMPLE",
        "before": "{",
        "after": "}"
      }
    },
    "ind_level_resolver": {
      "query": "[((statement_block) @ind) ((class_body) @ind)]"
    },
    "symbol_table_resolver": {
      "query": `
      (   (lexical_declaration 
              (variable_declarator name: [(identifier) @id (array_pattern (identifier) @id)])
          ) 
          (_) @after
      )
      (   (variable_declaration 
              (variable_declarator name: [(identifier) @id (array_pattern (identifier) @id)])
          ) 
          (_) @after
      )
      (   (for_in_statement 
          left: [(identifier) @id (array_pattern (identifier) @id)] 
          body: (_) @after)
      )
      (function_declaration 
          parameters: (_ (identifier) @id) 
          body: (_) @after
      )`
    }
  };

  let prepend = _TRACE_PREPEND_JS;

  let ind_matches = await __getQueryMatchesFromQueriesAsync("js", code, [instrumentations["ind_level_resolver"]["query"]]);
  let symbol_tab_match_groups = await __getGroupedQueryMatchesFromQueriesAsync("js", code, [instrumentations["symbol_table_resolver"]["query"]]);
  function _additional_tmpl_resolver(tmpl_inner, range, match) {
    if (tmpl_inner === "RESO:LOCALS") {
      //find all symbols available at `range`
      let [start_idx, end_idx] = range;
      let symbol_dict = {};
      for (let mg of symbol_tab_match_groups) {
        let {pat_idx, caps} = mg;
        if (caps.length !== 2) throw Error("Unexpected! caps length != 2.");
        let [id_cap, after_cap] = caps;
        if (id_cap[0] !== "id" || after_cap[0] !== "after") throw Error("Unexpected! caps are not `id` and `after`");
        let id_str = code.slice(id_cap[2][0], id_cap[2][1]);
        let after_s = after_cap[2][0];
        let after_e = after_cap[2][1];
        if (start_idx >= after_s && end_idx <= after_e) {
          symbol_dict[id_str] = true;
        }
      }
      let arg_list = "{" + Array.from(Object.keys(symbol_dict)).map(x => `"${x}": ${x}`).join(", ") + "}";
      return arg_list;
    }
    else {
      throw Error("Unsupported additional tmpl. Failed to resolve: " + tmpl_inner);
    }
  }

  function _get_js_ind_size(code) {
    let det_code = "\n" + code;
    const regexes = [
      /\nfunction .*?\n([ ]+)\S/gm,
      /\nconst .*?=> {\n([ ]+)\S/gm,
      /\nvar .*?=> {\n([ ]+)\S/gm
    ];
    let match = null;
    for (let regex of regexes) {
      match = regex.exec(det_code);
      if (match) break;
    }
    if (match === null || match === undefined) {
      throw Error("[INSTRU] Failed to get_js_ind_size. No match.");
    }
    if (match[1] === "  ") return 2;
    else if (match[1] === "    ") return 4;
    else {
      throw Error("[INSTRU] Failed to get_js_ind_size. Unexpected.");
    }
  }
  let ind_size = _get_js_ind_size(code);
  let [instrumented, max_trace_level] = _trace_instrumentor(code, tracepoints, ind_matches, ind_size, instrumentations, _additional_tmpl_resolver);
  if (enabled_lines === "ALL") enabled_lines = [...Array(code.split("\n").length + 2).keys()];
  let filled_prepend = _fill_prepend_code(prepend, "js", trace_quota, trace_level, enabled_lines);
  let runnable = filled_prepend + safeReplace(test_template, "//TESTED_PROGRAM", instrumented);
  let test_replacement = "\ntry {\n    test();\n} catch (e) { __log_exception(e); throw e; }\n";
  runnable = safeReplace(runnable, "\ntest()\n", test_replacement);
  runnable = safeReplace(runnable, "\ntest();\n", test_replacement);
  let result = await _runCodeAndCollectTraceAsync(runnable, "js");
  return {instrumented, runnable, debugging: symbol_tab_match_groups, result, max_trace_level};
}


function _is_summ_eq(summ_s, summ_t) {
  if (summ_s === "UNKNOWN" || summ_t === "UNKNOWN") return summ_s === summ_t;
  if (!(Array.isArray(summ_s) && Array.isArray(summ_t))) {
    throw Error("Unexpected! summ_eq format not ['type', ...]");
  }
  let s_type = summ_s[0];
  let t_type = summ_t[0];
  if (s_type !== t_type) return false;
  if (s_type === "B" || s_type === "N") return summ_s[1] === summ_t[1];
  else if (s_type === "S") {
    if (summ_s[1] !== summ_t[1]) return false;
    if (summ_s[2] !== summ_t[2]) return false;
    return true;
  }
  else if (s_type === "A") {
    if (summ_s[1] !== summ_t[1]) return false;
    let any_neq = false;
    for (let i = 2; i < summ_s.length; i++) {
      if (!_is_summ_eq(summ_s[i], summ_t[i])) {
        any_neq = true; break;
      }
    }
    if (any_neq) return false;
    return true;
  }
  else if (s_type === "SET") {
    // is this okay?
    if (summ_s.length !== summ_t.length) return false;
    for (let i = 1; i < summ_t.length; i++) {
      let eq_not_found = true;  
      for (let j = 1; j < summ_s.length; j++) {
        let ss = summ_s[j];
        let st = summ_t[i];
        // need relaxed cmp for 
        if (_is_summ_eq(ss, st)) eq_not_found = false;
        // this is relaxed! If not the same type, then just think them as equal.
        if (ss[0] !== st[0]) eq_not_found = false;
      }
      if (eq_not_found) return false;
    }
    return true;
  }
  else if (s_type === "DICT") {
    let dict_s = {};
    let dict_t = {};
    for (let [k, v] of summ_s.slice(1)) {
      dict_s[k] = v;
    }
    for (let [k, v] of summ_t.slice(1)) {
      dict_t[k] = v;
    }
    for (let k in dict_s) {
      if (k in dict_t) {
        if (!_is_summ_eq(dict_s[k], dict_t[k])) return false;
      }
    }
    // Relaxed to only check common keys!
    return true;
  }
  else {
    throw Error("Unexpected! summ_eq unknown s_type: " + s_type);
  }
}

function _lines_pattern_check(lines, to_check) {
  for (let line of lines) {
    if (line === to_check) return true;
    if (typeof line === "string") {
      let from_to = line.split("-").map(x => parseInt(x));
      if (from_to.length !== 2) {
        throw Error("Invalid lines pattern: " + line);
      }
      if(to_check >= from_to[0] && to_check <= from_to[1]) return true;
    }
  }
  return false;
}

async function trace_preset_2_cmp__block_vars_py_js(tar_src_tracepoint_map, src_trace_result, tar_trace_result, is_last = false, traceconfig = null) {
  let trace_cmp_configs = [];
  if (traceconfig !== null && typeof traceconfig === "object" && "trace_cmp" in traceconfig) {
    trace_cmp_configs = traceconfig["trace_cmp"];
  }
  function _get_ignore_vars_for_src_line(lineno) {
    if (lineno < 0) return [];
    for(let {src_lines, vars_ignore} of trace_cmp_configs) {
      if ((!Array.isArray(src_lines) || !Array.isArray(vars_ignore))) {
        throw Error("Invalid traceconfig.trace_cmp.[]: src_lines or vars_ignore is invalid.");
      }
      if (_lines_pattern_check(src_lines, lineno)) {
        return vars_ignore;
      }
    }
    return [];
  }
  let is_src_pass = src_trace_result[0];
  let src_traces = src_trace_result[1];
  let is_tar_pass = tar_trace_result[0];
  let tar_traces = tar_trace_result[1];
  if (!is_src_pass) throw Error("Unexpected! Source program DID NOT PASS when traced.");
  let mismatch_info = null;
  for (let i = 0; i < tar_traces.length; i++) {
    let tar_t_entry = tar_traces[i];
    let corres_src_entry = i < src_traces.length ? src_traces[i] : {LPOS: "NOT_EXIST", DATA: "NOT_EXIST", COMT: "NOT_EXIST"};
    let sp = corres_src_entry["LPOS"];
    let sdata = corres_src_entry["DATA"];
    let s_comt = corres_src_entry["COMT"];
    let s_lines = s_comt === "NOT_EXIST" ? "NOT_EXIST" : JSON.parse(s_comt);
    let src_pos_key = (sp === "NOT_EXIST" ? "NOT_EXIST" : ("[" + sp.join(",") + "]"));

    // get src tp start line and check if in config
    let src_tp_start_line = sp === "NOT_EXIST" ? -1 : sp[0];
    let ignore_vars = _get_ignore_vars_for_src_line(src_tp_start_line + 1);

    if ("ERR_DATA" in tar_t_entry) {
      // exception case
      let errdata = tar_t_entry["ERR_DATA"];
      let t_comt = tar_t_entry["COMT"];
      let t_lines = JSON.parse(t_comt);
      mismatch_info = {
        "reason": "EXCEPTION",
        "break_idx": i,
        "actural_src_pk": src_pos_key,
        "src_cov_lines": s_lines,
        "tar_cov_lines": t_lines,
        //"tar_last_line": null //errdata has the last_lineno
        "tar_err_data": errdata,
        "src_data": sdata,
      }
      break;
    } else {
      // not exception case
      let tp = tar_t_entry["LPOS"];
      let tdata = tar_t_entry["DATA"];
      let t_comt = tar_t_entry["COMT"];
      let t_lines = JSON.parse(t_comt);
  
      let tar_pos_key = `[${tp.join(",")}]`;
      if (!(tar_pos_key in tar_src_tracepoint_map)) {
        throw Error("Unexpected! tar_pos_key not in tracepoint_map");
      }
      let [expected_src_pos_key, src_instru, tar_instru] = tar_src_tracepoint_map[tar_pos_key];
      
  
      if (src_pos_key !== expected_src_pos_key) {
        mismatch_info = {
          "reason": "Tracepoint MISMATCH",
          "break_idx": i,
          "tar_pk": tar_pos_key,
          "expected_src_pk": expected_src_pos_key,
          "actural_src_pk": src_pos_key,
          "src_cov_lines": s_lines,
          "tar_cov_lines": t_lines,
          "tar_data": tdata,
          "src_data": sdata,
          "mismatch_vnames": null
        }
        break;
      }
      else {
        //compare data
        let sdata_local_dict = JSON.parse(sdata[0]);
        let tdata_local_dict = JSON.parse(tdata[0]);
        let mismatch_vnames = [];
        for (let vname in tdata_local_dict) {
          if (vname in sdata_local_dict) {
            if (ignore_vars.indexOf(vname) < 0) { // ignore some vars
              let summ_s = sdata_local_dict[vname];
              let summ_t = tdata_local_dict[vname];
              if (_is_summ_eq(summ_s, summ_t) === false) {
                mismatch_vnames.push(vname);
              }
            }
          }
          else {
            //NOTE: ignore variables that are not common! 
            //mismatch_vnames.push(vname);
          }
        }
        if (mismatch_vnames.length > 0) {
          mismatch_info = {
            "reason": "Tracepoint Variable DIFFERENT VAL",
            "tar_pk": tar_pos_key,
            "break_idx": i,
            "expected_src_pk": expected_src_pos_key,
            "actural_src_pk": src_pos_key,
            "src_cov_lines": s_lines,
            "tar_cov_lines": t_lines,
            "tar_data": tdata,
            "src_data": sdata,
            "mismatch_vars": mismatch_vnames
          }
          break;
        }
      }
    }
  }
  if (mismatch_info === null) {
    if (is_tar_pass) {
      throw Error("WARN no trace difference and target PASS.");
    } else {
      throw Error("FAILED to find trace difference and target DID NOT PASS!");
    }
  }
  return {"result": mismatch_info, "src_cov_lines": mismatch_info["src_cov_lines"], "tar_cov_lines": mismatch_info["tar_cov_lines"]};
}

function user_friendly_data(data) {
  let var_dict = JSON.parse(data[0]);
  let result = {};
  function cov_val(val) {
    if (Array.isArray(val)) {
      let tp = val[0];
      if (tp === "S") return JSON.stringify(val[2]);
      else if (tp === "N") return Number(val[1]);
      else if (tp === "B") return Boolean(val[1]);
      else if (tp === "A") {
        let arr_dict = {};
        let arr_len = val[1];
        let elems = val.slice(2);
        let remaining_len = 0;
        if (elems.length !== arr_len) {
          remaining_len = arr_len - elems.length;
        }
        for (let i = 0; i < elems.length; i++) {
          let idx = String(i);
          if (idx.length == 1) idx = "0" + idx;
          arr_dict[":" + idx] = cov_val(elems[i]);
        }
        if (remaining_len > 0) {
          let idx = String(elems.length);
          arr_dict[":" + idx + "+"] = "...";
        }
        return arr_dict;
      }
      else if (tp === "DICT") {
        let dict_dict = {};
        let elems = val.slice(1);
        for (let i = 0; i < elems.length; i++) {
          let [k, v] = elems[i];
          dict_dict["KEY:" + cov_val(k)] = cov_val(v);
        }
        return dict_dict;
      }
      else {
        return val;
      }
    } else {
      if (val === "UNKNOWN") return "<???>";
      return val;
    }
  }
  for (let k in var_dict) {
    let v = var_dict[k];
    result[k] = cov_val(v);
  }
  return result;
}

function user_friendly_trace_diagnosis(mismatch_info) {
  let raw_reason = mismatch_info["reason"];
  let result = {
    "result": "TO_BE_SETTED",
    "aux_info": {},
    "py_vars": {},
    "js_vars": {},
  };
  if (raw_reason === "EXCEPTION") {
    result["result"] = "Trace Analysis: Trace comparison ends at a JavaScript exception before finding the diverging point.\n" + 
      "Consider more fine-grained tracing to narrow down the problem. But if the suspicious line is just one return statement, we cannot show the variables after executing it.";
    result["py_vars"] = "NOT AVAILABLE";
    result["js_vars"] = [mismatch_info["tar_err_data"][0], "Please refer to test result on the left for details of the exception."];
    result["aux_info"] = {
      // "diverging_step": mismatch_info["break_idx"],
      "py_suspicious_lines": mismatch_info["src_cov_lines"],
      "js_suspicious_lines": mismatch_info["tar_cov_lines"],
      "last_py_tracepoint": mismatch_info["actural_src_pk"],
    }
  }
  else if (raw_reason === "Tracepoint MISMATCH") {
    result["result"] = "Trace Analysis: Tracepoint statement MISMATCH (at the first diverging point).\n" + 
      "It means that the control flow diverge to different statements that are not corresponding.";
    result["py_vars"] = user_friendly_data(mismatch_info["src_data"]);
    result["js_vars"] = user_friendly_data(mismatch_info["tar_data"]);
    result["aux_info"] = {
      // "diverging_step": mismatch_info["break_idx"],
      "py_suspicious_lines": mismatch_info["src_cov_lines"],
      "js_suspicious_lines": mismatch_info["tar_cov_lines"],
      "last_py_tracepoint": mismatch_info["actural_src_pk"],
      "expected_py_tracepoint": mismatch_info["expected_src_pk"],
      "last_js_tracepoint": mismatch_info["tar_pk"],
    }
  }
  else if (raw_reason === "Tracepoint Variable DIFFERENT VAL") {
    result["result"] = "Trace Analysis: Variables have DIFFERENT values (at the first diverging point).\n" + 
      "Please check `mismatched_vars` and their values in py/js below.";
    result["py_vars"] = user_friendly_data(mismatch_info["src_data"]);
    result["js_vars"] = user_friendly_data(mismatch_info["tar_data"]);
    result["aux_info"] = {
      // "diverging_step": mismatch_info["break_idx"],
      "mismatched_vars": mismatch_info["mismatch_vars"],
      "py_suspicious_lines": mismatch_info["src_cov_lines"],
      "js_suspicious_lines": mismatch_info["tar_cov_lines"],
      "last_py_tracepoint": mismatch_info["actural_src_pk"],
      "last_js_tracepoint": mismatch_info["tar_pk"],
    }
  } 
  else {
    throw Error("Unexpected! Unknown raw_reason: " + raw_reason);
  }
  return result;
}