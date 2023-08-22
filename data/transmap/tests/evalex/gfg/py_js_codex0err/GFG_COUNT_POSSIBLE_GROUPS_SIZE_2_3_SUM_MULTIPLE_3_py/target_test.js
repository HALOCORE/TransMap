
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 17, ["num", 1], ["num", 3]], ["num", 12]], ["list", 2, ["list", 35, ["num", 94], ["num", 46]], ["num", 23]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 90.0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 655.0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 3276.0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 7.0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 329.0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2310.0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 49.0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 24.0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1.0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 29.0]]];
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
            [1, 3, 6, 12, 18, 31, 36, 43, 47, 59, 64, 64, 69, 69, 94, 98, 98], 12
        ],
        [
            [94, 46, 64, 18, 70, 22, -98, 52, -26, 34, -22, 22, 40, 66, -72, -66, 86, 84, 12, -38, 28, -60, -10, -30, -78, 76, 62, 74, 24, -64, 0, 92, -20, -66, -52], 23
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29
        ],
        [
            [68, 96, 74, 38, 70, 70], 5
        ],
        [
            [-88, -74, -70, -64, -64, -64, -58, -52, -18, -10, -6, 4, 4, 28, 44, 48, 52, 54, 64, 72, 76, 94], 18
        ],
        [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1], 36
        ],
        [
            [9, 12, 14, 21, 27, 28, 45, 50, 54, 57, 58, 62, 78, 82, 91, 92, 95], 9
        ],
        [
            [16, -46, -32, -36, -84, -14, -18, 16, 54, 90, -4], 8
        ],
        [
            [0, 0, 1, 1], 3
        ],
        [
            [53, 32, 54, 84, 79, 37, 44, 30, 92, 53, 89, 95], 8
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
