
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 18, ["num", 2], ["num", 8]], ["num", 15]], ["list", 2, ["list", 39, ["num", 62], ["num", -34]], ["num", 20]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 3278]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -112]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 2551]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 16640]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 12408]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -6856]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 542]]];
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
            [2, 8, 12, 19, 23, 23, 26, 39, 54, 56, 57, 57, 73, 78, 83, 83, 89, 91], 15
        ],
        [
            [62, -34, 10, -28, -42, -12, 4, 20, -20, -84, -76, -16, -44, 26, -78, -40, 50, -10, -56, 76, -88, 24, 64, 10, 64, -8, -68, -42, 26, 24, 62, 36, -68, 8, -68, -2, 8, 38, -18], 20
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 18
        ],
        [
            [23, 14, 44, 29, 93, 56, 22, 29, 97, 71, 43, 72, 74, 8, 92, 40, 18, 34, 78, 79, 93, 63, 79, 44, 35, 72, 88, 83, 40, 89, 66, 66, 54, 56, 44, 62, 72, 94, 79, 79, 24, 55, 72, 37, 27, 55, 16, 58, 83], 25
        ],
        [
            [-96, -94, -90, -90, -86, -82, -80, -80, -58, -48, -40, -32, -32, -20, -20, -20, -12, -12, -6, -6, -2, 0, 4, 16, 16, 16, 42, 48, 58, 64, 68, 76, 76, 76, 78, 80, 82, 88, 88, 88, 92, 94, 96, 98], 27
        ],
        [
            [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1], 34
        ],
        [
            [3, 4, 4, 8, 10, 10, 11, 15, 19, 19, 20, 24, 25, 25, 27, 30, 41, 43, 44, 45, 47, 55, 59, 59, 61, 63, 63, 67, 67, 69, 72, 73, 75, 77, 77, 78, 81, 81, 83, 84, 92, 94, 99], 31
        ],
        [
            [94, -86, 94, 54, -52, 86, 68, 64, 98, 54, -14, -60, -60, -92, 80, -16, 28, 16, -74, 68, 32, -54, 58, -16, -2, -52, -92, -36, 96, -18, 14, 76, 16], 26
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1], 7
        ],
        [
            [10, 28, 63, 2, 78, 12, 51, 82, 89, 65, 99], 8
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
