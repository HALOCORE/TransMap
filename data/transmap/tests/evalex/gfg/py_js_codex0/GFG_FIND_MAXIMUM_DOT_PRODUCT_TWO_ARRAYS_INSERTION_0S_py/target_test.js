
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 4, ["num", 7], ["num", 9]], ["list", 4, ["num", 14], ["num", 22]]], ["list", 4, ["list", 30, ["num", 24], ["num", 40]], ["list", 30, ["num", 30], ["num", -88]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 610]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 7952]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 50904]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 31016]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 2307]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 492]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
            [7, 9, 22, 68],
            [14, 22, 54, 58], 3, 2
        ],
        [
            [24, 40, 98, 58, -24, 24, 76, 48, -92, -16, -46, -48, -70, 88, 66, 2, 44, 36, 34, 34, 46, 90, -80, -24, -58, 68, 72, -20, -62, -40],
            [30, -88, 6, -26, -76, 14, -80, -30, -58, 76, 40, -28, -54, 38, -60, -60, 88, -80, -22, 90, 50, -48, 68, -26, 26, -2, 68, -16, 88, -72], 22, 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 22, 19
        ],
        [
            [32, 15, 41, 41, 4, 42, 22, 33, 33, 11, 68, 5, 41, 80, 39, 15, 36, 75, 41, 11, 25, 40, 50, 19, 39, 12, 75, 28, 52, 20, 63, 5, 27, 53, 19, 62, 98, 72, 10, 90, 74, 93, 52, 81, 91, 65, 90, 93],
            [80, 18, 9, 29, 62, 89, 4, 40, 47, 15, 35, 82, 22, 97, 63, 54, 7, 58, 64, 73, 54, 79, 21, 21, 20, 19, 56, 42, 6, 97, 7, 34, 55, 35, 57, 86, 73, 88, 20, 29, 48, 52, 8, 77, 2, 12, 6, 47], 30, 25
        ],
        [
            [-94, -76, -68, -50, -28, -20, 18, 24, 30, 54, 74, 84, 98],
            [-88, -80, -78, -68, -44, -38, 42, 50, 62, 68, 70, 80, 92], 11, 8
        ],
        [
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1], 21, 33
        ],
        [
            [14, 27, 43, 49],
            [51, 59, 76, 83], 2, 2
        ],
        [
            [78, -26, -12, 38, -90],
            [14, 50, -6, -38, 80], 3, 2
        ],
        [
            [0, 1, 1, 1],
            [0, 0, 0, 1], 3, 2
        ],
        [
            [12, 69, 57, 7, 52, 14, 15, 83, 67, 57, 15, 86, 81, 43, 1, 64, 45, 68, 30, 23, 14, 70, 13, 51, 23, 33, 98, 68, 24, 43, 12, 82, 46],
            [12, 48, 57, 40, 47, 36, 22, 50, 68, 98, 77, 78, 39, 55, 87, 75, 65, 27, 33, 27, 70, 34, 67, 71, 84, 33, 7, 61, 3, 9, 67, 92, 60], 17, 32
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
