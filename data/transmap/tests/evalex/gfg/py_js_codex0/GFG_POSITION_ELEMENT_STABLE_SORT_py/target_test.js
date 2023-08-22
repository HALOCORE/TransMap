
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 46, ["num", 4], ["num", 8]], ["num", 37]], ["list", 3, ["list", 41, ["num", -16], ["num", 86]], ["num", 31]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 32]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 20]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 30]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 24]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 17]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 14]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 35]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 19]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            [4, 8, 9, 12, 15, 16, 18, 28, 28, 31, 33, 36, 36, 37, 40, 41, 44, 44, 46, 50, 50, 50, 52, 52, 54, 55, 60, 61, 65, 68, 71, 75, 75, 78, 81, 84, 87, 89, 90, 92, 94, 97, 97, 98, 98, 99], 37, 32
        ],
        [
            [-16, 86, 94, -86, -38, 64, 96, -64, 94, 10, -10, -62, -50, -46, -62, -32, -4, 72, 14, 36, 74, -66, 46, 82, -44, -22, -26, 16, -8, 0, -90, 94, -50, 22, -82, 8, 92, -84, -34, -36, -66], 31, 27
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30, 34
        ],
        [
            [66, 8, 30, 84, 36, 96, 45, 63, 23, 23, 14, 34, 86, 51, 18, 97, 21, 39, 96, 70, 28, 96, 78, 68, 88, 66, 13, 24, 74, 94], 26, 21
        ],
        [
            [-94, -90, -86, -86, -72, -72, -58, -50, -32, -22, -18, -10, -4, -2, -2, 0, 0, 6, 14, 22, 22, 36, 36, 40, 44, 58, 60, 70, 70, 76, 82, 82, 84, 88, 96], 17, 31
        ],
        [
            [1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1], 30, 36
        ],
        [
            [3, 5, 6, 7, 8, 10, 17, 20, 20, 26, 27, 27, 27, 32, 32, 38, 40, 44, 45, 45, 45, 45, 47, 50, 57, 57, 57, 58, 62, 63, 63, 67, 68, 73, 75, 76, 77, 79, 79, 80, 85, 88, 89, 89, 89, 94, 96, 98], 42, 35
        ],
        [
            [98, -92, 18, -18, 44, -88, -90, -66, -38, 78, -22, -46, -20, 64, -10, 54], 14, 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19, 31
        ],
        [
            [14, 17], 1, 1
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