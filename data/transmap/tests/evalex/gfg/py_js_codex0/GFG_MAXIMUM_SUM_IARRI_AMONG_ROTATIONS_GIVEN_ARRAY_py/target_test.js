
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 20, ["num", 11], ["num", 12]], ["num", 11]], ["list", 2, ["list", 32, ["num", -46], ["num", -32]], ["num", 22]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 3035]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 592]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 392]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 10714]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 7026]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 19]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 5149]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 4226]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 46]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 16847]]];
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
            [11, 12, 16, 26, 29, 40, 54, 59, 65, 70, 71, 73, 78, 81, 87, 87, 88, 90, 95, 97], 11
        ],
        [
            [-46, -32, 54, 96, -72, -58, -36, -44, 26, -2, -68, 42, 90, 26, -92, -96, 88, -42, -18, 46, -70, 24, 0, 24, 34, 34, -52, 50, 94, -60, 64, 58], 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 33
        ],
        [
            [48, 2, 79, 98, 28, 17, 41, 47, 61, 76, 82, 5, 74, 4, 80, 51, 22, 45, 91, 75, 91, 93, 42, 45, 69, 98, 76, 74, 83, 17, 30, 88, 53, 25, 35, 19, 26], 20
        ],
        [
            [-88, -84, -82, -74, -44, -34, -32, -20, -20, -14, 6, 6, 10, 12, 16, 24, 32, 34, 38, 46, 54, 54, 56, 60, 82, 88, 90, 94, 98], 24
        ],
        [
            [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], 7
        ],
        [
            [10, 14, 14, 14, 19, 20, 22, 26, 35, 36, 40, 53, 54, 55, 55, 57, 57, 67, 72, 72, 77, 78, 83, 84, 95, 96], 16
        ],
        [
            [-80, 18, -76, 48, -52, -38, 52, -82, 40, -44, -90, 86, -86, -36, -32, -2, 56, -12, -88, 14, -16, 8, 52, 24, 46, 56, 84, -36, 84, -60, 72, -46, 32, -16, -20, 68, -86, -62, 58, 8, 78, -52, 22, -28, -22, -42, 12, -48], 30
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [20, 94, 36, 2, 50, 62, 84, 50, 66, 75, 1, 18, 41, 48, 72, 61, 86, 22, 54, 6, 71, 46, 92, 68, 59, 51, 89, 31, 58, 78, 82, 84], 25
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
