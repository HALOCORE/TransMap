
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 24, ["num", 8], ["num", 11]], ["num", 15]], ["list", 2, ["list", 27, ["num", 0], ["num", -95]], ["num", 15]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 24, [["num", 8], ["num", 11], ["num", 18], ["num", 23], ["num", 24], ["num", 28], ["num", 28], ["num", 34], ["num", 35], ["num", 42], ["num", 44], ["num", 53], ["num", 57], ["num", 65], ["num", 71], ["num", 72], ["num", 76], ["num", 78], ["num", 82], ["num", 82], ["num", 85], ["num", 86], ["num", 92], ["num", 93]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 27, [["num", 0], ["num", -95], ["num", 27], ["num", -2], ["num", -70], ["num", -28], ["num", 3], ["num", -37], ["num", 75], ["num", -74], ["num", 85], ["num", -63], ["num", -93], ["num", -51], ["num", 68], ["num", -8], ["num", 67], ["num", 90], ["num", 3], ["num", -47], ["num", 32], ["num", 8], ["num", 12], ["num", 53], ["num", -93], ["num", 56], ["num", 97]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 44, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 40]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 19, [["num", 28], ["num", 85], ["num", 78], ["num", 33], ["num", 10], ["num", 83], ["num", 30], ["num", 22], ["num", 3], ["num", 82], ["num", 75], ["num", 48], ["num", 2], ["num", 76], ["num", 54], ["num", 6], ["num", 40], ["num", 93], ["num", 94]]], ["num", 10]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 11], ["num", -94], ["num", -7], ["num", -3], ["num", 1], ["num", -98], ["num", 11], ["num", 83], ["num", 88]]], ["num", 7]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0]]], ["num", 35]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 8, [["num", 8], ["num", 35], ["num", 37], ["num", 38], ["num", 39], ["num", 46], ["num", 49], ["num", 54]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 28, [["num", 75], ["num", -66], ["num", 88], ["num", -21], ["num", 27], ["num", -83], ["num", 61], ["num", -60], ["num", 10], ["num", -48], ["num", 18], ["num", -91], ["num", 49], ["num", -4], ["num", 13], ["num", -67], ["num", 86], ["num", -15], ["num", 97], ["num", -90], ["num", -94], ["num", 15], ["num", 21], ["num", 41], ["num", -35], ["num", -80], ["num", -43], ["num", -54]]], ["num", 21]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 10, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1]]], ["num", 5]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 11, [["num", 62], ["num", 36], ["num", 39], ["num", 53], ["num", 90], ["num", 78], ["num", 56], ["num", 1], ["num", 56], ["num", 4], ["num", 30]]], ["num", 8]]]]];
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
            [8, 11, 18, 23, 24, 28, 28, 34, 35, 42, 44, 53, 57, 65, 71, 72, 76, 78, 82, 82, 85, 86, 92, 93], 15
        ],
        [
            [0, -95, -51, -2, -70, -28, 3, -37, 75, -74, 85, -63, -93, 27, 68, -8, 67, 90, 3, -47, 32, 8, 12, 53, -93, 56, 97], 15
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 40
        ],
        [
            [28, 85, 78, 33, 10, 83, 30, 22, 3, 82, 75, 48, 2, 76, 54, 6, 40, 93, 94], 10
        ],
        [
            [-98, -94, -7, -3, 1, 11, 11, 83, 88], 7
        ],
        [
            [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0], 35
        ],
        [
            [8, 35, 37, 38, 39, 46, 49, 54], 6
        ],
        [
            [-60, -66, -4, -21, 27, -83, 61, 75, 10, -48, 18, -91, -67, 88, 13, 49, 86, -15, 97, -90, -94, 15, 21, 41, -35, -80, -43, -54], 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1], 5
        ],
        [
            [62, 36, 39, 53, 90, 78, 56, 1, 56, 4, 30], 8
        ]
    ];
    mylog(0, param);
    for (let i = 0; i < param.length; i++) {
        let parameters_set = param[i];
        let idx = i;
        myexactlog(1, idx);
        f_gold(...parameters_set);
        let result = parameters_set;
        myexactlog(2, result);
    }
}
"-----------------"

//TESTED_PROGRAM

"-----------------"

test()
