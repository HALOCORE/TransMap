
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 5, ["list", 33, ["num", 1], ["num", 2]], ["list", 33, ["num", 5], ["num", 5]]], ["list", 5, ["list", 31, ["num", 52], ["num", 28]], ["list", 31, ["num", -88], ["num", -32]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 2]]];
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
            [1, 2, 5, 5, 9, 11, 12, 14, 16, 18, 35, 36, 39, 44, 50, 52, 52, 59, 69, 81, 82, 84, 85, 87, 87, 87, 88, 88, 89, 90, 90, 92, 97],
            [5, 5, 8, 20, 20, 24, 25, 29, 34, 37, 43, 45, 48, 49, 59, 60, 68, 70, 70, 72, 72, 75, 76, 77, 79, 81, 84, 85, 86, 88, 95, 96, 96], 17, 29, 32
        ],
        [
            [52, 28, -38, 78, -86, 78, -48, -70, -80, 28, -8, 60, -28, 90, 6, 76, 32, -54, 30, 30, -32, -24, -36, 62, 36, -66, 56, 92, -20, 90, 32],
            [-88, -32, 30, 32, -46, 62, -92, -90, -18, -18, 10, 16, 60, -40, 32, -88, 60, -82, 76, 50, 86, -82, -48, -68, -42, 34, 4, 0, 98, 92, -78], 30, 27, 17
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 13, 11, 8
        ],
        [
            [91, 95, 13, 13, 76, 18, 36, 86, 26, 13, 17, 68, 58, 42, 38, 9, 42, 90, 14, 74, 38, 64, 15],
            [16, 96, 8, 35, 12, 27, 81, 21, 32, 82, 95, 81, 53, 76, 72, 16, 9, 16, 61, 1, 36, 71, 28], 11, 12, 15
        ],
        [
            [-96, -94, -94, -92, -74, -70, -66, -54, -48, -20, -18, -10, -6, -2, 2, 18, 36, 48, 52, 58, 68, 74, 88, 90, 94],
            [-92, -72, -72, -64, -58, -52, -30, -28, -24, -24, -16, -10, -2, 4, 12, 22, 30, 38, 44, 62, 64, 68, 86, 88, 90], 19, 14, 21
        ],
        [
            [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], 18, 19, 29
        ],
        [
            [7, 18, 19, 20, 24, 25, 25, 27, 30, 35, 39, 42, 58, 59, 63, 64, 64, 66, 66, 68, 69, 77, 86, 93],
            [2, 2, 18, 20, 22, 22, 31, 35, 36, 40, 41, 41, 41, 42, 42, 43, 45, 61, 79, 83, 87, 91, 95, 96], 22, 18, 18
        ],
        [
            [86, 44, 10, 80, 12, 52, -92, 2, 42, -32, -14, 2, -42, 40, 96, 22, 58, -90, -20, 22, 96, 10, -92, -28, -28, 80, 36, 72, -2, 32, -46, 62, -58, 20, 22, 32, -98, -2, -42, -90, 10, 70, 54, -32],
            [-4, -76, -98, 14, 30, -10, -10, 62, 88, -94, -74, -82, 84, 44, 58, 8, -42, -66, -18, 68, -78, 42, -32, 38, -98, 38, -78, 42, 86, -38, -6, -72, -44, 8, -6, -48, -62, 82, 94, -92, -56, 28, -54, 34], 26, 36, 31
        ],
        [
            [0, 0, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1], 5, 3, 5
        ],
        [
            [43, 2, 4, 99, 45, 80, 27, 8, 64, 77, 57, 55, 71, 67, 51, 42, 58, 70, 5, 62, 55, 20, 61, 47, 66, 80, 70, 24, 56, 22, 58, 63, 61, 41, 20, 97, 47],
            [11, 66, 41, 17, 93, 25, 24, 17, 12, 33, 62, 86, 48, 68, 36, 36, 39, 82, 7, 66, 5, 48, 27, 9, 56, 6, 61, 91, 98, 74, 61, 63, 98, 96, 57, 63, 85], 24, 29, 21
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
