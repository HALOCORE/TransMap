let EVALEX_DATASET_PATH = "transmap/tests/evalex/";
let EVALEX_OUTPUT_PATH = "transmap/tests/tempex/";

function evalex_case_folder(cate, lang_pair_str) {
  return `transmap/tests/evalex/${cate}/${lang_pair_str}/`;
}

let _CODEX_PROMPT_TEMPLATE_TRANS = `##### Translate this code from Python into Modern JavaScript
### Python

print("hello")
    
### JavaScript
"use strict";
console.log("hello");

##### Translate this code from Python into Modern JavaScript
### Python

{pycode}
    
### JavaScript
"use strict";
`;

async function saveFilesInFolderAsync(folder, filedata) {
  await ensurePathAsync(folder);
  for (let file in filedata) {
    let content = filedata[file];
    if (typeof content !== "string") content = JSON.stringify(content, null, 2);
    await saveAnyTextfileAsync(folder + file, content);
  }
}

// await generate_dataset_baseline_async("gfg", "py_js_codex0")
async function generate_dataset_baseline_async(cate_key, langp_key) {
  let [src_lang, tar_lang, config_key] = parse_langp_key(langp_key);
  if (cate_key === "manual") {
    throw Error("Not for manual category");
  }
  // else if (cate_key === "gfg") {
  //   if (src_lang !== "py") throw Error("Unsupported src_lang: " + src_lang);
  //   let gfg_files = (await listDirAsync("py", "duoglot/tests/standalone/py/"))["filepaths"];
  //   console.log("gfg_files:", gfg_files);
  //   let gfg_bench_ids = gfg_files.map(x => x.split("/").at(-1).replace(".py", "_py"));
  //   return gfg_bench_ids;
  // }
  if (cate_key === "gfg") {
    const CODEX_TOK_LENGTH_FOR_TRANS = 512;
    if (src_lang !== "py") throw Error("Unsupported src_lang: " + src_lang);
    if (tar_lang !== "js") throw Error("Unsupported tar_lang: " + tar_lang);
    if (config_key !== "codex0") throw Error("Unsupported config_key: " + config_key);
    let gfg_files = (await listDirAsync("py", "duoglot/tests/standalone/py/"))["filepaths"];
    console.log("generate_dataset_baseline_async gfg_files:", gfg_files);
    let bench_ids = gfg_files.map(x => x.split("/").at(-1).replace(".py", "_py")).filter(x => x.startsWith("GFG_"));
    for (let bench_id of bench_ids) {
      //first create folder for it.
      let folder = EVALEX_DATASET_PATH + "gfg/" + langp_key + "/" + bench_id + "/";
      await ensurePathAsync(folder);
      
      let py_test_content = await anyfileAsync("duoglot/tests/standalone/py/" + bench_id.slice(0, -3) + ".py");
      let py_test_content_splits = py_test_content.split('"-----------------"\n');
      if (py_test_content_splits.length !== 3) throw Error("GFG python code unexpected.");

      let input_code = py_test_content_splits[1];
      let prompt_tpl = _CODEX_PROMPT_TEMPLATE_TRANS;
      let prompt = safeReplace(prompt_tpl, "{pycode}", input_code);
      let comp_resp = await codexCompleteAsync_smart(prompt, ['#####'], CODEX_TOK_LENGTH_FOR_TRANS, 0, true, 'code-davinci-002');
      console.log("[translate]", comp_resp);
      let target_code = comp_resp["completion"]["choices"][0]["text"];

      if (py_test_content.indexOf(input_code) < 0) throw Error("Unexpected: py_test_content not containing py code.");
      let py_test = safeReplace(py_test_content, input_code, "#TESTED_PROGRAM");
      let js_test_content = await anyfileAsync("duoglot/tests/_output_/standalone-exportscript/py_js/" + bench_id.slice(0, -3) + ".js");
      if (js_test_content.indexOf("//TRANSlATED_PLACEHOLDER_NO_OUTPUT_EXPECTED") < 0) throw Error("Unexpected test_file content: no js placeholder.");
      let js_test = safeReplace(js_test_content, "//TRANSlATED_PLACEHOLDER_NO_OUTPUT_EXPECTED", "//TESTED_PROGRAM");

      await saveFilesInFolderAsync(folder, {
        "source.py": input_code,
        "source_test.py": py_test,
        "target.js": target_code,
        "target_test.js": js_test,
      });
    }    
    return bench_ids;
  }
  else if (cate_key === "leetcode") {
    const CODEX_TOK_LENGTH_FOR_TRANS = 512;
    if (src_lang !== "py") throw Error("Unsupported src_lang: " + src_lang);
    if (tar_lang !== "js") throw Error("Unsupported tar_lang: " + tar_lang);
    if (config_key !== "codex0") throw Error("Unsupported config_key: " + config_key);
    let leet_files = (await listDirAsync("py", "duoglot/tests/staleetcode/py/"))["filepaths"];
    console.log("generate_dataset_baseline_async leet_files:", leet_files);
    let bench_ids = leet_files.map(x => x.split("/").at(-1).replace(".py", "_py"));
    for (let bench_id of bench_ids) {
      //first create folder for it.
      let folder = EVALEX_DATASET_PATH + "leetcode/" + langp_key + "/" + bench_id + "/";
      await ensurePathAsync(folder);
      
      let input_code = await anyfileAsync("duoglot/tests/staleetcode/pysep/" + bench_id.slice(0, -3) + ".py")
      let prompt_tpl = _CODEX_PROMPT_TEMPLATE_TRANS;
      let prompt = safeReplace(prompt_tpl, "{pycode}", input_code);
      let comp_resp = await codexCompleteAsync_smart(prompt, ['#####'], CODEX_TOK_LENGTH_FOR_TRANS, 0, true, 'code-davinci-002');
      console.log("[translate]", comp_resp);
      let target_code = comp_resp["completion"]["choices"][0]["text"];


      let py_test_content = await anyfileAsync("duoglot/tests/staleetcode/py/" + bench_id.slice(0, -3) + ".py");
      if (py_test_content.indexOf(input_code) < 0) throw Error("Unexpected test_file content: Not containing py code.");
      let py_test = safeReplace(py_test_content, input_code, "#TESTED_PROGRAM");
      let js_test_content = await anyfileAsync("duoglot/tests/_output_/staleetcode-exportscript/py_js/" + bench_id.slice(0, -3) + ".js");
      if (js_test_content.indexOf("//TRANSlATED_PLACEHOLDER_NO_OUTPUT_EXPECTED") < 0) throw Error("Unexpected test_file content: no js placeholder.");
      let js_test = safeReplace(js_test_content, "//TRANSlATED_PLACEHOLDER_NO_OUTPUT_EXPECTED", "//TESTED_PROGRAM");

      await saveFilesInFolderAsync(folder, {
        "source.py": input_code,
        "source_test.py": py_test,
        "target.js": target_code,
        "target_test.js": js_test,
      });
    }    
    return bench_ids;
  }
  else if (cate_key === "humanevalx") {
    const CODEX_TOK_LENGTH_FOR_TRANS = 1024;
    if (src_lang !== "py") throw Error("Unsupported src_lang: " + src_lang);
    if (tar_lang !== "js") throw Error("Unsupported tar_lang: " + tar_lang);
    if (config_key !== "codex0") throw Error("Unsupported config_key: " + config_key);

    let h_folders = (await listDirAsync("py", EVALEX_DATASET_PATH + "humanevalx/" + langp_key + "/"))["dirpaths"];
    console.log("generate_dataset_baseline_async h_folders:", h_folders);
    let bench_ids = h_folders.map(x => x.split("/").at(-2)).filter(x => x.startsWith("H"));
    console.log("generate_dataset_baseline_async bench_ids:", bench_ids);
    for (let bench_id of bench_ids) {
      //first create folder for it.
      let folder = EVALEX_DATASET_PATH + "humanevalx/" + langp_key + "/" + bench_id + "/";
      await ensurePathAsync(folder);
      
      let input_code = await anyfileAsync(folder +  "source.py");
      let prompt_tpl = _CODEX_PROMPT_TEMPLATE_TRANS;
      let prompt = safeReplace(prompt_tpl, "{pycode}", input_code);
      let comp_resp = await codexCompleteAsync_smart(prompt, ['#####'], CODEX_TOK_LENGTH_FOR_TRANS, 0, true, 'code-davinci-002');
      console.log("[translate]", comp_resp);
      let target_code = comp_resp["completion"]["choices"][0]["text"];


      // let py_test_content = await anyfileAsync(folder +  "source_test.py");
      // if (py_test_content.indexOf("#TESTED_PROGRAM") < 0) throw Error("Unexpected test_file content: Not containing #TESTED_PROGRAM");
      // let py_test = py_test_content;
      // let js_test_content = await anyfileAsync(folder +  "target_test.js");
      // if (js_test_content.indexOf("//TESTED_PROGRAM") < 0) throw Error("Unexpected test_file content: Not containing //TESTED_PROGRAM");
      // let js_test = js_test_content;

      await saveFilesInFolderAsync(folder, {
        // "source.py": input_code,
        // "source_test.py": py_test,
        "target.js": target_code,
        // "target_test.js": js_test,
      });
    }    
    return bench_ids;
  }
  throw Error("generate_dataset_baseline_async Unknown cate_key: " + cate_key);
}


