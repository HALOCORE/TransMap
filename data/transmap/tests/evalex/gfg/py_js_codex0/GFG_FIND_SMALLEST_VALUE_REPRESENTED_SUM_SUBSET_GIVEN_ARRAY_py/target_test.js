
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 8, ["num", 16], ["num", 23]], ["num", 4]], ["list", 2, ["list", 12, ["num", -14], ["num", -82]], ["num", 8]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -95]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -93]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 12]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            [16, 23, 24, 41, 48, 58, 72, 75], 4
        ],
        [
            [-14, -82, 12, -14, -38, 12, 40, 12, -74, 42, -36, 64], 8
        ],
        [
            [0, 0, 1, 1, 1, 1], 5
        ],
        [
            [17, 89, 44], 2
        ],
        [
            [-94, -92, -84, -82, -72, -58, -56, -40, -34, -34, -24, -22, -8, -8, 12, 14, 16, 16, 22, 22, 34, 46, 54, 58, 68, 72, 74, 78, 88, 96], 25
        ],
        [
            [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], 8
        ],
        [
            [2, 12, 13, 13, 13, 16, 28, 32, 34, 41, 41, 47, 49, 49, 50, 52, 58, 61, 63, 65, 67, 68, 68, 74, 80, 80, 84, 84, 89, 93, 94, 98, 99, 99], 23
        ],
        [
            [-54], 0
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 33
        ],
        [
            [42, 50, 76, 45, 6, 63, 46, 73, 65, 70, 87, 5, 41, 63, 96, 75, 38, 76, 27, 7, 71, 9, 65, 44, 76, 37, 94, 52, 55, 3, 38, 68, 45, 15, 35, 90, 36, 46, 13, 92, 32, 22, 49, 35, 83], 35
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
