
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 7, ["list", 26, ["num", 4], ["num", 9]], ["list", 26, ["num", 4], ["num", 8]]], ["list", 7, ["list", 30, ["num", -24], ["num", -80]], ["list", 30, ["num", 30], ["num", -60]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", false]]];
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
            [4, 9, 10, 19, 24, 25, 26, 30, 36, 43, 44, 49, 52, 62, 66, 69, 72, 77, 80, 80, 82, 84, 90, 93, 94, 98],
            [4, 8, 17, 20, 22, 25, 27, 30, 31, 33, 35, 35, 38, 41, 49, 51, 60, 61, 66, 67, 69, 82, 84, 85, 86, 88],
            [12, 14, 17, 20, 22, 27, 29, 31, 32, 38, 41, 43, 56, 59, 59, 64, 66, 67, 68, 69, 71, 76, 83, 83, 85, 99], 25, 18, 16, 222
        ],
        [
            [-24, -80, -72, 80, -96, -94, 64, 18, 12, 16, 74, 16, 54, 66, -96, -90, 54, 72, -32, -2, 90, -18, -98, 12, -42, -30, -82, -56, -86, 40],
            [30, -60, -24, 18, 40, 44, -40, 62, 66, -38, 50, -74, -42, -86, -82, -8, 50, -72, -2, -48, -38, -20, -8, 56, -32, 68, 94, 80, -48, 0],
            [-24, 80, 50, -56, -92, 20, 86, -42, -30, 96, 40, -32, -64, 54, -38, -72, -70, 54, -28, 98, 60, 98, -12, -30, -30, 68, -66, 68, -58, 52], 26, 22, 20, 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 14, 14, 14, 2
        ],
        [
            [28, 15, 21, 28, 85, 68, 24],
            [57, 46, 47, 49, 16, 81, 60],
            [76, 49, 6, 44, 71, 24, 57], 6, 5, 5, 73
        ],
        [
            [-86, -82, -66, -44, -44, -38, -22, -6, -2, 14, 26, 40, 54, 58, 60, 66, 72, 80, 94, 96, 98],
            [-96, -86, -74, -56, -52, -42, -32, -22, -16, -10, -4, -4, 10, 42, 48, 52, 58, 62, 84, 90, 96],
            [-92, -92, -90, -82, -62, -44, -42, -40, -38, -36, -22, -20, -8, 12, 22, 26, 30, 44, 54, 64, 86], 13, 20, 17, 6
        ],
        [
            [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0], 25, 25, 23, 0
        ],
        [
            [44, 53, 85, 85, 86, 88, 93],
            [4, 5, 8, 15, 29, 40, 91],
            [30, 53, 71, 75, 76, 82, 84], 5, 3, 4, 3
        ],
        [
            [70, -38, 62, -34, 74, -32, -58, -34, -54],
            [48, -86, -18, 14, 88, 92, -56, -8, -74],
            [8, 8, 32, 76, 76, 94, 22, -60, -42], 6, 6, 6, 7
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 15, 14, 10, 13
        ],
        [
            [41, 64, 39, 96, 54, 54, 57, 4, 82, 43, 44, 56, 1],
            [44, 58, 40, 87, 22, 82, 8, 81, 88, 42, 15, 14, 81],
            [64, 20, 24, 42, 37, 46, 6, 47, 12, 93, 8, 5, 11], 7, 8, 6, 10
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
