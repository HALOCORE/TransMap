
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 6, ["list", 20, ["num", 4], ["num", 10]], ["list", 20, ["num", 4], ["num", 13]]], ["list", 6, ["list", 30, ["num", 40], ["num", 54]], ["list", 30, ["num", 24], ["num", 34]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [4, 10, 11, 24, 27, 33, 34, 36, 36, 40, 42, 43, 52, 58, 67, 69, 77, 86, 86, 88],
            [4, 13, 34, 40, 41, 47, 47, 52, 55, 62, 66, 66, 69, 70, 73, 74, 75, 76, 85, 98],
            [6, 8, 10, 12, 14, 29, 41, 52, 53, 54, 55, 66, 69, 73, 77, 77, 78, 80, 90, 99], 10, 12, 18
        ],
        [
            [40, 54, 14, 58, -64, -60, -98, -64, -52, 30, 0, -42, 74, 46, -14, 76, 84, 74, -24, 30, 96, 88, -98, 82, 44, -86, -92, -52, 28, 62],
            [24, 34, -52, 50, -8, -48, -28, 68, -12, -26, 0, 6, -76, -94, -12, 8, 38, -88, 30, 98, -78, -54, -48, 42, 26, -76, 4, 46, 26, 60],
            [-8, -24, 54, 28, 92, 94, 0, 62, 28, 80, 82, 2, 88, -4, -28, 80, 44, 34, -98, 36, 28, 76, -48, 40, 98, 4, 22, -36, -20, -70], 26, 28, 15
        ],
        [
            [0, 0],
            [1, 1],
            [0, 0], 1, 1, 1
        ],
        [
            [64, 40, 45, 93, 30, 79, 24, 95, 1, 84, 74, 5, 9, 6, 22, 33, 10, 53, 33, 9, 31, 21, 22, 77, 21, 93, 86, 68, 92, 57, 27, 82, 87, 11, 51, 2, 27, 2, 24, 57, 20, 2, 32, 43],
            [48, 85, 55, 12, 24, 26, 88, 76, 15, 34, 23, 61, 2, 99, 11, 37, 65, 74, 92, 96, 68, 50, 67, 98, 89, 17, 62, 18, 51, 61, 41, 41, 90, 64, 89, 51, 48, 95, 9, 86, 28, 54, 64, 35],
            [99, 77, 11, 20, 33, 91, 5, 68, 75, 67, 37, 70, 59, 26, 2, 62, 6, 97, 95, 38, 46, 89, 29, 61, 27, 93, 26, 74, 98, 85, 91, 92, 40, 97, 58, 44, 20, 57, 65, 62, 65, 26, 74, 58], 42, 27, 31
        ],
        [
            [-94, -50, -24, -12, -6, -6, 8, 26, 28, 44],
            [-96, -94, -86, -70, -52, -18, -6, 20, 52, 52],
            [-70, -40, -22, 4, 12, 12, 38, 54, 72, 74], 5, 5, 5
        ],
        [
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0], 39, 34, 26
        ],
        [
            [3, 3, 4, 5, 9, 18, 21, 22, 25, 27, 28, 33, 35, 39, 39, 43, 57, 58, 59, 63, 65, 65, 72, 77, 78, 78, 80, 80, 88, 92, 99],
            [3, 17, 18, 23, 24, 24, 26, 28, 34, 48, 53, 54, 56, 61, 64, 67, 69, 74, 77, 79, 79, 81, 81, 82, 84, 84, 85, 86, 88, 92, 96],
            [1, 3, 5, 8, 15, 16, 27, 27, 27, 28, 29, 30, 32, 35, 36, 37, 44, 47, 57, 65, 69, 70, 70, 76, 76, 83, 85, 87, 88, 90, 92], 24, 16, 29
        ],
        [
            [40, 28, -84, -38, 82, 2, 38, 10, -10, 20, -54, 48, 56, 38, -98, 68, -8, -30, -96, -16, 28, 94, -52, 28, 34, 68, -46, 44, -28, -52, -48, -14, -30, 24, 56, 8, -30, -46, 18, -68, 86, -12],
            [26, 24, -50, 18, 78, -90, 62, 88, -36, -96, 78, 6, -94, -2, -28, -38, 66, 72, -36, 14, -48, -64, -24, 82, 92, -16, -26, -12, 6, 34, 30, -46, 48, -22, 34, -64, 4, -32, 84, -20, 32, -22],
            [66, 26, -90, -40, -52, -98, 84, 88, 40, -92, 30, 28, 32, 92, 18, -34, -42, 64, -34, 70, -72, 28, 44, 34, 76, -78, 46, -48, 20, 54, -2, 66, 6, 56, 52, -98, -48, -70, -60, 94, 90, 10], 32, 37, 41
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 16, 23, 22
        ],
        [
            [22, 31, 75, 48, 30, 39, 82, 93, 26, 87, 77, 87, 67, 88, 19, 51, 54, 48, 6, 37, 38, 27],
            [18, 20, 53, 87, 85, 63, 6, 81, 89, 82, 43, 76, 59, 60, 79, 96, 29, 65, 5, 56, 96, 95],
            [10, 76, 49, 36, 41, 18, 60, 44, 81, 34, 56, 7, 13, 83, 82, 16, 7, 38, 33, 55, 91, 54], 19, 16, 17
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
