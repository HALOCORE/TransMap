
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 21, ["num", 2], ["num", 5]], ["num", 12]], ["list", 2, ["list", 41, ["num", -60], ["num", -48]], ["num", 28]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 50]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -91]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 109]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 94]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 42]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 124]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 101]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 32]]];
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
            [2, 5, 7, 8, 10, 14, 27, 32, 51, 52, 57, 58, 65, 68, 68, 72, 73, 73, 83, 92, 98], 12
        ],
        [
            [-60, -48, 38, -78, 88, 86, -4, -94, 16, -64, 32, 88, 58, -78, -16, 48, 38, 30, 66, -60, 20, 40, -28, -64, -48, -86, -80, -8, -58, 52, 80, -32, 46, -4, -70, 76, -4, 78, -64, 38, -40], 28
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 38
        ],
        [
            [69, 59, 22, 33, 69, 28, 11, 34, 72, 88, 16, 30, 69, 89, 43, 4, 65, 85, 27], 13
        ],
        [
            [-98, -98, -92, -88, -88, -82, -74, -70, -68, -60, -60, -48, -38, -34, -34, -24, 14, 38, 50, 58, 62, 64, 64, 68, 76, 78, 78, 86, 88, 90, 92, 98, 98], 23
        ],
        [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0], 41
        ],
        [
            [1, 9, 12, 12, 24, 25, 33, 33, 36, 39, 46, 48, 48, 52, 52, 53, 57, 69, 71, 72, 75, 76, 78, 80, 82, 86, 89, 91, 94, 95, 96, 97, 98, 99], 30
        ],
        [
            [62, -66, 60, -92, 46, 6, -52, 48, 72, -64, 34, 20, 50, 70, -34, 20, -70, 14, -44, 66, -70], 17
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30
        ],
        [
            [33, 10, 6, 71, 18, 22, 15, 57, 56, 63, 35, 93, 31, 43, 98, 99, 62, 39, 44, 86, 78, 95, 6, 76, 71], 12
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
