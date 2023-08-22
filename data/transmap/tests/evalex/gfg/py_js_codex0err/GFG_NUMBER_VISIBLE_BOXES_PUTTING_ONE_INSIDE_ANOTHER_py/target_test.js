
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 19, ["num", 2], ["num", 3]], ["num", 12]], ["list", 2, ["list", 16, ["num", -34], ["num", 70]], ["num", 10]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 15]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 17]]];
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
            [2, 3, 17, 17, 18, 28, 28, 29, 34, 43, 44, 52, 54, 80, 84, 84, 91, 92, 97], 12
        ],
        [
            [-34, 70, -90, -10, -26, 64, 4, 28, 24, -90, -78, 72, 74, 80, 82, -94], 10
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 40
        ],
        [
            [20, 87, 5, 62, 12, 81, 30, 83, 96, 16, 2, 76, 3, 8, 37, 53, 55, 88], 9
        ],
        [
            [-94, -92, -60, -58, -54, -42, -36, -12, -8, -2, 8, 14, 18, 20, 26, 32, 38, 56, 58, 60, 70, 78, 80, 86, 98], 18
        ],
        [
            [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 9
        ],
        [
            [1, 1, 2, 3, 3, 11, 16, 18, 19, 21, 21, 22, 22, 24, 27, 28, 29, 43, 43, 52, 55, 57, 60, 62, 62, 63, 65, 66, 70, 70, 73, 77, 78, 79, 79, 80, 85, 85, 86, 88, 89, 90, 97, 98], 30
        ],
        [
            [88, 12, -22, -60, 30, -30, -14, 80, -58, -80, -10, 86, -94, -14, 4, -18, -18, 54, -82, -8, -68, -6, -44, -44, 50, 88, -78, -42, 12, 52, 44, 14, 6, 48, 18, -30, 4], 21
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 7
        ],
        [
            [82, 62, 43, 39, 5, 90, 75, 50, 16, 83, 52, 69, 71, 3, 89, 10, 51, 69, 32, 96, 5, 43, 83, 12, 31, 81, 22, 59, 52, 47, 86, 49, 56, 90, 31, 59], 28
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
