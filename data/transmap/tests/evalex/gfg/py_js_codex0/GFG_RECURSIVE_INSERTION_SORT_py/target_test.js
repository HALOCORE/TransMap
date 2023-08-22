
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 30, ["num", 4], ["num", 7]], ["num", 27]], ["list", 2, ["list", 3, ["num", -6], ["num", -2]], ["num", 1]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 30, [["num", 4], ["num", 7], ["num", 8], ["num", 14], ["num", 25], ["num", 25], ["num", 25], ["num", 30], ["num", 31], ["num", 36], ["num", 36], ["num", 37], ["num", 42], ["num", 44], ["num", 45], ["num", 45], ["num", 47], ["num", 50], ["num", 50], ["num", 54], ["num", 60], ["num", 60], ["num", 61], ["num", 67], ["num", 68], ["num", 69], ["num", 79], ["num", 80], ["num", 82], ["num", 96]]], ["num", 27]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 3, [["num", -6], ["num", -2], ["num", -94]]], ["num", 1]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 29, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 27]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 30, [["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 7], ["num", 14], ["num", 23], ["num", 25], ["num", 27], ["num", 28], ["num", 29], ["num", 32], ["num", 39], ["num", 56], ["num", 57], ["num", 58], ["num", 60], ["num", 63], ["num", 64], ["num", 68], ["num", 72], ["num", 76], ["num", 76], ["num", 86], ["num", 87], ["num", 91], ["num", 20], ["num", 64], ["num", 43], ["num", 30]]], ["num", 26]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 29, [["num", -98], ["num", -80], ["num", -64], ["num", -60], ["num", -58], ["num", -54], ["num", -46], ["num", -44], ["num", -38], ["num", -30], ["num", -26], ["num", -20], ["num", -14], ["num", -14], ["num", -12], ["num", -8], ["num", -8], ["num", 16], ["num", 18], ["num", 18], ["num", 24], ["num", 26], ["num", 26], ["num", 34], ["num", 46], ["num", 70], ["num", 76], ["num", 82], ["num", 98]]], ["num", 27]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 12, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 10]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 34, [["num", 3], ["num", 4], ["num", 4], ["num", 5], ["num", 7], ["num", 13], ["num", 21], ["num", 21], ["num", 21], ["num", 22], ["num", 24], ["num", 25], ["num", 25], ["num", 34], ["num", 34], ["num", 40], ["num", 40], ["num", 45], ["num", 48], ["num", 50], ["num", 51], ["num", 60], ["num", 61], ["num", 64], ["num", 68], ["num", 73], ["num", 74], ["num", 77], ["num", 79], ["num", 80], ["num", 85], ["num", 90], ["num", 91], ["num", 93]]], ["num", 17]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 47, [["num", -98], ["num", -92], ["num", -92], ["num", -88], ["num", -82], ["num", -82], ["num", -70], ["num", -66], ["num", -64], ["num", -64], ["num", -58], ["num", -56], ["num", -54], ["num", -50], ["num", -50], ["num", -48], ["num", -48], ["num", -32], ["num", -30], ["num", -24], ["num", -22], ["num", -20], ["num", -18], ["num", -8], ["num", -8], ["num", -8], ["num", -2], ["num", -2], ["num", 2], ["num", 20], ["num", 32], ["num", 34], ["num", 38], ["num", 44], ["num", 46], ["num", 46], ["num", 46], ["num", 48], ["num", 60], ["num", 68], ["num", 78], ["num", 80], ["num", 88], ["num", 92], ["num", 96], ["num", 18], ["num", 50]]], ["num", 45]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 34, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 21]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 5, [["num", 18], ["num", 53], ["num", 73], ["num", 19], ["num", 63]]], ["num", 3]]]]];
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
            [4, 7, 8, 14, 25, 25, 25, 30, 31, 36, 36, 37, 42, 44, 45, 45, 47, 50, 50, 54, 60, 60, 61, 67, 68, 69, 79, 80, 82, 96], 27
        ],
        [
            [-6, -2, -94], 1
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 27
        ],
        [
            [76, 39, 64, 57, 63, 7, 86, 72, 87, 23, 76, 6, 58, 14, 28, 5, 68, 56, 25, 27, 60, 4, 29, 91, 7, 32, 20, 64, 43, 30], 26
        ],
        [
            [-98, -80, -64, -60, -58, -54, -46, -44, -38, -30, -26, -20, -14, -14, -12, -8, -8, 16, 18, 18, 24, 26, 26, 34, 46, 70, 76, 82, 98], 27
        ],
        [
            [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1], 10
        ],
        [
            [3, 4, 4, 5, 7, 13, 21, 21, 21, 22, 24, 25, 25, 34, 34, 40, 40, 45, 48, 50, 51, 60, 61, 64, 68, 73, 74, 77, 79, 80, 85, 90, 91, 93], 17
        ],
        [
            [46, -22, -48, -64, 44, -70, -8, -56, -24, -8, -92, -58, 60, -8, 78, -54, -66, 92, 32, -98, 46, 80, -2, -30, 20, -88, -18, 46, 68, -2, -48, -32, 48, 88, -92, 96, -82, 38, -82, -50, -20, 34, -50, 2, -64, 18, 50], 45
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 21
        ],
        [
            [73, 53, 18, 19, 63], 3
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
