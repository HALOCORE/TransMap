
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 16, ["num", 2], ["num", 5]], ["num", 16]], ["list", 2, ["list", 4, ["num", 70], ["num", 50]], ["num", 4]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 16, [["num", 2], ["num", 5], ["num", 12], ["num", 13], ["num", 15], ["num", 16], ["num", 31], ["num", 34], ["num", 42], ["num", 42], ["num", 43], ["num", 44], ["num", 48], ["num", 52], ["num", 54], ["num", 56]]], ["num", 16]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 4, [["num", 70], ["num", 50], ["num", 10], ["num", 52]]], ["num", 4]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 15, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 12], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", -30], ["num", -10], ["num", -5]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 17, [["num", 51], ["num", 16], ["num", 1], ["num", 47], ["num", 67], ["num", 3], ["num", 97], ["num", 16], ["num", 2], ["num", 30], ["num", 1], ["num", 1], ["num", 25], ["num", 96], ["num", 13], ["num", 64], ["num", 73]]], ["num", 17]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 3, [["num", 62], ["num", -78], ["num", -10]]], ["num", 3]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 12, [["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 24, [["num", 4], ["num", 11], ["num", 18], ["num", 19], ["num", 24], ["num", 28], ["num", 30], ["num", 31], ["num", 36], ["num", 38], ["num", 44], ["num", 49], ["num", 50], ["num", 51], ["num", 63], ["num", 63], ["num", 68], ["num", 69], ["num", 70], ["num", 77], ["num", 78], ["num", 88], ["num", 92], ["num", 92]]], ["num", 21]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 22, [["num", 8], ["num", 0], ["num", 52], ["num", 60], ["num", 56], ["num", 6], ["num", 52], ["num", 88], ["num", -72], ["num", -86], ["num", -82], ["num", -90], ["num", -94], ["num", -82], ["num", -62], ["num", -8], ["num", -6], ["num", -6], ["num", -94], ["num", -20], ["num", -78], ["num", -58]]], ["num", 22]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 12, [["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", -4], ["num", -1], ["num", -3]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 19, [["num", 69], ["num", 45], ["num", 44], ["num", 19], ["num", 56], ["num", 22], ["num", 7], ["num", 31], ["num", 19], ["num", 33], ["num", 71], ["num", 84], ["num", 55], ["num", 62], ["num", 6], ["num", 84], ["num", 36], ["num", 7], ["num", 40]]], ["num", 15]]]]];
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
            [2, 5, 12, 13, 15, 16, 31, 34, 42, 42, 43, 44, 48, 52, 54, 56], 16
        ],
        [
            [70, 50, 10, 52], 4
        ],
        [
            [0, 0, -30, 0, 0, -10, 0, 0, 0, 12, 0, 0, 0, -5, 1], 15
        ],
        [
            [51, 16, 1, 47, 67, 3, 97, 16, 2, 30, 1, 1, 25, 96, 13, 64, 73], 17
        ],
        [
            [-78, -10, 62], 3
        ],
        [
            [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1], 12
        ],
        [
            [4, 11, 18, 19, 24, 28, 30, 31, 36, 38, 44, 49, 50, 51, 63, 63, 68, 69, 70, 77, 78, 88, 92, 92], 21
        ],
        [
            [-72, 8, -86, -82, -90, 0, -94, -82, -62, -8, 52, -6, -6, 60, -94, 56, -20, -78, -58, 6, 52, 88], 22
        ],
        [
            [1, 1, -4, 0, -1, 1, 0, 1, 0, 1, -3, 1], 12
        ],
        [
            [69, 45, 44, 19, 56, 22, 7, 31, 19, 33, 71, 84, 55, 62, 6, 84, 36, 7, 40], 15
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
