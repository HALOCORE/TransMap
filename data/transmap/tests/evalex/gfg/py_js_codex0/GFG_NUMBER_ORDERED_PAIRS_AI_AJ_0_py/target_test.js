
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 20, ["num", 17], ["num", 20]], ["num", 17]], ["list", 2, ["list", 20, ["num", -78], ["num", -40]], ["num", 11]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 54]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 6]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 506]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 172]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 266]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 100]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 238]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 116]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 14]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 108]]];
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
            [17, 20, 32, 35, 35, 36, 43, 47, 59, 59, 68, 69, 70, 70, 75, 82, 88, 94, 96, 99], 17
        ],
        [
            [-78, -40, 58, -36, 34, -12, -38, 48, -66, 16, 50, -26, -22, 46, -70, -68, -44, -52, -78, -50], 11
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 23
        ],
        [
            [49, 57, 17, 37, 56, 61, 10, 3, 33, 33, 70, 35, 50, 85, 48, 65, 83, 21, 96, 19, 66, 43, 69, 17, 60, 87, 82, 3, 83, 44, 63, 19, 55, 58, 77, 76, 50, 96], 37
        ],
        [
            [-94, -88, -86, -80, -80, -72, -64, -60, -58, -58, -58, -50, -44, -32, -8, -8, 0, 6, 8, 10, 14, 14, 18, 28, 34, 34, 46, 54, 56, 56, 56, 64, 66, 66, 70, 82, 84, 88, 96], 33
        ],
        [
            [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0], 13
        ],
        [
            [1, 3, 10, 11, 13, 14, 15, 17, 20, 25, 26, 26, 27, 29, 32, 36, 36, 36, 42, 46, 47, 49, 51, 54, 54, 55, 60, 66, 67, 68, 68, 68, 72, 77, 78, 79, 83, 84, 92, 98], 32
        ],
        [
            [-76, -72, 16, 38, -60, 44, -2, -76, -76, -56, 40, 36, 50, -50, -32, 48, -96, 80, 84, 60, 84, 38, -54, -42, 48, 30, 66, -62, -52, -94, 64, -16, 54, 98], 28
        ],
        [
            [0, 0, 1, 1, 1, 1], 5
        ],
        [
            [63, 82, 22, 84, 11, 62, 18, 43, 57, 25, 4, 27, 62, 46, 55, 16, 1, 9, 10, 73, 36, 80, 95, 87, 47, 64, 27, 25, 70], 22
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
