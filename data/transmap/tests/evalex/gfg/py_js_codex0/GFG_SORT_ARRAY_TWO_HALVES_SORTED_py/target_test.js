
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 41, ["num", 2], ["num", 3]], ["num", 33]], ["list", 2, ["list", 44, ["num", -78], ["num", 81]], ["num", 31]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 41, [["num", 2], ["num", 3], ["num", 11], ["num", 13], ["num", 18], ["num", 24], ["num", 26], ["num", 30], ["num", 31], ["num", 34], ["num", 42], ["num", 43], ["num", 43], ["num", 44], ["num", 44], ["num", 47], ["num", 49], ["num", 52], ["num", 53], ["num", 55], ["num", 56], ["num", 57], ["num", 58], ["num", 58], ["num", 60], ["num", 64], ["num", 66], ["num", 67], ["num", 69], ["num", 70], ["num", 70], ["num", 71], ["num", 74], ["num", 76], ["num", 77], ["num", 82], ["num", 85], ["num", 89], ["num", 90], ["num", 96], ["num", 98]]], ["num", 33]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 44, [["num", -95], ["num", -92], ["num", -88], ["num", -84], ["num", -81], ["num", -80], ["num", -78], ["num", -77], ["num", -75], ["num", -74], ["num", -74], ["num", -73], ["num", -70], ["num", -67], ["num", -60], ["num", -43], ["num", -28], ["num", -28], ["num", -27], ["num", -25], ["num", -17], ["num", -4], ["num", -3], ["num", -2], ["num", 11], ["num", 11], ["num", 14], ["num", 15], ["num", 24], ["num", 25], ["num", 28], ["num", 28], ["num", 33], ["num", 35], ["num", 55], ["num", 57], ["num", 67], ["num", 69], ["num", 70], ["num", 78], ["num", 81], ["num", 87], ["num", 88], ["num", 90]]], ["num", 31]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 28, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 49, [["num", 2], ["num", 3], ["num", 6], ["num", 6], ["num", 9], ["num", 10], ["num", 12], ["num", 13], ["num", 13], ["num", 14], ["num", 17], ["num", 18], ["num", 22], ["num", 22], ["num", 23], ["num", 25], ["num", 26], ["num", 27], ["num", 29], ["num", 34], ["num", 35], ["num", 38], ["num", 39], ["num", 41], ["num", 46], ["num", 48], ["num", 50], ["num", 50], ["num", 51], ["num", 51], ["num", 52], ["num", 55], ["num", 58], ["num", 58], ["num", 59], ["num", 62], ["num", 70], ["num", 70], ["num", 71], ["num", 72], ["num", 74], ["num", 78], ["num", 79], ["num", 85], ["num", 88], ["num", 89], ["num", 92], ["num", 98], ["num", 99]]], ["num", 46]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 48, [["num", -98], ["num", -88], ["num", -76], ["num", -71], ["num", -71], ["num", -63], ["num", -59], ["num", -58], ["num", -57], ["num", -42], ["num", -40], ["num", -37], ["num", -36], ["num", -34], ["num", -33], ["num", -33], ["num", -27], ["num", -26], ["num", -23], ["num", -9], ["num", -8], ["num", -6], ["num", -5], ["num", -1], ["num", 0], ["num", 3], ["num", 16], ["num", 21], ["num", 29], ["num", 30], ["num", 33], ["num", 39], ["num", 39], ["num", 43], ["num", 47], ["num", 50], ["num", 52], ["num", 60], ["num", 63], ["num", 66], ["num", 73], ["num", 74], ["num", 76], ["num", 77], ["num", 92], ["num", 92], ["num", 96], ["num", 97]]], ["num", 42]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 31]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 2, [["num", 46], ["num", 86]]], ["num", 1]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 23, [["num", -89], ["num", -89], ["num", -69], ["num", -31], ["num", -31], ["num", -15], ["num", -13], ["num", -9], ["num", -6], ["num", -1], ["num", 5], ["num", 15], ["num", 21], ["num", 30], ["num", 37], ["num", 58], ["num", 59], ["num", 61], ["num", 65], ["num", 67], ["num", 74], ["num", 88], ["num", 94]]], ["num", 21]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 35, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 19]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 12, [["num", 3], ["num", 5], ["num", 22], ["num", 31], ["num", 47], ["num", 53], ["num", 54], ["num", 57], ["num", 77], ["num", 84], ["num", 94], ["num", 98]]], ["num", 10]]]]];
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
            [2, 3, 11, 13, 18, 24, 26, 30, 31, 34, 42, 43, 43, 44, 44, 47, 49, 52, 53, 55, 56, 57, 58, 58, 60, 64, 66, 67, 69, 70, 70, 71, 74, 76, 77, 82, 85, 89, 90, 96, 98], 33
        ],
        [
            [-78, 81, 87, 14, 25, 24, -70, -92, -2, -43, 11, -27, 15, -80, -75, -81, -95, -25, 28, -28, 55, -60, -74, -73, 90, -17, 28, 78, 70, 57, 67, 88, 69, -67, -3, 11, -84, -77, 35, -74, -4, -88, -28, 33], 31
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15
        ],
        [
            [6, 46, 50, 38, 88, 18, 27, 41, 72, 92, 74, 17, 62, 29, 58, 70, 78, 22, 6, 26, 39, 12, 99, 14, 22, 51, 23, 48, 71, 50, 89, 13, 85, 10, 55, 9, 79, 52, 2, 25, 13, 98, 51, 58, 34, 35, 3, 59, 70], 46
        ],
        [
            [-98, -88, -76, -71, -71, -63, -59, -58, -57, -42, -40, -37, -36, -34, -33, -33, -27, -26, -23, -9, -8, -6, -5, -1, 0, 3, 16, 21, 29, 30, 33, 39, 39, 43, 47, 50, 52, 60, 63, 66, 73, 74, 76, 77, 92, 92, 96, 97], 42
        ],
        [
            [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0], 31
        ],
        [
            [46, 86], 1
        ],
        [
            [58, -31, 37, -15, -89, -31, -1, -9, 94, 59, 61, 67, -6, 74, 65, 15, 88, -69, -89, -13, 21, 30, 5], 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19
        ],
        [
            [94, 5, 98, 22, 77, 57, 47, 54, 3, 53, 84, 31], 10
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