async function get_dataset_bench_ids_async(cate_key, langp_key) {
  //read cate_key / langp_key / all sub folders. 
  //The sub folder name is the bench_id 
  let folder = EVALEX_DATASET_PATH + cate_key + "/" + langp_key;
  let listdir_resp = await listDirAsync(null, folder);
  if ("error_msg" in listdir_resp) {
    toast_error("Cannot get dataset benchmark ids: " + listdir_resp["error_msg"]);
    throw Error("Cannot get benchmark ids");
  }
  let dirs = listdir_resp["dirpaths"].map(x => x.split("/").at(-2));
  return dirs;
}

async function get_dataset_bench_ids_with_filter_async(cate_key, langp_key, filter) {
  //read  cate_key / langp_key / all sub folders. 
  //The sub folder name is the bench_id 
  function _filter_exec(filter, files) {
    let [ftype, fval0] = filter;
    if (ftype === "HAS") {
      if (!files.includes(fval0)) {return false;}
      return true;
    }
    else if (ftype === "NO") {
      if (files.includes(fval0)) {return false;}
      return true;
    }
    else if (ftype === "OR") {
      for (let sfilter of filter.slice(1)) {
        if (_filter_exec(sfilter, files)) return true;
      }
      return false;
    }
    else if (ftype === "AND") {
      for (let sfilter of filter.slice(1)) {
        if (!_filter_exec(sfilter, files)) return false;
      }
      return true;
    }
    else throw Error("Unknown filter type: " + ftype);
  }

  let folder = EVALEX_DATASET_PATH + cate_key + "/" + langp_key;
  let listdir_resp = await listDirAsync(null, folder);
  if ("error_msg" in listdir_resp) {
    toast_error("Cannot get dataset benchmark ids: " + listdir_resp["error_msg"]);
    throw Error("Cannot get benchmark ids");
  }
  let dirs = listdir_resp["dirpaths"].map(x => [x.split("/").at(-2), x]);
  let filtered_ids = [];
  for (let [bench_id, bench_path] of dirs) {
    let bench_listdir_resp = await listDirAsync(null, bench_path);
    if ("error_msg" in bench_listdir_resp) {
      toast_error("Cannot get dataset benchmark ids: " + bench_listdir_resp["error_msg"]);
      throw Error("Cannot read bench directory of: " + bench_id);
    }
    let files = bench_listdir_resp["filepaths"].map(x => x.split("/").at(-1));
    if (_filter_exec(filter, files)) filtered_ids.push(bench_id);
  }
  return filtered_ids;
}


