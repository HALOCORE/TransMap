
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 38, ["num", 1], ["num", 2]], ["num", 25]], ["list", 2, ["list", 42, ["num", -30], ["num", -60]], ["num", 35]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 27]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 22]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            [1, 2, 5, 8, 16, 21, 21, 22, 23, 26, 26, 27, 27, 29, 31, 33, 36, 37, 37, 38, 42, 45, 47, 50, 57, 58, 60, 60, 62, 63, 66, 66, 76, 84, 84, 88, 96, 99], 25
        ],
        [
            [-30, -60, 34, 4, 86, 80, -96, -94, 52, 46, 8, 82, -94, -96, 78, 82, -22, -36, 78, 50, -46, -36, 80, 24, -14, 94, -46, -38, 82, 4, -24, 2, 4, -82, -82, -18, -62, 12, 8, 92, 70, -10], 35
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 34
        ],
        [
            [38, 47, 84, 49, 48, 62, 48, 41, 38, 48, 92, 16, 99], 6
        ],
        [
            [-88, -64, -40, -38, -38, -16, 16, 20, 28, 40, 56, 58, 60, 68, 74, 92], 12
        ],
        [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], 29
        ],
        [
            [14, 24, 82, 87, 95], 3
        ],
        [
            [-34, 62, 40, -84, 52, -76, 2, -58, 94, 22, 2, -18, -88, 62, -14, 46, 50, -58, -80, 68, -64, 90, -58, 12, 76, -40, 40, -46, 8, -80, 4, -90, 14, -10, 64, -68], 34
        ],
        [
            [0, 1, 1, 1], 3
        ],
        [
            [43, 41, 90, 5, 6, 17, 68, 68, 86, 89], 7
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
