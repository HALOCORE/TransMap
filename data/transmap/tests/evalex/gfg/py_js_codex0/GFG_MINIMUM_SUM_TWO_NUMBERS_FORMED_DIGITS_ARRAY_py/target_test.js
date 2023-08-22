
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 22, ["num", 3], ["num", 4]], ["num", 19]], ["list", 2, ["list", 26, ["num", 48], ["num", -22]], ["num", 25]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 4183488835]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -107220607602444]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1222222]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 45]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -10095534]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 122222]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 615688689]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -214463225281903248]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 8964536953959]]];
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
            [3, 4, 5, 10, 14, 16, 18, 42, 43, 43, 45, 46, 51, 52, 53, 58, 61, 66, 79, 81, 82, 84], 19
        ],
        [
            [48, -22, 60, 32, 48, -2, -76, -50, -26, 56, -86, 98, -30, -22, 82, -20, 58, 40, 76, -2, 82, -90, 8, -46, 22, 94], 25
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 23
        ],
        [
            [79, 45], 1
        ],
        [
            [-90, -68, -38, -34, -4, 6, 10, 28, 48, 52, 54, 68, 88, 90], 11
        ],
        [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0], 22
        ],
        [
            [4, 8, 8, 23, 26, 27, 30, 42, 44, 55, 59, 64, 67, 69, 74, 77, 82, 82, 87, 96, 97], 17
        ],
        [
            [0, -18, -98, -36, -62, 0, -32, -98, 46, 72, -18, 30, -86, -42, -82, 2, -76, -64, -66, -48, -28, 52, -46, -76, 76, 10, 70, 4, 18, 94, 88, 80, -60, -36, 62, 96, -4, 88, 50], 32
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1], 6
        ],
        [
            [8, 71, 75, 58, 97, 24, 56, 98, 71, 69, 32, 64, 54, 96, 69, 22, 7, 47, 45, 68, 17, 36, 90, 9, 71, 86, 16, 61, 53, 63, 9, 74, 38, 87, 14, 86, 42, 42, 14, 43, 58, 82, 72, 73, 32], 25
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
