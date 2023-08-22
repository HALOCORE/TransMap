
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 18, ["num", 2], ["num", 3]], ["num", 10]], ["list", 3, ["list", 41, ["num", 44], ["num", -98]], ["num", 34]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 157]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 166]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 508]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -86]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 721]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 36]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1041]]];
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
            [2, 3, 5, 7, 8, 29, 29, 44, 47, 52, 60, 65, 73, 83, 87, 92, 92, 95], 10, 12
        ],
        [
            [44, -98, -10, 14, -6, -46, 6, -74, -4, 36, 10, -2, 30, 28, 96, -84, -36, -76, 64, -74, -20, 94, -4, 14, 78, 52, -56, 98, -68, -76, -10, 20, 88, -98, 96, 80, 96, -32, -40, -30, 82], 34, 37
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 16, 15
        ],
        [
            [58, 21, 97, 78, 78, 57, 29, 33, 57, 81, 66, 32, 11, 82, 28, 72, 46, 67, 42, 15, 60, 45, 16, 37], 14, 20
        ],
        [
            [-92, -90, -88, -84, -68, -66, -62, -58, -52, -44, -22, -16, -4, -4, 2, 12, 14, 14, 24, 26, 44, 56, 80, 90, 92, 94, 98], 15, 25
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 5, 5
        ],
        [
            [3, 4, 8, 12, 13, 14, 17, 19, 23, 24, 28, 29, 30, 35, 35, 38, 44, 47, 47, 53, 55, 56, 56, 58, 66, 67, 70, 71, 72, 73, 74, 75, 77, 78, 82, 84, 87, 87, 87, 88, 88, 93, 94, 96], 26, 25
        ],
        [
            [20, -58, 94, -70, 18, 16, -46, 38, -44, -92, -20, -70, -30, 50], 11, 7
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19, 23
        ],
        [
            [90, 77, 82, 38, 96, 62, 66, 4, 93, 30, 75, 22, 26, 61, 40, 11, 38, 55, 88, 24, 66, 47, 40, 71, 21, 5, 18, 31, 26, 56, 19, 47, 71, 34], 28, 32
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
