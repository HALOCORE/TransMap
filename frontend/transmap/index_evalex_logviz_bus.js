"use strict";

//////////////////////////////// SYNC INIT ////////////////////////////////

// -------------------
_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:baseline_export_run_one"] = async (request_resolver_asyncf) => {
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  let bench_id = (await get_val_async("bench_id"))["val"];
  try {
    await button_async("load_data");
    await button_async("run_py");
    await button_async("run_js");
    let result_py = JSON.parse((await get_val_async("resultpy"))["val"]);
    let result_js = JSON.parse((await get_val_async("resultjs"))["val"]);
    if (result_py["is_success"] === false) throw Error("Unexpected! py code failed to run.");
    if (result_js["is_success"] === false) {
      // export this case if js run is not successful
      await button_async("save_err");
    }
  } catch (e) {
    let err_msg = "FAILED baseline_export: " + bench_id + "\n" + e;
    throw Error(err_msg);
  }
}

_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:baseline_export_run_all"] = async (request_resolver_asyncf) => {
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  await button_async("load_ids");
  let bench_ids = JSON.parse((await get_val_async("bench_id_list"))["val"]);
  console.log("bench_ids:", bench_ids);
  for (let i = 0; i < bench_ids.length; i++) {
    let bench_id = bench_ids[i];
    await set_val_async("auto_n_status", `${i + 1}/${bench_ids.length}`);
    await set_val_async("bench_id", bench_id);
    await automation_async("auto_run_one");
  }
}

_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:stmtmap_run_one_bench_id"] = async (request_resolver_asyncf) => {
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  //TODO ...
  let category = (await get_val_async("category"))["val"];
  let langpair = (await get_val_async("langpair"))["val"];
  let bench_id = (await get_val_async("bench_id"))["val"];

  try {
    await button_async("load_prompt");
    await button_async("load_code");
    await button_async("b_completion");
    await button_async("parseviz_stmtmap");
  } catch (e) {
    // TODO: send error message.
    let err_msg = "FAILED stmtmap: " + bench_id + "\n" + e;
    throw Error(err_msg);
  }

  let completion = (await get_val_async("completion"))["val"];
  let stmtmap = JSON.parse((await get_val_async("linemap"))["val"]);

  let folder = `dynamic/${category}/${langpair}/${bench_id}/`;
  let saver = _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"];
  await saver({"filepath_0": folder + "stmtmap_completion.txt", "filecontent_0": completion});
  await saver({"filepath_0": folder + "stmtmap.json", "filecontent_0": JSON.stringify(stmtmap, null, 2)});
}

_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:stmtmap_run_all_bench_ids"] = async (request_resolver_asyncf) => {
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  let category = (await get_val_async("category"))["val"];
  let langpair = (await get_val_async("langpair"))["val"];
  let errpath = `dynamic/${category}/${langpair}/stmtmap_errors.json`;
  await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_delete"]({"filepath_0": errpath});

  await button_async("load_ids");
  let bench_ids = JSON.parse((await get_val_async("bench_id_list"))["val"]);
  console.log("bench_ids:", bench_ids);
  let error_map = {};
  for (let i = 0; i < bench_ids.length; i++) {
    let bench_id = bench_ids[i];
    try {
      // update N status 
      await set_val_async("auto_n_status", `${i + 1}/${bench_ids.length}`);
      await set_val_async("bench_id", bench_id);
      await automation_async("auto_stmtmap_1");
    } catch (e) {
      error_map[bench_id] = String(e);
    }
  }

  await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"]({
    "filepath_0": errpath, 
    "filecontent_0": JSON.stringify(error_map, null, 2)
  });
}

// usable in dynamic ui / dynamic_user / dynamic_userstudy
_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:dynamic_auto_iterate"] = async (request_resolver_asyncf) => {
  // TODO: load data -> get error_injects -> loop_over:
  //    - errorinject_idx -> shrinked auto-b 
  //    - save run result to output folder and logviz db.
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  
  let trace_level_range = JSON.parse((await get_val_async("trace_level_range"))["val"]);
  let trace_group = trace_level_range[2].split(",").filter(x => x !== "");
  let stmtmap_mode = trace_level_range[3];
  let tracecmp_mode = trace_level_range[4];
  let tpmatch_mode = trace_level_range[5];
  
  if (tpmatch_mode === "TpA") await set_val_async("check_tag_eq_select", "TAG_RELAX");
  else if (tpmatch_mode === "TpC") await set_val_async("check_tag_eq_select", "TAG_EQ");
  else throw Error("Unsupported tracecmp_mode: " + tracecmp_mode);

  try {
    // symptom check
    await button_async("b_symptom_check"); 
    let result_symptom = JSON.parse((await get_val_async("result_symptom"))["val"]);
    let run_result = JSON.parse((await get_val_async("raw_jsrun"))["val"]);

    let is_syntax_err = result_symptom["category"][0] === "SYNTAX_ERR";
    if (is_syntax_err) {
      throw Error("Syntax Error detected. Cannot perform tracing.");
    } else {
      // identify tracepoints
      await set_val_async("trace_group", JSON.stringify(trace_group));
      await button_async("b_py_tracepoints");
      await button_async("b_js_tracepoints");

      // map tracepoints
      await button_async("b_map_block");
    
      await set_val_async("matched_covered_lines_py", `"ALL"`);
      await set_val_async("matched_covered_lines_js", `"ALL"`);

      let max_trace_level = trace_level_range[1];
      for (let i = trace_level_range[0]; i <= max_trace_level; i++) {
        await set_val_async("trace_level", i);

        await button_async("b_py_instrun");
        await button_async("b_js_instrun");
        
        if (tracecmp_mode === "CmpF") await button_async("b_traces_cmp");
        else if (tracecmp_mode === "CmpL") await button_async("b_traces_cmp_last");
        else throw Error("Unsupported tracecmp_mode: " + tracecmp_mode);

        let js_max_trace_level = safeDigitsParseInt((await get_val_async("max_trace_level_js"))["val"]);
        let py_max_trace_level = safeDigitsParseInt((await get_val_async("max_trace_level_py"))["val"]);
        if (i >= js_max_trace_level && i >= py_max_trace_level) break;
      }
    }
  } catch (e) {
    throw Error("Auto-Iterate Failed:" + String(e));
  }
}

// usable in dynamic ui
_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:dynamic_run_one_bench_id"] = async (request_resolver_asyncf) => {
  // TODO: load data -> get error_injects -> loop_over:
  //    - errorinject_idx -> shrinked auto-b 
  //    - save run result to output folder and logviz db.
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  await automation_async("remove_output");
  
  let category = (await get_val_async("category"))["val"];
  let bench_id = (await get_val_async("bench_id"))["val"];
  let langpair = (await get_val_async("langpair"))["val"];
  let trace_level_range = JSON.parse((await get_val_async("trace_level_range"))["val"]);
  let trace_group = trace_level_range[2].split(",").filter(x => x !== "");
  let stmtmap_mode = trace_level_range[3];
  let tracecmp_mode = trace_level_range[4];
  let tpmatch_mode = trace_level_range[5];
  

  if (stmtmap_mode === "GEN") {
    await automation_async("load_data_basic");
  } else if (stmtmap_mode === "REU") {
    await automation_async("load_data");
  } else {
    throw Error("Unknown stmtmap_mode: " + stmtmap_mode);
  }
  let error_injects = JSON.parse((await get_val_async("errorinjects"))["val"]);

  if (tpmatch_mode === "TpA") await set_val_async("check_tag_eq_select", "TAG_RELAX");
  else if (tpmatch_mode === "TpC") await set_val_async("check_tag_eq_select", "TAG_EQ");
  else throw Error("Unsupported tracecmp_mode: " + tracecmp_mode);

  let total_err_msgs = {};
  for (let i = 0; i < error_injects.length; i++) {
    try {
      // set and apply inj
      await set_val_async("auto_1_status", `${i + 1}/${error_injects.length}`);
      await set_val_async("errorinject_idx", i);
      await button_async("b_apply_errinject_basic");

      // symptom check
      await button_async("b_symptom_check"); 
      let result_symptom = JSON.parse((await get_val_async("result_symptom"))["val"]);
      let run_result = JSON.parse((await get_val_async("raw_jsrun"))["val"]);
      await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"]({
        "filepath_0": `dynamic/${category}/${langpair}/${bench_id}/symptom.${i}.json`, 
        "filecontent_0": JSON.stringify({result_symptom, run_result}, null, 2)
      });

      let is_syntax_err = result_symptom["category"][0] === "SYNTAX_ERR";
      let cmp_results = [];
      if (is_syntax_err) {
        cmp_results = "SYNTAX_ERROR_NOT_APPLICABLE";
      } else {
        // gen map
        if (stmtmap_mode === "GEN") {
        await button_async("b_gen_stmtmap");
        } else if (stmtmap_mode === "REU") {
          // not generating new stmtmap
          await button_async("b_apply_errinject");
        } else {
          throw Error("Unknown stmtmap_mode: " + stmtmap_mode);
        }
        
        // identify tracepoints
        await set_val_async("trace_group", JSON.stringify(trace_group));
        await button_async("b_py_tracepoints");
        await button_async("b_js_tracepoints");

        // map tracepoints
        await button_async("b_map_block");
      
        await set_val_async("matched_covered_lines_py", `"ALL"`);
        await set_val_async("matched_covered_lines_js", `"ALL"`);
  
        let max_trace_level = trace_level_range[1];
        for (let i = trace_level_range[0]; i <= max_trace_level; i++) {
          await set_val_async("trace_level", i);

          await button_async("b_py_instrun");
          await button_async("b_js_instrun");
          
          if (tracecmp_mode === "CmpF") await button_async("b_traces_cmp");
          else if (tracecmp_mode === "CmpL") await button_async("b_traces_cmp_last");
          else throw Error("Unsupported tracecmp_mode: " + tracecmp_mode);

          let cmp_result = JSON.parse((await get_val_async("cmp_result"))["val"]);
          cmp_results.push(cmp_result);

          let js_max_trace_level = safeDigitsParseInt((await get_val_async("max_trace_level_js"))["val"]);
          let py_max_trace_level = safeDigitsParseInt((await get_val_async("max_trace_level_py"))["val"]);
          if (i >= js_max_trace_level && i >= py_max_trace_level) break;
        }
      }
      
      await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"]({
        "filepath_0": `dynamic/${category}/${langpair}/${bench_id}/trace_cmp_result.${i}.json`, 
        "filecontent_0": JSON.stringify(cmp_results, null, 2)
      });

    } catch (e) {
      total_err_msgs[i] = "FAILED:" + String(e);
    }
  }

  if (Object.keys(total_err_msgs).length > 0) {
    await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"]({
      "filepath_0": `dynamic/${category}/${langpair}/${bench_id}/errors.json`, 
      "filecontent_0": JSON.stringify(total_err_msgs, null, 2)
    });
    throw Error("(Error Saved) FAILED " + bench_id + "\n" + JSON.stringify(total_err_msgs, null, 2));
  }
}

