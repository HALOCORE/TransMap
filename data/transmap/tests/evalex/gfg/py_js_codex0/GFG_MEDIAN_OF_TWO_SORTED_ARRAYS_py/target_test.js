
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 14, ["num", 2], ["num", 6]], ["list", 14, ["num", 6], ["num", 12]]], ["list", 3, ["list", 31, ["num", 90], ["num", 54]], ["list", 31, ["num", -72], ["num", -62]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 39.0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 22.0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0.5]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 84.5]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -12.0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0.5]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 56.5]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 94.0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0.0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 67.5]]];
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
            [2, 6, 18, 21, 23, 27, 44, 44, 69, 72, 78, 88, 90, 98],
            [6, 12, 16, 18, 26, 34, 48, 48, 49, 56, 61, 79, 81, 89], 12
        ],
        [
            [90, 54, 24, -10, -84, -74, 58, 96, -28, -92, -18, 90, 70, -60, 72, 78, 10, 42, -2, -18, -38, -16, 18, -86, 40, -46, -38, 66, 20, -16, 48],
            [-72, -62, 14, -58, 70, 54, 88, -40, -94, 4, 60, -16, -38, -98, -70, -46, 66, 42, 26, 36, 56, -4, 32, 30, -46, -42, -72, 44, 16, 4, 24], 16
        ],
        [
            [0, 1, 1],
            [0, 1, 1], 2
        ],
        [
            [53, 17, 94, 21, 16, 75, 67, 51, 44, 71, 65, 82],
            [98, 50, 8, 11, 80, 41, 59, 24, 94, 41, 75, 78], 10
        ],
        [
            [-96, -92, -80, -68, -64, -64, -60, -56, -52, -50, -50, -22, -20, -4, -2, 0, 6, 20, 22, 28, 38, 40, 48, 50, 56, 58, 64, 64, 80, 82, 90, 92, 92, 92],
            [-88, -72, -72, -58, -54, -50, -48, -34, -24, -14, -14, -14, -10, -6, 4, 12, 16, 18, 26, 30, 32, 34, 40, 46, 52, 54, 58, 62, 62, 72, 82, 82, 92, 98], 25
        ],
        [
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], 40
        ],
        [
            [8, 15, 17, 19, 21, 32, 34, 38, 41, 41, 49, 49, 51, 54, 54, 56, 56, 57, 59, 63, 70, 74, 79, 79, 84, 84, 86, 88, 89, 93, 98],
            [5, 6, 17, 18, 22, 29, 32, 33, 36, 44, 45, 47, 59, 59, 60, 65, 67, 68, 69, 71, 72, 76, 78, 81, 84, 85, 85, 86, 86, 87, 92], 29
        ],
        [
            [96, -42, -94, -46, -68, 76, 8, 16, -54, -94, 76, 24, 94, 10, 34, 78, -30, 0, -52, 80, 98, -58, 92, 12, 26, 64],
            [88, 78, -26, 10, 84, 34, 56, -8, -30, 46, 48, 20, 26, -78, 96, 44, 92, -44, -86, 24, -58, -96, -86, -12, -98, 18], 17
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 17
        ],
        [
            [61, 69, 66, 3],
            [39, 84, 97, 15], 3
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
