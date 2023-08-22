
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 33, ["num", 3], ["num", 8]], ["num", 32]], ["list", 2, ["list", 12, ["num", 94], ["num", -18]], ["num", 10]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 4548]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -736]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 270]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 40896]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 2652]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 9936]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1808]]];
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
            [3, 8, 14, 15, 17, 17, 19, 21, 22, 23, 29, 32, 36, 37, 43, 45, 46, 47, 47, 53, 57, 57, 70, 71, 72, 76, 81, 82, 90, 95, 96, 98, 99], 32
        ],
        [
            [94, -18, 50, 94, -74, -50, -44, -92, -58, 14, -66, -78], 10
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24
        ],
        [
            [15, 18, 64, 28], 2
        ],
        [
            [-96, -88, -88, -84, -82, -78, -78, -60, -58, -56, -54, -52, -48, -44, -28, -26, -14, -12, 6, 10, 10, 14, 14, 50, 52, 54, 60, 62, 62, 64, 66, 70, 72, 72, 78, 80, 84], 31
        ],
        [
            [0, 1, 1, 0, 1, 1, 1, 1], 6
        ],
        [
            [3, 10, 14, 14, 15, 16, 18, 20, 21, 30, 31, 33, 35, 39, 46, 48, 59, 59, 61, 77, 78, 79, 81, 83, 85, 92, 97, 97, 99], 23
        ],
        [
            [4, -32, 68, -48, 54, 24, 78, 98, -70, 44, -82, -92, -16, -92, -70, 52, -58, -62, -58, 32, 14, -4, 80, -78, -26, -24, -8], 18
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 35
        ],
        [
            [82, 74, 53, 91, 81, 88, 42, 62, 38, 43, 29, 60, 43, 44, 19, 28, 20, 1, 5, 94, 18, 77, 52, 38, 55, 1, 10, 29, 34, 91, 64, 80, 81, 39, 4, 47, 30, 62, 58, 66, 73, 52, 62, 9, 36, 49], 38
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
