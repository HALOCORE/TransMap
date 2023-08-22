
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 34, ["num", 6], ["num", 7]], ["num", 27]], ["list", 3, ["list", 40, ["num", 28], ["num", -8]], ["num", 29]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 75.0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0.0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1140.0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0.0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 17.0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 56.0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 6.0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 12.0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 286.0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 6.0]]];
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
            [6, 7, 13, 16, 19, 20, 21, 25, 28, 31, 36, 38, 42, 44, 50, 54, 55, 56, 63, 63, 63, 65, 65, 65, 67, 71, 73, 73, 76, 78, 87, 90, 91, 99], 27, 21
        ],
        [
            [28, -8, -86, -6, -28, 74, 82, 88, -62, -24, -14, 68, 36, -54, -16, -52, -78, -24, 68, -2, 30, -56, 30, -86, -54, 54, 62, -30, -82, 66, 94, 12, 10, 4, 40, -72, 20, -2, -90, -90], 29, 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29, 43
        ],
        [
            [45, 14, 91, 37, 91], 3, 4
        ],
        [
            [-88, -78, -74, -50, -44, -34, -26, -22, 14, 46, 48, 80, 82, 86, 88], 13, 12
        ],
        [
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1], 11, 15
        ],
        [
            [9, 14, 16, 18, 23, 36, 37, 58, 78], 7, 4
        ],
        [
            [-56, 86, 58, -58, 46, -62, 8, -22, 80, 96, -74, -94, -94, -2, -4], 13, 14
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 37, 34
        ],
        [
            [62, 36, 66, 84, 20, 43, 93, 47, 85, 70, 50, 96, 3, 8, 38, 96, 15, 31, 97, 90, 1, 69, 77, 20, 68, 11, 2, 92, 50, 8, 23, 83, 76, 6, 32, 43, 92], 18, 35
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