async function read_benchmark_async(cate_key, langp_key, bench_id, filename_filter) {
  //Read all files under folder: cate_key / langp_key / bench_id. Return a dictionary of {filename:content}. 
  //json files are parsed. Others are text. If cannot read, return null.
  let folder_path = evalex_case_folder(cate_key, langp_key) + bench_id + "/";
  let folder_filelist = await listDirAsync(null, folder_path);
  console.log("folder_filelist:", folder_filelist);
  let {filepaths, dirpaths} = folder_filelist;
  if (dirpaths.length !== 0) console.warn("WARNING: benchmark folder has unexpected subfolders: ", dirpaths);
  let bench_data = {};
  for (let filepath of filepaths) {
    let fname = filepath.split("/").at(-1);
    if (Array.isArray(filename_filter) && filename_filter.indexOf(fname) < 0) continue;
    let content = await anyfileAsync(filepath);
    bench_data[fname] = content;
  }
  return bench_data;
}

async function save_file_in_benchmark_async(cate_key, langp_key, bench_id, filename, content, allow_override) {
  let folder_path = evalex_case_folder(cate_key, langp_key) + bench_id + "/";
  if (filename.indexOf("/") >= 0) throw Error("Invalid filename");
  let folder_filelist = await listDirAsync(null, folder_path);
  let {filepaths} = folder_filelist;
  let sfiles = filepaths.map(x => x.split("/").at(-1));
  if (sfiles.indexOf(filename) >= 0 && allow_override !== true) {
    return false;
  } 
  let filepath = folder_path + filename;
  await saveAnyTextfileAsync(filepath, content);
  return true;
}


