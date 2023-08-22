
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 35, ["num", 1], ["num", 1]], ["num", 33]], ["list", 3, ["list", 42, ["num", 78], ["num", -4]], ["num", 33]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 32]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 142]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 108]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 62]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 2147483647]]];
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
            [1, 1, 2, 7, 8, 14, 16, 20, 20, 23, 24, 24, 29, 30, 32, 34, 35, 37, 38, 43, 44, 46, 50, 52, 55, 57, 61, 71, 79, 86, 86, 89, 91, 91, 95], 33, 17
        ],
        [
            [78, -4, 76, 0, -62, 54, -70, 62, 90, -80, -68, 90, -34, -66, -46, 34, -18, -74, -66, 34, 34, -28, 6, 80, 58, -50, -60, 54, 8, -52, -60, 68, 42, 16, 42, 72, 54, 88, 44, 46, 84, -34], 33, 33
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 8, 13
        ],
        [
            [32], 0, 0
        ],
        [
            [-96, -78, -76, -72, -72, -70, -54, -46, -40, -34, -30, -26, -24, -22, -18, -16, -6, -4, -4, 2, 6, 14, 16, 18, 30, 30, 36, 54, 54, 58, 66, 72, 78, 80, 80, 82, 88, 98], 26, 25
        ],
        [
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1], 39, 41
        ],
        [
            [3, 13, 14, 18, 23, 32, 67, 72, 75, 76, 87, 95], 10, 8
        ],
        [
            [8, 30], 1, 1
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 27, 33
        ],
        [
            [31, 15, 19, 41, 73, 29, 67, 36, 87, 74, 95, 27, 36, 83, 37, 33, 30, 86, 94, 93, 9, 42, 3, 95, 3, 69, 67, 63, 16, 53, 35, 52, 2, 57, 57, 25, 21, 7, 72, 52, 78, 40], 36, 37
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
