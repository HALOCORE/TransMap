
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 37, ["num", 1], ["num", 4]], ["num", 21]], ["list", 2, ["list", 34, ["num", -56], ["num", 6]], ["num", 22]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 15]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 10]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 9]]];
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
            [1, 4, 12, 14, 15, 18, 20, 24, 25, 25, 27, 33, 34, 42, 46, 48, 49, 50, 50, 52, 55, 56, 57, 58, 64, 65, 66, 69, 72, 75, 78, 80, 84, 90, 92, 95, 99], 21
        ],
        [
            [-56, 6, -74, -30, 34, 40, -76, -10, -12, -86, -76, 36, -72, 82, 38, 68, 28, 84, 98, -84, 6, 16, -46, 8, 2, -18, -50, 4, -96, 88, -84, -38, -82, -54], 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 6
        ],
        [
            [68, 79, 87, 44, 3, 99, 80, 6, 46, 67, 72, 40, 11, 18, 73, 48, 18, 72, 10, 38, 3, 39, 26, 76, 47, 15, 85, 69], 15
        ],
        [
            [-96, -94, -94, -74, -68, -60, -58, -56, -56, -52, -52, -50, -44, -40, -26, -24, -10, -8, -6, -2, 2, 2, 12, 14, 20, 24, 26, 30, 38, 40, 52, 52, 62, 62, 68, 70, 74, 76, 80, 82, 90, 92], 31
        ],
        [
            [1, 1, 1, 0, 1], 3
        ],
        [
            [1, 5, 11, 20, 24, 28, 29, 31, 54, 58, 63, 65, 66, 71, 77, 80, 83, 92, 93, 93], 12
        ],
        [
            [-50, -46, -44, -90, 2, -38, 88, -26, 60], 7
        ],
        [
            [1, 1], 1
        ],
        [
            [2, 1, 19, 26, 65, 47, 3, 65, 9, 12, 84, 59, 74, 59, 30, 83, 73, 67, 13, 5, 64, 83, 81, 92, 80, 14, 58, 84, 92], 16
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
