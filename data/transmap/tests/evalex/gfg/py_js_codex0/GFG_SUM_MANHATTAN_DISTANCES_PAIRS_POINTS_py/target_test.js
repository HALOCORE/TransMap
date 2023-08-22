
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 42, ["num", 2], ["num", 4]], ["list", 42, ["num", 6], ["num", 19]]], ["list", 3, ["list", 26, ["num", 16], ["num", 76]], ["list", 26, ["num", -34], ["num", 92]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 35930]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 35216]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 19322]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 42084]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 2776]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 28932]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 188]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [2, 4, 6, 6, 8, 11, 12, 13, 14, 19, 20, 22, 24, 28, 29, 30, 32, 35, 37, 44, 48, 49, 51, 51, 56, 59, 59, 62, 65, 68, 68, 68, 72, 75, 77, 78, 89, 89, 91, 93, 95, 99],
            [6, 19, 19, 22, 25, 27, 31, 33, 34, 35, 37, 38, 38, 44, 46, 50, 51, 55, 58, 58, 64, 64, 64, 64, 65, 66, 66, 66, 67, 70, 75, 78, 79, 81, 81, 81, 82, 84, 84, 86, 94, 96], 37
        ],
        [
            [16, 76, 2, 42, -24, -82, 68, -2, 98, -42, -72, 28, -22, -52, 28, -38, 36, 66, 84, 64, -28, 86, 52, 84, -98, -30],
            [-34, 92, -24, -62, 28, 72, -10, 10, 8, 90, -72, -24, 50, -46, 52, 58, 68, -62, -64, -78, -12, 24, 62, -30, 62, -60], 24
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 5
        ],
        [
            [61, 37, 57, 99, 22, 72, 38, 85, 23, 85, 15, 4, 49, 9, 15, 25, 7, 63, 79, 6, 85, 30, 12, 34, 38, 6, 59, 62, 59, 34, 72, 97, 70, 44, 95, 58, 99],
            [72, 41, 77, 62, 78, 36, 75, 28, 91, 39, 32, 56, 60, 64, 21, 15, 80, 85, 28, 22, 53, 58, 69, 62, 60, 48, 66, 91, 38, 66, 54, 5, 24, 1, 49, 71, 49], 26
        ],
        [
            [-96, -86, -82, -72, -72, -64, -62, -60, -56, -56, -56, -54, -52, -40, -36, -30, -10, 10, 18, 26, 28, 56, 56, 56, 64, 90, 92, 94],
            [-98, -98, -96, -96, -82, -80, -80, -68, -62, -60, -46, -38, -26, -26, -20, -18, 16, 22, 24, 26, 34, 46, 52, 52, 74, 76, 90, 92], 26
        ],
        [
            [1, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1], 3
        ],
        [
            [6, 10, 24, 25, 31, 41, 43, 45, 47, 65, 67, 90],
            [4, 7, 11, 19, 21, 39, 57, 80, 84, 93, 94, 97], 10
        ],
        [
            [-74, 92, 34, 56, -54, -98, -76, -34, 16, 32, -4, -16, 22, 90, -52, -90, -60, 70, -40, 78, 96, -68, 78, -56, -94],
            [14, 20, 24, -92, 58, 12, 78, 78, -90, 96, -44, 36, 30, -46, -30, -80, 26, -2, 26, 28, -16, -50, -2, -36, -8], 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 23
        ],
        [
            [20, 32],
            [23, 50], 1
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
