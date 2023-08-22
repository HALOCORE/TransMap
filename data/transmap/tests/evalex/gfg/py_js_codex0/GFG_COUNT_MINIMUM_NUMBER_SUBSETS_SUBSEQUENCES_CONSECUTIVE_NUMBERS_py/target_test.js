
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 45, ["num", 3], ["num", 7]], ["num", 42]], ["list", 2, ["list", 31, ["num", -28], ["num", 72]], ["num", 24]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 34]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 24]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 19]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 42]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 26]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 23]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 25]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 20]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 36]]];
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
            [3, 7, 7, 11, 14, 14, 14, 16, 17, 17, 21, 22, 24, 27, 27, 27, 31, 33, 35, 36, 36, 37, 38, 43, 45, 49, 52, 54, 57, 59, 59, 60, 67, 73, 74, 74, 74, 75, 75, 79, 83, 87, 90, 93, 97], 42
        ],
        [
            [-28, 72, 60, 62, 40, 64, 50, -36, -24, 40, -6, 78, -80, -82, 2, -30, 70, 94, -2, -30, 92, 12, -46, 32, -96, -2, 36, -40, -42, 66, 98], 24
        ],
        [
            [1, 1], 1
        ],
        [
            [96, 89, 24, 28, 70, 78, 78, 35, 98, 65, 18, 81, 35, 91, 33, 88, 69, 52, 66, 17, 73, 79, 30, 33, 78, 60, 42, 8, 36, 6, 47, 87, 8, 98, 9, 77, 78, 24, 86, 91, 13, 79, 50, 85, 3, 7, 61, 94, 86], 26
        ],
        [
            [-92, -92, -90, -84, -78, -66, -60, -60, -46, -42, -38, -32, -24, -20, -18, -16, -14, -10, 0, 4, 6, 12, 24, 32, 34, 44, 48, 50, 50, 64, 66, 68, 80, 84, 86, 86, 88, 90, 90, 90, 92, 94, 96, 98, 98], 42
        ],
        [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0], 27
        ],
        [
            [8, 12, 13, 14, 16, 20, 20, 21, 23, 23, 24, 27, 29, 29, 29, 29, 35, 35, 38, 39, 40, 46, 50, 52, 60, 62, 62, 65, 65, 65, 70, 71, 72, 73, 75, 76, 80, 81, 82, 83, 85, 91, 95, 97, 98, 98], 29
        ],
        [
            [-84, 92, 70, -46, 26, -94, -82, -26, -90, -62, 52, 62, -58, 44, -14, -6, 58, 2, 10, 76, -34, 42, -26, 80, 26, 32, -82, 38, 2, 72, 68, 44, 24, 84, -32, 54, -96, -8, 36, 80, -82, 32, 98, -68], 25
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21
        ],
        [
            [64, 10, 6, 3, 67, 95, 72, 96, 72, 30, 99, 21, 46, 23, 48, 38, 48, 50, 53, 91, 59, 58, 27, 95, 63, 20, 27, 22, 58, 3, 11, 75, 77, 64, 46, 1, 67, 79, 6, 46, 57, 79, 49, 83, 21, 36, 44], 46
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
