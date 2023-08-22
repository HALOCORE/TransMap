
let _PROGRAM_VERSION_SELFEXP = 1003;

let _CODEX_PROMPT_TEMPLATE_TRANS_NESTED_STMT_MAP2_2_PY_JS = `
##### Translate this code from Python to JavaScript

### Python
from typing import *
def f_gold(s: str) -> int:
    i = 0
    ans = 0
    chars = set()
    for j, c in enumerate(s):
        if c == ' ':
            continue
        elif c == '*':
            break
        while c in chars:
            chars.remove(s[i])
            i += 1
        chars.add(c)
        ans = max(ans, j - i + 1)
        ans = max(
          ans, i - j + 1
        )
    ans, i = ans * 2, i + 1
    return ans

### JavaScript
"use strict";
var f_gold = function(s) {
    var i = 0, ans = 0;
    var chars = new Set();
    for (var j = 0; j < s.length; j++) {
        if (s[j] === ' ') continue;
        else if (c === '*') {
            break;
        }
        while (chars.has(s[j])) {
            chars.delete(s[i]);
            i++;
        }
        chars.add(s[j]);
        ans = Math.max(ans, j - i + 1);
        ans = Math.max(ans, i - j + 1);
    }
    ans = ans * 2;
    i = i + 1;
    return ans;
}

##### Match the above translation statement by statement

### Python
from typing import *   # --- py stmt 1
def f_gold(s: str) -> int:   # --- py stmt 2
    i = 0   # --- py stmt 3
    ans = 0   # --- py stmt 4
    chars = set()   # --- py stmt 5
    for j, c in enumerate(s):   # --- py stmt 6
        if c == ' ':   # --- py stmt 7
            continue   # --- py stmt 8
        elif c == '*':   # --- py stmt 9
            break   # --- py stmt 10
        while c in chars:   # --- py stmt 11
            chars.remove(s[i])   # --- py stmt 12
            i += 1   # --- py stmt 13
        chars.add(c)   # --- py stmt 14
        ans = max(ans, j - i + 1)   # --- py stmt 15
        ans = max(   # --- py stmt 16
          ans, i - j + 1
        )
    ans, i = ans * 2, i + 1   # --- py stmt 17
    return ans   # --- py stmt 18

### JavaScript
"use strict";
var f_gold = function(s) {   // --- py stmt 2
    var i = 0, ans = 0;   // --- py stmt 3, py stmt 4
    var chars = new Set();   // --- py stmt 5
    for (var j = 0; j < s.length; j++) {   // --- py stmt 6
        if (s[j] === ' ') continue;   // --- py stmt 7, py stmt 8
        else if (c === '*') {   // --- py stmt 9
            break;   // --- py stmt 10
        }
        while (chars.has(s[j])) {   // --- py stmt 11
            chars.delete(s[i]);   // --- py stmt 12
            i++;   // --- py stmt 13
        }
        chars.add(s[j]);   // --- py stmt 14
        ans = Math.max(ans, j - i + 1);   // --- py stmt 15
        ans = Math.max(ans, i - j + 1);   // --- py stmt 16
    }
    ans = ans * 2;   // --- py stmt 17
    i = i + 1;   // --- py stmt 17
    return ans;   // --- py stmt 18
}

##### Translate this code from Python to JavaScript

### Python
{pycode}

### JavaScript
"use strict";
{jscode}

##### Match the above translation statement by statement
`;


// async function getLineMapAsync(debug_prefix, src_lang, tar_lang, src_code, tar_code, is_debug_mode = false) {
//   //params
//   let prompt_tpl = _CODEX_PROMPT_TEMPLATE_LINEMAP_DICT[src_lang][tar_lang];
//   if (typeof(prompt_tpl) !== "string") throw Error("Prompt not found.");
//   //step 1
//   let codex_linemap_text = await _getCodexLinemapTextAsync(debug_prefix, src_lang, tar_lang, prompt_tpl, src_code, tar_code, is_debug_mode);
//   //step 2
//   return await _linemapParseAsync(debug_prefix, codex_linemap_text, src_lang, tar_lang, src_code, tar_code, is_debug_mode);
// }

