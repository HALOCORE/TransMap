
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 40, ["num", 1], ["num", 6]], ["list", 40, ["num", 3], ["num", 12]]], ["list", 3, ["list", 19, ["num", -48], ["num", -92]], ["list", 19, ["num", -38], ["num", -40]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 24]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [1, 6, 7, 10, 11, 12, 12, 16, 17, 29, 32, 33, 35, 35, 45, 49, 52, 56, 57, 58, 61, 62, 63, 64, 68, 71, 71, 77, 79, 79, 81, 82, 82, 83, 83, 89, 89, 93, 94, 94],
            [3, 12, 13, 14, 15, 17, 18, 19, 22, 24, 28, 29, 33, 37, 41, 42, 44, 49, 51, 51, 52, 53, 56, 56, 59, 60, 64, 64, 67, 70, 71, 78, 83, 88, 88, 90, 92, 93, 93, 95], 36
        ],
        [
            [-48, -92, 96, -18, 10, -24, -4, 96, -16, -78, 4, -80, -96, -28, -78, 68, 2, -60, 0],
            [-38, -40, -50, 50, -26, -80, 64, 54, 74, -44, -40, -92, -16, 4, -60, -42, -60, -74, 38], 16
        ],
        [
            [1],
            [0], 0
        ],
        [
            [68, 98, 21, 29, 71, 49],
            [97, 90, 25, 89, 57, 41], 3
        ],
        [
            [-80, -76, -76, -76, -68, -66, -56, -44, -38, -28, -24, -10, 8, 14, 16, 18, 24, 26, 30, 32, 50, 64, 76, 80, 90, 94, 94, 94],
            [-90, -88, -66, -60, -48, -48, -46, -42, -40, -36, -26, -4, 2, 4, 4, 8, 16, 18, 34, 50, 52, 56, 64, 80, 86, 90, 92, 96], 14
        ],
        [
            [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], 22
        ],
        [
            [3, 7, 16, 17, 20, 22, 29, 32, 34, 34, 35, 40, 40, 40, 41, 46, 49, 58, 60, 62, 63, 64, 64, 68, 70, 73, 76, 79, 83, 86, 90, 92, 99],
            [4, 4, 7, 13, 23, 23, 25, 25, 26, 34, 38, 39, 39, 45, 48, 50, 52, 54, 58, 59, 60, 65, 72, 76, 80, 80, 80, 84, 87, 90, 92, 94, 96], 26
        ],
        [
            [18, -68, -6, -32, -76, -86, -8, 76, -46, 20, -80, 54, -88, -58, -48, -66, -66, 18, -28, -74, -72, -26, -92, -78, 24, -22, -80, -80, 82, -2, -72, -88, -54, -84, -8],
            [-30, 96, 92, -12, -14, -68, -16, 20, 74, -42, 36, 84, -82, 66, 44, 70, -92, -56, -28, -68, -4, 10, -4, 90, 72, 84, 68, 14, 32, 60, 40, 60, -34, 58, -56], 17
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24
        ],
        [
            [74, 75, 52, 58, 34, 53, 51, 45, 34, 28, 53, 94, 10, 20, 23, 12, 95, 78, 48, 11],
            [62, 56, 17, 1, 11, 30, 59, 18, 99, 21, 86, 49, 24, 85, 25, 56, 21, 66, 23, 96], 17
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
