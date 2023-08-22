
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 33, ["num", 8], ["num", 9]], ["num", 20]], ["list", 2, ["list", 23, ["num", -82], ["num", -28]], ["num", 15]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 633]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 114]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 999]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -24]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 811]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 204]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1971]]];
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
            [8, 9, 11, 17, 18, 19, 23, 24, 27, 30, 31, 31, 35, 44, 46, 47, 49, 51, 55, 58, 59, 61, 65, 67, 71, 71, 71, 71, 78, 78, 82, 91, 98], 20
        ],
        [
            [-82, -28, -66, -52, -36, 36, -88, 52, -62, 46, 42, 26, -60, 18, -52, 38, 94, -68, 44, -94, 14, 36, -70], 15
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19
        ],
        [
            [28, 36, 42, 42, 5, 52, 74, 86, 55, 82, 59, 81, 4, 90, 24, 34, 20, 99, 86, 25, 52, 48, 62, 5, 67, 83, 60, 72, 80, 73, 38, 55, 8, 70, 95], 19
        ],
        [
            [-92, -52, -24, 36, 56], 3
        ],
        [
            [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0], 13
        ],
        [
            [1, 1, 4, 4, 7, 7, 17, 18, 20, 26, 26, 32, 37, 38, 42, 44, 44, 46, 50, 53, 57, 58, 58, 60, 61, 61, 64, 74, 75, 77, 83, 83, 84, 84, 85, 87, 88, 90, 95, 96, 97, 98, 99, 99], 25
        ],
        [
            [-86, 2, 26, 54, -16, 16, 48, 24, 50, -10, -32, -62, 48, -12, -66], 13
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [58, 14, 79, 11, 31, 28, 61, 86, 25, 27, 75, 78, 32, 55, 86, 48, 15, 51, 6, 78, 23, 82, 16, 62, 35, 51, 91, 16, 79, 38, 97, 30, 23, 58, 95, 57, 82, 35, 57, 43, 22, 41, 58, 69, 25, 65, 13, 79], 39
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
