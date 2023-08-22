
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 1, ["num", 4], "EMPTY"], ["num", 0]], ["list", 2, ["list", 11, ["num", 8], ["num", -74]], ["num", 8]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 1, [["num", 4]]], ["num", 0]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 11, [["num", 89], ["num", -74], ["num", 65], ["num", 51], ["num", 51], ["num", 8], ["num", -15], ["num", -23], ["num", 44], ["num", 68], ["num", 89]]], ["num", 8]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 28]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 8, [["num", 51], ["num", 43], ["num", 15], ["num", 15], ["num", -5], ["num", 38], ["num", 74], ["num", 93]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 10, [["num", -96], ["num", -64], ["num", -20], ["num", -2], ["num", 1], ["num", -5], ["num", 40], ["num", 46], ["num", 64], ["num", 75]]], ["num", 7]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1]]], ["num", 5]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 41, [["num", 87], ["num", 79], ["num", 73], ["num", 71], ["num", 69], ["num", 59], ["num", 49], ["num", 49], ["num", 49], ["num", 45], ["num", 41], ["num", 39], ["num", 39], ["num", 35], ["num", 23], ["num", 17], ["num", 1], ["num", 2], ["num", 4], ["num", 4], ["num", 22], ["num", 28], ["num", 38], ["num", 42], ["num", 42], ["num", 46], ["num", 50], ["num", 62], ["num", 68], ["num", 76], ["num", 78], ["num", 80], ["num", 88], ["num", 88], ["num", 90], ["num", 90], ["num", 91], ["num", 93], ["num", 95], ["num", 96], ["num", 98]]], ["num", 34]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 31, [["num", 95], ["num", 85], ["num", 83], ["num", 77], ["num", -56], ["num", -52], ["num", 45], ["num", -44], ["num", 43], ["num", -24], ["num", -20], ["num", -14], ["num", 13], ["num", 11], ["num", 11], ["num", 5], ["num", -2], ["num", 14], ["num", 24], ["num", 24], ["num", -49], ["num", -51], ["num", -57], ["num", 58], ["num", 59], ["num", 64], ["num", 68], ["num", 73], ["num", 92], ["num", 96], ["num", 96]]], ["num", 24]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 23, [["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 14]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 19, [["num", 77], ["num", 69], ["num", 55], ["num", 41], ["num", 7], ["num", 10], ["num", 10], ["num", 10], ["num", 34], ["num", 42], ["num", 44], ["num", 44], ["num", -51], ["num", 60], ["num", 66], ["num", 68], ["num", 69], ["num", 91], ["num", 96]]], ["num", 13]]]]];
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
            [4], 0
        ],
        [
            [8, -74, 89, 65, 51, -15, 68, 51, 23, 44, 89], 8
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 28
        ],
        [
            [51, 74, 43, 15, 38, 15, 5, 93], 6
        ],
        [
            [-96, -75, -64, -20, -5, -2, 1, 40, 46, 64], 7
        ],
        [
            [0, 0, 1, 0, 0, 1, 0, 0, 0], 5
        ],
        [
            [1, 2, 4, 4, 17, 22, 23, 28, 35, 38, 39, 39, 41, 42, 42, 45, 46, 49, 49, 49, 50, 59, 62, 68, 69, 71, 73, 76, 78, 79, 80, 87, 88, 88, 90, 90, 91, 93, 95, 96, 98], 34
        ],
        [
            [11, 68, -52, -49, -57, -2, 83, 77, 24, -20, 85, 11, 43, -73, 96, 92, 58, 64, 95, 13, -14, 14, 24, -51, -24, -45, -44, 96, -5, -56, 59], 24
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [44, 7, 44, 68, 34, 66, 69, 55, 10, 96, 42, 41, 77, 69, 10, 10, 91, 60, 51], 13
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
