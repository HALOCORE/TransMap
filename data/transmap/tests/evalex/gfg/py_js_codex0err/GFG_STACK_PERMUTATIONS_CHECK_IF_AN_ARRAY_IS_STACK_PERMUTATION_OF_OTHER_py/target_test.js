
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 31, ["num", 2], ["num", 3]], ["list", 31, ["num", 2], ["num", 5]]], ["list", 3, ["list", 17, ["num", -86], ["num", 10]], ["list", 17, ["num", -8], ["num", -46]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", false]]];
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
            [2, 3, 3, 3, 4, 5, 6, 9, 18, 20, 35, 39, 39, 45, 50, 55, 57, 61, 63, 65, 72, 73, 77, 77, 78, 87, 88, 91, 93, 95, 98],
            [2, 5, 7, 13, 16, 23, 24, 25, 27, 31, 31, 33, 34, 35, 38, 46, 49, 49, 51, 52, 58, 61, 62, 66, 68, 71, 73, 78, 91, 94, 98], 23
        ],
        [
            [-86, 10, -8, 8, -24, -2, -84, -86, -54, 50, 56, -22, -8, -62, 0, -50, -32],
            [-8, -46, 22, -66, -94, -96, 70, 58, -4, -70, -96, 34, -80, -26, -52, 52, -76], 16
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21
        ],
        [
            [3, 42, 88, 89, 41, 71, 67, 5, 84, 20, 75, 36, 34, 20, 31, 16, 86, 89, 53, 47, 57, 27, 47, 93, 59, 66, 40, 18, 69, 36, 98, 99, 81],
            [16, 61, 39, 99, 71, 73, 35, 47, 62, 80, 1, 49, 54, 35, 39, 55, 7, 6, 85, 84, 11, 51, 38, 4, 72, 10, 33, 65, 64, 32, 16, 99, 9], 19
        ],
        [
            [-98, -94, -94, -90, -88, -82, -80, -78, -78, -68, -58, -58, -52, -36, -30, -14, -12, -6, -2, -2, 2, 4, 10, 14, 22, 24, 26, 38, 38, 46, 46, 48, 50, 54, 58, 60, 64, 64, 66, 70, 74, 74, 86, 88, 96, 96],
            [-92, -92, -80, -72, -72, -72, -70, -68, -64, -56, -40, -38, -34, -24, -10, -8, -8, -2, 0, 2, 4, 6, 14, 14, 18, 20, 34, 36, 36, 38, 38, 42, 48, 56, 64, 70, 72, 76, 76, 76, 76, 78, 84, 90, 94, 96], 27
        ],
        [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0], 19
        ],
        [
            [19, 37, 44, 65, 72, 87],
            [17, 31, 39, 46, 56, 88], 4
        ],
        [
            [88],
            [-30], 0
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], 13
        ],
        [
            [5, 8, 53, 60, 85, 94, 77, 53, 81, 54, 67, 48, 56, 49, 16, 1, 85, 6, 55, 98, 62, 36, 4, 7, 64],
            [69, 37, 32, 5, 84, 14, 25, 9, 86, 85, 30, 82, 99, 92, 32, 43, 79, 58, 75, 90, 49, 54, 95, 76, 80], 12
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
