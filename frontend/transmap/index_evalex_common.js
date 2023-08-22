
// let [codexCompleteAsync_Cached, codexCompleteAsync_ForceNew] = [logvizCachedJSONApi("codexcomplete", codexCompleteAsync), logvizCachedJSONApi("codexcomplete", codexCompleteAsync, true)];
// let codexCompleteAsync_smart = smartCachedApiGen(codexCompleteAsync_Cached, codexCompleteAsync_ForceNew, (x) => x["error_msg"] && x["error_msg"].startsWith("Rate limit reached"));
// function smartCachedApiGen(cachedFunc, forcedFunc, condition_func) {
//   return async function() {
//     let result = await cachedFunc(...arguments);
//     if (condition_func(result)) {
//       console.log("[smart-cache] forced call...");
//       result = await forcedFunc(...arguments);
//     }
//     return result;
//   }
// }

let codexCompleteAsync_smart = null;
try {
  codexCompleteAsync_smart = logvizCachedJSONApiV2(
    "codexcomplete", codexCompleteAsync, false, 8000, 
    (x) => {
      if(x["error_msg"] && x["error_msg"].startsWith("Rate limit reached")) return false;
      else if(x["error_msg"] !== null) {
        console.error("NEED INVESTIGATION: codexCompleteAsync result unexpected: " + JSON.stringify(x));
        return false;
      }
      else return true;
    }
  );
} catch (e) {
}

/////////////////////////////////////////////////////////////////////////



function parse_langp_key(langp_key) {
  let langp_splits = langp_key.split("_");
  if (langp_splits.length !== 3) throw Error("Expecting the langp_key to be 3 parts");
  return langp_splits;
}


function safeReplace(long_str, substr, repl) {
  let splits = long_str.split(substr);
  return splits.join(repl);
}

function safeDigitsParseInt(str) {
  let result = parseInt(str);
  if (String(result) !== str) throw Error("[safeDigitsParseInt] failed: " + str);
  return result;
}

function arrayFilter(arr, func) {
  let filtered = [], rest = [];
  for (let elem of arr) {
    if (func(elem)) filtered.push(elem);
    else rest.push(elem);
  }
  return [filtered, rest];
}

function groupBy(arr, key_func) {
  let gdict = {};
  for (let elem of arr) {
    let key = key_func(elem);
    if (!(key in gdict)) gdict[key] = [];
    gdict[key].push(elem);
  }
  return gdict;
}

function getFolderAndFilenameSplit(filepath) {
  let segs = filepath.split("/");
  let path_segs = segs.slice(0, -1);
  let fname = segs.at(-1);
  return [path_segs.join("/") + "/", fname];
}

function vscdiff_lines(originalLines, modifiedLines, isEnableCharChanges = false) {
  let options = {
    shouldPostProcessCharChanges: isEnableCharChanges,
    shouldIgnoreTrimWhitespace: false,
    shouldMakePrettyDiff: true,
    shouldComputeCharChanges: isEnableCharChanges,
    maxComputationTime: 0 // time in milliseconds, 0 => no computation limit.
  }
  let diffComputer = new DiffComputer(originalLines, modifiedLines, options);
  let lineChanges = diffComputer.computeDiff().changes;
  return lineChanges;
}


function toast_info(infostr) {
  Toastify({
    text: infostr,
    gravity: "bottom",
    position: "center",
    className: "toast-info",
    duration: 3000
  }).showToast();
}

function toast_error(infostr) {
  Toastify({
    text: infostr,
    gravity: "bottom",
    position: "center",
    className: "toast-error",
    duration: 5000
  }).showToast();
}