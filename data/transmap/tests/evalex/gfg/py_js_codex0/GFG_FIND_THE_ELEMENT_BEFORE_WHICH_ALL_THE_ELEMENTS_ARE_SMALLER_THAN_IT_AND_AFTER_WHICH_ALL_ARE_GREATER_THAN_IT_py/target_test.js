
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 8, ["num", 4], ["num", 24]], ["num", 4]], ["list", 2, ["list", 49, ["num", 72], ["num", -48]], ["num", 28]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 28]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -1]]];
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
            [4, 24, 30, 33, 56, 67, 87, 90], 4
        ],
        [
            [72, -48, 12, 4, 46, 36, 2, 58, 82, -88, -14, 56, 90, 76, 18, -6, -28, 18, 88, 90, 40, -68, -10, -82, -28, 16, 32, -90, 12, -86, -16, 78, -98, -52, -26, 80, 6, 50, 40, -12, 52, 38, -92, 94, -32, 14, -80, -88, 48], 28
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30
        ],
        [
            [51, 87, 46, 76, 2, 89, 56, 34, 49, 61, 44, 73, 14, 60, 89], 11
        ],
        [
            [-90, -90, -80, -72, -68, -64, -62, -62, -60, -46, -44, -44, -44, -42, -42, -32, -22, -22, -18, -2, 4, 6, 10, 12, 14, 30, 34, 34, 40, 56, 56, 56, 58, 68, 74, 78, 78, 82, 84, 86, 88, 90, 92], 29
        ],
        [
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0], 26
        ],
        [
            [7, 8, 11, 12, 15, 17, 28, 34, 57, 61, 66, 76, 92], 9
        ],
        [
            [-22, -96, -78, -60, 34, -18, 86, -42, -78, 76, 8, 28, -80, 80, 6, -72, 34, 66, 84, 50, -4, 18, 72, -66, -68, -24, 56, -12, -70, 24, -82], 19
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], 9
        ],
        [
            [79, 81, 55, 6, 78, 93, 81, 33, 29, 1, 27, 49, 21, 58, 22, 65, 44, 95, 6, 51, 75, 42, 14, 55, 79, 82, 90, 8, 15, 15, 53, 98, 76, 43, 33], 30
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
