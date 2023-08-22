
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 46, ["num", 2], ["num", 3]], ["num", 23]], ["list", 4, ["list", 42, ["num", 92], ["num", 50]], ["num", 36]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 28]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 36]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 23]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 9]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 9]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 46]]];
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
            [2, 3, 4, 6, 8, 9, 9, 10, 11, 16, 19, 20, 21, 21, 21, 24, 24, 25, 28, 30, 30, 30, 32, 34, 35, 39, 41, 42, 49, 52, 57, 59, 61, 62, 66, 68, 71, 73, 76, 79, 83, 84, 85, 86, 87, 87], 23, 37, 44
        ],
        [
            [92, 50, -84, 60, 32, -54, 84, -82, -42, -72, -64, -28, -48, 66, 92, -42, 42, -66, 52, -30, 48, 42, 36, -4, 64, 62, -16, 0, 20, 26, 78, 78, 12, -6, -30, -14, 76, 72, 70, -34, 98, 32], 36, 35, 34
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 11, 9, 13
        ],
        [
            [26, 68, 73, 76, 14, 19, 56, 80, 17, 7, 15, 64, 99, 98, 21, 21, 72, 12, 14, 10, 44, 82, 25, 42, 46, 86, 79, 43, 91], 23, 27, 26
        ],
        [
            [-90, -86, -84, -50, -30, -24, -12, -2, 8, 22, 30, 44, 58, 58, 60, 60, 62, 90], 9, 16, 10
        ],
        [
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1], 12, 15, 18
        ],
        [
            [2, 2, 29, 31, 34, 39, 48, 50, 56, 61, 66, 66, 69, 73, 88], 9, 12, 10
        ],
        [
            [-98, 48, -58, 8, 70, 62, 92, 84, -58, -46, -26, -92, 18, -88, 40, -12, 60, 14, 54, -64, 88, 52, -44, 88, -46, -8, 36, -22, 28, -20, -50, 58, -82, -44, -44, 54, -86, 40, 10, 0, -24, -84, -10, 62, 58, 0, -88], 40, 29, 24
        ],
        [
            [0, 0, 0, 0, 1, 1], 5, 5, 5
        ],
        [
            [56, 30, 33, 5, 67, 35, 22, 54, 36, 55, 94, 89, 40, 65, 29, 76, 17, 14, 14, 49, 40, 44, 35, 69, 63, 2, 81, 78, 19, 67, 12, 14, 68, 30, 82, 85, 12, 2, 94, 33, 85, 75, 97, 31, 69, 31, 85, 26], 46, 47, 47
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
