
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 35, ["num", 2], ["num", 4]], ["num", 29]], ["list", 3, ["list", 33, ["num", 24], ["num", 62]], ["num", 23]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 9]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 15]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -1]]];
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
            [2, 4, 6, 19, 21, 23, 32, 34, 47, 51, 56, 57, 57, 65, 68, 68, 69, 70, 71, 73, 74, 74, 77, 77, 79, 82, 82, 86, 87, 87, 88, 89, 90, 91, 92], 29, 20
        ],
        [
            [24, 62, -32, -28, 42, -46, -96, -70, -68, 60, 44, 34, -30, 96, -26, 92, 62, 42, -46, -38, 44, 54, -94, 52, 66, 68, -96, -58, 84, -2, 66, 30, 42], 23, 31
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 32, 31
        ],
        [
            [94, 6, 48, 34, 31], 4, 3
        ],
        [
            [-98, -88, -82, -80, -76, -70, -70, -60, -60, -52, -50, -46, -44, -44, -44, -20, -18, -12, -12, -12, -10, -8, -6, -4, 4, 4, 18, 28, 32, 34, 42, 42, 44, 46, 48, 54, 60, 70, 70, 72, 78, 78, 78, 78, 84, 86, 90, 96, 98], 45, 30
        ],
        [
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0], 15, 8
        ],
        [
            [1, 5, 13, 17, 26, 26, 32, 35, 38, 38, 39, 45, 52, 58, 60, 61, 62, 63, 82, 83, 85, 89, 89, 91], 13, 22
        ],
        [
            [-68, -52, 4, -90, 90, 88, 38, -18, 86, 4, 14, -32, -14, -44, -88, -50, -12, -26, -68, -20, -30, 22, 0, 14, -40, 58, -6, 28, -44, 8, 28, 96, -46, -12], 32, 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13, 11
        ],
        [
            [17, 33, 36, 34, 32, 10, 37, 48, 47, 32, 21, 18, 75, 8, 18, 52, 21, 73, 25, 25, 80, 32, 10, 24, 1, 89, 7, 42, 86, 85, 73, 12, 20, 20, 1, 74, 77, 4, 24, 74, 8], 20, 28
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
