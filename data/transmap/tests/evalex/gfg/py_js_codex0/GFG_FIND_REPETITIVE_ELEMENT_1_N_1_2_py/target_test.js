
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 45, ["num", 2], ["num", 2]], ["num", 31]], ["list", 2, ["list", 15, ["num", 46], ["num", 2]], ["num", 8]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 52]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 46]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 28]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -32]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 16]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 25]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 103]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 21]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 9]]];
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
            [2, 2, 4, 5, 5, 7, 7, 7, 8, 11, 14, 15, 18, 19, 20, 25, 25, 29, 29, 31, 32, 32, 33, 38, 42, 48, 52, 55, 60, 61, 63, 71, 74, 78, 82, 82, 84, 84, 87, 87, 88, 90, 93, 94, 94], 31
        ],
        [
            [46, 2, 62, 60, 92, 4, 26, 66, 66, 90, 26, -14, 76, -20, -68], 8
        ],
        [
            [0, 0, 0, 1, 1, 1, 1, 1], 4
        ],
        [
            [87, 67, 11, 47, 64, 81, 94, 75, 58, 77, 18, 2, 85, 26, 6, 44, 55, 19, 46, 49, 5, 69, 44, 12, 42, 66, 46, 9, 26, 49, 68, 95, 6, 9, 11, 72, 5, 67], 34
        ],
        [
            [-98, -94, -92, -82, -78, -64, -62, -58, -52, -44, -40, -38, -8, 6, 10, 20, 22, 28, 30, 30, 36, 54, 54, 58, 64, 68, 76, 78, 84, 88, 90, 94, 96], 29
        ],
        [
            [1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1], 17
        ],
        [
            [1, 14, 15, 15, 21, 34, 38, 39, 41, 50, 60, 74, 96, 97], 7
        ],
        [
            [96, -12, -16, -52], 3
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21
        ],
        [
            [66, 21, 21, 59, 78, 8, 46, 41, 16, 32, 97, 93, 32, 86, 91, 61, 67, 61, 97, 49, 66, 35, 24, 35, 65, 45, 83], 25
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
