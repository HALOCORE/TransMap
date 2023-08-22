//window._LOGVIZ_CONFIG is set by xapi_logviz.private.js
if (!("_LOGVIZ_CONFIG" in window)) alert("Cannot initialize xapi_logviz. Check if xapi_logviz.private.js exist?");
let _WEBDIS_API_ENDPOINT = window._LOGVIZ_CONFIG["WEBDIS_API_ENDPOINT"];
let _LOGBIZ_API_ENDPOINT = window._LOGVIZ_CONFIG["LOGBIZ_API_ENDPOINT"];

// detect if current origin is HTTPS
let _isHTTPS = window.location.protocol === "https:";
if (_isHTTPS) {
  _WEBDIS_API_ENDPOINT = window._LOGVIZ_CONFIG["WEBDIS_API_ENDPOINT_HTTPS"];
  _LOGBIZ_API_ENDPOINT = window._LOGVIZ_CONFIG["LOGBIZ_API_ENDPOINT_HTTPS"];
  window._LOGVIZ_TRANSMAP_BRIDGE_URL = window._LOGVIZ_CONFIG["LOGVIZ_TRANSMAP_BRIDGE_URL_HTTPS"];
} else {
  window._LOGVIZ_TRANSMAP_BRIDGE_URL = window._LOGVIZ_CONFIG["LOGVIZ_TRANSMAP_BRIDGE_URL"];
}

let _LOGVIZ_JSON_CACHE_ENABLED = true;
let _LOGVIZ_JSON_CACHE_V2_COLLISION_DICT = {};

let _logviz__getAsync = null;
let _logviz__postAsync = null;
let _logviz__putJSONAsync = null;
let _logviz__putRawWithContentTypeAsync = null;

let _logviz__getJSONDataAsync = null;
let _logviz__putJSONDataAsync = null;


async function logvizGETJSONAsync (key) {
  let result = await _logviz__getAsync(_WEBDIS_API_ENDPOINT, "/JSON.GET/" + key);
  let jsresp = JSON.parse(result);
  if ("JSON.GET" in jsresp) return JSON.parse(jsresp["JSON.GET"]);
  throw Error("logvizGETJSONAsync JSON.GET unexpected resp: " + JSON.stringify(jsresp));
}

async function logvizSETJSONAsync (datakey, data) {
  let result = await _logviz__putJSONAsync(_WEBDIS_API_ENDPOINT, "/JSON.SET/" + datakey + "/$", data);
  let jsresp = JSON.parse(result);
  if ("JSON.SET" in jsresp) return jsresp["JSON.SET"];
  throw Error("logvizSETJSONAsync JSON.SET unexpected resp: " + JSON.stringify(jsresp));
}

async function logvizAPPENDJSONAsync (datakey, jsonpath, data) {
  let result = await _logviz__putJSONAsync(_WEBDIS_API_ENDPOINT, "/JSON.ARRAPPEND/" + datakey + "/" + jsonpath, data);
  let jsresp = JSON.parse(result);
  if ("JSON.ARRAPPEND" in jsresp) return jsresp["JSON.ARRAPPEND"];
  throw Error("logvizAPPENDJSONAsync JSON.ARRAPPEND unexpected resp: " + JSON.stringify(jsresp));
}

async function logbizDELETEPatternAsync (key_pattern) {
  let result = await _logviz__getAsync(_WEBDIS_API_ENDPOINT, "/KEYS/" + key_pattern);
  let jsresp = JSON.parse(result);
  if ("KEYS" in jsresp) {
    for (let k of jsresp["KEYS"]) {
      let del_result = await _logviz__getAsync(_WEBDIS_API_ENDPOINT, "/DEL/" + k);
      let del_resp = JSON.parse(del_result);
      if (!("DEL" in del_resp && del_resp["DEL"] === 1)) {
        throw Error("logvizSETJSONAsync DEL failed: " + JSON.stringify(del_resp));
      } 
    }
  } else {
    throw Error("logvizSETJSONAsync DELETE (KEYS) unexpected resp: " + JSON.stringify(jsresp));
  }
}

function logvizCachedJSONApi (func_id, func, force_new=false)  {
  return async function () {
    let params = [...arguments];
    let param_key = func_id + JSON.stringify(params);
    let store_key = "jsoncache:" + _logviz__hashCode(param_key);
    let result = null;
    if (_LOGVIZ_JSON_CACHE_ENABLED && !force_new) {
      try {
        result = await logvizGETJSONAsync(store_key);
      } catch (e) {console.warn("[logvizCachedJSONApi]", e)}
    }
    if (result === null) {
      result = await func(...arguments);
      if (_LOGVIZ_JSON_CACHE_ENABLED) {
        try {
          await logvizSETJSONAsync(store_key, result);
        } catch (e) {console.warn("[logvizCachedJSONApi]", e)}
      }
    }
    return result;
  }
}

