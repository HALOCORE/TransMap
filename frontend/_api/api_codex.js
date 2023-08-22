//////// initializer begin
(function () {
  let current_url = window.document.location.href;
  if (current_url.indexOf("/frontend/") >= 0) {
    window.SERVER_CODEX_PREFIX = current_url.split("/frontend/")[0] + "/backend/codex";
  } else {
    throw Error("Unexpected origin.");
  }
})();
//////// initializer end


async function codexTranslateAsync(src_lang, tar_lang, code, max_length, temp, is_beta = false, engine = "code-davinci-001") {
  return JSON.parse(await postAsync(SERVER_CODEX_PREFIX, "/codextranslate", {
    source_language: src_lang,
    target_language: tar_lang,
    source_code: code,
    max_length: max_length,
    temp: temp,
    is_beta: is_beta,
    engine: engine
  }));
}

async function codexPatchAsync(src_lang, tar_lang, src_code, tar_code, err_src_range, err_tar_range, insertion_prompt, max_length, temp, is_beta = false, engine = "code-davinci-002") {
  return JSON.parse(await postAsync(SERVER_CODEX_PREFIX, "/codexpatch", {
    source_language: src_lang,
    target_language: tar_lang,
    source_code: src_code,
    target_code: tar_code,
    source_range: err_src_range,
    target_range: err_tar_range,
    insertion_prompt: insertion_prompt,
    max_length: max_length,
    temp: temp,
    is_beta: is_beta,
    engine: engine
  }))
}

async function codexPatchV2Async(src_lang, tar_lang, src_code, tar_code_with_insert, err_src_range, err_tar_range_str, insertion_prompt, max_length, temp, is_beta = false, engine = "code-davinci-002") {
  return JSON.parse(await postAsync(SERVER_CODEX_PREFIX, "/codexpatchv2", {
    source_language: src_lang,
    target_language: tar_lang,
    source_code: src_code,
    target_code_with_insert: tar_code_with_insert,
    source_range: err_src_range,
    target_range_str: err_tar_range_str,
    insertion_prompt: insertion_prompt,
    max_length: max_length,
    temp: temp,
    is_beta: is_beta,
    engine: engine
  }))
}

async function codexCompleteAsync(prompt, stop_sequences, max_length, temp, is_beta = false, engine = "code-davinci-002", _nonce = null) {
  let payload = {
    prompt: prompt,
    max_length: max_length,
    temp: temp,
    is_beta: is_beta,
    engine: engine,
    stop: stop_sequences
  };
  if (_nonce !== undefined && _nonce !== null) {
    payload["_nonce"] = _nonce;
  } else {
    if (temp > 0) throw Error("Invalid Parameters: _nonce need to be provided for temp > 0");
  }
  return JSON.parse(await postAsync(SERVER_CODEX_PREFIX, "/codexcomplete", payload));
}

async function codexInsertAsync(prompt, stop_sequences, suffix, max_length, temp, is_beta = false, engine = "code-davinci-002") {
  return JSON.parse(await postAsync(SERVER_CODEX_PREFIX, "/codexinsert", {
    prompt: prompt,
    suffix: suffix,
    max_length: max_length,
    temp: temp,
    is_beta: is_beta,
    engine: engine,
    stop: stop_sequences
  }))
}