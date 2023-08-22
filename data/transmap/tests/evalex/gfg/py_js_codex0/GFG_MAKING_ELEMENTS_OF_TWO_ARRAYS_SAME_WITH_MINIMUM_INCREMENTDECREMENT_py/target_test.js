
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 46, ["num", 1], ["num", 6]], ["list", 46, ["num", 2], ["num", 2]]], ["list", 3, ["list", 6, ["num", -12], ["num", -6]], ["list", 6, ["num", -86], ["num", 20]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 263]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 158]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 58]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 506]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 105]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 392]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 354]]];
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
            [1, 6, 6, 7, 10, 11, 13, 18, 19, 19, 19, 31, 34, 37, 37, 40, 41, 41, 47, 47, 53, 54, 55, 55, 56, 56, 60, 60, 62, 62, 66, 73, 75, 76, 78, 81, 81, 85, 88, 90, 91, 92, 93, 95, 97, 98],
            [2, 2, 4, 7, 8, 8, 8, 8, 8, 9, 9, 12, 15, 16, 21, 25, 26, 27, 29, 34, 34, 35, 38, 40, 40, 44, 44, 47, 48, 54, 58, 61, 63, 64, 66, 69, 69, 70, 73, 74, 75, 76, 79, 80, 80, 93], 23
        ],
        [
            [-12, -6, 78, 62, 86, -32],
            [-86, 20, 32, 52, 50, -60], 4
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [76, 74],
            [16, 98], 1
        ],
        [
            [-92, -90, -88, -84, -76, -54, -44, -42, -38, -30, 34, 42],
            [-80, -54, -34, 12, 14, 16, 16, 46, 50, 64, 84, 92], 8
        ],
        [
            [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
            [0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], 14
        ],
        [
            [4, 5, 6, 13, 16, 24, 36, 40, 40, 44, 47, 52, 58, 58, 59, 63, 66, 67, 69, 70, 74, 77, 81, 88, 89, 90, 94, 96],
            [1, 7, 10, 17, 21, 22, 22, 27, 36, 37, 39, 46, 52, 53, 56, 59, 65, 67, 70, 75, 78, 78, 79, 89, 89, 94, 96, 97], 24
        ],
        [
            [-16, 66, -2, 54, -8, 10, 44, -36, -54, 50, 92, 84, -36, 40, -12, 98, 36, 22, -10],
            [-76, -74, 62, 22, 50, 84, 78, 26, -62, -10, 86, -10, -92, -10, 86, -6, -58, -26, -18], 16
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 36
        ],
        [
            [42, 24, 43, 64, 55, 94, 26, 30, 76, 3, 37, 43, 81, 7, 15, 64, 63, 88, 34, 8, 55, 32, 19, 55],
            [96, 11, 63, 90, 28, 80, 44, 63, 17, 81, 80, 69, 66, 22, 81, 4, 86, 74, 91, 17, 3, 81, 65, 98], 22
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
