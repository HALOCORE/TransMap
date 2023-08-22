
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 41, ["num", 3], ["num", 4]], ["num", 27]], ["list", 2, ["list", 28, ["num", 40], ["num", -6]], ["num", 21]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 15]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 2]]];
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
            [3, 4, 4, 7, 8, 19, 21, 22, 25, 27, 28, 29, 38, 40, 41, 42, 43, 46, 50, 50, 53, 53, 54, 55, 60, 64, 64, 69, 70, 75, 77, 81, 81, 82, 86, 87, 87, 88, 91, 94, 97], 27
        ],
        [
            [40, -6, 50, -18, 42, 78, 38, -90, -44, -42, -86, 78, -68, 2, -32, -20, -44, 54, 80, 54, 70, 26, 82, -14, -74, -20, 74, 82], 21
        ],
        [
            [0, 0, 0, 0, 1, 1, 1], 5
        ],
        [
            [76, 80], 1
        ],
        [
            [-92, -90, -88, -76, -76, -60, -46, -40, -24, -8, -8, -6, 2, 12, 36, 38, 58, 76, 80], 13
        ],
        [
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1], 15
        ],
        [
            [5, 8, 11, 27, 27, 32, 32, 37, 50, 51, 55, 61, 62, 68, 73, 83], 8
        ],
        [
            [52, -74, -32, -64, -52, -60, -70, 36, 70, 40, 40, -18, 90, -70, -82, -64, -8, -6, 36, 4, -58, 62, -96, 78, 36, 90, -70, -6, -84, 24, 84, 32, -90, 36, 70, -60, -56, 78, 48, 34, -16, 80, 82, 58, 14, -6, -8, 76], 29
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 27
        ],
        [
            [11, 21, 76, 45, 8, 49, 97, 66, 17, 11, 87, 4, 34, 89, 79, 88, 6, 91, 19, 56, 91, 25, 17, 90, 26, 59, 34, 32, 43, 17, 98, 39, 72, 78, 93, 43], 26
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