async function _getCodexLinemapTextAsync(debug_prefix, src_lang, tar_lang, prompt_tpl, src_code, tar_code, is_debug_mode = false) {
  const CODEX_TOK_LENGTH_FOR_MAP = 2560;
  if (prompt_tpl.indexOf(`{${src_lang}code}`) < 0) throw Error("prompt doesn't contain " + `{${src_lang}code}`);
  if (prompt_tpl.indexOf(`{${tar_lang}code}`) < 0) throw Error("prompt doesn't contain " + `{${tar_lang}code}`);
  let prompt = safeReplace(prompt_tpl, `{${src_lang}code}`, src_code);
  prompt = safeReplace(prompt, `{${tar_lang}code}`, tar_code);
  let comp_resp = await codexCompleteAsync_smart(prompt, ['#####'], CODEX_TOK_LENGTH_FOR_MAP, 0, true, 'code-davinci-002');
  console.log("[getLineMapAsync] ------ " + debug_prefix + " ------");
  console.log("[getLineMapAsync]", comp_resp);
  //TODO: get line content maps
  let choice0 = comp_resp["completion"]["choices"][0];
  if (is_debug_mode) { await _DEBUG_logviz_anyjson_async(debug_prefix, "linemapprompt", {"prompt": prompt, "resp": comp_resp}); }
  let {text, finish_reason} = choice0;
  return text;
}

async function _linemapParseAsync(debug_prefix, codex_linemap_text, src_lang, tar_lang, src_code, tar_code, is_debug_mode = false) {
  let norm_text = ("\n" + codex_linemap_text);
  if (norm_text.endsWith("\n\n")) norm_text = norm_text.slice(0, -2);
  if (norm_text.endsWith("\n")) norm_text = norm_text.slice(0, -1);
  let segs = norm_text.split("\n\n-----\n");
  if (segs.length !== norm_text.split("-----").length) throw Error("Unexpected linemap");
  if (segs[0] !== "") throw Error("Unexpected linemap");
  segs = segs.slice(1).map(x => {
    let lines = x.split("===>");
    let src_lines = null;
    if (lines[0].endsWith("\n")) {
      src_lines = lines[0].slice(0, -1).split("\n");
    }
    else {
      if (lines[0] !== "") throw Error("Unexpected text before '===>'. Empty expected. Get: " + lines[0]);
      src_lines = [];
    }
    let tar_lines = null;
    if (lines.length === 2 && lines[1] === "") {
      tar_lines = [];
    } else {
      tar_lines = lines.slice(1).map(x => {
        if (x.endsWith("\n")) x = x.slice(0, -1);
        //if (!x.startsWith("  ")) throw Error("Unexpected linemap");
        if (x.indexOf("\n") >= 0) throw Error("Unexpected linemap");
        return x; //x.slice(2);
      })
    }
    return {
      "src_lines": src_lines,
      "tar_lines": tar_lines
    }
  });
  console.log("[linemapraw]", segs);
  await _DEBUG_logviz_anyjson_async(debug_prefix, "linemapraw", segs);


  // ----- linemap -----
  function _get_line_range_from(code_lines_stripped, rest_idx, lines) {
    if (lines.length === 0) return [rest_idx, rest_idx];
    // space doesn't matter, content must match
    let matching_count = 0;
    for (let i = rest_idx; i < code_lines_stripped.length; i++) {
      let cur_line = code_lines_stripped[i];
      let tomatch_line = lines[matching_count].trim();
      if (cur_line !== tomatch_line) { 
        if (cur_line.startsWith("#") && (!tomatch_line.startsWith("#"))) continue;
        if (cur_line === ("") && (tomatch_line !== "")) continue;
        throw Error(`Not matching! Expecting: ${tomatch_line}, Get: ${cur_line}`); 
      }
      matching_count += 1;
      if (matching_count >= lines.length) return [rest_idx, i + 1];
    }
    throw Error(`Failed to match: \n${code_lines_stripped.slice(rest_idx)}\nExpecting:\n${lines}`);
  }
  let linemap = [];
  let src_l_rest_idx = 0;
  let tar_l_rest_idx = 0;
  let src_all_code_lines_stripped = src_code.split("\n").map(x => x.trim());
  let tar_all_code_lines_stripped = tar_code.split("\n").map(x => x.trim());
  for (let seg of segs) {
    let {src_lines, tar_lines} = seg;
    let [seg_src_start_idx, seg_src_end_idx] = _get_line_range_from(src_all_code_lines_stripped, src_l_rest_idx, src_lines);
    let [seg_tar_start_idx, seg_tar_end_idx] = _get_line_range_from(tar_all_code_lines_stripped, tar_l_rest_idx, tar_lines);
    src_l_rest_idx = seg_src_end_idx;
    tar_l_rest_idx = seg_tar_end_idx;
    linemap.push({
      "src_l_r": [seg_src_start_idx, seg_src_end_idx],
      "tar_l_r": [seg_tar_start_idx, seg_tar_end_idx]
    });
  }
  console.log("[linemap]", linemap);
  await _DEBUG_logviz_anyjson_async(debug_prefix, "linemapdict", linemap);

  let result = {
    "linemapraw": segs,
    "linemap": linemap,
  };
  return result;
}

