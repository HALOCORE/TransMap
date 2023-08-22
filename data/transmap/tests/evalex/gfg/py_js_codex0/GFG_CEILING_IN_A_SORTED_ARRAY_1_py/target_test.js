
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 20, ["num", 2], ["num", 6]], ["num", 13]], ["list", 4, ["list", 23, ["num", -28], ["num", -96]], ["num", 11]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 11]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 20]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 12]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 23]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 2]]];
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
            [2, 6, 13, 16, 23, 24, 24, 27, 30, 32, 34, 34, 55, 56, 56, 63, 66, 81, 83, 96], 13, 11, 18
        ],
        [
            [-28, -96, 48, 22, -12, 72, 48, -70, -96, -84, -62, 22, 18, -92, -74, 14, 28, 52, 64, 72, 16, -76, 46], 11, 18, 21
        ],
        [
            [0, 1], 1, 1, 1
        ],
        [
            [51, 98, 25, 10, 43, 91, 33, 25, 85, 51, 94, 6, 35, 48, 11, 97, 67, 21, 50, 9, 11, 51, 86, 61, 22, 88, 89, 11], 20, 20, 15
        ],
        [
            [-94, -92, -88, -74, -52, -50, -48, -44, -40, -36, -32, -26, 20, 22, 30, 32, 46, 56, 56, 60, 62, 64, 80, 84, 86, 94, 96, 96], 20, 15, 15
        ],
        [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 15, 17, 22
        ],
        [
            [4, 5, 5, 13, 26, 40, 46, 51, 58, 60, 64, 66, 68, 69, 71, 74, 78, 81, 83, 88, 88, 90, 98, 99], 12, 17, 14
        ],
        [
            [92, 6, -54, 84, -10, 32, 50, 40, -38, 64, -64, -10, 70, -68, -6, -16, 68, 34, -66, -82, 84, 98, 50, 82, 78, 4, 34, -34, 78, 64, 32, 58, -94, 40, 50, 0, -92, -36, 10, -54, 58, -78, -88, 32, 6], 23, 28, 28
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24, 17, 22
        ],
        [
            [80, 67, 30, 35, 9], 2, 3, 2
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
