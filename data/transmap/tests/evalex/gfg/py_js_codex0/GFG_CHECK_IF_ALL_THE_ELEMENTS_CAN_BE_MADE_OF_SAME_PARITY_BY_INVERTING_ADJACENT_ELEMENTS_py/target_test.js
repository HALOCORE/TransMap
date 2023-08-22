
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 47, ["num", 1], ["num", 1]], ["num", 30]], ["list", 2, ["list", 17, ["num", -90], ["num", -20]], ["num", 12]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", true]]];
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
            [1, 1, 1, 7, 7, 8, 10, 10, 10, 14, 15, 18, 20, 23, 24, 24, 26, 30, 32, 32, 33, 36, 42, 43, 46, 48, 51, 51, 52, 53, 58, 58, 59, 59, 59, 60, 67, 71, 72, 74, 76, 77, 83, 84, 86, 90, 91], 30
        ],
        [
            [-90, -20, -60, -64, -24, 84, -2, -32, 28, -54, 44, -96, 52, 88, 20, -56, -2], 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 36
        ],
        [
            [98, 70, 24, 18, 7, 4, 78, 19, 70, 56, 99, 54, 69, 15, 88, 20, 40, 13, 19, 56, 62], 19
        ],
        [
            [-72, -66, -58, -20, 36, 80, 92], 6
        ],
        [
            [0, 1], 1
        ],
        [
            [6, 13, 14, 16, 21, 26, 26, 28, 29, 35, 38, 42, 47, 47, 62, 67, 77, 81, 81, 83, 84, 88, 90, 96, 97, 98], 17
        ],
        [
            [-48, -8, 20, 32, -90, -42, -6, -88, -72, 42, 66, -62, 82, -4, 8, 12, -22, 82, 56, 96, -54, 92, -42, 30, -18, 14, -6, -66, 34, 16, -84, -94, 48, -48, 52, -60, -92, -16], 35
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [45, 86, 53, 80, 27, 45, 1, 85, 91, 93, 92, 43, 75, 86, 81, 48, 21, 34, 5, 10, 88, 42, 7, 15, 96, 85, 62, 86, 52, 37], 29
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