function logvizCachedJSONApiV2 (func_id, func, force_new=false, validate_interval=500, validator_f=null)  {
  return async function () {
    let params = [...arguments];
    let param_key = func_id + JSON.stringify(params);
    const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
    shaObj.update(param_key);
    const hash = shaObj.getHash("HEX");
    let store_key = "jsoncacheV2:" + hash;
    let ret_val = null;
    if (_LOGVIZ_JSON_CACHE_ENABLED && !force_new) {
      try {
        let result = await logvizGETJSONAsync(store_key);
        if (result === null) throw Error("Cache miss. store_key=" + store_key);
        if (result["param_key"] !== param_key) {
          _LOGVIZ_JSON_CACHE_V2_COLLISION_DICT[store_key] = {"fetching": param_key, "existing": result["param_key"]};
          throw Error("COLLISION!!! param_key mismatch! store_key=" + store_key);
        }
        ret_val = result["ret_val"];
        if (validator_f !== null && (!validator_f(ret_val))) {
          ret_val = null;
          throw Error("INVALID!!! cached result failed validation! store_key=" + store_key);
        }
      } catch (e) {console.warn("[logvizCachedJSONApiV2]", e)}
    }
    if (ret_val === null) {
      while (true) {
        ret_val = await func(...arguments);
        if (validator_f === null) break;
        if (validator_f(ret_val)) break;
        await new Promise(resolve => setTimeout(resolve, validate_interval));
        console.warn("[logvizCachedJSONApiV2] Validation failed. Retrying ...");
      }
      if (_LOGVIZ_JSON_CACHE_ENABLED) {
        try {
          await logvizSETJSONAsync(store_key, {"param_key": param_key, "ret_val": ret_val});
        } catch (e) {console.warn("[logvizCachedJSONApiV2]", e)}
      }
    }
    return ret_val;
  }
}

////////////////////// utils //////////////////////

function _logviz__request(obj, resp_type=null) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    if (resp_type) xhr.responseType = resp_type;
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
      Object.keys(obj.headers).forEach(key => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        console.error("my XHR _logviz__request unwanted statusCode:", xhr.status);
        reject(xhr.statusText);
      }
    };
    xhr.onerror = (e) => {
      console.error("my XHR _logviz__request error:", e);
      reject(xhr.statusText);
    };
    xhr.send(obj.body);
  });
}

_logviz__getAsync = async (prefix, path) => {
  let netpath = prefix + path;
  let t1 = performance.now();
  let result = await _logviz__request({
    "url": netpath,
    "method": "GET"
  });
  let t2 = performance.now();
  console.log(`# _logviz__getAsync (${Math.round(t2 - t1)}ms)`, netpath);
  return result;
}


_logviz__postAsync = async (prefix, path, data) => {
  let netpath = prefix + path;
  let t1 = performance.now();
  let result = await _logviz__request({
    "url": netpath,
    "headers": { "Content-Type": "application/json;charset=UTF-8" },
    "method": "POST",
    "body": JSON.stringify(data)
  });
  let t2 = performance.now();
  console.log(`# _logviz__postAsync (${Math.round(t2 - t1)}ms)`, netpath);
  return result;
}


_logviz__putJSONAsync = async (prefix, path, data) => {
  let netpath = prefix + path;
  let t1 = performance.now();
  let result = await _logviz__request({
    "url": netpath,
    "headers": { "Content-Type": "application/json;charset=UTF-8" },
    "method": "PUT",
    "body": JSON.stringify(data)
  });
  let t2 = performance.now();
  console.log(`# _logviz__putJSONAsync (${Math.round(t2 - t1)}ms)`, netpath);
  return result;
}

_logviz__putRawWithContentTypeAsync = async (prefix, path, raw_data, content_type) => {
  let netpath = prefix + path;
  let t1 = performance.now();
  let result = await _logviz__request({
    "url": netpath,
    "headers": { "Content-Type": content_type },
    "method": "PUT",
    "body": raw_data
  });
  let t2 = performance.now();
  console.log(`# _logviz__putRawWithContentTypeAsync (${Math.round(t2 - t1)}ms)`, netpath);
  return result;
}

function _logviz__hashCode(str) {
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
