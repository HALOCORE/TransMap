
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 5, ["list", 19, ["num", 2], ["num", 9]], ["list", 19, ["num", 5], ["num", 9]]], ["list", 5, ["list", 35, ["num", -54], ["num", -80]], ["list", 35, ["num", 90], ["num", -86]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 37]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 87]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -82]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -1]]];
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
            [2, 9, 9, 13, 38, 41, 50, 59, 64, 64, 72, 78, 79, 80, 84, 92, 94, 98, 99],
            [5, 9, 11, 21, 24, 27, 30, 35, 38, 39, 40, 45, 48, 48, 51, 58, 61, 91, 92], 11, 9, 18
        ],
        [
            [-54, -80, -62, 98, -68, 42, 98, 80, -8, -6, 26, 0, -60, -24, -74, -48, 4, -54, 20, 32, 42, 68, -50, 58, -50, 96, -34, 22, 56, -60, -10, -18, 80, 20, -50],
            [90, -86, -82, 92, -42, -34, 10, -28, -78, 8, 66, 96, -16, -22, -68, -36, -72, 84, -54, -44, -80, -30, 64, 10, -60, -90, 22, 54, -88, 74, -56, 22, -24, -52, 82], 24, 24, 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 15, 15, 11
        ],
        [
            [85, 44, 60, 86, 26, 22, 95, 47, 43, 24, 30, 37, 22, 33, 6, 56],
            [66, 76, 38, 91, 57, 50, 12, 21, 90, 17, 18, 78, 23, 12, 90, 81], 12, 14, 10
        ],
        [
            [-32, -18, 2, 54, 72, 92, 94],
            [-76, -68, -34, -24, 8, 12, 32], 6, 3, 5
        ],
        [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0], 29, 29, 37
        ],
        [
            [3, 9, 13, 14, 16, 19, 20, 21, 23, 26, 27, 27, 28, 29, 31, 36, 37, 38, 41, 42, 45, 46, 52, 56, 63, 65, 70, 70, 72, 72, 76, 77, 78, 78, 79, 82, 83, 86, 87, 87, 90, 93, 93, 94, 96, 96, 97, 98],
            [2, 5, 6, 7, 9, 11, 11, 13, 17, 18, 20, 20, 26, 27, 35, 35, 36, 37, 41, 42, 45, 46, 48, 49, 50, 50, 54, 54, 56, 60, 62, 63, 65, 67, 68, 68, 70, 72, 74, 74, 78, 79, 80, 80, 86, 89, 97, 99], 27, 39, 28
        ],
        [
            [-82, -62],
            [48, 32], 1, 1, 1
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 14, 12
        ],
        [
            [26, 5, 60, 53, 35],
            [41, 80, 35, 14, 47], 3, 2, 3
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
