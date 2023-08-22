
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 42, ["num", 2], ["num", 3]], ["num", 22]], ["list", 2, ["list", 38, ["num", 90], ["num", 66]], ["num", 24]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 8185]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -5496]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 2566]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -764]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 23]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 48954]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 16394]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1139]]];
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
            [2, 3, 4, 6, 7, 8, 9, 11, 19, 23, 24, 30, 31, 31, 32, 41, 43, 43, 46, 47, 50, 50, 51, 53, 57, 63, 63, 69, 73, 74, 79, 80, 81, 81, 85, 86, 88, 92, 93, 95, 98, 99], 22
        ],
        [
            [90, 66, -98, -42, -10, 90, -6, 76, -80, -62, -40, 90, -34, -76, 90, -42, 80, -74, 10, -78, -16, 32, 52, -82, -98, -68, 12, 92, 72, -10, 98, 76, -52, -58, 62, 68, 20, -58], 24
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 13
        ],
        [
            [79, 52, 45, 58, 44, 13, 14, 99, 8, 44, 42, 98, 47, 44], 11
        ],
        [
            [-90, -88, -68, -66, -46, -42, -40, -20, -16, 4, 8, 8, 8, 20, 28, 52, 84, 98], 14
        ],
        [
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1], 13
        ],
        [
            [5, 6, 7, 9, 11, 13, 16, 19, 22, 25, 26, 27, 28, 29, 32, 32, 32, 33, 36, 40, 43, 43, 47, 49, 51, 51, 52, 53, 59, 61, 63, 65, 66, 66, 67, 72, 73, 73, 75, 76, 80, 86, 87, 89, 89, 91, 96, 98, 99], 42
        ],
        [
            [26, 34, -26, -14, 40, -20, 54, 48, -20, 28, 68, -78, -32, -96, -12, 70, -24, 92, -14, 64, 64, 40, -8, 88, -98, -4, -22, 52, 32, -52, 2, 6, -66, -38, -90, -48, -6, -30, 76, 32, 96, -34, -12], 39
        ],
        [
            [0, 0, 1, 1], 3
        ],
        [
            [84, 32, 75, 21, 62, 49, 88, 49, 47, 20, 49, 18, 71, 34, 88, 44, 84], 8
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
