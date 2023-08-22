
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 49, ["num", 4], ["num", 4]], ["num", 27]], ["list", 2, ["list", 48, ["num", -56], ["num", 88]], ["num", 29]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 16]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 340]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 256]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 360]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 354]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 192]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 24]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 340]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [4, 4, 5, 5, 13, 14, 14, 16, 19, 20, 30, 31, 32, 33, 35, 38, 38, 42, 44, 44, 48, 48, 52, 58, 60, 64, 65, 66, 68, 69, 70, 70, 71, 72, 73, 79, 81, 83, 83, 84, 86, 87, 88, 88, 91, 92, 95, 95, 98], 27
        ],
        [
            [-56, 88, -50, 70, 20, 58, 42, -56, -52, -78, 98, 20, -26, 4, 20, -66, -46, -58, 74, 74, -72, 2, 16, -78, -4, 10, 58, 60, -46, -2, 32, -96, 24, -6, 90, -64, -24, -38, 26, 66, -42, -86, 48, 92, 28, 6, -54, -6], 29
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25
        ],
        [
            [52, 67, 62], 1
        ],
        [
            [-56, -22, 32, 42, 66], 4
        ],
        [
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0], 10
        ],
        [
            [38, 46, 58, 72], 2
        ],
        [
            [16, 62, 90, 40, 30, -56, -92, -56, 60, 42, -64, 92, -30, -70, 42, -48, -54, 54, 48, 94, -44, -46, 10, 48, 22, -24, -62, 34, 60, 24, -60, 50, 40, 34], 20
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 37
        ],
        [
            [86, 43, 74, 84, 86, 14, 45, 7, 92, 36, 79, 13, 67, 18, 96, 77, 13, 22, 28, 36, 57, 56, 99, 57, 8, 48, 5, 79, 65, 64, 96, 6, 36, 91, 53, 55, 11, 12, 80, 99, 50, 40, 4, 9, 52, 41], 40
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
