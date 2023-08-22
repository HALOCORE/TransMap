
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 42, ["num", 5], ["num", 6]], ["num", 35]], ["list", 2, ["list", 15, ["num", 98], ["num", 76]], ["num", 7]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 832]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 308]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 419]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -182]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 895]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 450]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 895]]];
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
            [5, 6, 8, 9, 10, 10, 16, 17, 17, 20, 21, 22, 23, 28, 29, 32, 36, 37, 40, 41, 42, 43, 47, 47, 48, 48, 49, 49, 52, 52, 53, 59, 61, 64, 65, 79, 79, 81, 87, 91, 92, 98], 35
        ],
        [
            [98, 76, -80, -30, 82, 52, -14, 28, 98, 18, 82, 52, 26, -62, -8], 7
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1], 7
        ],
        [
            [21, 26, 85, 73, 47, 10, 54, 9, 11, 70, 42, 95, 44, 91], 12
        ],
        [
            [-94, -92, -90, -84, -76, -68, -60, -50, -34, -34, -20, -16, -6, 18, 50, 54, 66, 70, 96], 9
        ],
        [
            [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], 16
        ],
        [
            [2, 3, 4, 4, 14, 14, 18, 21, 24, 26, 29, 31, 32, 34, 36, 37, 38, 40, 42, 44, 44, 54, 63, 69, 77, 77, 82, 82, 86, 87, 90, 93, 95], 31
        ],
        [
            [-46, 64, -44, 88, -74, 54, 40, -2, -24, 94, 40, -44, 56, -54, -60, -86, -58, 48, -90, 12, -76, -30, 94, -34, 14, 12, 80, -40, 60], 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], 7
        ],
        [
            [4, 32, 63, 23, 44, 57, 59, 69, 88, 61, 66, 61, 65, 33, 79, 58, 71, 2, 80, 41, 83, 12, 20, 9, 7, 40, 36, 97, 10, 98, 66, 78, 71, 37, 53], 26
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