// usable in dynamic ui
_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:dynamic_run_all_bench_ids"] = async (request_resolver_asyncf) => {
  // TODO: get all bench_ids -> loop_over:
  //    check existing output, decide to skip or run.
  //    if run, set bench_id and trigger dynamic_run_one_bench_id
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  // await button_async("b_load_ids"); //Use loaded ids.

  let category = (await get_val_async("category"))["val"];
  let langpair = (await get_val_async("langpair"))["val"];
  let errpath = `dynamic/${category}/${langpair}/bench_errors.json`;
  await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_delete"]({"filepath_0": errpath});

  let bench_ids = JSON.parse((await get_val_async("bench_id_list"))["val"]);
  console.log("bench_ids:", bench_ids);
  let error_map = {};
  for (let i = 0; i < bench_ids.length; i++) {
    let bench_id = bench_ids[i];
    try {
      // update N status 
      await set_val_async("auto_n_status", `${i + 1}/${bench_ids.length}`);
      await set_val_async("bench_id", bench_id);
      await automation_async("run_one_bench_id");
    } catch (e) {
      error_map[bench_id] = String(e);
    }
  }

  await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"]({
    "filepath_0": errpath, 
    "filecontent_0": JSON.stringify(error_map, null, 2)
  });
}

// usable in dynamic ui
_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:dynamic_sourcemap_export_one"] = async (request_resolver_asyncf) => {
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  let category = (await get_val_async("category"))["val"];
  let bench_id = (await get_val_async("bench_id"))["val"];
  let langpair = (await get_val_async("langpair"))["val"];
  await automation_async("load_data_basic");
  
  async function _save_srcmap_fdr_async(filename, content) {
    return await _LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"]({
      "filepath_0": `dynamic/${category}/_srcmap_${langpair}/${bench_id}/${filename}`, 
      "filecontent_0": content
    });
  }

  let error_injects = JSON.parse((await get_val_async("errorinjects"))["val"]);
  for (let i = 0; i < error_injects.length; i++) {
    // set and apply inj
    await set_val_async("auto_1_status", `${i + 1}/${error_injects.length}`);
    await set_val_async("errorinject_idx", i);
    await button_async("b_apply_errinject_basic");

    await button_async("b_symptom_check"); 
    let result_symptom = JSON.parse((await get_val_async("result_symptom"))["val"]);
    let is_syntax_err = result_symptom["category"][0] === "SYNTAX_ERR";
    if (is_syntax_err) {
      console.warn("SYNTAX_ERR, skip: ", bench_id, i);
      continue;
    } 
    try {
      await button_async("b_gen_stmtmap");
    } catch (e) {
      console.log("FAILED:", e);
    }
    // save inputjs, rawmap_completion, stmtmap, linemap_raw all to file
    let inputjs = (await get_val_async("inputjs"))["val"];
    await _save_srcmap_fdr_async(`smap_target.${i}.js`, inputjs);
    let rawmap_completion = (await get_val_async("rawmap_completion"))["val"];
    await _save_srcmap_fdr_async(`smap_rawmap_completion.${i}.txt`, rawmap_completion);
    let stmtmap = (await get_val_async("stmtmap"))["val"];
    if (stmtmap !== "-") stmtmap = JSON.parse(stmtmap);
    await _save_srcmap_fdr_async(`smap_stmtmap.${i}.json`, JSON.stringify(stmtmap, null, 2));
    let linemap_raw = (await get_val_async("linemapraw"))["val"];
    if (linemap_raw !== "-") linemap_raw = JSON.parse(linemap_raw);
    await _save_srcmap_fdr_async(`smap_linemap_raw.${i}.json`, JSON.stringify(linemap_raw, null, 2));
  }
}

_LOGVIZ_DEBUG_BUS_REACTIVE_META_REGISTRY["rx:dynamic_sourcemap_export_all"] = async (request_resolver_asyncf) => {
  let {get_val_async, set_val_async, automation_async, button_async} = rx_func_gen(request_resolver_asyncf);
  let bench_ids = JSON.parse((await get_val_async("bench_id_list"))["val"]);
  console.log("bench_ids:", bench_ids);
  for (let i = 0; i < bench_ids.length; i++) {
    let bench_id = bench_ids[i];
    await set_val_async("label_export_srcmap", `   ExpoMap:${i + 1}/${bench_ids.length}`);
    await set_val_async("bench_id", bench_id);
    await automation_async("export_srcmap_one");
  }
}


// TODO: a seperated UI for inspecting dynamic evaluation
//  - aggregation script: How to use existing aggregation in debug?
//  - Refactor the agg interpreter. 

// -------------------

