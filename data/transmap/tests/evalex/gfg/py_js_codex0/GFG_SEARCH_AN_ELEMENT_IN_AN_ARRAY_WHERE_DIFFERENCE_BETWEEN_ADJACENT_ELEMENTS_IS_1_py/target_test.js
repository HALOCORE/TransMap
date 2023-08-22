
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 12, ["num", 8], ["num", 7]], ["num", 12]], ["list", 3, ["list", 2, ["num", 6], ["num", 90]], ["num", 1]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 4]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["string", 22, "number is not present!"]]]], ["MYLOGEX:2", ["num", -1]]];
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
            [8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3], 12, 3
        ],
        [
            [6, 90], 1, 1
        ],
        [
            [1, 2, 3, 4, 5, 4], 6, 5
        ],
        [
            [97, 35, 60, 96, 3, 67, 72, 95, 55, 9, 69, 28, 15, 91, 31, 59], 15, 9
        ],
        [
            [-84, -78, -74, -70, -68, -60, -56, -54, -48, -46, -28, -16, -6, 0, 0, 8, 8, 8, 12, 16, 26, 30, 32, 34, 36, 40, 46, 48, 70, 70, 72, 76, 78, 78, 80, 84, 84, 86], 22, 31
        ],
        [
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], 5, 7
        ],
        [
            [55, 64, 76, 79, 93, 96], 4, 4
        ],
        [
            [66, -90, 98, -50, 0, 46, 42, 64, -96, -80, -96, 20, -10, -84], 8, 13
        ],
        [
            [0, 0, 0, 0, 0, 0, 1], 6, 5
        ],
        [
            [94, 4, 34, 87, 32, 3, 92, 68, 57, 76, 24, 33, 3, 4, 30, 70, 49, 30, 72, 82, 16, 53, 6, 24, 92, 96, 89, 28, 21, 8, 36, 9, 40, 85, 51, 1, 63, 68, 74, 26, 40, 3, 9, 32, 67, 4, 6, 73], 25, 25
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