/////////////////////// linemap / charmap related BEGIN ///////////////////////

// function get_line_range(line_idxs) {
//   if (line_idxs.length === 0) return null;
//   let start = line_idxs.at(0);
//   let end = start;
//   for (let i = 0; i < line_idxs.length; i++) {
//     let expected = start + i;
//     if (expected !== line_idxs[i]) throw Error("line indexes are not consecutive.");
//     end = expected;
//   }
//   return [start, end];
// }

function get_intersect_range(range1, range2) {
  let [s1, e1] = range1;
  let [s2, e2] = range2;
  if (s2 >= s1) {
    if (s2 <= e1) return [s2, Math.min(e1, e2)];
    else return null;
  }
  else {
    if (e2 >= s1) return [s1, Math.min(e1, e2)];
    else return null;
  }
}

function get_union_range(range1, range2) {
  let [s1, e1] = range1;
  let [s2, e2] = range2;
  if (s2 > e1 || e2 < s1) throw Error("Cannot union into a single range.");
  return [Math.min(s1, s2), Math.max(e1, e2)];
}

function normalize_or_check_stmtmap(stmtmap) {
  let new_stmtmap = {tar_lno_2_src_lno: {}, src_lno_2_tar_lno: {}, linemap_s: []};
  if ("linemap_s" in stmtmap) {
    new_stmtmap.linemap_s = stmtmap["linemap_s"];
    if ("tar_lno_2_src_lno" in stmtmap) {
      throw Error("Check not implemented");
    } else {
      if ("src_lno_2_tar_lno" in stmtmap) {
        throw Error("Check not implemented");
      } else {
        // need to generate tar_lno_2_src_lno and src_lno_2_tar_lno from linemap_s
        for (let {src_ls, tar_ls} of new_stmtmap.linemap_s) {
          for (let srcl of src_ls) new_stmtmap.src_lno_2_tar_lno[srcl] = tar_ls;
          for (let tarl of tar_ls) new_stmtmap.tar_lno_2_src_lno[tarl] = src_ls;
        }
        return new_stmtmap;
      }
    }
  } else {
    throw Error("Case where `linemap_s` not existing is not considered.");
  }
}

