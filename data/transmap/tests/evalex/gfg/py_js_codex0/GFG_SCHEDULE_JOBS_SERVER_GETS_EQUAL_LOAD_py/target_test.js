
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 35, ["num", 4], ["num", 9]], ["list", 35, ["num", 3], ["num", 15]]], ["list", 3, ["list", 43, ["num", -24], ["num", 70]], ["list", 43, ["num", -26], ["num", 36]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 81]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -1]]];
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
            [4, 9, 16, 18, 20, 23, 24, 25, 25, 26, 29, 30, 35, 40, 41, 43, 44, 46, 53, 53, 56, 56, 58, 60, 62, 70, 80, 80, 80, 82, 86, 90, 92, 92, 95],
            [3, 15, 16, 16, 18, 26, 30, 32, 32, 35, 37, 41, 42, 43, 48, 49, 49, 54, 55, 57, 65, 66, 67, 67, 68, 83, 85, 89, 89, 90, 91, 93, 96, 97, 99], 29
        ],
        [
            [-24, 70, -74, -90, 72, 50, -94, 86, -58, -68, 42, 0, 98, -70, -14, -32, 6, 74, 64, -78, 86, -42, -56, 2, -34, -46, 70, -62, 50, -58, -58, 42, 86, 96, -8, 8, -22, -14, -14, 98, 2, 98, -28],
            [-26, 36, 48, 48, -38, -86, 90, -62, 30, -4, 82, 16, 32, -6, 58, 82, -66, -40, 52, -78, 94, -70, -80, -68, -58, -26, 50, -78, -90, -48, -28, 48, 56, 50, 72, -22, -2, 8, -94, 92, -44, -66, -30], 34
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 13
        ],
        [
            [98, 18, 50, 36, 88, 75, 2, 40, 74, 19, 63, 82, 77, 5, 59, 97, 70, 50, 71, 90, 90, 61, 63, 99],
            [93, 25, 16, 42, 55, 61, 69, 68, 95, 28, 40, 90, 1, 86, 76, 40, 13, 47, 71, 4, 64, 54, 84, 45], 16
        ],
        [
            [-80, -64, -64, -64, -64, -62, -54, -48, -44, -44, -38, -30, -30, -26, -14, -12, -10, -6, -6, 6, 22, 22, 22, 26, 28, 50, 52, 70, 86, 86, 88, 90],
            [-96, -94, -80, -74, -64, -56, -52, -32, -30, -24, -12, -12, -8, -2, 4, 8, 16, 20, 24, 24, 24, 48, 50, 54, 60, 64, 74, 80, 88, 90, 92, 92], 22
        ],
        [
            [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1], 20
        ],
        [
            [59, 61, 64],
            [22, 59, 85], 1
        ],
        [
            [98, 92, 28, 42, -74, -36, 40, -8, 32, -22, -70, -22, -56, 74, 6, 6, -62, 46, 34, 2],
            [-62, -84, 72, 60, 10, -18, -44, -22, 14, 0, 76, 72, 96, -28, -24, 52, -74, -30, 16, 66], 18
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 34
        ],
        [
            [72, 97, 79, 21, 83, 2, 31, 59, 6, 11, 79, 97],
            [27, 71, 87, 36, 73, 37, 80, 34, 57, 17, 88, 52], 9
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
