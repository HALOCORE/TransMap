
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 7, ["list", 25, ["num", 6], ["num", 7]], ["list", 25, ["num", 11], ["num", 17]]], ["list", 7, ["list", 47, ["num", -72], ["num", -90]], ["list", 47, ["num", 50], ["num", -20]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", false]]];
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
            [6, 7, 10, 15, 28, 30, 30, 35, 38, 43, 44, 44, 54, 55, 64, 68, 69, 73, 75, 75, 86, 87, 92, 93, 94],
            [11, 17, 18, 24, 26, 26, 33, 35, 38, 41, 55, 60, 63, 63, 69, 73, 78, 81, 82, 87, 90, 91, 93, 94, 99],
            [3, 3, 8, 22, 24, 24, 28, 30, 32, 32, 34, 39, 40, 45, 46, 50, 54, 59, 75, 78, 79, 90, 95, 95, 97], 21, 16, 17, 18
        ],
        [
            [-72, -90, -92, 4, 22, 14, -50, 16, -56, -66, 62, -32, 82, 8, 12, -24, 92, -98, -94, 56, -74, -66, 26, -98, 10, -74, -14, 2, 60, -88, -84, 34, 82, 28, -86, -90, -92, 52, 72, 90, 92, -20, -86, 74, -96, -46, 28],
            [50, -20, 26, 32, -46, 38, 36, 0, -96, 60, -70, -36, -12, 50, 64, -70, 22, -22, 32, 60, -94, 98, -58, -86, -16, 40, -68, 2, -50, 6, -36, -28, -68, 44, -98, -38, -46, 68, 4, 60, -36, 28, -38, 4, 50, -84, -12],
            [-28, 20, -62, -84, 14, 10, 28, -10, 94, -2, 52, 66, 38, -50, 48, -88, -28, 92, -48, 86, 4, -16, 26, 26, -82, 44, 70, 72, -6, -98, 80, 56, 38, 42, -20, 64, 36, 80, 12, 4, -50, 54, 22, 98, -30, -52, 4], 41, 42, 34, 32
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 26, 20, 30, 16
        ],
        [
            [85, 34, 78, 64, 22, 94, 52, 71, 44, 48, 46, 88, 59, 95, 4, 55, 21, 83, 56, 19, 85, 6, 87, 13],
            [58, 45, 14, 13, 73, 82, 34, 78, 83, 84, 39, 34, 65, 84, 84, 61, 26, 67, 48, 51, 41, 46, 89, 10],
            [46, 1, 2, 90, 31, 49, 62, 10, 28, 4, 48, 84, 87, 51, 88, 74, 99, 15, 35, 24, 32, 66, 10, 66], 15, 16, 23, 15
        ],
        [
            [-98, -98, -96, -94, -90, -90, -84, -36, -34, -34, -32, 16, 26, 26, 56, 74, 80],
            [-92, -70, -70, -56, -54, -48, -38, -14, -10, 0, 4, 30, 34, 70, 72, 76, 78],
            [-92, -88, -70, -56, -50, -50, -48, -36, -20, -10, -8, 2, 16, 22, 48, 70, 78], 15, 10, 15, 15
        ],
        [
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 0, 1], 5, 7, 9, 6
        ],
        [
            [4, 4, 25, 27, 35, 39, 50, 60, 60, 63, 67, 73, 75, 81, 84, 85, 91, 98],
            [20, 21, 23, 25, 37, 41, 51, 57, 62, 66, 74, 77, 77, 79, 80, 87, 88, 95],
            [2, 3, 9, 10, 10, 18, 24, 40, 41, 47, 68, 69, 70, 86, 90, 95, 96, 98], 12, 17, 13, 9
        ],
        [
            [54, -64, 76, 78, 24, 40, 44, -56, 80, -10, -12, -8, -18, 42, 70, 14, -70, 48, -68, -98, -74, -40, -16, -90, 48, 92, -64, 58, -98, 60, -10, -10],
            [88, -66, -50, 74, -44, -32, -58, -24, -40, 62, 52, 88, -48, -2, -46, 38, 30, -56, 76, 56, 60, 52, -32, 36, 90, 92, -74, 88, -36, -14, -16, -14],
            [38, -96, 16, 38, -48, -22, -52, -78, 42, 94, -26, -20, 12, -10, 72, 16, -8, -2, -36, -76, -6, -92, 10, 34, -76, -54, -20, 20, -76, -46, 24, 44], 23, 18, 29, 19
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 38, 22, 40, 32
        ],
        [
            [28, 88, 75, 86, 51, 82, 2, 20, 22, 18, 96, 11],
            [62, 54, 79, 88, 27, 13, 48, 94, 86, 28, 86, 60],
            [49, 14, 18, 61, 94, 54, 12, 56, 97, 59, 85, 44], 6, 6, 8, 9
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
