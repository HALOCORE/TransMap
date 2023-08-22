
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 5, ["list", 38, ["num", 2], ["num", 2]], ["list", 38, ["num", 6], ["num", 8]]], ["list", 5, ["list", 22, ["num", 2], ["num", 4]], ["list", 22, ["num", 58], ["num", 74]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 31]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 20]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 71]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -22]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 30]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 86]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 70]]];
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
            [2, 2, 4, 4, 9, 10, 14, 16, 16, 19, 20, 21, 25, 26, 29, 36, 36, 37, 38, 44, 44, 49, 53, 54, 56, 61, 62, 64, 72, 72, 73, 77, 80, 84, 84, 87, 93, 94],
            [6, 8, 10, 10, 12, 14, 24, 31, 33, 33, 35, 35, 35, 41, 46, 47, 49, 51, 52, 56, 57, 59, 62, 65, 72, 72, 73, 73, 79, 80, 82, 83, 83, 84, 87, 87, 93, 99], 27, 21, 23
        ],
        [
            [2, 4, -90, 62, 22, -94, -74, -22, 44, -94, 20, -40, 20, 0, 32, 24, 78, 8, 4, 98, -74, -60],
            [58, 74, -46, 38, -58, -78, -32, -84, 84, -54, 84, -34, -26, 88, 74, 48, 26, -92, 68, -86, 74, 88], 18, 11, 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30, 31, 42
        ],
        [
            [85, 44, 62, 2, 71, 88, 60, 78, 32, 46, 17, 47, 65, 78, 65, 94],
            [18, 3, 15, 9, 61, 73, 3, 62, 87, 1, 54, 97, 61, 37, 23, 65], 11, 11, 13
        ],
        [
            [-94, -84, -82, -70, -70, -60, -54, -54, -52, -52, -46, -40, -40, -36, -34, -32, -30, -22, -18, -16, -10, -4, 8, 12, 18, 22, 32, 38, 38, 44, 50, 56, 64, 82, 84, 86, 88],
            [-92, -68, -64, -62, -54, -52, -52, -34, -24, -22, -20, -12, -12, -10, 6, 10, 14, 22, 22, 24, 24, 30, 30, 36, 36, 48, 50, 56, 58, 64, 68, 80, 84, 88, 88, 92, 94], 19, 26, 28
        ],
        [
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0], 24, 17, 23
        ],
        [
            [53, 96, 99],
            [30, 55, 56], 1, 1, 1
        ],
        [
            [98, 86, 36, -68, 86, 22, 52, -20, -2, 74, -72, 86, 80, -78, 14, 62, 10, 94, -66, 78, 28, 92, -8, 46, -24, 66],
            [72, -72, -90, 24, -22, 60, 78, -68, 98, 26, -30, -20, 44, -96, 8, 90, 0, 98, -24, -68, -32, -62, 0, -60, 26, -98], 22, 19, 24
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 42, 40, 42
        ],
        [
            [6, 21, 86, 58, 48, 27, 18, 73, 16, 79, 51, 33, 63, 26, 37, 88, 48, 58, 44, 32, 58, 23, 31],
            [87, 77, 44, 15, 70, 89, 36, 79, 82, 3, 18, 76, 37, 79, 85, 97, 19, 53, 17, 74, 87, 58, 49], 14, 22, 19
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
