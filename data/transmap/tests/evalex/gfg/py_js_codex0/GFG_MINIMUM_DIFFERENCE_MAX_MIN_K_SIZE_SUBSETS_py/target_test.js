
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 13, ["num", 1], ["num", 1]], ["num", 7]], ["list", 3, ["list", 13, ["num", -8], ["num", -6]], ["num", 9]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 34]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 82]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 2147483647]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 122]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 39]]];
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
            [1, 1, 4, 18, 21, 35, 37, 39, 76, 81, 86, 92, 96], 7, 6
        ],
        [
            [-8, -6, 62, 52, -86, 2, -94, 0, -48, -38, 24, -48, 34], 9, 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 16, 26
        ],
        [
            [23, 36, 43, 50, 74, 81, 94, 13, 30, 57, 30, 71, 10, 99, 66, 94, 83, 39, 37, 3, 89, 34], 17, 20
        ],
        [
            [-96, -94, -92, -84, -80, -72, -24, -22, -18, -14, 6, 8, 26, 28, 30, 36, 50, 58, 80, 84, 92, 92], 21, 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1], 21, 22
        ],
        [
            [6, 7, 9, 27, 30, 42, 54, 55, 57, 57, 59, 76, 84, 84, 84], 13, 14
        ],
        [
            [88, 44, -96, -72, -80, 0, -64, -64, -68, 4, 38, 4, -38, 68, -54, 92, -16, 62, 24, 54, 0, 54, 62, -70, 80, -12, 84, -16, -10, 88, -30, -56, 48, 50, -24, 94, 40, 28, -86, -12], 31, 26
        ],
        [
            [0, 1], 1, 1
        ],
        [
            [89, 18, 7, 54, 67, 93, 10, 61, 59, 59, 69, 63, 98, 8, 78, 55, 6, 1, 56, 97, 75, 88, 10], 22, 14
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
