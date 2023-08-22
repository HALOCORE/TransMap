
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 32, ["num", 2], ["num", 10]], ["num", 26]], ["list", 3, ["list", 34, ["num", -36], ["num", 78]], ["num", 26]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1047]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -890]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 25]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 136]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -322]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 23]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1326]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -114]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 561]]];
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
            [2, 10, 11, 11, 12, 14, 15, 17, 27, 27, 28, 36, 36, 44, 47, 47, 54, 55, 62, 64, 68, 69, 70, 70, 75, 76, 78, 85, 85, 91, 95, 97], 26, 18
        ],
        [
            [-36, 78, 10, 30, -12, -70, -98, -14, -44, -66, -40, -8, 78, 2, -70, 40, 92, 58, 30, 10, -84, -62, -86, -50, 82, 36, -92, -30, -2, -34, 88, 2, -4, -72], 26, 25
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 47, 26
        ],
        [
            [77, 78, 58], 1, 1
        ],
        [
            [-88, -88, -88, -82, -58, -54, -48, -46, -46, -44, -20, -2, 10, 28, 28, 28, 42, 42, 44, 50, 50, 54, 56, 58, 62, 68, 70, 72, 74, 76, 78, 88, 90, 92], 21, 24
        ],
        [
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 41, 40
        ],
        [
            [5, 7, 10, 11, 15, 17, 20, 20, 29, 29, 32, 37, 38, 39, 40, 41, 45, 51, 60, 64, 64, 68, 68, 70, 71, 71, 71, 75, 76, 82, 84, 87, 88, 88, 95, 98], 30, 21
        ],
        [
            [-46, -32, 76, -28, 44, -14, 94, -4, 60, -88, -52, 32, -66, 28, 94, 76, 86, -4, 74, 52, 64, -36, -98, -40, 70, 18, -22, -20, -16, -74, 12, 60, 94, 98, -28, -24, 4, -34, -60, 56], 33, 23
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 28, 41
        ],
        [
            [79, 13, 25, 22, 61, 1, 2, 73, 66, 94, 47, 9, 1, 99, 25, 39, 95, 46, 95, 20, 63, 15, 14, 36, 9, 91, 14], 19, 23
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
