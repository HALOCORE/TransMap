
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 6, ["num", 2], ["num", 27]], ["num", 4]], ["list", 3, ["list", 21, ["num", 84], ["num", -38]], ["num", 13]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1000000000]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1000000000]]];
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
            [2, 27, 66, 89, 96, 96], 4, 4
        ],
        [
            [84, -38, -56, -20, -98, -40, -16, 22, 20, 98, -56, -32, -44, 30, -58, 26, -44, -32, 50, 46, 92], 13, 11
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 23, 13
        ],
        [
            [20, 71, 66, 58, 74, 2, 63, 13, 1, 36, 28, 83, 24, 20, 85, 30, 59, 56, 8, 97, 58, 28, 28, 42], 23, 17
        ],
        [
            [-94, -88, -86, -68, -66, -64, -28, -12, 4, 18, 22, 28, 32, 34, 34, 40, 44, 46, 60, 68, 72, 78, 80, 84, 88, 96], 16, 15
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1], 8, 13
        ],
        [
            [8, 13, 54, 59, 61, 69, 89, 90, 92], 4, 8
        ],
        [
            [-58, 50, -74, -8, -50, 90, 90, -2, -22, 8, -76, 16, 4, 56, 94, 36, 28, -42, 80, -88, 88, 52, 74, 40, 12, -72, -50, 50, 88, -54, 32, -24, -48, -66, -86, 40, -6, 14, 10, -88, 56, 80, -34], 27, 42
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 9, 12
        ],
        [
            [2, 60, 66, 39, 18, 60, 37, 75, 3, 64, 24, 16, 72, 95, 96, 44, 23, 58, 58, 33, 24, 96], 21, 17
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