function is_all_int_covered(min, max, int_list, uncovered_checkerf = null) {
  let cov_dict = {};
  for (let i = min; i <= max; i++) cov_dict[i] = false;
  for (let ii of int_list) cov_dict[ii] = true;
  for (let i in cov_dict) {
    if (cov_dict[i] === false) {
      if (uncovered_checkerf === null) {
        return false;
      } else {
        let is_ok = uncovered_checkerf(parseInt(i));
        if (is_ok !== true) return false;
      }
    }
  }
  return true;
}

function get_modified_stmtmap(stmtmap, repl_start, repl_end, repl_line_count, tar_code = null) {
  let tar_code_lines = tar_code !== null ? tar_code.split("\n") : null;
  // helper function
  function _get_modified_linemap(linemap, repl_start, repl_end, repl_line_count) {
    if (repl_start === repl_end) {
      throw Error("Insertion modification is not supported yet.");
    }
    let lc_delta = repl_line_count - (repl_end - repl_start);
    let new_lmap = [];
    let fusing_elems = [];

    function fuse(elems, tar_delta) {
      let union_src = null;
      let union_tar = null;
      for (let {src_l_r, tar_l_r} of elems) {
        if (union_src === null) union_src = src_l_r;
        else union_src = get_union_range(union_src, src_l_r);
        if (union_tar === null) union_tar = tar_l_r;
        else union_tar = get_union_range(union_tar, tar_l_r);
      }
      if (union_src === null) {
        throw Error("fuse failed. union_src is null");
      }
      if (union_tar === null) {
        throw Error("fuse failed. union_tar is null");
      }
      let result = {"src_l_r": union_src, "tar_l_r": [union_tar[0], union_tar[1] + tar_delta]};
      if (!(Number.isInteger(result.src_l_r[0]) && Number.isInteger(result.src_l_r[1]) && Number.isInteger(result.tar_l_r[0]) && Number.isInteger(result.tar_l_r[1]))) {
        throw Error("_get_modified_linemap fuse failed: \ntar_delta = " + tar_delta + "\nelems = " + JSON.stringify(elems));
      }
      return result;
    }

    for (let elem of linemap) {
      let {src_l_r, tar_l_r} = elem;
      let [tar_s, tar_e] = tar_l_r;

      if (tar_e <= repl_start) {
        new_lmap.push(elem);
      }
      else if (tar_s >= repl_end) {
        if (fusing_elems !== null) {
          new_lmap.push(fuse(fusing_elems, lc_delta));
          fusing_elems = null;
        }
        new_lmap.push({src_l_r, "tar_l_r":[tar_s + lc_delta, tar_e + lc_delta]});
      }
      else {
        //cases: [4, 4] not for repl [4, 6]
        //cases: [6, 6] not for repl [4, 6]
        //cases: [5, 5] for repl [4, 6]
        //cases: [3, 5] for repl [4, 6]
        //cases: [5, 7] for repl [4, 6]
        // summary: intersection not at the edge
        let inter_range = get_intersect_range(tar_l_r, [repl_start, repl_end]);
        if (inter_range === null) throw Error("Unexpected");
        fusing_elems.push(elem);
      }
    }
    if (fusing_elems !== null) {
      new_lmap.push(fuse(fusing_elems, lc_delta));
      fusing_elems = null;
    }
    for (let {src_l_r, tar_l_r} of new_lmap) {
      if (!(Number.isInteger(src_l_r[0]) && Number.isInteger(src_l_r[1]) && Number.isInteger(tar_l_r[0]) && Number.isInteger(tar_l_r[1]))) {
        throw Error("_get_modified_linemap invalid linemap result: \n" + JSON.stringify(new_lmap));
      }
    }
    return new_lmap;
  }
  function _linemap_s_to_linemap(linemap_s, src_uncovered_checkerf = null, tar_uncovered_checkerf = null) {
    let linemap = [];
    for (let {src_ls, tar_ls} of linemap_s) {
      let src_l_min = Math.min(...src_ls);
      let src_l_max = Math.max(...src_ls);
      let tar_l_min = Math.min(...tar_ls);
      let tar_l_max = Math.max(...tar_ls);
      if (src_l_max === -Infinity || src_l_min === Infinity || tar_l_min === Infinity || tar_l_max === -Infinity) {
        throw Error("Unexpected src/tar_l_min/max. Likely due to invalid linemap_s! \n" + JSON.stringify(linemap_s));
      }
      if (!is_all_int_covered(src_l_min, src_l_max, src_ls)) throw Error("Not all src_ls are covered! " + src_l_min + "-" + src_l_max + " src_ls:" + JSON.stringify(src_ls));
      if (!is_all_int_covered(tar_l_min, tar_l_max, tar_ls, tar_uncovered_checkerf)) throw Error("Not all tar_ls are covered! " + tar_l_min + "-" + tar_l_max + " tar_ls:" + JSON.stringify(tar_ls));
      linemap.push({
        "src_l_r": [src_l_min, src_l_max + 1],
        "tar_l_r": [tar_l_min, tar_l_max + 1]
      });
    }
    return linemap;
  }
  function _linemap_to_linemap_s(linemap) {
    let linemap_s = [];
    for (let {src_l_r, tar_l_r} of linemap) {
      let src_ls = [], tar_ls = [];
      for (let i = src_l_r[0]; i < src_l_r[1]; i++) src_ls.push(i);
      for (let i = tar_l_r[0]; i < tar_l_r[1]; i++) tar_ls.push(i);
      if (tar_ls.length === 0 || src_ls.length === 0) {
        throw Error("linemap zero range cannot be converted to linemap_s: \n" + JSON.stringify(linemap));
      }
      linemap_s.push({src_ls, tar_ls});
    }
    return linemap_s;
  }  
  let {linemap_s} = stmtmap;
  let linemap = _linemap_s_to_linemap(linemap_s, null, i => tar_code_lines ? tar_code_lines[i].trim() === "}" : false);
  let modified_linemap = _get_modified_linemap(linemap, repl_start, repl_end, repl_line_count);
  let modified_linemap_s = _linemap_to_linemap_s(modified_linemap);
  let new_stmtmap = normalize_or_check_stmtmap({linemap_s: modified_linemap_s});
  return new_stmtmap;
}

