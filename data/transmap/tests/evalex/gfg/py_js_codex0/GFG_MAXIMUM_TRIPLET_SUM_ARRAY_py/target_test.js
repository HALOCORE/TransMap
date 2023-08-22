
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 26, ["num", 6], ["num", 10]], ["num", 15]], ["list", 2, ["list", 41, ["num", -98], ["num", 72]], ["num", 28]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 176]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 276]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 290]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 158]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 242]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 288]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 276]]];
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
            [6, 10, 14, 19, 24, 29, 42, 43, 44, 47, 47, 55, 57, 59, 60, 61, 76, 76, 77, 81, 84, 92, 92, 93, 95, 97], 15
        ],
        [
            [-98, 72, 52, -62, 74, -26, -82, -74, 90, 58, 94, -2, 76, -28, 12, 64, -94, 86, 56, 10, 40, 20, 92, -4, -80, 26, -40, 36, 66, -46, 4, -42, -76, 76, -90, -48, 22, 30, 48, 38, 78], 28
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 22
        ],
        [
            [96, 96, 38, 26, 2, 36, 15, 51, 78, 98, 94, 31, 62, 21, 7, 68, 37, 4], 10
        ],
        [
            [-8, 12, 68, 78, 78], 4
        ],
        [
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 35
        ],
        [
            [1, 15, 16, 17, 28, 28, 28, 30, 31, 37, 38, 38, 45, 45, 46, 46, 50, 51, 53, 53, 55, 55, 56, 58, 58, 64, 78, 82, 82, 85, 87, 89, 89, 90, 94, 95], 29
        ],
        [
            [-56, -72, -20, 88, 20, 86, 30, 36, -44, -66, -26, -88, 12, -76, 78, 62, 62, 68, -34, 0, -22, 64, 72, 56, -64, -16, -4, 86, 0, 98, -70, 98, -68, 92, -84, -56, 28, -74, 6, -10, -82, 36, -12, -26, 66, -60, -68, 70, 2], 36
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 11
        ],
        [
            [85, 31, 15, 68, 92, 89, 32, 56, 27, 70, 82, 58, 63, 83, 89, 95, 78, 9, 27, 34, 24, 42, 66, 6, 1, 71, 55, 23, 75, 26, 19, 58, 25], 16
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
