
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 22, ["num", 5], ["num", 6]], ["num", 18]], ["list", 2, ["list", 16, ["num", -87], ["num", 14]], ["num", 14]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 22, [["num", 6], ["num", 8], ["num", 15], ["num", 42], ["num", 47], ["num", 49], ["num", 52], ["num", 53], ["num", 54], ["num", 55], ["num", 58], ["num", 58], ["num", 60], ["num", 60], ["num", 68], ["num", 70], ["num", 86], ["num", 5], ["num", 94], ["num", 96], ["num", 97], ["num", 99]]], ["num", 18]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 16, [["num", 14], ["num", 24], ["num", 6], ["num", 58], ["num", 47], ["num", 45], ["num", 20], ["num", -37], ["num", -81], ["num", -8], ["num", -42], ["num", 83], ["num", -10], ["num", -87], ["num", 17], ["num", -38]]], ["num", 14]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 4]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 1], ["num", 61], ["num", 64], ["num", 63], ["num", 69], ["num", 22], ["num", 93], ["num", 67], ["num", 76], ["num", 26], ["num", 16], ["num", 51], ["num", 86], ["num", 57], ["num", 29], ["num", 78], ["num", 92], ["num", 69], ["num", 47], ["num", 16], ["num", 94], ["num", 62], ["num", 69], ["num", 76], ["num", 16], ["num", 90], ["num", 90], ["num", 48], ["num", 85], ["num", 39], ["num", 33], ["num", 94], ["num", 23], ["num", 10], ["num", 69], ["num", 34], ["num", 52], ["num", 95], ["num", 10], ["num", 19]]], ["num", 20]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 5, [["num", -96], ["num", -98], ["num", -84], ["num", -76], ["num", -20]]], ["num", 2]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 28, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 35, [["num", 8], ["num", 10], ["num", 12], ["num", 21], ["num", 23], ["num", 24], ["num", 24], ["num", 26], ["num", 29], ["num", 34], ["num", 36], ["num", 36], ["num", 36], ["num", 37], ["num", 49], ["num", 55], ["num", 58], ["num", 62], ["num", 64], ["num", 68], ["num", 73], ["num", 74], ["num", 75], ["num", 81], ["num", 82], ["num", 87], ["num", 89], ["num", 90], ["num", 7], ["num", 90], ["num", 93], ["num", 96], ["num", 96], ["num", 99], ["num", 99]]], ["num", 29]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 23, [["num", 5], ["num", -70], ["num", -83], ["num", 13], ["num", -38], ["num", -16], ["num", 12], ["num", -14], ["num", 41], ["num", 87], ["num", -81], ["num", 77], ["num", -1], ["num", 0], ["num", 40], ["num", 89], ["num", 47], ["num", -24], ["num", -91], ["num", 99], ["num", -72], ["num", 28], ["num", -48]]], ["num", 13]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 47, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 24]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 5, [["num", 37], ["num", 29], ["num", 38], ["num", 83], ["num", 8]]], ["num", 2]]]]];
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
            [5, 6, 8, 15, 42, 47, 49, 52, 53, 54, 55, 58, 58, 60, 60, 68, 70, 86, 94, 96, 97, 99], 18
        ],
        [
            [-87, 14, 24, 6, 58, 47, 45, 20, -37, -81, -8, -42, 83, -10, 17, -38], 14
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 1], 4
        ],
        [
            [1, 16, 61, 64, 63, 69, 22, 93, 67, 76, 26, 16, 51, 86, 57, 29, 78, 92, 69, 47, 94, 62, 69, 76, 16, 90, 90, 48, 85, 39, 33, 94, 23, 10, 69, 34, 52, 95, 10, 19], 20
        ],
        [
            [-98, -96, -84, -76, -20], 2
        ],
        [
            [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1], 15
        ],
        [
            [7, 8, 10, 12, 21, 23, 24, 24, 26, 29, 34, 36, 36, 36, 37, 49, 55, 58, 62, 64, 68, 73, 74, 75, 81, 82, 87, 89, 90, 90, 93, 96, 96, 99, 99], 29
        ],
        [
            [-1, 5, -70, -83, 13, -38, -16, 12, -14, 41, 87, -81, 77, 0, 40, 89, 47, -24, -91, 99, -72, 28, -48], 13
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24
        ],
        [
            [29, 37, 38, 83, 8], 2
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
