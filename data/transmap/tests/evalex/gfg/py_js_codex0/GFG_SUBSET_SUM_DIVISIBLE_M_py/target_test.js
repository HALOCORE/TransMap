
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 39, ["num", 2], ["num", 5]], ["num", 36]], ["list", 3, ["list", 14, ["num", 8], ["num", 16]], ["num", 12]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", true]]];
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
            [2, 5, 7, 12, 13, 13, 15, 18, 20, 21, 22, 26, 27, 41, 41, 50, 53, 57, 58, 58, 61, 62, 62, 64, 70, 75, 78, 79, 81, 81, 81, 83, 86, 91, 93, 95, 97, 99, 99], 36, 35
        ],
        [
            [8, 16, 62, -24, 14, -4, 2, 50, -64, -76, 78, 66, -64, 18], 12, 11
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 32, 27
        ],
        [
            [50, 20, 79, 42, 85, 24, 20, 76, 36, 88, 40, 5, 24, 85, 7, 19, 43, 51, 94, 13, 53, 93, 92, 43, 97, 38, 80, 48, 52, 47, 77, 56, 41, 80, 32, 34, 77, 14, 70, 3], 29, 27
        ],
        [
            [-96, -94, -72, -58, -48, -36, -28, -26, -10, -10, -8, -8, -6, 2, 14, 30, 30, 54, 58, 60, 64, 68, 78, 84, 96, 98], 16, 18
        ],
        [
            [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], 7, 8
        ],
        [
            [2, 7, 8, 15, 18, 23, 24, 25, 27, 35, 40, 42, 43, 46, 48, 50, 53, 64, 66, 69, 70, 71, 72, 77, 78, 80, 81, 81, 81, 82, 82, 82, 84, 87, 97, 98], 23, 32
        ],
        [
            [46, 54, 24, -10], 3, 3
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21, 34
        ],
        [
            [39, 21, 38, 6, 38, 44, 96, 1, 16, 1, 28, 4, 55, 8], 12, 11
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
