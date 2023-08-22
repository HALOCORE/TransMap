
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 30, ["num", 4], ["num", 7]], ["num", 28]], ["list", 2, ["list", 5, ["num", -52], ["num", 26]], ["num", 2]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 265]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -100000026]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 218]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 52]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", -99999966]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 286]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 292]]];
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
            [4, 7, 12, 21, 22, 25, 27, 28, 28, 31, 32, 32, 41, 45, 47, 51, 53, 60, 61, 61, 63, 71, 74, 82, 83, 85, 88, 92, 96, 96], 28
        ],
        [
            [-52, 26, 74, -62, -76], 2
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11
        ],
        [
            [63, 71, 15, 28, 31, 84, 8, 17, 24, 42, 66, 95, 30], 6
        ],
        [
            [-94, -92, -92, -90, -88, -88, -86, -82, -80, -78, -66, -54, -52, -52, -46, -46, -42, -36, -32, -24, -24, -14, -14, -14, -12, -10, 0, 6, 8, 20, 24, 24, 28, 38, 38, 52, 54, 56, 64, 74, 74, 76, 82, 94, 94], 31
        ],
        [
            [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0], 30
        ],
        [
            [15, 19, 80], 2
        ],
        [
            [4, 80, 18, 74, 36, -30, -72, -28, -32, -16, -8, 38, 78, -48, 98, -64, 86, -60, -44, 84, -98, 40, 14, 30, 44, 90, -30, -42, 24, -28, 24, 40, -96, 98, 90, -68, -54, -52, 62, 34, -98, 68, -56, -94, -78, -12, 28], 41
        ],
        [
            [0, 1, 1, 1, 1, 1], 3
        ],
        [
            [2, 18, 96, 7, 99, 83, 3, 88, 23, 77, 6, 28, 55, 49, 69, 55, 48, 76, 43, 11, 43, 44, 17, 74, 27, 64, 76, 77, 53, 26, 73, 12, 19, 62, 18, 34, 13, 31, 97, 96, 85, 27, 30, 97, 89, 25], 41
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
