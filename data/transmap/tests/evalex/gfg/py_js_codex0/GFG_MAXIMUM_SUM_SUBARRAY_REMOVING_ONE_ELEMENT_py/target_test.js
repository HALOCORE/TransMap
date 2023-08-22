
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 16, ["num", 2], ["num", 8]], ["num", 13]], ["list", 2, ["list", 26, ["num", -64], ["num", -56]], ["num", 22]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 488]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 344]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 424]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 178]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1255]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 482]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 646]]];
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
            [2, 8, 14, 17, 19, 35, 38, 45, 50, 53, 55, 70, 82, 88, 92, 96], 13
        ],
        [
            [-64, -56, -80, -82, 72, 62, -8, 48, -96, 34, 64, -38, -60, 80, 4, -64, -62, 34, 94, -16, 38, 62, -84, 48, 42, -40], 22
        ],
        [
            [0, 0, 0, 0, 1, 1, 1], 6
        ],
        [
            [3, 7, 50, 53, 72, 14, 18, 74, 27, 65, 41, 20, 54, 17, 87, 40, 63, 15, 47], 11
        ],
        [
            [-96, -96, -94, -80, -74, -74, -74, -74, -70, -64, -60, -58, -52, -52, -44, -42, -40, -38, -36, -34, -30, -14, -12, -8, -2, 6, 12, 16, 24, 24, 48, 48, 66, 76, 76, 84, 90], 32
        ],
        [
            [1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0], 8
        ],
        [
            [4, 4, 5, 9, 11, 13, 13, 15, 16, 21, 23, 25, 27, 30, 31, 35, 35, 43, 43, 47, 49, 50, 52, 54, 55, 55, 57, 57, 57, 59, 62, 64, 66, 68, 69, 71, 73, 76, 80, 84, 88, 88, 90, 90, 97, 97, 99], 34
        ],
        [
            [-86, -60, 4, 14, 6, -6, -50, 46, -50, -62, -56, 16, -76, 90, 40, 2, 36, 48, -26, 34, 78, 84, 2, -54, 94, 60, -26, 60, 84, 2, -98, 2, -74], 25
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 9
        ],
        [
            [36, 99, 27, 8, 90, 74, 67, 77, 49, 23, 43, 25, 68, 56, 85, 6], 12
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
