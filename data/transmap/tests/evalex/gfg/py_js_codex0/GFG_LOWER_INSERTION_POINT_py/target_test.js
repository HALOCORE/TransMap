
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 30, ["num", 1], ["num", 2]], ["num", 17]], ["list", 3, ["list", 15, ["num", -76], ["num", 80]], ["num", 14]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 14]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 19]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 12]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [1, 2, 5, 5, 16, 16, 20, 26, 32, 35, 39, 39, 41, 44, 48, 48, 51, 59, 59, 62, 66, 66, 70, 74, 75, 78, 80, 86, 86, 96], 17, 29
        ],
        [
            [-76, 80, -6, -2, 50, 72, 84, -56, 70, 8, 48, 6, -24, -50, -72], 14, 9
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1], 8, 4
        ],
        [
            [74, 65, 84, 71], 2, 3
        ],
        [
            [-96, -92, -90, -86, -84, -76, -76, -62, -58, -54, -50, -50, -44, -42, -38, -34, -14, -8, 6, 12, 24, 38, 40, 50, 62, 84, 86, 92], 19, 19
        ],
        [
            [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1], 12, 17
        ],
        [
            [6, 10, 14, 14, 16, 19, 23, 23, 25, 26, 29, 34, 42, 42, 43, 45, 47, 49, 50, 51, 51, 56, 59, 65, 69, 72, 75, 78, 79, 80, 82, 82, 82, 84, 85, 91, 98], 31, 24
        ],
        [
            [-90, -2, 22, -2, 58, -2, 96, 38, 36, -66, -98, 22, -80, -32, 22, 0, -34, -16, 82, 76, 12, 84, 66, 8, 32, 18, -98, -10], 22, 16
        ],
        [
            [0, 0, 0, 1, 1, 1, 1], 3, 5
        ],
        [
            [85, 59, 22, 52, 93, 14, 42, 71, 69, 15, 52, 78, 35, 61, 92, 90, 70, 48, 47, 72, 74, 46, 22, 74, 83, 32, 14, 24, 18, 27, 18, 68, 29, 31], 19, 33
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
