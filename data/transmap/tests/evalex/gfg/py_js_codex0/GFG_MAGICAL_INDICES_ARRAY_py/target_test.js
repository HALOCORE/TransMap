
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 21, ["num", 2], ["num", 6]], ["num", 17]], ["list", 2, ["list", 48, ["num", 14], ["num", 28]], ["num", 41]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 6]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 8]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 6]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 6]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 5]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 29]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            [2, 6, 7, 8, 9, 12, 12, 14, 18, 24, 26, 38, 39, 45, 50, 52, 72, 80, 80, 83, 86], 17
        ],
        [
            [14, 28, -52, 54, -88, -42, -34, -54, -72, 40, 90, 30, -64, -94, 38, 88, -6, -62, 52, 60, -96, -70, 60, -48, -36, 32, 34, -32, 4, -14, 70, 44, -14, -58, -24, -64, -76, -26, -60, 2, 64, -66, -74, 58, 90, -74, -88, 26], 41
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 9
        ],
        [
            [40, 27, 9, 90, 40, 47, 53, 43, 88, 89, 84, 4, 83, 47, 63, 77, 78, 1, 72, 22, 10, 29, 22], 22
        ],
        [
            [-98, -94, -92, -90, -82, -80, -78, -68, -62, -60, -60, -44, -42, -40, -38, -36, -28, -28, -26, -24, -2, 4, 4, 8, 14, 16, 26, 36, 38, 42, 44, 44, 44, 46, 52, 62, 66, 66, 70, 84, 86, 88, 88], 28
        ],
        [
            [1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0], 10
        ],
        [
            [1, 5, 6, 7, 10, 10, 19, 29, 33, 35, 36, 43, 46, 46, 49, 52, 64, 65, 67, 67, 69, 74, 79, 83, 86, 91, 96, 97, 99], 19
        ],
        [
            [28, 72, 68, 78, 6, -22, 36, -60, -50, -80, 44, 74, 52, -34, 76, -24, 82, 82, 72, -36, -38, -72, 14, -74, -98, 12, -88, -60, -14, -20, 24, -58, -70, 84, 94, -72, 96, -92, 42, -22], 31
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 36
        ],
        [
            [87, 60], 1
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
