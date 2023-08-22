
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 26, ["num", 6], ["num", 6]], ["num", 13]], ["list", 2, ["list", 34, ["num", -42], ["num", 96]], ["num", 27]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 2249]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 9152]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 35]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 34887]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 586]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 58]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 11145]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 14776]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 297]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1359]]];
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
            [6, 6, 13, 14, 16, 20, 24, 24, 24, 27, 28, 36, 49, 51, 55, 56, 62, 69, 74, 74, 76, 85, 86, 90, 92, 98], 13
        ],
        [
            [-42, 96, 68, 64, 14, -74, 76, 42, 34, -92, -20, 28, -80, -34, -22, 96, -46, 96, 10, -82, 82, 50, -24, 48, 56, 72, -40, -86, 84, 66, -62, 50, -76, 34], 27
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 10
        ],
        [
            [37, 88, 70, 86, 24, 62, 34, 44, 37, 42, 46, 34, 23, 32, 55, 2, 5, 70, 30, 46, 40, 65, 91, 4, 7, 74, 46, 12, 30, 22, 1, 91, 89, 88, 97, 6, 6, 11, 33, 14, 68, 24], 39
        ],
        [
            [-92, -90, -70, -70, -10, 2, 10, 12, 14, 40, 44, 46, 64, 68, 68, 96], 11
        ],
        [
            [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1], 15
        ],
        [
            [9, 15, 15, 17, 19, 20, 21, 23, 25, 25, 25, 32, 32, 33, 45, 51, 54, 59, 68, 71, 71, 71, 72, 75, 78, 80, 82, 82, 88, 89, 92, 93, 94, 97], 22
        ],
        [
            [52, -78, -80, 32, -56, -98, -36, 86, 34, -36, 42, 46, 50, 0, 34, -46, -2, -18, -96, 12, -42, 62, 32, 78, 66, -8, 50, 60, 10, -18, 66, 80, -24, -98, 8, 48, 34, 44, -80, -34, 72, 0, -60, 52, 40, 20], 45
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 33
        ],
        [
            [45, 35, 25, 7, 24, 73, 25, 86, 48, 70, 47, 91, 96, 15, 39, 9], 8
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
