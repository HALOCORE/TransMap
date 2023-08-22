
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 5, ["list", 46, ["num", 5], ["num", 5]], ["list", 46, ["num", 2], ["num", 5]]], ["list", 5, ["list", 8, ["num", -84], ["num", 52]], ["list", 8, ["num", -22], ["num", 26]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [5, 5, 7, 10, 14, 14, 17, 21, 32, 34, 37, 40, 40, 40, 46, 46, 50, 50, 51, 55, 57, 62, 65, 67, 67, 69, 70, 70, 72, 73, 76, 77, 77, 78, 84, 85, 85, 86, 87, 88, 88, 89, 89, 90, 93, 99],
            [2, 5, 8, 8, 10, 12, 13, 15, 17, 18, 20, 20, 21, 27, 28, 31, 34, 37, 40, 46, 48, 52, 53, 54, 54, 58, 59, 60, 66, 68, 68, 69, 70, 71, 72, 73, 77, 77, 80, 84, 84, 92, 92, 95, 97, 97], 28, 29, 23
        ],
        [
            [-84, 52, -34, 96, 16, 92, -64, -74],
            [-22, 26, -12, -54, 66, 86, 38, 76], 6, 5, 7
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 37, 26, 42
        ],
        [
            [60, 92, 42, 83, 55, 76, 29, 62],
            [71, 2, 74, 42, 80, 71, 26, 76], 4, 7, 7
        ],
        [
            [-94, -94, -58, -40, -40, -26, -24, -22, -22, -22, -2, 0, 4, 8, 12, 16, 16, 18, 22, 32, 42, 44, 50, 58, 64, 78, 80, 90],
            [-86, -84, -78, -76, -72, -70, -62, -58, -54, -54, -50, -46, -44, -40, -30, -28, -16, -10, 10, 36, 36, 48, 70, 84, 84, 90, 94, 98], 17, 27, 17
        ],
        [
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 5, 8, 9
        ],
        [
            [1, 5, 7, 7, 7, 14, 15, 16, 17, 18, 18, 19, 20, 25, 27, 31, 36, 42, 47, 51, 56, 56, 56, 58, 58, 59, 63, 63, 63, 65, 66, 67, 76, 83, 93, 94, 97],
            [2, 3, 7, 8, 9, 10, 17, 18, 21, 28, 29, 29, 33, 35, 46, 47, 47, 49, 49, 49, 53, 56, 58, 59, 59, 60, 65, 67, 70, 78, 81, 85, 85, 87, 90, 92, 96], 28, 34, 31
        ],
        [
            [78, -74, 52, 56, -8, 92, 14, 56, -72, -92, 32, -94, -26, -8, -66, 72, -24, 36, -84, -4, -68, 14, 78, 40, -82, -10, 16, 56, 6, -16, 30, 24, -32],
            [-74, 22, -14, -2, 36, 86, -70, -20, -76, -84, -40, -36, 42, 22, -60, -94, -18, 8, -14, -42, -68, 62, -60, 2, 40, -66, 68, 96, 70, 98, -38, -74, -92], 16, 30, 24
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25, 33, 33
        ],
        [
            [17, 50, 65, 4, 19, 10, 45, 70, 76, 81, 28, 97, 55, 70, 38, 2, 40, 67, 36, 33, 6, 85, 25],
            [78, 92, 65, 23, 7, 94, 18, 4, 2, 53, 31, 58, 98, 18, 46, 16, 17, 92, 80, 92, 43, 70, 50], 16, 22, 22
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
