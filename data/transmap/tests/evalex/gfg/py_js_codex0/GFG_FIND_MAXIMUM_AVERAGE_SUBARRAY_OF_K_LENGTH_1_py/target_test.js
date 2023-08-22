
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 9, ["num", 2], ["num", 5]], ["num", 8]], ["list", 3, ["list", 47, ["num", 84], ["num", -72]], ["num", 34]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 4]]];
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
            [2, 5, 11, 37, 41, 49, 49, 63, 98], 8, 7
        ],
        [
            [84, -72, 12, 0, 86, -32, -18, 48, 60, 42, 8, -6, -10, -6, -52, -84, -98, 76, -10, -14, -94, -48, 94, -10, -20, 40, -52, 0, 94, -68, 44, -34, -26, -6, -94, 34, -80, -62, -40, 56, 52, -20, 74, -46, -88, -26, 22], 34, 43
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11, 18
        ],
        [
            [94, 97, 74, 88, 14, 66, 65, 50, 76, 55, 70, 93, 53, 30, 2, 60, 65, 24, 80, 73, 84, 95, 49, 32, 55, 70, 17, 26, 96, 20, 36, 2, 89, 49, 83, 67, 42, 51, 71, 11, 61, 78, 17, 78, 94, 68], 35, 33
        ],
        [
            [-98, -90, -60, -38, 38, 42], 3, 5
        ],
        [
            [1, 0, 0, 1, 1, 1, 1], 3, 4
        ],
        [
            [4, 9, 17, 17, 19, 32, 35, 36, 37, 40, 44, 45, 47, 48, 48, 56, 56, 60, 61, 65, 66, 79, 83, 91, 93, 99], 22, 24
        ],
        [
            [78, 82, -92, -46, -16, -64, 28, 60, 64, 52, 54, -84, 70, 22, 24, 0, -14, 20, -90, 30, 0, 86, 12, 72, -64, -52, 86, 16, -42], 25, 27
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25, 20
        ],
        [
            [81, 77, 6, 3, 72, 24, 75, 47, 17, 29, 69, 15, 15, 50, 30, 83, 11, 7, 59, 7, 12, 82, 45, 76, 9, 48, 98, 49, 29, 66, 3, 53, 37, 13, 72, 58, 37, 87, 55], 34, 23
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
