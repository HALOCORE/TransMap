
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 14, ["num", 4], ["num", 5]], ["num", 12]], ["list", 2, ["list", 16, ["num", -76], ["num", 96]], ["num", 15]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 29]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 38]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            [4, 5, 9, 31, 31, 37, 41, 55, 56, 61, 79, 81, 89, 93], 12
        ],
        [
            [-76, 96, -68, -16, 22, -24, -24, 6, 98, -82, 54, -80, 46, 0, 0, -50], 15
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29
        ],
        [
            [97, 93, 43, 51, 15, 33, 13, 96, 39, 89, 78, 25, 45, 6, 64, 54], 13
        ],
        [
            [-98, -78, -72, -70, -68, -58, -56, -54, -46, -44, -38, -34, -30, -24, -18, -16, -14, -12, 2, 6, 8, 8, 10, 10, 16, 24, 26, 28, 40, 42, 44, 56, 58, 62, 66, 66, 78, 86], 19
        ],
        [
            [1, 1, 0, 1, 0, 0], 3
        ],
        [
            [7, 8, 10, 11, 12, 15, 16, 16, 19, 21, 23, 23, 23, 25, 26, 35, 38, 43, 46, 47, 51, 52, 53, 57, 60, 61, 66, 67, 69, 74, 75, 81, 83, 84, 88, 92, 94, 98, 98, 99], 34
        ],
        [
            [14, -40], 1
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 38
        ],
        [
            [59, 70, 53], 1
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
