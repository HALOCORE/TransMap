
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 31, ["num", 7], ["num", 10]], ["list", 4, ["num", 10], ["num", 13]]], ["list", 4, ["list", 48, ["num", 12], ["num", 30]], ["list", 3, ["num", 12], ["num", -18]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            [7, 10, 10, 10, 13, 17, 23, 24, 25, 28, 30, 33, 37, 49, 49, 50, 57, 60, 60, 63, 63, 64, 65, 65, 72, 81, 84, 85, 85, 94, 96],
            [10, 13, 17, 63], 29, 4
        ],
        [
            [12, 30, -94, -92, -62, -18, -56, 44, -50, -92, 6, 2, 56, -90, 0, 0, 18, 86, -58, 58, -54, 62, -94, 94, 0, 8, 82, -68, -88, -18, 8, -80, -42, 18, 62, -8, 56, -76, -42, 56, 44, -2, -20, 62, -14, 74, -86, -76],
            [12, -18, 44], 46, 3
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0], 34, 3
        ],
        [
            [94, 26, 32, 20, 46, 55, 9, 51, 57, 80, 45, 38, 68, 12, 90, 10, 80, 65, 12, 52, 51, 86, 64, 57, 93, 19, 30, 92, 85, 82, 24, 26, 36, 56],
            [80, 58, 32, 2], 17, 4
        ],
        [
            [-98, -90, -86, -86, -84, -84, -82, -80, -78, -72, -70, -68, -66, -64, -52, -52, -50, -38, -28, -26, -24, -14, -8, 16, 26, 26, 28, 34, 36, 40, 42, 44, 44, 46, 50, 60, 68, 78, 80, 86, 90, 92, 98],
            [-99, -90, -90, -86], 23, 4
        ],
        [
            [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
            [0, 0, 1, 1], 10, 4
        ],
        [
            [6, 8, 11, 13, 14, 26, 26, 41, 48, 70, 82, 83, 84, 88, 96],
            [1, 9, 12, 16], 10, 4
        ],
        [
            [-88, 80, 62, 76, 48, 92, 18, -94, -62, 98, -46, -50, 70, 32, 68, -54, 26, 16, 94, 0, -84, 2, -16, 88, 26, -38, 18, 64, 90, 80, 76, 2, 14, -90, 50, 4, 76, 30],
            [-76, -54, 4, 78], 27, 4
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 1], 10, 4
        ],
        [
            [54, 44, 97, 92, 13, 54, 27, 8, 43, 70, 77, 84, 55, 64, 5, 59, 27, 19, 65, 68, 66, 26, 33, 38, 7],
            [93, 5, 9, 13], 19, 4
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
