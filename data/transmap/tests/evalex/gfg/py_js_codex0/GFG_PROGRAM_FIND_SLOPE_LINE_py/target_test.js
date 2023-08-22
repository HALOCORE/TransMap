
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["num", 236.27324548309292], ["num", 5792.493225762838]], ["list", 4, ["num", -9201.144918204123], ["num", -2716.3347716140406]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", -0.6486899453998202]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -0.12115078452752318]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0.617204628531244]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -0.8320918116165706]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -38.51013687881985]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -0.6052307962095809]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", -0.7142746798007333]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0.9387777514963889]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -4.2964732392719505]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 2.85002783720527]]];
let _console_log = console.log;
let mylog_callcount = 0;
function _list_compare(ls1, ls2) {
  if (ls1.length !== ls2.length) return false;
  if (ls1.length > 0 && ls1[0] === "num" && ls2.length > 0 && ls2[0] === "num") {
    if (ls1[1] === ls2[1]) return true;
    else {
      try {
        if (Math.abs(ls1[1]) > 1e-6 && Math.abs(ls2[1]) > 1e-6) {
          if (Math.abs(ls1[1]) > 2 * Math.abs(ls2[1])) return false;
          else if (2 * Math.abs(ls1[1]) < Math.abs(ls2[1])) return false;
          else if (Math.abs(Math.abs(ls1[1] / ls2[1]) - 1) > 1e-6) return false;
          else return true;
        } 
        else if (Math.abs(ls1[1]) <= 1e-6 && Math.abs(ls2[1]) <= 1e-6) return true;
        else return false;
      } catch (e) {
        throw Error("MyLogError _list_compare num error: " + ls1 + " <==> " + ls2 + " " + e);
      }
    }
  }
  let anyDiff = false;
  for (let i = 0; i < ls1.length; i++) {
    let ls1e = ls1[i], ls2e = ls2[i];
    if (Array.isArray(ls1e) && Array.isArray(ls2e)) {
      let elem_anydiff = !_list_compare(ls1e, ls2e);
      anyDiff = anyDiff || elem_anydiff;
    }
    else anyDiff = anyDiff || (ls1e !== ls2e);
    if (anyDiff) break;
  }
  return !anyDiff;
}
function mylog_obj_to_comp(is_exact, arg) {
  let typearg = typeof arg;
  if (arg === true || arg === false) return ["bool", arg];
  else if (typearg === "number") return ["num", arg];
  else if (typearg === "string") {
    if (is_exact) return ["string", arg.length, arg];
    else return ["string", arg.length, arg.length < 10 ? arg : arg.slice(0,10)];
  }
  else if (Array.isArray(arg)) {
    if (is_exact) return ["list", arg.length, arg.map(x => mylog_obj_to_comp(is_exact, x))];
    else return ["list", arg.length, arg.length > 0 ? mylog_obj_to_comp(is_exact, arg[0]) : "EMPTY", arg.length > 1 ? mylog_obj_to_comp(is_exact, arg[1]) : "EMPTY"];
  }
  else if (arg === null || arg === undefined) return ["none"];
  else return ["Unknown"];
}
function _mylog() {
  let is_exact = arguments[0];
  let prefix = is_exact ? "MYLOGEX:" : "MYLOGAP:";
  let info_list = [prefix + arguments[1]];
  if (SKIP_LOGGING === true && arguments[1] === -1) return;
  for (let i = 2; i < arguments.length; i++) {
    info_list.push(mylog_obj_to_comp(is_exact, arguments[i]));
  }
  _console_log("\n" + JSON.stringify(info_list));
  while (SKIP_LOGGING === true && mylog_callcount < MYLOG_LIST.length && MYLOG_LIST[mylog_callcount][0].endsWith(":-1")) {
    mylog_callcount += 1;
  }
  if (mylog_callcount >= MYLOG_LIST.length) {
    throw Error("MyLogError MYLOG_LENGTH_EXCEEDED COUNT:" + String(mylog_callcount) + " CALL_ID:" + String(arguments[0]));
  }
  else {
    if (_list_compare(info_list, MYLOG_LIST[mylog_callcount])) {
      mylog_callcount += 1;
      return;
    } else {
      throw Error("MyLogError MISMATCH CALL_ID:" + String(arguments[1]) 
        + " MISMATCH_IDX:" + String(mylog_callcount) 
        + " OBSERVED:" + JSON.stringify(info_list) 
        + " EXPECTED:" + JSON.stringify(MYLOG_LIST[mylog_callcount]));
    }
  }
}
function mylog() {
  _mylog(false, ...arguments);
}
function myexactlog() {
  _mylog(true, ...arguments);
}
console.log = function () {
  myexactlog(-1, [...arguments]);
  _console_log(...arguments);
}
function test() {
    "--- test function ---";
    let param = [
        [236.27324548309292, 5792.493225762838, 7177.837879115863, 1289.5700425822731],
        [-9201.144918204123, -2716.3347716140406, -5161.142121227645, -3205.784279961129],
        [3480.4716834445326, 3577.9608612055613, 8611.515262945342, 6744.864707668983],
        [-6915.538971485092, -4113.601103381095, -748.3462104020822, -9245.271700539257],
        [8887.97173657486, 1678.4080012662428, 8709.574949883017, 8548.492675510739],
        [-3785.5177159369946, -3084.67461899163, -7415.76208254121, -887.5389305564152],
        [3037.6696554256832, 4432.445827549, 8387.304165588026, 611.3373507518394],
        [-7925.458496016523, -3350.27411882042, -5619.767086756504, -1185.7423219907591],
        [1404.2919985268031, 8971.636233373416, 3039.112051378511, 1947.6756252708972],
        [-4748.744241168378, -675.557388148954, -5998.241086029875, -4236.658178504375]
    ];
    mylog(0, param);
    for (let i = 0; i < param.length; i++) {
        let parameters_set = param[i];
        let idx = i;
        myexactlog(1, idx);
        let result = f_gold(...parameters_set);
        myexactlog(2, result);
    }
}
"-----------------"

//TESTED_PROGRAM

"-----------------"

test()
