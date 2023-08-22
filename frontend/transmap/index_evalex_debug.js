async function _DEBUG_logviz_anyjson_async(identifier, category, data) {
  if (identifier === null || identifier === undefined) console.warn("Skipped logging.");
  else await logvizSETJSONAsync(`transmex:${identifier}.${category}`, data);
}

async function _DEBUG_logviz_code_async(identifier, lang, code, anno) {
  if (identifier === null || identifier === undefined) console.warn("Skipped logging.");
  else await logvizSETJSONAsync(`transmex:${identifier}.code`, {lang, code, anno});
}

async function _DEBUG_logviz_code_async(identifier, lang, code, anno) {
  if (identifier === null || identifier === undefined) console.warn("Skipped logging.");
  else await logvizSETJSONAsync(`transmex:${identifier}.code`, {lang, code, anno});
}


async function _DEBUG_logviz_log_create_async (identifier, category) {
  if (identifier === null || identifier === undefined) console.warn("Skipped logging.");
  else await logvizSETJSONAsync(`transmex:${identifier}.${category}.log`, {"__logviz_t": "LOG_ARRAY", "entries": []});
}

async function _DEBUG_logviz_log_append_async (identifier, category, title, data) {
  if (identifier === null || identifier === undefined) console.warn("Skipped logging.");
  else await logvizAPPENDJSONAsync(`transmex:${identifier}.${category}.log`, "$.entries", {title:title, data:data, time:get_date_time_str(new Date())});
}

async function _DEBUG_logviz_clear_async(identifier) {
  if (identifier === null || identifier === undefined) console.warn("Skipped logging.");
  else {
    let pattern = `transmex:${identifier}.*`;
    console.warn(">>>>>> Log cleanup with prefix:", pattern);
    await logbizDELETEPatternAsync(pattern);
  }
}


///////////////////////////////////////////////////////////////////////


async function __DEBUG_logviz_getanyjson_async(identifier, category) {
  let resp = await logvizGETJSONAsync(`transmex:${identifier}.${category}`);
  return resp;
}

