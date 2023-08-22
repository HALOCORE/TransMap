
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 30, ["num", 3], ["num", 3]], ["num", 19]], ["list", 2, ["list", 11, ["num", 66], ["num", -28]], ["num", 8]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 30, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 19], ["num", 53], ["num", 59], ["num", 64], ["num", 69], ["num", 69], ["num", 70], ["num", 71], ["num", 72], ["num", 84], ["num", 93], ["num", 96]]], ["num", 19]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 11, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", -90], ["num", 40], ["num", -62]]], ["num", 8]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 46, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 19], ["num", 20], ["num", 21], ["num", 22], ["num", 23], ["num", 24], ["num", 25], ["num", 26], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 26]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 10, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 86]]], ["num", 9]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 44, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 19], ["num", 20], ["num", 21], ["num", 22], ["num", 23], ["num", 24], ["num", 25], ["num", 26], ["num", 27], ["num", 28], ["num", 29], ["num", 30], ["num", 31], ["num", 35], ["num", 37], ["num", 45], ["num", 49], ["num", 52], ["num", 54], ["num", 66], ["num", 67], ["num", 80], ["num", 84], ["num", 87], ["num", 89], ["num", 90]]], ["num", 31]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 32, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 19], ["num", 20], ["num", 21], ["num", 22], ["num", 23], ["num", 24], ["num", 25], ["num", 26], ["num", 27], ["num", 28], ["num", 29], ["num", 1], ["num", 1], ["num", 1]]], ["num", 29]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 24, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 19], ["num", 20], ["num", 21], ["num", 89], ["num", 90], ["num", 94]]], ["num", 21]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 23, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 58], ["num", 82], ["num", -87], ["num", -17], ["num", -71], ["num", -97], ["num", -10], ["num", 4], ["num", 23], ["num", 86], ["num", -24]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 11, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 26, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 15], ["num", 7], ["num", 40], ["num", 28], ["num", 32], ["num", 99], ["num", 15], ["num", 85]]], ["num", 18]]]]];
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
            [3, 3, 6, 7, 9, 11, 15, 15, 17, 19, 21, 23, 26, 27, 37, 48, 48, 51, 53, 53, 59, 64, 69, 69, 70, 71, 72, 84, 93, 96], 19
        ],
        [
            [66, -28, 6, 25, -65, 19, -86, -86, -90, 40, -62], 8
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 26
        ],
        [
            [85, 84, 8, 36, 93, 76, 14, 54, 85, 86], 9
        ],
        [
            [-90, -82, -80, -73, -67, -62, -62, -61, -58, -56, -56, -52, -50, -49, -49, -43, -43, -30, -26, -26, -15, -14, -13, -4, 10, 19, 20, 22, 26, 29, 34, 35, 37, 45, 49, 52, 54, 66, 67, 80, 84, 87, 89, 90], 31
        ],
        [
            [1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1], 29
        ],
        [
            [10, 11, 13, 19, 19, 30, 33, 36, 40, 42, 44, 47, 49, 52, 53, 58, 66, 68, 72, 82, 87, 89, 90, 94], 21
        ],
        [
            [-46, -35, 40, -76, -66, -47, 36, -82, -43, 12, -95, 54, 58, 82, -87, -17, -71, -97, -10, 4, 23, 86, -24], 12
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 6
        ],
        [
            [88, 76, 16, 23, 40, 60, 73, 32, 15, 13, 5, 75, 74, 52, 77, 41, 53, 50, 15, 7, 40, 28, 32, 99, 15, 85], 18
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
