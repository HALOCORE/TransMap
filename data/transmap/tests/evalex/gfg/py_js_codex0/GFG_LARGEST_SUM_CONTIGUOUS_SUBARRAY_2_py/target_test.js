
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 49, ["num", 1], ["num", 3]], ["num", 38]], ["list", 2, ["list", 11, ["num", -40], ["num", 14]], ["num", 10]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1265]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 90]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 11]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1063]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 348]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1306]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 172]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 10]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1019]]];
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
            [1, 3, 4, 7, 8, 8, 10, 12, 16, 19, 19, 20, 20, 21, 21, 22, 26, 27, 29, 34, 36, 38, 38, 39, 41, 43, 44, 47, 47, 49, 57, 57, 60, 62, 63, 65, 75, 77, 77, 78, 81, 82, 82, 83, 83, 84, 85, 98, 99], 38
        ],
        [
            [-40, 14, 2, -70, 86, -90, -50, -54, -2, 90, 30], 10
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 18
        ],
        [
            [60, 69, 41, 7, 77, 36, 36, 26, 35, 30, 64, 75, 3, 35, 60, 71, 29, 47, 15, 29, 43, 88, 56, 22, 9, 45, 40, 50, 52], 25
        ],
        [
            [-96, -88, -80, -72, -64, -64, -60, -60, -60, -58, -56, -54, -54, -50, -50, -26, -26, -24, -20, -8, -2, 0, 4, 4, 12, 14, 18, 18, 24, 32, 42, 44, 44, 44, 48, 50, 50, 56, 60, 60, 70, 80, 88, 88, 90, 98], 35
        ],
        [
            [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0], 22
        ],
        [
            [2, 4, 4, 5, 6, 7, 11, 12, 14, 18, 23, 24, 27, 28, 33, 36, 37, 38, 39, 40, 41, 41, 48, 48, 52, 61, 64, 66, 66, 77, 79, 82, 85, 88, 91, 94, 99], 34
        ],
        [
            [-56, 0, 16, 12, 20, 36, 32, -52, -68, -36, -96, -46, -34, 56, 2, 78, 6, 30, -68, -48, 2, 44, -26, -36, -30, -20, -90, -66, 4, 94, 8, 4, -4, -32, -24], 20
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 22
        ],
        [
            [39, 87, 27, 89, 26, 25, 80, 82, 21, 25, 55, 27, 20, 81, 47, 79, 26, 72, 10, 11, 90, 89], 21
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