function injectErrorLinesInCode(code, error_inject, stmtmap) {
  if (error_inject === "KEEP") return [code, stmtmap];
  let code_lines = code.split("\n");
  let {line_start, line_end, content, replacement} = error_inject;
  let before_lines = code_lines.slice(0, line_start);
  let repl_lines = code_lines.slice(line_start, line_end);
  let after_lines = code_lines.slice(line_end);
  let before_str = before_lines.length > 0 ? before_lines.join("\n") + "\n" : "";
  let repl_str = repl_lines.join("\n");
  let after_str = after_lines.length > 0 ? "\n" + after_lines.join("\n"): "";
  if (repl_str !== content) {
    throw Error("Unexpected. Replacing lines are not equal to expected content:\n----- TO BE REPLACED -----\n" + repl_str + "\n----- EXPECTED CONTENT -----\n" + content);
  }
  let new_code = before_str + replacement + after_str;
  let replacement_line_count = replacement.split("\n").length;
  let new_stmtmap = get_modified_stmtmap(stmtmap, line_start, line_end, replacement_line_count, code);
  return [new_code, new_stmtmap];
}

function injectMultipleErrorsInCode(code, error_injects) {
  
  let code_lines = code.split("\n");
  for (let error_inject of error_injects) {
    let {line_start, line_end, content, replacement} = error_inject;
    let before_lines = code_lines.slice(0, line_start);
    let repl_lines = code_lines.slice(line_start, line_end);
    let after_lines = code_lines.slice(line_end);
    
    let repl_str = repl_lines.join("\n");
    if (repl_str !== content) {
      throw Error("Unexpected. Replacing lines are not equal to expected content:\n----- TO BE REPLACED -----\n" + repl_str + "\n----- EXPECTED CONTENT -----\n" + content);
    }

    code_lines[line_start] = replacement;
    for (let i = line_start + 1; i < line_end; i++) {
      code_lines[i] = null;
    }
  }

  let result = code_lines.filter(x => x !== null).join("\n");
  return result;
}

