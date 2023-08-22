
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 6, ["num", 2], ["num", 11]], ["num", 6]], ["list", 2, ["list", 6, ["num", 2], ["num", 4]], ["num", 6]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 4], ["string", 3, "and"], ["num", 11]]]], ["MYLOGEX:2", ["none"]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 1], ["string", 3, "and"], ["num", 0]]]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 1], ["string", 3, "and"], ["num", 0]]]], ["MYLOGEX:2", ["none"]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["none"]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["none"]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 0], ["string", 3, "and"], ["num", 0]]]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 0], ["string", 3, "and"], ["num", 0]]]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 0], ["string", 3, "and"], ["num", 0]]]], ["MYLOGEX:-1", ["list", 4, [["string", 17, "Pair elements are"], ["num", 0], ["string", 3, "and"], ["num", 0]]]], ["MYLOGEX:2", ["none"]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["none"]]];
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
            [2, 11, 5, 1, 4, 7], 6
        ],
        [
            [2, 4, 2, 1, 11, 15], 6
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13
        ],
        [
            [69, 6, 24, 30, 75, 37, 61, 76, 19, 18, 90, 9, 49, 24, 58, 97, 18, 85, 24, 93, 71, 98, 92, 59, 75, 75, 75, 70, 35, 58, 50, 1, 64, 66, 33], 18
        ],
        [
            [-94, -94, -92, -74, -60, -58, -56, -44, -42, -40, -28, -14, 2, 4, 14, 20, 24, 28, 40, 42, 42, 66, 78, 78, 80, 82, 96], 26
        ],
        [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1], 10
        ],
        [
            [21, 26, 26, 27, 61, 62, 96], 6
        ],
        [
            [-54, 86, 20, 26], 3
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4
        ],
        [
            [44, 35, 26, 15, 56, 6, 36, 53, 15, 66, 20, 53, 99, 96, 51, 12, 61, 19, 79, 40, 99, 42, 86, 8, 11, 54, 93, 46, 23, 47, 41, 26, 66, 5, 86, 52, 64, 51, 4, 21, 63, 14, 7, 53, 31, 8, 9, 63], 31
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
