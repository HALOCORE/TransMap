
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 35, ["num", 7], ["num", 8]], ["num", 32]], ["list", 2, ["list", 37, ["num", 40], ["num", 76]], ["num", 25]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 18]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 3]]];
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
            [7, 8, 9, 16, 16, 27, 32, 33, 35, 35, 39, 39, 41, 42, 44, 47, 48, 50, 56, 59, 66, 69, 70, 73, 74, 76, 78, 87, 87, 89, 94, 96, 96, 98, 98], 32
        ],
        [
            [40, 76, -54, -92, -28, -96, 8, 60, 28, -38, -62, -40, -16, 16, 52, 28, 70, -56, -50, 46, 68, -16, -56, 46, 42, 70, 52, -34, 86, -32, -50, 64, 36, 54, 20, 82, 84], 25
        ],
        [
            [0, 0, 0, 0, 1, 1, 1], 4
        ],
        [
            [15, 19, 87, 44, 15, 48, 21, 85, 90, 30, 88, 95, 48, 92, 29, 52, 46, 46, 7, 23, 96, 97, 43], 19
        ],
        [
            [-98, -96, -94, -94, -94, -80, -80, -78, -64, -62, -62, -46, -42, -38, -36, -36, -34, -32, -20, -18, -16, -12, -8, -4, -4, -2, -2, 2, 6, 12, 34, 40, 42, 44, 46, 46, 50, 54, 58, 58, 70, 72, 72, 76, 78, 86], 33
        ],
        [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1], 13
        ],
        [
            [6, 7, 19, 36, 44, 63, 68, 72, 83], 8
        ],
        [
            [-64, 12, 56, 50, 94, 6, 0, 70, -70, 46, -84, -64, 4, 76, 28, 94, -8, 24, 76, 64, -62, -34], 15
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21
        ],
        [
            [71, 57, 20, 8, 90, 69, 15, 62, 45, 14, 65, 20, 48, 9], 10
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