async function _stmtmap2ParseAsync(debug_prefix, stmtmap2_text, src_lang, tar_lang, src_code, tar_code, diff_allowed, is_debug_mode = false) {
  let splitters = {
    "py": ["### Python", "# --- "],
    "js": ["### JavaScript\n\"use strict\";", "// --- "],
  };
  if (!(src_lang in splitters)) throw Error("unsupported src_lang: " + src_lang);
  let [src_seg_splitter, src_line_splitter] = splitters[src_lang];
  if (!(tar_lang in splitters)) throw Error("unsupported tar_lang: " + tar_lang);
  let [tar_seg_splitter, tar_line_splitter] = splitters[tar_lang];
  let tmp1 = stmtmap2_text.split(src_seg_splitter);
  if (tmp1.length !== 2) throw Error("Unexpected");
  let tmp2 = tmp1[1].split(tar_seg_splitter);
  if (tmp2.length !== 2) throw Error("Unexpected");
  let [src_anno_code, tar_anno_code] = [tmp2[0].trim(), tmp2[1].trim()];
  let anno_prefix = null;
  if (src_anno_code.indexOf(" --- py stmt ") >= 0) anno_prefix = "py stmt ";
  else if (src_anno_code.indexOf("--- Python statement ") >= 0) anno_prefix = "Python statement ";
  else throw Error("Unexpected! Don't know what is the anno comment format.");
  function __get_anno_stmts(anno_code, line_splitter) {
    let lines = anno_code.split("\n");
    return lines.map(x => {
      let tmp = x.split(line_splitter);
      if (tmp.length !== 2) return [x.trimRight(), null];
      let [stmt, anno] = tmp;
      stmt = stmt.trimRight();
      anno = anno.trim();
      let stmt_idxes = anno.split(",").map(x => parseInt(x.replace(anno_prefix, "")));
      return [stmt, stmt_idxes];
    });
  }
  let src_anno_stmts = __get_anno_stmts(src_anno_code, src_line_splitter);
  let tar_anno_stmts = __get_anno_stmts(tar_anno_code, tar_line_splitter);
  let stmtmapraw = {src_anno_stmts, tar_anno_stmts};
  // turn statement id into line number! Then turn target code lines into target line number.
  // Expected format:
  // [{"tar_line": x, "src_line": x, "tar_sameline": []}]
  // Expected usage:
  // Given a target tracepoint pos (trace_before), check for existing entry in stmtmap. If found, enable it.
  // Assuming tar_sameline entries are eliminated?
  // What about trace_after? Maybe don't trace after. Only trace "ENTERING" a block, or control-flow transition, not "LEAVING" a block.
  let ori_src_lines = src_code.split("\n").map(x => x.trimRight());
  let ori_tar_lines = tar_code.split("\n").map(x => x.trimRight());
  function __get_first_none_empty_idx(stmts) {
    for (let i = 0; i < stmts.length; i++) {
      if (stmts[i] !== "") return i;
    }
  }
  let ori_src_idx = __get_first_none_empty_idx(ori_src_lines) - 1;
  let ori_tar_idx = __get_first_none_empty_idx(ori_tar_lines) - 1;

  let src_stmt_idx_to_line_no = {};
  for (let [stmt, stmt_idxes] of src_anno_stmts) {
    ori_src_idx += 1;
    
    let is_ignoring = false;
    while(true) {
      if (typeof stmt !== "string") {
        throw Error("stmtmap unexpected! stmt = " + stmt);
      }
      if (typeof ori_src_lines[ori_src_idx] !== "string") {
        throw Error("stmtmap unexpected! ori_src_lines[ori_src_idx] = " + ori_src_lines[ori_src_idx] + " ori_src_idx:" + ori_src_idx);
      }
        //adhoc fix! The `###` line in python may or may not in the output. Skip if not in the output on the first line!
      if ((!stmt.startsWith("###")) && ori_src_lines[ori_src_idx].startsWith("### ") && ori_src_idx === 0) ori_src_idx += 1;
        //adhoc fix! Skip Segment headers.
      else if (ori_src_lines[ori_src_idx].startsWith("##### Segment IGNORE BEGIN")) { is_ignoring = true; ori_src_idx += 1;}
      else if (ori_src_lines[ori_src_idx].startsWith("##### Segment IGNORE END")) { is_ignoring = false; ori_src_idx += 1; }
      else if (is_ignoring) ori_src_idx += 1;
      else if (ori_src_lines[ori_src_idx].startsWith("##### Segment BEGIN") || ori_src_lines[ori_src_idx].startsWith("##### Segment END")) ori_src_idx += 1;
        //adhoc fix! Skip empty lines omitted in source map!
      else if ((stmt.trim() !== "") && ori_src_lines[ori_src_idx].trim() === "") ori_src_idx += 1;
      else break;
    }
    
    // need to go to next stmt
    if ((stmt.trim() === "") && ori_src_lines[ori_src_idx].trim() !== "" && (stmt_idxes === null || stmt_idxes.length === 0)) {ori_src_idx -= 1; continue;}

    if (stmt !== ori_src_lines[ori_src_idx]) {
      throw Error("Unexpected stmt map: src_line mismatch \n" + stmt + "\n" + ori_src_lines[ori_src_idx]);
    }
    if (stmt_idxes === null || stmt_idxes.length === 0) continue;
    if (stmt_idxes.length !== 1) throw Error("Unexpected stmt map: source shouldn't have more than one stmt_idx on a line");
    src_stmt_idx_to_line_no[stmt_idxes[0]] = ori_src_idx;
  }

  let tar_lno_2_src_lno = {};
  let src_lno_2_tar_lno = {};
  let diff_line_pairs = [];
  for (let [stmt, stmt_idxes] of tar_anno_stmts) {
    ori_tar_idx += 1;
    let is_ignoring = false;
    while(true) {
        //adhoc fix! The `###` line in python may or may not in the output. Skip if not in the output on the first line!
      if ((!stmt.startsWith("###")) && ori_tar_lines[ori_tar_idx].startsWith("### ") && ori_tar_idx === 0) ori_tar_idx += 1;
        //adhoc fix! Skip Segment headers.
      else if (ori_tar_lines[ori_tar_idx].startsWith("///// Segment IGNORE BEGIN")) { is_ignoring = true; ori_tar_idx += 1;}
      else if (ori_tar_lines[ori_tar_idx].startsWith("///// Segment IGNORE END")) { is_ignoring = false; ori_tar_idx += 1; }
      else if (is_ignoring) ori_tar_idx += 1;
      else if (ori_tar_lines[ori_tar_idx].startsWith("///// Segment BEGIN") || ori_tar_lines[ori_tar_idx].startsWith("///// Segment END")) ori_tar_idx += 1;
        //adhoc fix! Skip empty lines omitted in source map!
      else if ((stmt.trim() !== "") && ori_tar_lines[ori_tar_idx].trim() === "") ori_tar_idx += 1;
      else break;
    }

    // need to go to next stmt
    if ((stmt.trim() === "") && ori_tar_lines[ori_tar_idx].trim() !== "" && (stmt_idxes === null || stmt_idxes.length === 0)) {ori_tar_idx -= 1; continue;}

    if (stmt !== ori_tar_lines[ori_tar_idx]) {
      diff_line_pairs.push([ori_tar_idx, stmt, ori_tar_lines[ori_tar_idx]]);
      if (diff_line_pairs.length > diff_allowed) {
        let diff_msg = "More than " + diff_allowed + " line(s) of the translation are different from the source map: ";
        for (let [idx, stmt, ori_tar_line] of diff_line_pairs) diff_msg += "\n--- line " + idx + " ---" + "\n" + stmt + "\n" + ori_tar_line;
        throw Error(diff_msg);
      }
    }
    if (stmt_idxes === null || stmt_idxes.length === 0) continue;
    let src_lnos = stmt_idxes.map(x => {
      if (x in src_stmt_idx_to_line_no) return src_stmt_idx_to_line_no[x];
      else throw Error("Unexpected src_stmt_idx (not exist in line_no map): " + x);
    });
    tar_lno_2_src_lno[ori_tar_idx] = src_lnos;
    for (let src_lno of src_lnos) {
      if (!(src_lno in src_lno_2_tar_lno)) src_lno_2_tar_lno[src_lno] = [];
      src_lno_2_tar_lno[src_lno].push(ori_tar_idx);
    }
  }
  let linemap_s = [];
  let processed_src_lno = new Set();
  for (let src_lno in src_lno_2_tar_lno) {
    if (src_lno !== String(parseInt(src_lno))) throw Error("Unexpected src_lno_2_tar_lno: " + JSON.stringify(src_lno_2_tar_lno));
    src_lno = parseInt(src_lno);
    if (processed_src_lno.has(src_lno)) continue;
    let cov_src_lnos = [];
    let corres_tar_lnos = src_lno_2_tar_lno[src_lno];
    for (let tar_lno of corres_tar_lnos) {
      for (let map_src_lno of tar_lno_2_src_lno[tar_lno]) {
        if (!cov_src_lnos.includes(map_src_lno)) cov_src_lnos.push(map_src_lno);
        processed_src_lno.add(map_src_lno);
      }
    }
    linemap_s.push({
      "src_ls": cov_src_lnos,
      "tar_ls": corres_tar_lnos
    });
  }
  return {stmtmap: {tar_lno_2_src_lno, src_lno_2_tar_lno, linemap_s}, stmtmapraw};
}

