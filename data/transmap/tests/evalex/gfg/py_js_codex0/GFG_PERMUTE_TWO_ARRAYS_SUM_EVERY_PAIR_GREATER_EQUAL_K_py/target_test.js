
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 15, ["num", 9], ["num", 12]], ["list", 15, ["num", 4], ["num", 7]]], ["list", 4, ["list", 42, ["num", -96], ["num", -90]], ["list", 42, ["num", -48], ["num", 84]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", true]]];
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
            [9, 12, 16, 25, 27, 40, 43, 52, 52, 70, 87, 88, 90, 97, 99],
            [4, 7, 11, 20, 34, 35, 36, 44, 46, 71, 72, 78, 85, 85, 91], 10, 7
        ],
        [
            [-96, -90, -80, 10, -84, -96, -28, -42, 30, -92, -44, -14, 18, -68, -94, 6, -76, 72, -90, 42, 70, -78, 56, -26, 8, 74, 12, -74, 20, -86, -74, -90, -98, 92, 30, 94, 14, 92, 88, -98, 42, -48],
            [-48, 84, 16, -72, 96, -78, -76, -84, -76, -32, -50, 62, -22, 24, -32, 94, 8, -14, -20, 44, -80, 68, -44, 60, 94, -42, -44, -74, -98, -86, 16, 62, -80, 18, -18, 70, 30, 40, -56, 76, -32, 50], 40, 38
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 11, 15
        ],
        [
            [13, 35, 6, 69, 42, 55, 11, 97, 15, 65, 70, 77, 51, 16, 3, 26, 47, 72, 15, 71, 2, 31, 18, 59, 75, 48],
            [88, 15, 44, 36, 38, 98, 89, 81, 73, 51, 37, 4, 79, 60, 11, 62, 48, 45, 12, 21, 65, 14, 78, 20, 12, 46], 25, 16
        ],
        [
            [-72, -70, -66, -64, -52, -52, -52, -48, -46, -42, -40, -34, -20, -4, -4, -2, 2, 4, 16, 16, 18, 18, 32, 36, 52, 54, 56, 56, 58, 68, 72, 74, 84, 84, 90, 90, 92, 94],
            [-94, -76, -74, -56, -54, -50, -46, -38, -26, -24, -24, -22, -16, -10, -6, -4, -4, 0, 0, 6, 12, 12, 18, 20, 38, 50, 52, 52, 54, 64, 64, 72, 72, 72, 76, 90, 96, 96], 26, 30
        ],
        [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1], 13, 13
        ],
        [
            [8, 17, 18, 21, 23, 32, 34, 37, 44, 48, 53, 58, 64, 66, 66, 72, 72, 79, 80, 80, 80, 82, 87, 92, 93, 94, 96, 96, 98],
            [11, 15, 17, 19, 23, 23, 26, 27, 36, 43, 46, 47, 55, 59, 63, 66, 77, 79, 79, 82, 85, 86, 86, 91, 91, 94, 94, 97, 99], 20, 14
        ],
        [
            [-20, -22, -16, -80, -88, 22, -78, -82, -50, 32, 28, -8, -48, 80, 62, -14, 14, 10, -78, 78, 52, 94, -66, 14, 50, 18, -38, -98, 24, 18, -28, 24, 10, -88, -14],
            [6, -54, 90, 98, -30, 88, 36, 88, 38, 12, 46, -66, -80, 32, 42, -96, 62, -44, -80, -14, 20, 2, 70, -46, 96, -40, 52, 56, 96, -82, 24, 98, -16, 90, 66], 31, 24
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 31, 30
        ],
        [
            [75, 31, 58, 10, 92, 65, 45, 72, 53, 91, 39, 33, 10, 13, 67, 85],
            [41, 91, 78, 28, 40, 71, 74, 69, 71, 12, 7, 21, 92, 19, 39, 34], 14, 8
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