function revertErrorLinesInCode(code, error_inject, stmtmap) {
  // step 1: compute the range corresponding to injected code (current code)
  // step 2: create a reverse injection and call injectErrorLinesInCode
  let {line_start, line_end, content, replacement} = error_inject;
  let replacement_line_count = replacement.split("\n").length;
  let new_line_end = line_start + replacement_line_count;
  let rev_inject = {line_start, line_end: new_line_end, content: replacement, replacement: content};
  let [rev_code, rev_stmtmap] = injectErrorLinesInCode(code, rev_inject, stmtmap);
  return [rev_code, rev_stmtmap];
}

function linemapToCharmap(text_src, text_tar, linemap) {
  function line_range_to_char_range_gen(text) {
    let text_lines = text.split("\n");
    let line_lengths = text_lines.map(x => x.length);
    let acc_lengths = [0];
    for (let ll of line_lengths) { acc_lengths.push(acc_lengths.at(-1) + ll + 1); }
    return function line_range_to_char_range(line_range) {
      let [start_l, end_l] = line_range;
      let start_char = acc_lengths[start_l];
      let end_char = acc_lengths[end_l];
      if (end_char === undefined) throw Error("Unexpected");
      return [start_char, end_char];
    }
  }
  let src_line_r_to_char_r = line_range_to_char_range_gen(text_src);
  let tar_line_r_to_char_r = line_range_to_char_range_gen(text_tar);
  let charmap = [];
  for ({src_l_r, tar_l_r} of linemap) {
    let src_char_range = src_line_r_to_char_r(src_l_r);
    let tar_char_range = tar_line_r_to_char_r(tar_l_r);
    charmap.push({
      "src_c_r": src_char_range, 
      "tar_c_r": tar_char_range
    });
  }
  return charmap;
}

//====================== linemap / charmap related END =======================


//====================== Instrumentation related BEGIN =======================

function stringReplacementsApply(s, replacements) {
  let segs = [];
  let seg_accum_length = 0;
  let range_origins = []; // array of [start_idx, end_idx, proposer_id]
  let last_end_idx = 0;
  let repl_maps = [];
  for (const replacement of replacements) {
    let {start_idx, end_idx, proposer_id, repl} = replacement;
    let before_repl = s.slice(last_end_idx, start_idx);
    if (start_idx < last_end_idx) {
      throw Error("Unexpected. Invalid string replacements: overlap. start_idx: " + start_idx + " end_idx: " + end_idx + " last_end_idx: " + last_end_idx);
    }
    if (end_idx < start_idx) throw Error("Unexpected. Invalid string replacements: negative");
    
    segs.push(before_repl);
    seg_accum_length += before_repl.length;
    
    range_origins.push([seg_accum_length, seg_accum_length + repl.length, proposer_id]);
    repl_maps.push([start_idx, end_idx, seg_accum_length, seg_accum_length + repl.length]);

    segs.push(repl);
    seg_accum_length += repl.length;

    last_end_idx = end_idx;
  }
  segs.push(s.slice(last_end_idx));
  let result_str = segs.join("");
  return [result_str, range_origins, repl_maps];
}
//====================== Instrumentation related END =======================


//====================== test_driver related BEGIN =======================
function instantiateTestCode(lang, test_driver_code, code) {
  let repl_ph = null;
  if (lang === "py") repl_ph = "#TESTED_PROGRAM";
  else if (lang === "js") repl_ph = "//TESTED_PROGRAM";
  else throw Error("Unrecognized lang: " + lang);
  let inst_code = safeReplace(test_driver_code, repl_ph, code);
  return inst_code;
}
//====================== test_driver related END =======================