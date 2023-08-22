
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 21, ["num", 5], ["num", 6]], ["num", 18]], ["list", 3, ["list", 25, ["num", 68], ["num", 10]], ["num", 22]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 15540]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 218]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 522]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 29070]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 18]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 300]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 2570]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 134]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -2147483648]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -2147483648]]];
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
        [
            [5, 6, 12, 20, 23, 28, 33, 37, 47, 51, 53, 56, 63, 65, 65, 68, 69, 76, 76, 78, 83], 18, 20
        ],
        [
            [68, 10, 52, -44, 34, -4, -34, 2, 50, -60, 50, 94, -98, -98, -44, -36, -4, -62, -2, -92, -70, -48, -78, -10, 94], 22, 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 34, 29
        ],
        [
            [71, 59, 21, 82, 73, 29, 30, 25, 21, 10, 85, 22, 60, 43, 49, 20, 34, 39, 69, 6, 44, 27, 50, 33, 57, 29, 65, 18, 68, 56, 50, 28], 23, 30
        ],
        [
            [-84, -74, -74, -56, -54, -48, -48, -46, -42, -34, -32, -30, -18, -16, -16, 6, 12, 20, 24, 26, 30, 32, 34, 42, 42, 42, 44, 46, 46, 50, 50, 62, 72, 78, 90], 17, 23
        ],
        [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0], 16, 25
        ],
        [
            [3, 7, 11, 11, 26, 60, 68, 71, 77, 91, 95], 8, 10
        ],
        [
            [28, 48, -86, -52, 6, 4, 30, 18, -32, 60, -2, 16, -88, -36], 8, 11
        ],
        [
            [1], 0, 0
        ],
        [
            [76], 0, 0
        ]
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