function linemapAssertionChecks(src_lang, tar_lang, src_code, tar_code, linemap_result) {
  //TODO: check for 1-n n-1 correspondance
  //TODO: check fore string continuation
  let {linemap, linemapraw} = linemap_result;

  let linemap_pairs = [];
  for (let {src_l_r, tar_l_r} of linemap) {
    linemap_pairs.push([src_l_r, tar_l_r]);
  }
  linemap_pairs.sort(([[start1, end1], t1], [[start2, end2], t2]) => (start1 - start2) * 10000 + (end1 - end2));
  
  let found_bad_size = false;
  let line_counts = [];
  for (let pair of linemap_pairs) {
    let [[srcstart, srcend], [tarstart, tarend]] = pair;
    let src_len = srcend - srcstart;
    let tar_len = tarend - tarstart;
    console.log("src_line_c:", src_len, "tar_line_c:", tar_len);
    if (src_len > 1 && tar_len > 1) found_bad_size = true;
    line_counts.push([src_len, tar_len])
  }

  let is_success = found_bad_size ? false : true;
  let error_msg = null;
  if (found_bad_size) error_msg = "Found N-N line mapping";
  let checkresult = {"is_success": is_success, "error_msg": error_msg, "line_counts": line_counts, "program_version": _PROGRAM_VERSION_SELFEXP};
  return checkresult;
}




