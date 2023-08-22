
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 1, ["num", 69], "EMPTY"], ["num", 0]], ["list", 4, ["list", 12, ["num", -34], ["num", -38]], ["num", 6]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 21]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 30]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 12]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 38]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 24]]];
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
            [69], 0, 0, 0
        ],
        [
            [-34, -38, -72, 90, -84, -40, -40, -52, -12, 80, -4, -58], 6, 6, 9
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 13, 19, 11
        ],
        [
            [96, 34, 11, 1, 36, 79, 64, 75, 75, 96, 32, 18, 25, 79, 63, 80, 90, 75, 44, 71, 48, 1, 62, 53, 17, 98], 21, 20, 13
        ],
        [
            [-98, -92, -92, -84, -82, -80, -80, -74, -70, -60, -48, -42, -36, -34, -34, -34, -30, -28, -16, -6, -2, -2, 2, 12, 14, 20, 24, 40, 46, 50, 60, 66, 70, 72, 78, 82, 88, 92, 94, 94, 96], 30, 32, 28
        ],
        [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0], 12, 9, 10
        ],
        [
            [10, 12, 12, 19, 20, 21, 24, 27, 37, 47, 50, 54, 55, 58, 61, 63, 63, 68, 73, 75, 87, 90, 90, 92, 92], 12, 13, 21
        ],
        [
            [-74, 62, 74, 92, -38, -28, -26, 4, 88, -68, -76, -20, -4, 12, 72, 6, 42, 36, 88, -96, -80, 90, 80, -26, -36, -72, -62, 38, -20, 40, -10, -22, -20, 38, 82, -84, 8, -60, 86, -26, 44, -72, -70, -16, -22, 18, -16, 76, -50], 37, 26, 42
        ],
        [
            [1, 1, 1, 1, 1], 3, 4, 2
        ],
        [
            [64, 80, 47, 58, 41, 3, 85, 96, 51, 4, 22, 89, 67, 54, 88, 15, 83, 31, 19, 28, 40, 67, 37, 13, 63, 38, 27, 14, 7, 68], 23, 24, 25
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
