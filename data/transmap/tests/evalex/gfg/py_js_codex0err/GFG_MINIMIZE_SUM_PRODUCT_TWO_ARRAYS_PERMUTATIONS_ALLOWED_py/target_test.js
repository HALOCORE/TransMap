
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 2, ["num", 31], ["num", 85]], ["list", 2, ["num", 18], ["num", 33]]], ["list", 3, ["list", 13, ["num", 22], ["num", -6]], ["list", 13, ["num", 2], ["num", -48]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 558]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -8900]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 20524]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -14428]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 19298]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -10560]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 44563]]];
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
            [31, 85],
            [18, 33], 1
        ],
        [
            [22, -6, 84, 70, 84, 6, 28, -74, -14, 68, 22, 90, -10],
            [2, -48, -36, -4, -22, -98, -74, -92, -72, -4, 48, -32, 94], 6
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [12, 33, 93, 2, 83, 9, 61, 84, 9, 69, 2],
            [85, 92, 92, 1, 54, 31, 69, 4, 39, 81, 52], 7
        ],
        [
            [-92, -88, -84, -78, -78, -76, -66, -54, -52, -48, -46, -44, -40, -34, -32, -24, -20, -14, -6, -4, 2, 6, 10, 10, 22, 26, 32, 36, 36, 40, 46, 48, 56, 58, 64, 76, 80, 80, 80, 84, 84, 84, 92],
            [-98, -90, -82, -80, -76, -66, -62, -62, -62, -50, -50, -50, -32, -30, -14, -12, 4, 6, 12, 14, 16, 30, 30, 30, 32, 34, 40, 42, 50, 52, 56, 58, 60, 62, 62, 64, 66, 68, 78, 82, 86, 90, 94], 26
        ],
        [
            [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1], 32
        ],
        [
            [4, 6, 6, 20, 22, 23, 26, 39, 40, 47, 50, 68, 68, 70, 73, 77, 80, 82, 85],
            [2, 3, 15, 21, 22, 26, 35, 37, 37, 38, 57, 59, 62, 63, 64, 76, 81, 85, 91], 17
        ],
        [
            [78, 60, -8, 46, -12],
            [-72, -80, -30, 16, -38], 2
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 17
        ],
        [
            [60, 66, 84, 99, 85, 89, 28, 97, 85, 71, 53, 93, 23, 9, 45, 26, 49, 95, 64, 33, 70, 34, 10, 1, 68, 39, 53, 12],
            [37, 33, 33, 77, 78, 34, 28, 1, 63, 15, 51, 50, 90, 22, 71, 23, 68, 55, 2, 22, 31, 54, 76, 36, 2, 27, 96, 89], 15
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
