
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 14, ["num", 5], ["num", 17]], ["num", 8]], ["list", 2, ["list", 47, ["num", -70], ["num", -32]], ["num", 36]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 93]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -834]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 359]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -1152]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 28]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -314]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 397]]];
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
            [5, 17, 25, 27, 29, 30, 34, 49, 72, 75, 90, 93, 93, 94], 8
        ],
        [
            [-70, -32, 62, 0, -10, 92, -94, -86, 52, 6, -26, -92, -10, 70, -82, 28, 86, 58, 86, -58, 84, -80, -18, -92, -34, 6, 34, 36, 70, -50, -6, -54, 84, 22, 30, -96, -84, 72, 2, 26, -20, 4, 48, -98, 62, -28, -68], 36
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21
        ],
        [
            [34, 40, 92, 35, 29, 26, 12, 66, 7, 28, 86, 4, 35, 79, 1, 48, 41, 47, 15, 75, 45, 6, 3, 94, 39, 50, 20, 8, 58, 51, 83, 44, 53, 76, 19, 84, 68, 54, 36, 53], 29
        ],
        [
            [-98, -98, -92, -92, -88, -82, -74, -70, -68, -68, -64, -60, -52, -52, -42, -42, -38, -36, -36, -34, -26, -24, -22, -12, -2, -2, 4, 6, 44, 44, 48, 54, 62, 62, 64, 74, 78, 82, 86, 86, 90, 90, 94], 36
        ],
        [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 1], 5
        ],
        [
            [9, 15, 19, 29, 30, 39, 40, 61], 4
        ],
        [
            [92, 0, 46, 70, -60, -50, 58, -56, 8, -90, 84, 16, 40, -62, 50, 78, 26, -42, -40, 98, -52, 62, 16, -62, -76, -70, -60, 32, 4, -68, 52, -64, 70, 12, -10], 21
        ],
        [
            [0, 0, 0, 1, 1, 1, 1], 5
        ],
        [
            [32, 96, 63, 93, 53, 1, 22, 19, 50, 74, 6, 94, 81, 85, 4, 86, 88, 75, 94], 18
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
