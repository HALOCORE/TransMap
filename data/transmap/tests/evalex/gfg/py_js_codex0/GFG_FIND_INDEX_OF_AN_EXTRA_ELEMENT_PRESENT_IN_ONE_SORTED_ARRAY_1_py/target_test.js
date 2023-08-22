
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 19, ["num", 7], ["num", 18]], ["list", 19, ["num", 2], ["num", 5]]], ["list", 3, ["list", 44, ["num", -14], ["num", -56]], ["list", 44, ["num", 54], ["num", 44]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 14]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 6]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 9]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [7, 18, 19, 25, 26, 27, 31, 39, 44, 46, 59, 60, 66, 72, 78, 83, 84, 92, 94],
            [2, 5, 12, 13, 17, 20, 22, 46, 51, 63, 64, 66, 66, 76, 87, 87, 90, 91, 96], 11
        ],
        [
            [-14, -56, 92, -90, 96, -84, 64, -38, -20, 84, 56, 92, 18, -78, 98, -96, -60, 88, -52, -28, 30, -90, 14, 76, 56, 20, -18, -94, -82, -2, 96, -60, -64, -90, 42, 6, 20, -38, 82, -86, -4, 82, 54, -88],
            [54, 44, -50, 26, 4, -26, -76, 98, -14, 36, 82, 0, -60, 18, 52, 82, -12, -8, -26, -58, 22, -70, 24, 48, 56, -46, 92, 98, -50, -72, -66, 8, 40, 12, -80, -86, 90, -30, 76, -92, 80, -62, 0, -48], 26
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 31
        ],
        [
            [13, 64, 73, 50, 73, 19, 92, 10, 64, 79, 58, 41, 97, 53, 53, 10, 96, 45, 47, 38, 99],
            [24, 42, 54, 13, 88, 63, 50, 73, 64, 66, 86, 84, 53, 4, 44, 58, 44, 42, 36, 94, 34], 13
        ],
        [
            [-96, -94, -90, -90, -78, -70, -64, -64, -58, -58, -52, -40, -36, -34, -34, -30, -26, -2, 0, 2, 14, 18, 24, 28, 28, 30, 34, 40, 42, 48, 66, 72, 86, 90, 92, 98],
            [-94, -92, -90, -88, -86, -82, -82, -80, -76, -74, -64, -60, -58, -46, -44, -36, -30, -30, -30, -18, -16, -8, -6, 12, 14, 20, 26, 38, 40, 42, 42, 68, 78, 82, 88, 98], 29
        ],
        [
            [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0], 19
        ],
        [
            [10, 51, 74, 74, 75, 80, 90],
            [12, 20, 36, 38, 61, 64, 93], 5
        ],
        [
            [-44, 48, 20, -38, -48, -26, 56, -62, -94, -18, 30, 66, -16, 80, 96, -40, -80, 32, 88, -56, -76, 16, 72, -94, 4, -34, -92, 70, -90, -54, 64, -90],
            [-76, 92, -66, 20, 86, 40, 64, 16, 54, -6, 54, -88, -24, 38, 86, 2, 30, 70, 98, -46, 28, 34, 40, -88, -96, 92, 22, 14, -36, -96, -48, -72], 28
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [19, 53, 13, 91, 52, 62, 39, 84, 68, 45, 32, 40, 13, 68, 79, 76, 11, 42, 76, 30, 81, 3, 30, 15, 85, 76, 1],
            [33, 65, 36, 82, 30, 95, 42, 33, 9, 21, 25, 90, 54, 59, 21, 45, 3, 93, 67, 50, 97, 72, 77, 54, 75, 8, 6], 25
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