//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////// advanced version of stmtmap2ParseAsync
async function _stmtmap2ParseAdvancedAsync(debug_prefix, stmtmap2_text, src_lang, tar_lang, src_code, tar_code, diff_allowed, is_debug_mode = false) {
  let splitters = {
    "py": ["### Python", "# --- "],
    "js": ["### JavaScript", "// --- "],
  };
  if (!(src_lang in splitters)) throw Error("unsupported src_lang: " + src_lang);
  let [src_seg_splitter, src_line_splitter] = splitters[src_lang];
  if (!(tar_lang in splitters)) throw Error("unsupported tar_lang: " + tar_lang);
  let [tar_seg_splitter, tar_line_splitter] = splitters[tar_lang];
  let tmp1 = stmtmap2_text.split(src_seg_splitter);
  if (tmp1.length !== 2) throw Error("Unexpected");
  let tmp2 = tmp1[1].split(tar_seg_splitter);
  if (tmp2.length !== 2) throw Error("Unexpected");
  let [src_anno_code, tar_anno_code] = [tmp2[0].trim(), tmp2[1].trim()];
  // if tar_anno_code starts with '\"use strict\";', skip it
  if (tar_anno_code.trimLeft().startsWith("\"use strict\";")) {
    tar_anno_code = tar_anno_code.trimLeft().slice("\"use strict\";".length);
  }

  let anno_prefix = null;
  if (src_anno_code.indexOf(" --- py stmt ") >= 0) anno_prefix = "py stmt ";
  else if (src_anno_code.indexOf("--- Python statement ") >= 0) anno_prefix = "Python statement ";
  else throw Error("Unexpected! Don't know what is the anno comment format.");
  function __get_anno_stmts(anno_code, line_splitter) {
    let lines = anno_code.split("\n");
    return lines.map(x => {
      let tmp = x.split(line_splitter);
      if (tmp.length !== 2) return [x.trimRight(), null];
      let [stmt, anno] = tmp;
      stmt = stmt.trimRight();
      anno = anno.trim();
      let stmt_idxes = anno.split(",").map(x => parseInt(x.replace(anno_prefix, "")));
      return [stmt, stmt_idxes];
    });
  }
  let src_anno_stmts = __get_anno_stmts(src_anno_code, src_line_splitter);
  let tar_anno_stmts = __get_anno_stmts(tar_anno_code, tar_line_splitter);
  let stmtmapraw = {src_anno_stmts, tar_anno_stmts};
  // turn statement id into line number! Then turn target code lines into target line number.
  // Expected format:
  // [{"tar_line": x, "src_line": x, "tar_sameline": []}]
  // Expected usage:
  // Given a target tracepoint pos (trace_before), check for existing entry in stmtmap. If found, enable it.
  // Assuming tar_sameline entries are eliminated?
  // What about trace_after? Maybe don't trace after. Only trace "ENTERING" a block, or control-flow transition, not "LEAVING" a block.
  let ori_src_lines = src_code.split("\n").map(x => x.trimRight());
  let ori_tar_lines = tar_code.split("\n").map(x => x.trimRight());
  function __get_first_none_empty_idx(stmts) {
    for (let i = 0; i < stmts.length; i++) {
      if (stmts[i] !== "") return i;
    }
  }
  let ori_src_idx = __get_first_none_empty_idx(ori_src_lines) - 1;
  let ori_tar_idx = __get_first_none_empty_idx(ori_tar_lines) - 1;

  let src_stmt_idx_to_line_no = {};
  for (let [stmt, stmt_idxes] of src_anno_stmts) {
    ori_src_idx += 1;
    
    let is_ignoring = false;
    while(true) {
      if (typeof stmt !== "string") {
        throw Error("stmtmap unexpected! stmt = " + stmt);
      }
      if (typeof ori_src_lines[ori_src_idx] !== "string") {
        throw Error("stmtmap unexpected! ori_src_lines[ori_src_idx] = " + ori_src_lines[ori_src_idx] + " ori_src_idx:" + ori_src_idx);
      }
        //adhoc fix! The `###` line in python may or may not in the output. Skip if not in the output on the first line!
      if ((!stmt.startsWith("###")) && ori_src_lines[ori_src_idx].startsWith("### ") && ori_src_idx === 0) ori_src_idx += 1;
        //adhoc fix! Skip Segment headers.
      else if (ori_src_lines[ori_src_idx].startsWith("##### Segment IGNORE BEGIN")) { is_ignoring = true; ori_src_idx += 1;}
      else if (ori_src_lines[ori_src_idx].startsWith("##### Segment IGNORE END")) { is_ignoring = false; ori_src_idx += 1; }
      else if (is_ignoring) ori_src_idx += 1;
      else if (ori_src_lines[ori_src_idx].startsWith("##### Segment BEGIN") || ori_src_lines[ori_src_idx].startsWith("##### Segment END")) ori_src_idx += 1;
        //adhoc fix! Skip empty lines omitted in source map!
      else if ((stmt.trim() !== "") && ori_src_lines[ori_src_idx].trim() === "") ori_src_idx += 1;
      else break;
    }
    
    // need to go to next stmt
    if ((stmt.trim() === "") && ori_src_lines[ori_src_idx].trim() !== "" && (stmt_idxes === null || stmt_idxes.length === 0)) {ori_src_idx -= 1; continue;}

    if (stmt !== ori_src_lines[ori_src_idx]) {
      throw Error("Unexpected stmt map: src_line mismatch \n" + stmt + "\n" + ori_src_lines[ori_src_idx]);
    }
    if (stmt_idxes === null || stmt_idxes.length === 0) continue;
    if (stmt_idxes.length !== 1) throw Error("Unexpected stmt map: source shouldn't have more than one stmt_idx on a line");
    src_stmt_idx_to_line_no[stmt_idxes[0]] = ori_src_idx;
  }

  let tar_lno_2_src_lno = {};
  let src_lno_2_tar_lno = {};
  let diff_line_pairs = [];
  for (let [stmt, stmt_idxes] of tar_anno_stmts) {
    ori_tar_idx += 1;
    let is_ignoring = false;
    while(true) {
        //adhoc fix! The `###` line in python may or may not in the output. Skip if not in the output on the first line!
      if ((!stmt.startsWith("###")) && ori_tar_lines[ori_tar_idx].startsWith("### ") && ori_tar_idx === 0) ori_tar_idx += 1;
        //adhoc fix! Skip Segment headers.
      else if (ori_tar_lines[ori_tar_idx].startsWith("///// Segment IGNORE BEGIN")) { is_ignoring = true; ori_tar_idx += 1;}
      else if (ori_tar_lines[ori_tar_idx].startsWith("///// Segment IGNORE END")) { is_ignoring = false; ori_tar_idx += 1; }
      else if (is_ignoring) ori_tar_idx += 1;
      else if (ori_tar_lines[ori_tar_idx].startsWith("///// Segment BEGIN") || ori_tar_lines[ori_tar_idx].startsWith("///// Segment END")) ori_tar_idx += 1;
        //adhoc fix! Skip empty lines omitted in source map!
      else if ((stmt.trim() !== "") && ori_tar_lines[ori_tar_idx].trim() === "") ori_tar_idx += 1;
      else break;
    }

    // need to go to next stmt
    if ((stmt.trim() === "") && ori_tar_lines[ori_tar_idx].trim() !== "" && (stmt_idxes === null || stmt_idxes.length === 0)) {ori_tar_idx -= 1; continue;}

    if (stmt !== ori_tar_lines[ori_tar_idx]) {
      diff_line_pairs.push([ori_tar_idx, stmt, ori_tar_lines[ori_tar_idx]]);
      if (diff_line_pairs.length > diff_allowed) {
        let diff_msg = "More than " + diff_allowed + " line(s) of the translation are different from the source map: ";
        for (let [idx, stmt, ori_tar_line] of diff_line_pairs) diff_msg += "\n--- line " + idx + " ---" + "\n" + stmt + "\n" + ori_tar_line;
        throw Error(diff_msg);
      }
    }
    if (stmt_idxes === null || stmt_idxes.length === 0) continue;
    let src_lnos = stmt_idxes.map(x => {
      if (x in src_stmt_idx_to_line_no) return src_stmt_idx_to_line_no[x];
      else throw Error("Unexpected src_stmt_idx (not exist in line_no map): " + x);
    });
    tar_lno_2_src_lno[ori_tar_idx] = src_lnos;
    for (let src_lno of src_lnos) {
      if (!(src_lno in src_lno_2_tar_lno)) src_lno_2_tar_lno[src_lno] = [];
      src_lno_2_tar_lno[src_lno].push(ori_tar_idx);
    }
  }
  let linemap_s = [];
  let processed_src_lno = new Set();
  for (let src_lno in src_lno_2_tar_lno) {
    if (src_lno !== String(parseInt(src_lno))) throw Error("Unexpected src_lno_2_tar_lno: " + JSON.stringify(src_lno_2_tar_lno));
    src_lno = parseInt(src_lno);
    if (processed_src_lno.has(src_lno)) continue;
    let cov_src_lnos = [];
    let corres_tar_lnos = src_lno_2_tar_lno[src_lno];
    for (let tar_lno of corres_tar_lnos) {
      for (let map_src_lno of tar_lno_2_src_lno[tar_lno]) {
        if (!cov_src_lnos.includes(map_src_lno)) cov_src_lnos.push(map_src_lno);
        processed_src_lno.add(map_src_lno);
      }
    }
    linemap_s.push({
      "src_ls": cov_src_lnos,
      "tar_ls": corres_tar_lnos
    });
  }
  return {stmtmap: {tar_lno_2_src_lno, src_lno_2_tar_lno, linemap_s}, stmtmapraw};
}
////// end of advanced version