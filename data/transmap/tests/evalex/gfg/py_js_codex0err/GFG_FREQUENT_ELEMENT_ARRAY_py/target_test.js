
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 39, ["num", 1], ["num", 1]], ["num", 25]], ["list", 2, ["list", 23, ["num", 46], ["num", -8]], ["num", 18]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 51]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -74]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 31]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -52]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 9]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -42]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 4]]];
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
            [1, 1, 3, 11, 11, 11, 18, 20, 26, 26, 27, 30, 33, 39, 39, 42, 42, 48, 51, 51, 51, 51, 60, 66, 66, 68, 68, 69, 71, 72, 73, 76, 76, 77, 77, 77, 78, 90, 96], 25
        ],
        [
            [46, -8, 64, -46, -38, 92, -14, -22, -32, 48, 72, 96, 30, 66, 94, 36, 42, -18, 14, -74, 80, 96, -4], 18
        ],
        [
            [0, 0, 0, 0, 0, 0, 1], 6
        ],
        [
            [93, 32, 3, 31, 67, 96, 52, 80, 70, 49, 45, 23, 58, 87, 31, 56, 21, 71, 55, 97], 15
        ],
        [
            [-98, -96, -84, -82, -72, -64, -62, -56, -52, -52, -48, -46, -42, -36, -32, -30, -30, -18, -16, -10, -2, 0, 6, 18, 22, 22, 40, 42, 50, 54, 64, 68, 68, 72, 80, 82, 84, 96], 20
        ],
        [
            [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0], 29
        ],
        [
            [9, 12, 13, 28, 43, 46, 64, 66, 68, 89, 92], 6
        ],
        [
            [22, -8, -56, 68, -12, -26, -40, -46, -42, -80, 4, -42, -72, -22, 36, 22, -94, 48, 96, 80, -52, 46, 90, 94, 36, 92, -12, -24, -60, -32, 92, 18, 76, 40, -32, 6, -22, 86, 86, -88, 38, 50, 32, 78, -82, 54, -40, 18], 41
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1], 4
        ],
        [
            [81, 74, 32, 41, 85, 65, 81, 74, 40, 64, 97, 4, 61, 43, 54, 96, 62, 2, 97, 86, 80, 25, 9, 31, 16, 29, 4, 63, 76, 41, 5, 95], 16
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
