
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 46, ["num", 8], ["num", 10]], ["num", 38]], ["list", 2, ["list", 45, ["num", -44], ["num", -90]], ["num", 36]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 6]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 6]]];
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
            [8, 10, 11, 14, 14, 17, 20, 20, 22, 22, 22, 23, 25, 30, 33, 39, 39, 41, 43, 45, 46, 46, 46, 50, 51, 53, 57, 59, 60, 64, 64, 66, 72, 72, 75, 77, 85, 85, 87, 88, 90, 91, 93, 94, 94, 95], 38
        ],
        [
            [-44, -90, 20, 4, -56, -50, -80, 74, -82, 20, 62, -26, -10, -14, -76, 82, -88, 92, 30, 44, -62, -86, -20, -96, -60, -88, -78, -40, -48, -92, 62, 58, 94, 68, 68, 44, 80, 4, 48, -92, 30, -76, -46, -20, 4], 36
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 28
        ],
        [
            [8, 34, 48, 10, 5, 12, 80, 7, 67, 1, 79, 59, 63, 13, 16, 23, 62, 56, 99, 89, 7, 80], 12
        ],
        [
            [-88, -46, -40, -40, 38], 3
        ],
        [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1], 44
        ],
        [
            [8, 15, 35, 39, 49, 81, 86, 91], 7
        ],
        [
            [-24, 56, -74, -76, -80, 86, 90, 0, -26, 18, 72, 78, -66, -28, 22, 22, 72, 78, -50, -12, 20, 12, -68, -2, -58, -44, 28, -58, 90, -28, 32, -70, -48, -66, -94, -50, 18, -12, 80, 12, 82, 56, -64, 10, -22], 36
        ],
        [
            [0, 0], 1
        ],
        [
            [62, 93, 69, 40, 26, 2, 29, 83, 66, 68, 67, 73, 12, 65, 89, 57, 38, 99, 42, 27, 38, 24, 43, 4, 4, 54, 72, 47, 52, 46, 53, 24, 3, 41, 64, 33, 88, 3, 1, 7, 17, 31, 20, 33, 69, 21, 9, 24, 59], 26
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
