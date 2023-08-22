
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 6, ["num", 5], ["num", 4]], ["num", 6]], ["list", 2, ["list", 6, ["num", 83], ["num", 78]], ["num", 6]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", true]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["bool", false]]];
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
            [5, 4, 2, 3, 1, 6], 6
        ],
        [
            [83, 78, 80, 81, 79, 82], 6
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 28
        ],
        [
            [0], 1
        ],
        [
            [-98, -90, -84, -80, -66, -56, -56, -50, -48, -44, -36, -22, -18, -10, -4, -2, 6, 6, 8, 24, 36, 36, 54, 62, 64, 64, 66, 68, 72, 84, 86, 92], 0
        ],
        [
            [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1], 24
        ],
        [
            [2, 18, 21, 22, 27, 34, 52, 63, 75, 85, 85], 9
        ],
        [
            [24, -70, 88, 76, -78, 44, 40, -92, -44, 16, -20, -40, 60, -64, 74, 78, -10, -86, -26, -66, 66, 82, 44, 62, -40, 0, -98], 22
        ],
        [
            [0, 1, 1], 1
        ],
        [
            [81, 7, 2, 33, 45, 57, 33, 24, 26, 86, 35, 73, 40, 17, 37, 6, 80, 53, 33, 56, 97, 77, 93, 71, 87, 13, 56, 23, 63, 91, 21, 6, 53, 77, 36, 31, 63, 88, 51, 45, 51, 17], 31
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
