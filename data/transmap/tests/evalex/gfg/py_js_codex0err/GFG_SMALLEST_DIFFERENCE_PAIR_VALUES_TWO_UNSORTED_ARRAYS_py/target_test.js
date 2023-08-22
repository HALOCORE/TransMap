
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 29, ["num", 2], ["num", 2]], ["list", 29, ["num", 5], ["num", 6]]], ["list", 4, ["list", 37, ["num", -78], ["num", 10]], ["list", 37, ["num", 78], ["num", -80]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [2, 2, 11, 13, 18, 18, 23, 25, 28, 28, 37, 39, 53, 56, 67, 70, 74, 74, 75, 79, 80, 82, 84, 89, 94, 95, 95, 98, 98],
            [5, 6, 11, 13, 13, 16, 17, 19, 23, 25, 28, 31, 31, 39, 41, 44, 45, 52, 62, 64, 70, 71, 73, 78, 78, 79, 85, 86, 92], 28, 14
        ],
        [
            [-78, 10, -8, 30, -70, -94, -48, -4, -22, -40, -36, -48, -4, 86, -50, 62, -72, -44, -62, 22, -30, -72, 6, -24, -78, 72, -44, 56, 38, -36, 0, -72, -10, -12, -70, -64, -24],
            [78, -80, -24, -50, -26, -62, 26, -12, 22, -90, 84, 10, 18, 62, 26, -68, 92, 64, -52, 76, -84, 64, 50, 36, -24, -98, 42, 72, -78, -98, -24, 86, 2, 60, -30, 14, -42], 23, 33
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14, 16
        ],
        [
            [57, 82, 90, 9, 61, 71, 15, 2, 39, 24, 28, 28, 47],
            [85, 92, 84, 27, 54, 77, 26, 49, 47, 51, 70, 11, 41], 7, 8
        ],
        [
            [-92, -90, -90, -28, -16, -14, -14, -8, 42, 52, 62, 84],
            [-98, -98, -58, -6, 14, 16, 18, 46, 52, 52, 52, 56], 11, 6
        ],
        [
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1], 35, 33
        ],
        [
            [6, 7, 7, 12, 15, 15, 21, 24, 26, 26, 28, 36, 38, 42, 46, 52, 55, 56, 59, 62, 63, 65, 65, 66, 68, 71, 73, 77, 77, 77, 77, 85, 87, 87, 88, 90, 93, 94, 98],
            [1, 3, 4, 4, 6, 7, 8, 8, 15, 17, 18, 18, 20, 23, 23, 24, 25, 25, 26, 33, 39, 43, 46, 54, 59, 67, 69, 69, 69, 69, 76, 76, 81, 81, 85, 86, 86, 91, 95], 30, 20
        ],
        [
            [-68, 44, 88, -68, 22, 34, -82, 18, -60, 30, 24, 18, 78, 90, -20, -60, 94, 70, 4, -16, -38],
            [-18, -30, -74, -50, 98, -44, -62, -20, 18, 84, 62, -64, -2, 62, -32, -34, -14, -52, -36, -60, -68], 16, 12
        ],
        [
            [0, 0, 1],
            [0, 0, 1], 2, 1
        ],
        [
            [14, 7, 9, 71, 37, 20, 85, 62, 70, 67, 26, 47, 61, 99, 2, 90, 70, 46, 53, 16, 56, 7, 15, 81, 85, 94, 73, 40, 35, 58, 21, 98, 45],
            [99, 72, 29, 55, 88, 1, 88, 19, 7, 80, 79, 18, 28, 41, 48, 49, 67, 27, 24, 94, 86, 14, 45, 84, 37, 71, 92, 98, 16, 64, 67, 44, 29], 20, 25
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