_LOGVIZ_DEBUG_BUS_REGISTRY["echo"] = async (msg) => {
  return {"result": msg["input1"] + "\nhahahaha"};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["runcode"] = async (msg) => {
  let code = msg["input"];
  let test_driver = "test_driver" in msg ? msg["test_driver"] : null;
  let lang = msg["lang"];
  let testing_code = code;
  if (test_driver !== null) {
    if (lang === "py") testing_code = safeReplace(test_driver, "#TESTED_PROGRAM", code);
    else if (lang === "js") testing_code = safeReplace(test_driver, "//TESTED_PROGRAM", code);
    else throw Error("Unknown language: " + lang);
  }
  else {
    console.warn("runcode: test_driver not provided");
  }
  let test_result = await standaloneRunAsync(testing_code, lang, true);
  return {"result": test_result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["extract_symptom_js"] = async (msg) => {
  let {input, test_driver, jsrun_result_str} = msg;
  let jsrun_result = JSON.parse(jsrun_result_str);
  let {error, is_success, stderr, stdout, timespan} = jsrun_result;
  let category = null;
  let norm_lineno = null;
  let lineno_offset = test_driver.split("\n").indexOf("//TESTED_PROGRAM");
  if (is_success === true) {
    category = ["SUCCESS", null];
  }
  else if (is_success !== false) {
    category = ["UNEXPECTED", "is_success_invalid_value", jsrun_result["error_msg"]];
  } else {
    let {error_msg, error_type, line_content, lineno} = error;
    if (error_type === "Error: MyLogError") {
      category = ["BEHAVIOR_MISMATCH", null];
    }
    else if(error_type === "SyntaxError:") {
      category = ["SYNTAX_ERR", error_msg];
      norm_lineno = lineno_offset >= 0 ? lineno[1] - lineno_offset : - 10000 - lineno[1];
    }
    else {
      category = ["RUNTIME_ERR", error_type, error_msg];
      norm_lineno = lineno_offset >= 0 ? lineno[1] - lineno_offset : - 10000 - lineno[1];
    }
  }
  return {"result": {category, lineno: norm_lineno}};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["loadfile"] = async (msg) => {
  let fpath = msg["filepath"];
  let content = await anyfileAsync(fpath);
  return {"result": content};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["runjs_duoglot_test"] = async (msg) => {
  let code = msg["code"];
  let test_driver = msg["test_driver"];
  let test_code_split = test_driver.split("//TRANSlATED_PLACEHOLDER_NO_OUTPUT_EXPECTED");
  if (test_code_split.length !== 2) throw Error("Unexpected");
  var test_code = test_code_split[0] + code + test_code_split[1];
  var test_result = await standaloneRunAsync(test_code, "js", true);
  return {"result": test_result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["translate_py_js"] = async (msg) => {
  let py_code = msg["py_code"];
  let prompt_tpl = _CODEX_PROMPT_TEMPLATE_TRANS;
  let prompt = safeReplace(prompt_tpl, `{pycode}`, py_code);
  let comp_resp = await codexCompleteAsync_smart(prompt, ['#####'], 2048, 0, true, 'code-davinci-002');
  let choice0 = comp_resp["completion"]["choices"][0];
  return {"result": choice0["text"]};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["translate_py_js_with_temp_and_nonce"] = async (msg) => {
  let py_code = msg["py_code"];
  let nonce = parseInt(msg["nonce_str"]);
  let temp = parseFloat(msg["temp_str"]);
  let prompt_tpl = _CODEX_PROMPT_TEMPLATE_TRANS;
  let prompt = safeReplace(prompt_tpl, `{pycode}`, py_code);
  let comp_resp = await codexCompleteAsync_smart(prompt, ['#####'], 2048, temp, true, 'code-davinci-002', nonce);
  let choice0 = comp_resp["completion"]["choices"][0];
  return {"result": choice0["text"]};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["selfexp_py_js"] = async (msg) => {
  let py_code = msg["py_code"];
  let js_code = msg["js_code"];
  let prompt_tpl = msg["prompt_tpl"];
  let text = await _getCodexLinemapTextAsync(null, "py", "js", prompt_tpl, py_code, js_code, false);
  return {"result": text};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["selfexp_parse_linemap"] = async (msg) => {
  let py_code = msg["py_code"];
  let js_code = msg["js_code"];
  let text = msg["codex_linemap_text"];
  let {linemap, linemapraw} = await _linemapParseAsync(null, text, "py", "js", py_code, js_code, false);
  return {"linemap": linemap, "linemapraw": linemapraw};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["selfexp_parse_stmtmap2"] = async (msg) => {
  let py_code = msg["py_code"];
  let js_code = msg["js_code"];
  let text = msg["stmtmap_text"];
  let diff_allowed = msg["diff_allowed_str"] ? parseInt(msg["diff_allowed_str"]) : 0;
  let {stmtmap, stmtmapraw} = await _stmtmap2ParseAsync(null, text, "py", "js", py_code, js_code, diff_allowed, false);
  return {"stmtmap": stmtmap, "stmtmapraw": stmtmapraw};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["selfexp_parse_stmtmap2_adv"] = async (msg) => {
  let py_code = msg["py_code"];
  let js_code = msg["js_code"];
  let text = msg["stmtmap_text"];
  let diff_allowed = msg["diff_allowed_str"] ? parseInt(msg["diff_allowed_str"]) : 0;
  let {stmtmap, stmtmapraw} = await _stmtmap2ParseAdvancedAsync(null, text, "py", "js", py_code, js_code, diff_allowed, false);
  return {"stmtmap": stmtmap, "stmtmapraw": stmtmapraw};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["read_benchmark"] = async (msg) => {
  let benchmark_data = await read_benchmark_async(msg["category"], msg["langpair"], msg["bench_id"]);
  return benchmark_data;
}

_LOGVIZ_DEBUG_BUS_REGISTRY["read_data_file"] = async (msg) => {
  let {filepath} = msg;
  try {
    let filecontent = await anyfileAsync(filepath);
    return {filecontent};
  } catch (e) {
    throw Error("Failed to read file: " + filepath + " Msg:" + e);
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["read_data_file_priority"] = async (msg) => {
  for (let i = 0; i<10; i++) {
    let filepath_key = "filepath_" + i;
    if (msg[filepath_key] === undefined) break;
    let filepath = msg[filepath_key];
    // it should be a string
    if (typeof filepath !== "string") throw Error("filepath is not a string");
    try {
      let filecontent = await anyfileAsync(filepath);
      return {filecontent};
    }
    catch (e) {
      // ignore. just continue
    }
  }
  throw Error("Failed to read file: " + JSON.stringify(msg));
}

_LOGVIZ_DEBUG_BUS_REGISTRY["save_data_file"] = async (msg) => {
  let {save_filepath, save_filecontent} = msg;
  try {
    await saveAnyTextfileAsync(save_filepath, save_filecontent);
  } catch (e) {
    throw Error("Failed to save file: " + save_filepath + " Msg:" + e);
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["read_folder"] = async (msg) => {
  let {folder_path} = msg;
  if (folder_path === null || folder_path === undefined) throw Error("folder_path is null or undefined");
  let folder_filelist;
  try {
    folder_filelist = await listDirAsync(null, folder_path);
  } catch (e) {
    throw Error("Failed to read folder: " + folder_path, " Error: " + e);
  }
  console.log("folder_filelist:", folder_filelist);
  if ("error_msg" in folder_filelist) throw Error("Failed to read folder: " + folder_path + "\nErrMsg: " + folder_filelist["error_msg"]);
  let {filepaths, dirpaths} = folder_filelist;
  if (dirpaths.length !== 0) console.warn("WARNING: folder has unexpected subfolders: ", dirpaths);
  let bench_data = {};
  for (let filepath of filepaths) {
    let fname = filepath.split("/").at(-1);
    try {
      let content = await anyfileAsync(filepath);
      bench_data[fname] = content;
    } catch (e) {
      throw Error("WARNING: Failed to read file: " + filepath);
    }
  }
  return bench_data;
}


_LOGVIZ_DEBUG_BUS_REGISTRY["save_in_faultloc_benchmark"] = async (msg) => {
  let {category, langpair, bench_id, save_filename, save_filecontent} = msg;
  let is_done = await save_file_in_benchmark_async("faultloc", category, langpair, bench_id, save_filename, save_filecontent, false);
  if (!is_done) {
    let y = confirm("File already exists. Overwrite?");
    if (y) {
      let is_final_done = await save_file_in_benchmark_async("faultloc", category, langpair, bench_id, save_filename, save_filecontent, true);
      if (!is_final_done) throw Error("Unexpected. File save unsuccessful.");
    }
    else {
      throw Error("File save canceled.");
    }
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["save_in_benchmark"] = async (msg) => {
  let {category, langpair, bench_id, save_filename, save_filecontent} = msg;
  let is_done = await save_file_in_benchmark_async(category, langpair, bench_id, save_filename, save_filecontent, false);
  if (!is_done) {
    let y = confirm("File already exists. Overwrite?");
    if (y) {
      let is_final_done = await save_file_in_benchmark_async(category, langpair, bench_id, save_filename, save_filecontent, true);
      if (!is_final_done) throw Error("Unexpected. File save unsuccessful.");
    }
    else {
      throw Error("File save canceled.");
    }
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["evalex_err_export"] = async(msg) => {
  let {category, langpair, bench_id} = msg;
  let folder = `transmap/tests/evalex/${category}/${langpair}err/${bench_id}/`;
  await ensurePathAsync(folder);
  for (let fname in msg) {
    if (fname.indexOf(".") >= 0) {
      let filepath = folder + fname;
      let filecontent = msg[fname];
      await saveAnyTextfileAsync(filepath, filecontent);
    }
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_save"] = async(msg) => {
  for (let i = 0;; i++) {
    if (!(("filepath_" + i) in msg)) break;
    let filepath = msg["filepath_" + i];
    let filecontent = msg["filecontent_" + i];
    filepath = "transmap/tests/tempex/" + filepath;
    let [folder, filename] = getFolderAndFilenameSplit(filepath);
    await ensurePathAsync(folder);
    await saveAnyTextfileAsync(filepath, filecontent);
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tempex_files_delete"] = async(msg) => {
  let processed_keys = {};
  let del_filepaths = [];
  for (let i = 0;; i++) {
    if (!(("filepath_" + i) in msg)) break;
    processed_keys["filepath_" + i] = true;
    let filepath = msg["filepath_" + i];
    filepath = "transmap/tests/tempex/" + filepath;
    del_filepaths.push(filepath);
  }
  for (let i = 0;; i++) {
    let fb_key = "glob_" + i;
    processed_keys[fb_key] = true;
    if (!(fb_key in msg)) break;
    let glob = msg[fb_key];
    let list_glob_result = await listGlobAsync("transmap/tests/tempex/" + glob);
    let files = list_glob_result["glob_expand"];
    for (let file of files) del_filepaths.push(file);
  }
  for (let k in msg) {
    if ((!(k in processed_keys)) && (!k.startsWith("_"))) throw Error("[tempex_files_delete] Unknown key: " + k);
  }
  await deleteMultipleFilesAsync("transmap/tests/tempex/", del_filepaths);
}

_LOGVIZ_DEBUG_BUS_REGISTRY["read_tracerules"] = async (msg) => {
  let [src_lang, tar_lang, ckey] = parse_langp_key(msg["langpair"]);
  let trace_rules = _TRACE_RULES_BY_LANG[src_lang][tar_lang];
  let {src_prepend, tar_prepend, src_instrumentations, tar_instrumentations, src_trace_rules, tar_trace_rules, trace_equality} = trace_rules;
  let data = {};
  data["_trace_rules_src"] = src_trace_rules;
  data["_trace_rules_tar"] = tar_trace_rules;
  data["_trace_rules_src_instru"] = src_instrumentations;
  data["_trace_rules_tar_instru"] = tar_instrumentations;
  data["_trace_rules_src_prep"] = src_prepend;
  data["_trace_rules_tar_prep"] = tar_prepend;
  data["_trace_equality"] = trace_equality;
  return data;
}

_LOGVIZ_DEBUG_BUS_REGISTRY["read_codex_prompt"] = async (msg) => {
  let {prompt_name} = msg;
  let prompt_dict = {
    _CODEX_PROMPT_TEMPLATE_TRANS_NESTED_STMT_MAP2_2_PY_JS,
  };
  if (prompt_name in prompt_dict) return {"prompt": prompt_dict[prompt_name]}
  throw Error("Unknown prompt: " + prompt_name);
}

// _LOGVIZ_DEBUG_BUS_REGISTRY["matches_by_tracerules"] = async (msg) => {
//   let lang = msg["lang"];
//   let code = msg["code"];
//   let trace_rules = msg["trace_rules"];
//   let matched_labels = await __getQueryMatchesFromTraceRulesAsync(
//     lang, code, trace_rules  
//   );
//   return {"result": matched_labels};
// }

_LOGVIZ_DEBUG_BUS_REGISTRY["linemap_to_charmap"] = async (msg) => {
  throw Error("Not implemented");
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tracerule_match_and_linemap_filter"] = async (msg) => {
  let {src_lang, src_code, tar_lang, tar_code, src_trace_rules_str, tar_trace_rules_str, linemap_str} = msg;
  let src_trace_rules = JSON.parse(src_trace_rules_str);
  let tar_trace_rules = JSON.parse(tar_trace_rules_str);
  let linemap = JSON.parse(linemap_str);
  let charmap = linemapToCharmap(src_code, tar_code, linemap);
  let [
    src_tracepoints, tar_tracepoints, tar_src_label_pos_map, src_tracepoints_off, tar_tracepoints_off
  ] = await _getTracepointPairsFilteredByCharmapAsync(null, src_lang, src_code, tar_lang, tar_code, src_trace_rules, tar_trace_rules, charmap);
  return {
    charmap, src_tracepoints, tar_tracepoints, 
    src_tracepoints_off, tar_tracepoints_off, tar_src_label_pos_map
  };
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tracerun_collect"] =  async (msg) => {
  let {lang, code, test_code, tracepoints_str, instrumentations_str, prepend, quota_str} = msg;
  let quota = parseInt(quota_str);
  let tracepoints = JSON.parse(tracepoints_str);
  let instrumentations = JSON.parse(instrumentations_str);
  let [trace_result, ready_code] = await _traceRunCollectAsync(null, lang, code, test_code, tracepoints, instrumentations, prepend, quota);
  return {"result": trace_result, "ready_code": ready_code, "stderr": trace_result[3], "trace_length": trace_result[1].length};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["trace_pair_diagnose"] = async (msg) => {
  let {src_lang, src_code, tar_lang, tar_code, tar_src_label_pos_map_str, src_trace_result_str, tar_trace_result_str, trace_equality_str} = msg;
  let tar_src_label_pos_map = JSON.parse(tar_src_label_pos_map_str);
  let src_trace_result = JSON.parse(src_trace_result_str);
  let tar_trace_result = JSON.parse(tar_trace_result_str);
  let trace_equality = JSON.parse(trace_equality_str);
  let trace_error = await _diagnoseTracePairsAsync(null, src_lang, src_code, src_trace_result, tar_lang, tar_code, tar_trace_result, tar_src_label_pos_map, trace_equality);
  return {"result": trace_error};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["map_block_tracepoints_by_stmtmap"] = async (msg) => {
  let {src_code, tar_code, src_tracepoints_str, tar_tracepoints_str, stmtmap_str, check_tag_eq_str, traceconfig_str} = msg;
  let src_tracepoints = JSON.parse(src_tracepoints_str);
  let tar_tracepoints = JSON.parse(tar_tracepoints_str);
  let traceconfig = JSON.parse(traceconfig_str);
  let stmtmap = JSON.parse(stmtmap_str);
  let check_tag_eq = false;
  if (check_tag_eq_str === "TAG_EQ") check_tag_eq = true;
  else if (check_tag_eq_str !== "TAG_RELAX") {
    throw Error("Unsupported value for check_tag_eq_str: " + check_tag_eq_str);
  }
  let [
    src_tracepoints_on, tar_tracepoints_on, src_tracepoints_off, tar_tracepoints_off, tar_src_tracepoint_map
  ] = await _filterTracepointsByStmtmapAsync(src_code, tar_code, src_tracepoints, tar_tracepoints, stmtmap, check_tag_eq, traceconfig);
  return {src_tracepoints_on, tar_tracepoints_on, src_tracepoints_off, tar_tracepoints_off, tar_src_tracepoint_map};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["map_range_given_range_and_stmtmap"] = async (msg) => {
  throw Error("Not implemented");
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tsparse"] = async (msg) => {
  let {lang, code} = msg;
  let parse_result = await myTreeSitterParseSexprAsync(code, lang);
  return {"result": parse_result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tsparse_get_ast"] = async (msg) => {
  let {lang, code} = msg;
  let parse_result = await myTreeSitterParseASTAsync(code, lang);
  return {"result": parse_result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tsquery"] = async (msg) => {
  let {lang, code, query} = msg;
  let query_dict = {};
  query_dict[query] = null;
  let query_results = await myTreeSitterQueriesAsync(lang, code, query_dict, false);
  let q_result = query_results[query];
  return {"result": q_result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["tsquery_grouped"] = async (msg) => {
  let {lang, code, query} = msg;
  let query_dict = {};
  query_dict[query] = null;
  let query_results = await myTreeSitterQueriesAsync(lang, code, query_dict, true);
  let q_result = query_results[query];
  return {"result": q_result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["compute_vscdiff"] = async (msg) => {
  let {original, modified, enable_charchange} = msg;
  let src_lines = original.split("\n");
  let tar_lines = modified.split("\n");
  let line_diff = vscdiff_lines(src_lines, tar_lines, enable_charchange === true || enable_charchange === "true");
  return {"result": line_diff};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["postprocess_vscdiff_as_linediff_ranges"] =  async (msg) => {
  let {vscdiff_str} = msg;
  let vscdiff = JSON.parse(vscdiff_str);
  let linediff_ranges = [];
  for (let diff of vscdiff) {
    let {originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber} = diff;
    linediff_ranges.push([originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber]);
  }
  return {"result": linediff_ranges};
}


_LOGVIZ_DEBUG_BUS_REGISTRY["compute_injects_from_linediff_ranges"] = async (msg) => {
  let {original, modified, linediff_ranges_str} = msg;
  let original_lines = original.split("\n");
  let modified_lines = modified.split("\n");
  let linediff_ranges = JSON.parse(linediff_ranges_str);
  let injects = [];
  for (let diff_range of linediff_ranges) {
    let [originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber] = diff_range;
    injects.push({
      "line_start": modifiedStartLineNumber - 1,
      "line_end": modifiedEndLineNumber,
      "content": modified_lines.slice(modifiedStartLineNumber - 1, modifiedEndLineNumber).join("\n"),
      "replacement": original_lines.slice(originalStartLineNumber - 1, originalEndLineNumber).join("\n")
    })
  }
  return {"result": injects};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["apply_error_inject"] = async (msg) => {
  let {errorinject_idx_str, errorinjects_str, stmtmap_str, fixed_code} = msg;
  let errorinject_idx = parseInt(errorinject_idx_str);
  let errorinjects = JSON.parse(errorinjects_str);
  let stmtmap = JSON.parse(stmtmap_str);
  let error_to_inject = errorinjects[errorinject_idx];
  let [err_applied_code, err_applied_stmtmap] = injectErrorLinesInCode(fixed_code, error_to_inject, stmtmap);
  return {err_applied_code, err_applied_stmtmap};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["apply_error_inject_multiple_nomap"] = async (msg) => {
  let {errorinject_idxes_str, errorinjects_str, fixed_code} = msg;
  let errorinject_idxes = errorinject_idxes_str.split(",").filter(x => x !== "").map(x => parseInt(x));
  let errorinjects = JSON.parse(errorinjects_str);
  let filtered_injects = errorinject_idxes.map(
    x => x >= 0 && x < errorinjects.length ? 
      errorinjects[x] : (() => {throw Error("Invalid inject idx: " + x)})());
  let err_applied_code = injectMultipleErrorsInCode(fixed_code, filtered_injects);
  return {err_applied_code};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["revert_error_injects_to_get_fixed_stmtmap"] = async (msg) => {
  let {code_ori, stmtmap_ori_str, errorinjects_str, code_fixed} = msg;
  let stmtmap_ori = JSON.parse(stmtmap_ori_str);
  let errorinjects = JSON.parse(errorinjects_str);
  //revert errorinjects on code_ori and update stmtmap_ori. 
  let reverted_code = code_ori, reverted_stmtmap = stmtmap_ori;
  for (let errorinject of errorinjects) {
    [reverted_code, reverted_stmtmap] = revertErrorLinesInCode(reverted_code, errorinject, reverted_stmtmap);
  }
  if (code_fixed !== null && code_fixed !== undefined && reverted_code !== code_fixed) {
    console.log("--- reverted_code ---\n" + reverted_code);
    console.log("--- code_fixed ---\n" + code_fixed);
    throw Error("Unexpected! reverted_code !== code_fixed");
  }
  return {reverted_code, reverted_stmtmap};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["get_task_all_bench_ids"] = async (msg) => {
  let {category, langpair} = msg;
  let bench_ids = await get_dataset_bench_ids_async(category, langpair);
  return {"result": bench_ids};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["get_task_main_bench_ids"] = async (msg) => {
  let {category, langpair} = msg;
  // TODO: read from file
  let runtime_error_path = `transmap/tests/evalex/${category}/${langpair}.bench_ids.json`;
  let bench_ids = JSON.parse(await anyfileAsync(runtime_error_path));
  return {"result": bench_ids, "id0": bench_ids[0], "id1": bench_ids[1]};
}


_LOGVIZ_DEBUG_BUS_REGISTRY["get_task_bench_ids_with_filter"] = async (msg) => {
  let {category, langpair, filter_str} = msg;
  let filter = JSON.parse(filter_str);
  let bench_ids = await get_dataset_bench_ids_with_filter_async(category, langpair, filter);
  return {"result": bench_ids};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["get_id_in_list_by_offset"] = async (msg) => {
  let {current_id, all_ids_str, offset_str} = msg;
  let all_ids = JSON.parse(all_ids_str);
  let offset = parseInt(offset_str);
  let current_idx = all_ids.indexOf(current_id);
  if (current_idx < 0) throw Error("Current id not in list: " + current_id);
  let new_idx = current_idx + offset;
  new_idx = (new_idx + all_ids.length) % all_ids.length;
  return {"new_id": all_ids[new_idx], "index_status": (new_idx + 1) + "/" + all_ids.length};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["run_dynamic_analysis"] = async (msg) => {
  let {code, test_template, timeout_str, command_str} = msg;
  test_template = safeReplace(test_template, "//TESTED_PROGRAM", "{TESTED_PROGRAM}");
  test_template = safeReplace(test_template, "#TESTED_PROGRAM", "{TESTED_PROGRAM}");
  if (test_template.indexOf("{TESTED_PROGRAM}") < 0) throw Error("Invalid test_template (TESTED_PROGRAM placeholder not found)");

  let command = command_str.split(" ");
  for (let seg of command) if (seg === "") throw Error("Invalid command segment after split (empty)");
  let resp = await runDynamicAnalysisSimpleAsync(code, test_template, command, parseInt(timeout_str));
  if ("output_json" in resp) return resp["output_json"];
  else return {"instrumented": "FAILED", "result": resp};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["da_preset_0__tracepoints"] = async (msg) => {
  let {preset, code, trace_group_str} = msg;
  if (!(preset in TRACE_PRESETS_0__TRACEPOINTS_F)) throw Error("Unknown trace preset (tracepoints): " + preset);
  let tracepoints_func = TRACE_PRESETS_0__TRACEPOINTS_F[preset];
  let trace_group = JSON.parse(trace_group_str);
  let {tracepoints} = await tracepoints_func(code, trace_group);
  return {tracepoints};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["da_preset_1__instrun"] = async (msg) => {
  let {preset, trace_quota_str, tracepoints_str, code, test_template, enabled_lines_str, trace_level_str} = msg;
  let trace_quota = parseInt(trace_quota_str);
  let trace_level = parseInt(trace_level_str);
  let tracepoints = JSON.parse(tracepoints_str);
  let enabled_lines = JSON.parse(enabled_lines_str);
  if (!(preset in TRACE_PRESETS_1__INSTRUN_F)) throw Error("Unknown trace preset (instrun): " + preset);
  let instrun_func = TRACE_PRESETS_1__INSTRUN_F[preset];
  let {instrumented, runnable, debugging, result, max_trace_level} = await instrun_func(code, tracepoints, test_template, trace_quota, enabled_lines, trace_level);
  return {instrumented, runnable, debugging: debugging ? debugging : null, result, max_trace_level};
} 

_LOGVIZ_DEBUG_BUS_REGISTRY["da_preset_2__cmp"] = async (msg) => {
  let {preset, tar_src_tracepoint_map_str, src_trace_result_str, tar_trace_result_str, cmp_config_str, traceconfig_str} = msg;
  let src_trace_result = JSON.parse(src_trace_result_str);
  let tar_trace_result = JSON.parse(tar_trace_result_str);
  let tar_src_tracepoint_map = JSON.parse(tar_src_tracepoint_map_str);
  let traceconfig = JSON.parse(traceconfig_str);
  let cmp_config = JSON.parse(cmp_config_str);
  if (!(preset in TRACE_PRESETS_2__CMP_F)) throw Error("Unknown trace preset (cmp): " + preset);
  let cmp_func = TRACE_PRESETS_2__CMP_F[preset];
  let {result} = await cmp_func(tar_src_tracepoint_map, src_trace_result, tar_trace_result, cmp_config, traceconfig);
  return {result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["da_friendly_cmp_result"] = async (msg) => {
  let {cmp_result_str} = msg;
  let result = JSON.parse(cmp_result_str);
  let friendly_result = user_friendly_trace_diagnosis(result);
  return friendly_result;
}

_LOGVIZ_DEBUG_BUS_REGISTRY["get_matched_covered_lines"] = async (msg) => {
  let {cmp_result_str, tar_src_tracepoint_map_str} = msg;
  let cmp_result = JSON.parse(cmp_result_str);
  let tar_src_tracepoint_map = JSON.parse(tar_src_tracepoint_map_str);

  //TODO - cover more lines using stmtmap.
  let {src_cov_lines, tar_cov_lines} = cmp_result;
  if (src_cov_lines === "NOT_EXIST" && tar_cov_lines === "NOT_EXIST") throw Error("[get_matched_covered_lines] unexpected")
  if (src_cov_lines === "NOT_EXIST" || tar_cov_lines === "NOT_EXIST") {
    src_cov_lines = "\"ALL\"";
    tar_cov_lines = "\"ALL\"";
  } else {
    // TODO: add mismatch tracepoint lines
    let {tar_pk, expected_src_pk, actural_src_pk} = cmp_result;
    try {
      let tar_p = JSON.parse(tar_pk);
      if (!tar_cov_lines.includes(tar_p[0])) tar_cov_lines.push(tar_p[0]);
    } catch (e) {}
    try {
      let esrc_p = JSON.parse(expected_src_pk);
      if (!src_cov_lines.includes(esrc_p[0])) src_cov_lines.push(esrc_p[0]);
    } catch (e) {}
    try {
      let asrc_p = JSON.parse(actural_src_pk);
      if (!src_cov_lines.includes(asrc_p[0])) src_cov_lines.push(asrc_p[0]);
    } catch (e) {}

    // find smallest-common lines that cover all cov_lines
    let tar_src_line_dict = {}, src_tar_line_dict = {};
    for (let tar_pos_k in tar_src_tracepoint_map) {
      let tar_pos = JSON.parse(tar_pos_k);
      let src_pos = JSON.parse(tar_src_tracepoint_map[tar_pos_k][0]);
      if (!(tar_pos[0] in tar_src_line_dict)) tar_src_line_dict[tar_pos[0]] = new Set();
      tar_src_line_dict[tar_pos[0]].add(src_pos[0]);
      if (!(src_pos[0] in src_tar_line_dict)) src_tar_line_dict[src_pos[0]] = new Set();
      src_tar_line_dict[src_pos[0]].add(tar_pos[0]);
    }
    let any_new_found = true;
    while (any_new_found) {
      any_new_found = false;
      for (let src_line of src_cov_lines) {
        if (src_line in src_tar_line_dict) {
          for (let tar_line of src_tar_line_dict[src_line]) {
            if (tar_cov_lines === '"ALL"') throw Error("Unexpected! ALL should already return.");
            if (!tar_cov_lines.includes(tar_line)) {
              tar_cov_lines.push(tar_line);
              any_new_found = true;
            }
          }
        }
      }
      for (let tar_line of tar_cov_lines) {
        if (tar_line in tar_src_line_dict) {
          for (let src_line of tar_src_line_dict[tar_line]) {
            if (src_cov_lines === '"ALL"') throw Error("Unexpected! ALL should already return.");
            if (!src_cov_lines.includes(src_line)) {
              src_cov_lines.push(src_line);
              any_new_found = true;
            }
          }
        }
      }
    }
  }
  //! Make sure result is always matched!
  return {"matched_covered_lines_src": src_cov_lines, "matched_covered_lines_tar": tar_cov_lines};
}

///////////////////////////// Compatibility Tooling APIs 
_LOGVIZ_DEBUG_BUS_REGISTRY["duoglot_filltest_py"] = async (msg) => {
  let {testcode, tested_code} = msg;
  let result = duoglot_testcode_to_runnable_py(testcode, tested_code);
  return {"result": result};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["duoglot_extract_mylog"] = async (msg) => {
  throw Error("Not implemented");
}

_LOGVIZ_DEBUG_BUS_REGISTRY["translong_next_py_extract"] = async (msg) => {
  let {py_code, js_code_wip} = msg;
  // extract the next piece of python to be translated and return
  let js_todo_seg_regex = /\/\/\/\/\/ Segment BEGIN ([\S]*?)\n\/\/\/\/\/ Segment END/gm;
  let match_arr = [...js_code_wip.matchAll(js_todo_seg_regex)];
  if (match_arr.length === 0) return {"trans_working_seg": "NONE", "extracted_py_code": "#NONE"};
  else {
    let seg_name = match_arr[0][1];
    // console.log("match_full_text:", match_full_text, "  seg_name:", seg_name);
    // Extract that segment from the target
    let extracted_py_code = longcode_get_segment_py(py_code, seg_name);
    return {"trans_working_seg": seg_name, "extracted_py_code": extracted_py_code};
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["translong_next_js_fill"] = async (msg) => {
  let {js_code_wip, translated_js_code, trans_working_seg} = msg;
  // identify the next todo segment, check if is trans_working_seg
  let segment_ph = "///// Segment BEGIN " + trans_working_seg + "\n///// Segment END";
  if (js_code_wip.indexOf(segment_ph) < 0) throw Error("Unexpected! js to-be-filled not found! segment: " + trans_working_seg);
  else {
    let wrapped_translated_js = "///// Segment BEGIN " + trans_working_seg + " DONE\n" + translated_js_code + "\n///// Segment END";
    let result = safeReplace(js_code_wip, segment_ph, wrapped_translated_js);
    return {updated_js_code: result};
  }
}

_LOGVIZ_DEBUG_BUS_REGISTRY["maplong_next_extract"] = async (msg) => {
  let {py_code, js_code, raw_map_pieces_wip} = msg;
  let map_working_seg = "NONE";
  let code_to_map_py = "#NONE";
  let code_to_map_js = "//NONE";
  // extract all segment names from Py
  // check for each segment, does it exist in the wip raw map
  // for the first non-existing segment, extract the code from py_code and js_code
  let seg_names = py_code.split("\n").filter(x => x.startsWith("##### Segment BEGIN ")).map(x => {
    let seg_name = x.slice("##### Segment BEGIN ".length).trim();
    if (seg_name.indexOf(" ") >= 0) throw Error("Invalid seg_name: " + seg_name); 
    return seg_name;
  });
  for (let seg_name of seg_names) {
    let raw_srcmap_signal = "##### Segment RAWMAP BEGIN " + seg_name + "\n";
    if (raw_map_pieces_wip.indexOf(raw_srcmap_signal) < 0) {
      code_to_map_py = longcode_get_segment_py(py_code, seg_name);
      code_to_map_js = longcode_get_segment_js(js_code, seg_name);
      map_working_seg = seg_name;
      break;
    }
  }
  return {code_to_map_py, code_to_map_js, map_working_seg};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["maplong_next_fill"] = async (msg) => {
  let {raw_map_pieces_wip, map_completion, map_working_seg} = msg;
  if (map_working_seg === "NONE") throw Error("Cannot append segment " + map_working_seg + ". Invalid segment.");
  if (raw_map_pieces_wip === "(raw map unmerged)") raw_map_pieces_wip = "";
  let updated_raw_map_pieces = raw_map_pieces_wip + "\n##### Segment RAWMAP BEGIN " + map_working_seg + "\n" + map_completion + "\n##### Segment RAWMAP END";
  return {updated_raw_map_pieces};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["maplong_merge_rawmap_pieces"] = async (msg) => {
  let {raw_map_pieces} = msg;
  // get segments of RAWMAP
  // get Python part and JavaScript part of the map
  // replace the anchor to prepend letters before the numbers
  // Concatinate all Python part under ### Python
  // Concatinate all JavaScript part under ### JavaScript
  // return the concatinated Python part and JavaScript part
  let raw_map_segs = raw_map_pieces.split("##### Segment RAWMAP BEGIN ");
  if (raw_map_segs[0].trim() !== "") {
    throw Error("Unexpected! Cannot merge.");
  }
  let processed_segs = [];
  for (let raw_map_seg of raw_map_segs.slice(1)) {
    let ending = "\n##### Segment RAWMAP END";
    let end_split = raw_map_seg.split(ending);
    if (end_split.length !== 2 || end_split[1].trim() !== "") {
      throw Error("Unexpected! Cannot merge, segment not ENDED.");
    }
    let clean_seg = end_split[0];
    let split_on_py = clean_seg.split("\n### Python\n");
    if (split_on_py.length !== 2) {
      throw Error("Unexpected! Cannot merge, invalid ### Python");
    }
    let seg_name = split_on_py[0].trim();
    let split_on_js = split_on_py[1].split('\n### JavaScript\n"use strict";\n');
    if (split_on_js.length !== 2) {
      throw Error("Unexpected! Cannot merge, invalid ###JavaScript use strict");
    }
    let [py_part, js_part] = split_on_js;
    processed_segs.push({
      seg_name, py_part, js_part
    });
  }
  console.log("processed_segs:", processed_segs);
  let py_rel_parts = [];
  let js_rel_parts = [];
  let common_prefix = " py stmt ";
  let anno_regex = / py stmt (\d+)/gm;
  let last_stmt_count = 0;
  for (let i = 0; i < processed_segs.length; i++) {
    let {seg_name, py_part, js_part} = processed_segs[i];
    if (py_part.indexOf(common_prefix) < 0) throw Error("Unexpected! common prefix not found in py: " + common_prefix);
    if (js_part.indexOf(common_prefix) < 0) throw Error("Unexpected! common prefix not found in js: " + common_prefix);
    // === if (i >= 25) throw Error("Unsupported! More than 25 segments.");
    // === let letter_prefix = String.fromCharCode(("A".charCodeAt(0) + i));
    // need to match on the python side numbers
    let anno_matches = [...py_part.matchAll(anno_regex)];
    console.log("anno_matches: ", anno_matches);
    let repl_dict = {};
    for (let i = 0; i < anno_matches.length; i++) {
      let [match_full, match_num_str] = anno_matches[i];
      let match_num = parseInt(match_num_str);
      if (match_num !== i + 1) {
        throw Error("Unexpected! statement number not continuous from 1. match_num: " + match_num + " expected:" + String(i + 1));
      }
      last_stmt_count += 1;
      repl_dict[match_full] = "_COMMON_PREFIX_" + String(last_stmt_count);
    }
    console.log("repl_dict:", repl_dict);
    let new_js_part = js_part;
    let new_py_part = py_part;
    for (let k in repl_dict) {
      new_py_part = new_py_part.replaceAll(k + ",", repl_dict[k] + ",");
      new_py_part = new_py_part.replaceAll(k + "\n", repl_dict[k] + "\n");
      new_py_part = new_py_part.replaceAll(k + " ", repl_dict[k] + " ");
      new_js_part = new_js_part.replaceAll(k + ",", repl_dict[k] + ",");
      new_js_part = new_js_part.replaceAll(k + "\n", repl_dict[k] + "\n");
      new_js_part = new_js_part.replaceAll(k + " ", repl_dict[k] + " ");
    }
    if (new_py_part.indexOf(common_prefix) >= 0 || new_js_part.indexOf(common_prefix) >= 0) {
      throw Error("Unexpected! anno on py cannot be fully updated.");
    }
    new_py_part = new_py_part.replaceAll("_COMMON_PREFIX_", common_prefix);
    new_js_part = new_js_part.replaceAll("_COMMON_PREFIX_", common_prefix);

    py_rel_parts.push(new_py_part);
    js_rel_parts.push(new_js_part);
  }
  let raw_map_merged = "### Python\n" + py_rel_parts.join("\n") + "\n\n\n" + "### JavaScript\n\"use strict\";\n" + js_rel_parts.join("\n");
  return {raw_map_merged};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["get_mapped_range_for_ui"] = async (msg) => {
  let {monaco_range_str, stmtmap_str, side} = msg;
  try {
    let monaco_range = JSON.parse(monaco_range_str);
    let stmtmap = JSON.parse(stmtmap_str);
    let mapping_dict = null;
    if (side === "TARGET") {
      mapping_dict = stmtmap.tar_lno_2_src_lno;
    } else {
      mapping_dict = stmtmap.src_lno_2_tar_lno;
    }
    if (mapping_dict === null || mapping_dict === undefined) {
      throw Error("Cannot get mapping_dict");
    }
    let start_lno = monaco_range[2][0] - 1;
    let end_lno = monaco_range[3][0] - 1;
    let mapped_line_nos = [];
    for (let i = start_lno; i <= end_lno; i++) {
      if (i in mapping_dict) {
        for (let j of mapping_dict[i]) {
          mapped_line_nos.push(j);
        }
      }
    }
    let mapped_lno_min = Math.min(99999, ...mapped_line_nos);
    let mapped_lno_max = Math.max(-1, ...mapped_line_nos);
    if (mapped_lno_min === 99999 || mapped_lno_max === -1) {
      throw Error("Cannot get mapped_lno_min or mapped_lno_max");
    }
    let mapped_monaco_line_range = [mapped_lno_min, mapped_lno_max];
    let message = `The selected range is mapped to line ${mapped_monaco_line_range[0] + 1}~${mapped_monaco_line_range[1] + 1} on the other side ` + 
     (side === "TARGET" ? "(Python Source)" : "(Translated JavaScript)");
    return {mapped_monaco_line_range, message};
  } catch (e) {
    console.warn("get_mapped_range_for_ui failed: ", e);
    return {mapped_monaco_line_range: null, message: "Failed to get mapped range."};
  }
  
}

///////////////////////////// Special APIs 

_LOGVIZ_DEBUG_BUS_REGISTRY["reload"] = async (msg) => {
  let {timeout_str} = msg;
  let timeout = parseInt(timeout_str);
  setTimeout(() => {
    location.reload();
  }, timeout);
  return {"result": "OK"};
}

///////////////////////////// UI Annotation APIs 

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_monaco__line_deco_from_linemap"] = async (msg) => {
  let {linemap_str} = msg;
  let linemap = JSON.parse(linemap_str);
  let line_decos_src = {
    "anno_type": "LINE_DECO",
    "anno_data": []
  };
  let line_decos_tar = {
    "anno_type": "LINE_DECO",
    "anno_data": []
  };
  for (let i = 0; i < linemap.length; i++) {
    let {src_l_r, tar_l_r} = linemap[i];
    let is_odd = i % 2 === 0;
    if (src_l_r[1] > src_l_r[0]) line_decos_src.anno_data.push(__create_line_deco_json(src_l_r[0], src_l_r[1] - 1, is_odd ? 'my-monaco-ldeco-00' : 'my-monaco-ldeco-01', 'my-monaco-ldecom-00', []));
    if (tar_l_r[1] > tar_l_r[0]) line_decos_tar.anno_data.push(__create_line_deco_json(tar_l_r[0], tar_l_r[1] - 1, is_odd ? 'my-monaco-ldeco-00' : 'my-monaco-ldeco-01', 'my-monaco-ldecom-00', []));
  }
  return {"line_decos_src": line_decos_src, "line_decos_tar": line_decos_tar};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_monaco__deco_from_tracepoints"] = async (msg) => {
  let {tracepoints_str, deco_class} = msg;
  let tracepoints = JSON.parse(tracepoints_str);
  let decos = {
    "anno_type": "DECO",
    "anno_data": tracepoints.map(([label, nt, [cs, ce, [psr, psc], [per, pec]]]) => {
      let label_first_part = label.split(".")[0];
      if (["log-symbols-before"].indexOf(label_first_part) >= 0) {
        per = psr;
        pec = 200;
      }
      if (["patch-block", "patch-reclineno", "TAG-MATCH-OFF", "TAG-DISABLE-INSTRU"].indexOf(label_first_part) >= 0) {
        return null;
      }
      return __create_deco_json(psr, psc, per, pec, deco_class, [`<span>${label} ${nt}</span>`]);
    }).filter(x => x !== null)
  };
  return {"decos": decos};
}


function __create_line_deco_json(start_line, end_line, deco_classname, margin_classname, hover_htmls) {
  return {start_line, end_line, deco_classname, margin_classname, hover_htmls};
}

function __create_deco_json(start_row, start_column, end_row, end_column, deco_classname, hover_htmls) {
  return {start_row, start_column, end_row, end_column, deco_classname, hover_htmls};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_monaco__line_deco_from_vscdiff"] = async (msg) => {
  let {vscdiff_str} = msg;
  let vscdiff = JSON.parse(vscdiff_str);
  let line_decos_original = {
    "anno_type": "LINE_DECO",
    "anno_data": []
  };
  let line_decos_modified = {
    "anno_type": "LINE_DECO",
    "anno_data": []
  };
  for (let i = 0; i < vscdiff.length; i++) {
    let {originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber} = vscdiff[i];
    line_decos_original.anno_data.push(__create_line_deco_json(originalStartLineNumber - 1, originalEndLineNumber - 1, 'my-monaco-ldeco-diffred', '', []));
    line_decos_modified.anno_data.push(__create_line_deco_json(modifiedStartLineNumber - 1, modifiedEndLineNumber - 1, 'my-monaco-ldeco-diffgreen', '', []));
  }
  return {"line_decos_original": line_decos_original, "line_decos_modified": line_decos_modified};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_monaco__deco_from_diagnose"] = async (msg) => {
  let {diagnose_str, deco_class} = msg;
  let diagnose = JSON.parse(diagnose_str);
  let {src_tentry, tar_tentry, description, idx} = diagnose;
  let tentry_to_deco = ({LPOS, DATA}) => {
    let [psr, psc, per, pec] = LPOS;
    return __create_deco_json(psr, psc, per, pec, deco_class, [`<span>${idx} ${description} (val: ${DATA})</span>`]);
  };
  let deco_src = {
    "anno_type": "DECO",
    "anno_data": src_tentry !== null ? [tentry_to_deco(src_tentry)] : []
  };
  let deco_tar = {
    "anno_type": "DECO",
    "anno_data": tar_tentry !== null ? [tentry_to_deco(tar_tentry)] : []
  };
  return {deco_src, deco_tar};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_monaco__line_deco_from_trace_cmp_result"] = async (msg) => {
  let {deco_class, cmp_result_str} = msg;
  let cmp_result = JSON.parse(cmp_result_str);
  let {reason, src_cov_lines, tar_cov_lines, tar_pk, actural_src_pk, mismatch_vars} = cmp_result;
  function _pk_to_deco(pk, msg) {
    let anno_data = null;
    if (typeof(pk) !== "string" || pk === "NOT_EXIST") {
      anno_data = [];
    } else {
      let pos = JSON.parse(pk);
      anno_data = [__create_deco_json(pos[0], pos[1], pos[2], pos[3], "my-monaco-deco-err-01", [`<span>Trace Err: ${msg}</span>`])];
    }
    return {"anno_type": "DECO", "anno_data": anno_data};
  }
  function _cov_lines_to_decos(linenos) {
    return {
      "anno_type": "LINE_DECO",
      "anno_data": linenos === "NOT_EXIST" ? [] : linenos.map(x => __create_line_deco_json(x, x, deco_class, '', []))
    };
  }
  return {
    line_decos_src: _cov_lines_to_decos(src_cov_lines),
    line_decos_tar: _cov_lines_to_decos(tar_cov_lines),
    err_deco_src: _pk_to_deco(actural_src_pk, reason + " | " + String(mismatch_vars)),
    err_deco_tar: _pk_to_deco(tar_pk, reason + " | " + String(mismatch_vars))
  };
}

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_monaco__line_deco_from_stmtmap"] = async (msg) => {
  let {stmtmap_str} = msg;
  let stmtmap = JSON.parse(stmtmap_str);
  let {tar_lno_2_src_lno, src_lno_2_tar_lno, linemap_s} = stmtmap;
  let line_decos_src = {
    "anno_type": "LINE_DECO",
    "anno_data": []
  };
  let line_decos_tar = {
    "anno_type": "LINE_DECO",
    "anno_data": []
  }
  for (let i = 0; i < linemap_s.length; i++) {
    let {src_ls, tar_ls} = linemap_s[i];
    let is_odd = i % 2 === 0;
    for (let src_l of src_ls) line_decos_src.anno_data.push(__create_line_deco_json(src_l, src_l, is_odd ? 'my-monaco-ldeco-00' : 'my-monaco-ldeco-01', 'my-monaco-ldecom-00', []));
    for (let tar_l of tar_ls) line_decos_tar.anno_data.push(__create_line_deco_json(tar_l, tar_l, is_odd ? 'my-monaco-ldeco-00' : 'my-monaco-ldeco-01', 'my-monaco-ldecom-00', []));
  }
  return {"line_decos_src": line_decos_src, "line_decos_tar": line_decos_tar};
}

_LOGVIZ_DEBUG_BUS_REGISTRY["AGEN_empty"] = async (msg) => {
  let {anno_type} = msg;
  return {
    "result": {
      "anno_type": anno_type,
      "anno_data": []
    }
  };
}

//////////////////////////////////////////////// Utility
_LOGVIZ_DEBUG_BUS_REGISTRY["util_parse_json"] = async (msg) => {
  let {json_str} = msg;
  return {
    "json_obj": JSON.parse(json_str)
  };
}

//////////////////////////////////////////////// Data summaries

_LOGVIZ_DEBUG_BUS_REGISTRY["dynamic_summary"] = async (msg) => {
  let {category, langpair, bench_ids_str, summary_key} = msg;
  let bench_ids = JSON.parse(bench_ids_str);
  // for each bench_id, 
  let configurations = [
    {
      "agg_key": "runtime_error",
      "agg_type": "DISTRIBUTE",
      "require": [],
      "distr_processor": async (data_req_dict, params) => {
        let {category, langpair} = params;
        let runtime_error_path = `transmap/tests/tempex/dynamic/${category}/${langpair}/bench_errors.json`;
        let errors = JSON.parse(await anyfileAsync(runtime_error_path));
        return errors;
      }
    },
    {
      "agg_key": "check_result",
      "agg_type": "EACH",
      "require": ["runtime_error"],
      "map_processor": async (id, data, params) => {
        let {category, langpair} = params;
        let {runtime_error} = data;
        let bench_data = await read_benchmark_async(category, langpair, id, ["target.fixed.js", "injects.json"]);
        if ("injects.json" in bench_data) {
          let errorinjects = JSON.parse(bench_data["injects.json"]);
          let fixed_code = bench_data["target.fixed.js"];
          let fixed_line_count = fixed_code.split("\n").length;
          let cmps = {};
          let cantrace = 0;
          let sound = 0;
          let unsound = 0;
          let cov_lines_c = 0;
          let cov_ratio_c = 0;
          let cov_count = 0;
          for (let i = 0; i < errorinjects.length; i++) {
            let cmp_result_filepath = `transmap/tests/tempex/dynamic/${category}/${langpair}/${id}/trace_cmp_result.${i}.json`;
            let inject = errorinjects[i];
            let {line_start, line_end, content, replacement} = inject;
            let injected_line_count = fixed_line_count - (line_end - line_start) + replacement.split("\n").length;
            try {
              let filecontent = await anyfileAsync(cmp_result_filepath);
              cmps[i] = JSON.parse(filecontent); cantrace += 1;
              if (Array.isArray(cmps[i]) && cmps[i].length > 0) {
                let cmp0 = cmps[i][0];
                let tar_cov_lines = cmp0["tar_cov_lines"];
                cov_lines_c += tar_cov_lines.length;
                cov_ratio_c += tar_cov_lines.length / injected_line_count;
                cov_count += 1;
                if (tar_cov_lines.indexOf(inject["line_start"]) >= 0) sound += 1; else unsound += 1;
              }
            } catch (e) {
              cmps[i] = undefined;
            }
          }
          return {
            "inj_count": errorinjects.length, 
            "can_trace": cantrace, 
            "sound": sound, 
            "unsound": unsound, 
            "cmps": cmps,
            "err": runtime_error, 
            "cov_count_avg": cov_lines_c / cov_count,
            "cov_ratio_avg": cov_ratio_c / cov_count,
          };
        } else {
          return null;
        }
      }
    },
    {
      "agg_key": "check_result_table",
      "agg_type": "TABULAR",
      "require": ["check_result"],
      "tabular_columns": ["inj_count", "can_trace", "sound", "unsound", "cov_count_avg", "cov_ratio_avg", "err_nodiff", "err_map", "err_other"],
      "map_processor": async (id, data, params) => {
        //TODO: parse error and extract more info from cmp.
        let {check_result} = data;
        if (check_result !== null) {
          let {inj_count, can_trace, sound, unsound, cov_count_avg, cov_ratio_avg, err} = check_result;
          let err_nodiff = "-";
          if (err) {
            err_nodiff = "";
            if (err.indexOf("no trace difference and target PASS") >= 0) err_nodiff += "PASS";
            if (err.indexOf("trace difference and target DID NOT PASS") >= 0) err_nodiff += "WRONG";
          } 
          let err_map = err ? (err.indexOf("Not all tar_ls are covered") >= 0 ? "TAR_LS_UNCOVERED" : "-") : "-";
          let err_other = (err_nodiff !== "-" || err_map !== "-") ? "-" : (err ? err.split("\n").slice(1).join("  ") : "-");
          return {inj_count, can_trace, sound, unsound, cov_count_avg, cov_ratio_avg, err_nodiff, err_map, err_other};
        } else {
          return {err_other: "NO_injects"};
        }
      }
    },
    {
      "agg_key": "overall_stats",
      "agg_type": "SCALAR",
      "require": ["check_result"],
      "scalar_processor": async (data_req_dict, params) => {
        let cov_total = 0;
        let rat_total = 0;
        let inj_total = 0;
        let cantrace_total = 0;
        let sound_total = 0;
        let unsound_total = 0;
        for (let id in data_req_dict) {
          let {check_result} = data_req_dict[id];
          if (check_result === null || check_result === undefined) continue;
          let {inj_count, can_trace, sound, unsound, cov_count_avg, cov_ratio_avg} = check_result;
          inj_total += inj_count || 0;
          cantrace_total += can_trace || 0;
          sound_total += sound || 0;
          unsound_total += unsound || 0;
          cov_total += cov_count_avg || 0;
          rat_total += cov_ratio_avg || 0;
        }
        let suns_total = sound_total + unsound_total;
        let avg_cov = cov_total / suns_total;
        let avg_rat = rat_total / suns_total;
        return {
          suns_total,
          avg_cov,
          avg_rat,
          inj_total,
          cantrace_total,
          sound_total,
          unsound_total
        }
      }
    }
  ];
  let processor_params = {category: category, langpair: langpair};
  let summary_result = await aggregateAsync(configurations, processor_params, bench_ids);
  let check_result_table = summary_result["check_result_table"];
  await logvizSETJSONAsync(`transmex:${summary_key}-byid.rterror`, summary_result["runtime_error"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byid.ckresult`, summary_result["check_result"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byid.stats`, summary_result["overall_stats"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byid.tabular`, check_result_table["tabular"]);
  return {metadata: {processor_params, prefix: `transmex:${summary_key}`}};
} 

_LOGVIZ_DEBUG_BUS_REGISTRY["dynamic_summary_per_inj"] = async (msg) => {
  let {category, langpair, bench_ids_str, summary_key} = msg;
  let bench_ids = JSON.parse(bench_ids_str);
  // for each bench_id, 
  let configurations = [
    {
      "agg_key": "runtime_error",
      "agg_type": "SPLIT",
      "require": [],
      "split_processor": async (id, data, params) => {
        let {category, langpair} = params;
        let errors = {};
        try {
          let runtime_error_path = `transmap/tests/tempex/dynamic/${category}/${langpair}/${id}/errors.json`;
          errors = JSON.parse(await anyfileAsync(runtime_error_path));
        } catch (e) {}
        let return_stuff = [];
        for (let injidx in errors) {
          return_stuff.push({"id": id + "." + injidx, "data": errors[injidx]});
        }
        return return_stuff;
      }
    },
    {
      "agg_key": "result_per_inj",
      "agg_type": "SPLIT",
      "require": [],
      "split_processor": async (id, data, params) => {
        let {category, langpair} = params;
        let bench_data = await read_benchmark_async(category, langpair, id, ["target.fixed.js", "injects.json"]);
        if ("injects.json" in bench_data) {
          let errorinjects = JSON.parse(bench_data["injects.json"]);
          let fixed_code = bench_data["target.fixed.js"];
          let fixed_line_count = fixed_code.split("\n").length;

          let return_stuff = [];
          for (let i = 0; i < errorinjects.length; i++) {
            let cmp_result_filepath = `transmap/tests/tempex/dynamic/${category}/${langpair}/${id}/trace_cmp_result.${i}.json`;
            let symptom_filepath = `transmap/tests/tempex/dynamic/${category}/${langpair}/${id}/symptom.${i}.json`;
            let errorinject  = errorinjects[i];
            let {line_start, line_end, content, replacement} = errorinject;
            let line_delta = replacement.split("\n").length - (line_end - line_start);
            let injected_line_count = fixed_line_count + line_delta;
            let inj_check_result = {
              "symptom": null,
              "cmp_result": null,
              "inject": errorinject,
              "injected_line_count": injected_line_count,
              "line_delta": line_delta
            };
            let cmp_result_str = null, symptom_str = null;
            try {
              symptom_str = await anyfileAsync(symptom_filepath);
              cmp_result_str = await anyfileAsync(cmp_result_filepath);
            } catch (e) {}
            if (symptom_str !== null) inj_check_result.symptom = JSON.parse(symptom_str);
            if (cmp_result_str !== null) inj_check_result.cmp_result = JSON.parse(cmp_result_str);
            return_stuff.push({"id": id + "." + i, "data": inj_check_result});
          }
          return return_stuff;
        } else {
          // no injects.json, just ignore
          return [];
        }
      }
    },
    {
      "agg_key": "per_inj_table",
      "agg_type": "TABULAR",
      "require": ["result_per_inj", "runtime_error"],
      "using_alt_ids": "result_per_inj",
      "tabular_columns": ["symptom_cls", "symptom_pos", "inj_lines", "symptom_yes", "diagnose_cls", "diagnose_pos", "any_sound", "last_sound", "sound_lines", "best_ratio", "syserr"],
      "map_processor": async (id, data, params) => {
        let {symptom, cmp_result, inject, injected_line_count, line_delta} = data["result_per_inj"];
        let err_msg = data["runtime_error"];
        let {line_start, line_end} = inject;
        let inj_lines = [];
        for (let i = line_start; i < line_end + line_delta; i++) inj_lines.push(i);
        let symptom_yes = "-UNKNOWN-";
        let symptom_cls = "-UNKNOWN-";
        let symptom_pos = "-UNKNOWN-";
        if (symptom !== null) {
          let {result_symptom} = symptom;
          if (result_symptom["category"][0] === "SUCCESS") symptom_yes = "N.A."; else symptom_yes = "NO_E";
          if (result_symptom["category"][0] === "RUNTIME_ERR" || result_symptom["category"][0] === "BEHAVIOR_MISMATCH") result_symptom["category"].push("SEMERR");
          symptom_cls = JSON.stringify(result_symptom["category"]);
          symptom_pos = String(result_symptom["lineno"] - 1);
          if (inj_lines.indexOf(result_symptom["lineno"] - 1) >= 0) symptom_yes = "YES_E";
        } 
        let diagnose_cls = "-UNKNOWN-";
        let diagnose_pos = "-UNKNOWN-";
        let any_sound = false;
        let last_sound = false;
        let sound_lines = null;
        let best_ratio = null;
        if (cmp_result !== null) {
          if (cmp_result === "SYNTAX_ERROR_NOT_APPLICABLE") {
            diagnose_cls = cmp_result;
            diagnose_pos = `${symptom_pos}`;
            let bug_lineno = parseInt(symptom_pos);
            if (bug_lineno >= line_start && bug_lineno <= line_end) {
              any_sound = true;
              last_sound = true;
              sound_lines = JSON.stringify([bug_lineno]);
              best_ratio = 1 / injected_line_count;
            }
          } else if (Array.isArray(cmp_result)) {
            diagnose_cls = JSON.stringify(cmp_result.map(x => x["reason"]));
            diagnose_pos = cmp_result.map(x => String(x["tar_cov_lines"])).join("|");
            for (let i = 0; i < cmp_result.length; i++) {
              let cmp_entry = cmp_result[i];
              let {tar_cov_lines} = cmp_entry;
              if (tar_cov_lines.indexOf(line_start) >= 0 || tar_cov_lines.indexOf(Math.min(line_start + 1, line_end)) >= 0) {
                any_sound = true;
                if (i === cmp_result.length - 1) {
                  last_sound = true;
                }
                sound_lines = JSON.stringify(tar_cov_lines);
                best_ratio = tar_cov_lines.length / injected_line_count;
              }
            }
          } else {
            diagnose_cls = "-UNEXPECTED- cmp_result: " + typeof(cmp_result);
            diagnose_pos = "-UNEXPECTED-";
          }
        }

        return {symptom_cls, symptom_pos, inj_lines, symptom_yes, diagnose_cls, diagnose_pos, any_sound, last_sound, sound_lines, best_ratio, syserr: err_msg ? err_msg : ""};
      }
    },
    {
      "agg_key": "per_inj_stat_vec",
      "agg_type": "TABULAR",
      "require": ["per_inj_table"],
      "using_alt_ids": "result_per_inj",
      "tabular_columns": ["e_syn", "e_sem", "e_syn_tokif", "e_syn_tokfor", "e_syn_lval", "e_rt", "e_rt_ref", "e_rt_type", "e_mism", "diag_sound", "diag_last_sound", "diag_lc", "diag_ratio", "symptom_yes", "symptom_no", "syserr"],
      "map_processor": async (id, data, params) => {
        let {symptom_cls, symptom_pos, inj_lines, symptom_yes, symptom_no, diagnose_cls, diagnose_pos, any_sound, last_sound, sound_lines, best_ratio, syserr} = data["per_inj_table"];
        let vec = {
          ne_succ: false,
          ne_unknown: false,
          e: false,
          e_syn: false,
          e_sem: false,
          e_syn_decl: false,
          e_syn_tokif: false,
          e_syn_tokfor: false,
          e_syn_lval: false,
          e_rt: false,
          e_rt_ref: false,
          e_rt_type: false,
          e_mism: false,
          diag_sound: false,
          diag_last_sound: false,
          diag_lc: null,
          diag_ratio: null,
          symptom_yes: null,
          symptom_no: null,
          syserr: false
        };
        vec.ne_succ = symptom_cls.indexOf("SUCCESS") >= 0;
        vec.ne_unknown = symptom_cls.indexOf("-UNKNOWN-") >= 0;
        vec.e = (!vec.ne_succ) && (!vec.ne_unknown);
        vec.e_syn = symptom_cls.indexOf("SYNTAX_ERR") >= 0;
        vec.e_sem = symptom_cls.indexOf("SEMERR") >= 0;
        vec.e_syn_decl = symptom_cls.indexOf("has already been declared") >= 0;
        vec.e_syn_tokif = symptom_cls.indexOf("Unexpected token 'if'") >= 0;
        vec.e_syn_tokfor = symptom_cls.indexOf("Unexpected token 'for'") >= 0;
        vec.e_syn_lval = symptom_cls.indexOf("Invalid left-hand side") >= 0;
        vec.e_rt = symptom_cls.indexOf("RUNTIME_ERR") >= 0;
        vec.e_rt_ref = symptom_cls.indexOf("ReferenceError:") >= 0;
        vec.e_rt_type = symptom_cls.indexOf("TypeError:") >= 0;
        vec.e_mism = symptom_cls.indexOf("BEHAVIOR_MISMATCH") >= 0;
        vec.diag_sound = (vec.e && any_sound) ? true : false;
        vec.diag_last_sound = (vec.e && last_sound) ? true : false;
        vec.diag_lc = vec.e ? (vec.diag_sound ? JSON.parse(sound_lines).length : "N.S.") : "-";
        vec.diag_ratio = vec.e ? (vec.diag_sound ? best_ratio : "N.S.") : "-";
        vec.symptom_yes = (vec.e && symptom_yes === "YES_E") ? true : false;
        vec.symptom_no = (vec.e && symptom_yes === "NO_E") ? true : false;
        vec.syserr = syserr ? true : false;
        return vec;
      }
    },
    {
      "agg_key": "per_inj_stats",
      "agg_type": "SCALAR",
      "require": ["per_inj_stat_vec"],
      "using_alt_ids": "result_per_inj",
      "scalar_processor": async (data_req_dict, params) => {
        let total_c = 0;
        let TOFIX_succ = 0;
        let TOFIX_unknown = 0;
        let TOFIX_syserr = 0;
        let err_total_c = 0;
        let err_syntax_c = 0;
        let err_sem_c = 0;
        let err_syntax_decl_c = 0;
        let err_syntax_tokif_c = 0;
        let err_syntax_tokfor_c = 0;
        let err_syntax_lval_c = 0;
        let err_runtime_c = 0;
        let err_runtime_ref_c = 0;
        let err_runtime_type_c = 0;
        let err_mismatch_c = 0;
        let diag_sound_c = 0;
        let diag_last_sound_c = 0;
        let diag_lc_avg = 0;
        let diag_ratio_avg = 0;
        let symptom_yes_c = 0;
        let symptom_no_c = 0;
        let symptom_no_diag_sound_c = 0;
        let err_mism_diag_sound_c = 0;
        for (let id in data_req_dict) {
          let table_entry = data_req_dict[id]["per_inj_stat_vec"];
          let {ne_succ, ne_unknown, e, e_syn, e_sem, e_syn_decl, e_syn_tokif, e_syn_tokfor, e_syn_lval, e_rt, e_rt_ref, e_rt_type, e_mism, diag_sound, diag_last_sound, diag_lc, diag_ratio, symptom_yes, symptom_no, syserr} = table_entry;
          total_c += 1;
          TOFIX_succ += ne_succ ? 1 : 0;
          TOFIX_unknown += ne_unknown ? 1 : 0; 
          TOFIX_syserr += syserr ? 1 : 0;
          err_total_c += e ? 1 : 0;
          err_syntax_c += e_syn ? 1 : 0;
          err_sem_c += e_sem ? 1 : 0;
          err_syntax_decl_c += e_syn_decl ? 1 : 0;
          err_syntax_tokif_c += e_syn_tokif ? 1 : 0;
          err_syntax_tokfor_c += e_syn_tokfor ? 1 : 0;
          err_syntax_lval_c += e_syn_lval ? 1 : 0;
          err_runtime_c += e_rt ? 1 : 0;
          err_runtime_ref_c += e_rt_ref ? 1 : 0;
          err_runtime_type_c += e_rt_type ? 1 : 0;
          err_mismatch_c += e_mism ? 1 : 0;

          // only get stats for sem err
          if (e_sem) { // e
            diag_sound_c += diag_sound ? 1 : 0;
            diag_last_sound_c += diag_last_sound ? 1 : 0;

            diag_lc_avg += diag_last_sound ? diag_lc : 0;
            diag_ratio_avg += diag_last_sound ? diag_ratio : 0;
            symptom_yes_c += symptom_yes ? 1 : 0;
            symptom_no_c += symptom_no ? 1 : 0;
            symptom_no_diag_sound_c += (symptom_no && diag_last_sound) ? 1 : 0;
            err_mism_diag_sound_c += (e_mism && diag_last_sound) ? 1 : 0;
          }
        }
        diag_lc_avg /= diag_last_sound_c;
        diag_ratio_avg /= diag_last_sound_c;
        let diag_succ_ratio = diag_last_sound_c / err_sem_c;
        let diag_symno_ratio = symptom_no_diag_sound_c / symptom_no_c;
        let diag_mism_ratio = err_mism_diag_sound_c / err_mismatch_c;
        return {
          total_c, TOFIX_succ, TOFIX_unknown, TOFIX_syserr, err_total_c, 
          err_syntax_c, err_sem_c, err_syntax_decl_c, err_syntax_tokif_c, err_syntax_tokfor_c, err_syntax_lval_c, 
          err_runtime_c, err_runtime_ref_c, err_runtime_type_c, err_mismatch_c, 
          diag_sound_c, diag_last_sound_c, diag_lc_avg, diag_ratio_avg, symptom_yes_c, symptom_no_c,
          symptom_no_diag_sound_c, err_mism_diag_sound_c,
          diag_succ_ratio, diag_symno_ratio, diag_mism_ratio
        };
      }
    }
  ];
  let processor_params = {category: category, langpair: langpair};
  let summary_result = await aggregateAsync(configurations, processor_params, bench_ids);
  // await logvizSETJSONAsync(`transmex:${summary_key}-byinj.rterror`, summary_result["runtime_error"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byinj.ckresult`, summary_result["result_per_inj"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byinj.tabular`, summary_result["per_inj_table"]["tabular"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byinj.vec.tabular`, summary_result["per_inj_stat_vec"]["tabular"]);
  await logvizSETJSONAsync(`transmex:${summary_key}-byinj.stats`, summary_result["per_inj_stats"]);
  return {metadata: {processor_params, prefix: `transmex:${summary_key}`}};
}