
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 34, ["num", 10], ["num", 12]], ["num", 17]], ["list", 2, ["list", 39, ["num", -56], ["num", 38]], ["num", 25]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 97]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 84]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 92]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 86]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 99]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 86]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 98]]];
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
            [10, 12, 14, 16, 17, 17, 20, 24, 26, 28, 37, 38, 41, 45, 49, 50, 59, 61, 63, 65, 65, 66, 69, 70, 70, 73, 73, 74, 81, 81, 83, 87, 94, 97], 17
        ],
        [
            [-56, 38, -22, 84, -60, 2, 68, -78, 62, -98, 24, 26, 48, 62, -80, -14, -84, 12, -54, -12, -20, -82, 10, -34, -50, -72, 78, 16, 30, -76, 72, 34, 6, 52, 44, 18, -38, 48, -14], 25
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 11
        ],
        [
            [92, 5, 40, 65, 86, 51, 14, 29, 66, 6, 62, 92, 29, 13, 88, 54, 15, 60, 45, 2, 51, 9, 33, 51, 31, 11, 62, 61, 77, 38, 11, 4, 27, 54, 72, 64, 85, 46, 24, 44, 39, 73, 82, 85], 40
        ],
        [
            [-92, -90, -84, -80, -80, -76, -70, -70, -48, -44, -38, -28, -14, -14, -12, -2, 2, 4, 6, 10, 16, 16, 20, 22, 24, 26, 50, 52, 56, 56, 58, 58, 74, 80, 82, 84, 86], 33
        ],
        [
            [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], 29
        ],
        [
            [5, 19, 20, 26, 31, 32, 34, 37, 39, 40, 46, 46, 50, 53, 58, 58, 59, 65, 72, 72, 75, 76, 77, 78, 81, 83, 83, 95, 98, 99], 28
        ],
        [
            [32, -84, -84, 86, -24, 36, -12, 82, 48, -12, 82, -76, 84, -20, -12, -18, 46, -74, -14, -86], 14
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 33
        ],
        [
            [95, 73, 74, 14, 73, 74, 19, 93, 34, 53, 85, 75, 80, 15, 36, 57, 15, 98, 51, 37, 8, 9, 62, 71, 28, 24, 37, 53, 84, 76, 22, 48, 15, 19, 43, 88, 58, 38, 63, 68, 27, 22, 37, 76, 59, 66, 22], 34
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
