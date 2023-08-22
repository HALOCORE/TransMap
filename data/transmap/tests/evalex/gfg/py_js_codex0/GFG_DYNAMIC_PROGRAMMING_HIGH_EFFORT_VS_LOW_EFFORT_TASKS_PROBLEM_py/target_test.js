
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 29, ["num", 1], ["num", 3]], ["list", 29, ["num", 5], ["num", 10]]], ["list", 3, ["list", 21, ["num", -78], ["num", -12]], ["list", 21, ["num", -44], ["num", -14]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 537]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 452]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1261]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -56]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 15]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 784]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 268]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 453]]];
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
            [1, 3, 9, 10, 13, 14, 15, 15, 17, 22, 23, 28, 30, 31, 37, 42, 45, 62, 62, 68, 68, 68, 78, 79, 82, 84, 87, 90, 99],
            [5, 10, 11, 14, 16, 22, 24, 30, 34, 35, 37, 37, 39, 41, 42, 42, 43, 55, 57, 63, 71, 76, 83, 83, 85, 90, 91, 97, 99], 18
        ],
        [
            [-78, -12, 26, 80, 50, 4, -80, 86, 12, -2, 18, -50, -90, 56, -50, 88, -62, 96, -44, -82, 56],
            [-44, -14, 14, 0, 30, 78, 40, -12, -44, -16, 60, -12, -50, -66, 70, -98, -56, 48, -82, 94, 14], 16
        ],
        [
            [1],
            [1], 0
        ],
        [
            [21, 28, 13, 48, 26, 49, 16, 70, 81, 35, 74, 12, 97, 61, 10, 84, 94, 78, 40, 30, 30, 84, 41, 4, 95, 79, 38, 29, 9],
            [49, 88, 25, 93, 24, 56, 47, 44, 33, 27, 86, 57, 21, 25, 64, 44, 37, 99, 36, 54, 17, 29, 37, 17, 26, 43, 61, 27, 21], 25
        ],
        [
            [-80, -36, -32, -20, -14, -12, 10, 12, 72],
            [-76, -54, -50, -28, 0, 58, 70, 78, 90], 4
        ],
        [
            [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1], 24
        ],
        [
            [1, 7, 9, 10, 13, 14, 15, 20, 23, 24, 24, 24, 26, 27, 29, 31, 32, 33, 34, 35, 46, 48, 49, 51, 51, 53, 53, 56, 56, 60, 62, 64, 64, 70, 73, 73, 73, 74, 77, 78, 79, 79, 79, 80, 86, 89, 89, 92, 98],
            [1, 3, 3, 4, 8, 8, 10, 10, 10, 12, 12, 15, 15, 22, 23, 28, 28, 30, 31, 33, 34, 35, 36, 36, 36, 42, 44, 44, 51, 54, 57, 58, 59, 59, 63, 65, 66, 68, 69, 71, 73, 76, 77, 78, 79, 79, 86, 87, 93], 31
        ],
        [
            [56, 48, 40, -56, 44, -86, -28, -32, -34, 4, -94, -14, 28, -74],
            [82, -40, -16, -64, 12, -6, 60, 48, -58, -4, 42, -28, 24, -58], 8
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], 16
        ],
        [
            [85, 13, 35, 57, 8, 48, 65, 54, 88, 7, 66, 30, 47, 51],
            [1, 42, 42, 89, 3, 21, 49, 98, 4, 59, 26, 85, 53, 34], 8
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
