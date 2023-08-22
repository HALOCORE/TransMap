
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 48, ["num", 3], ["num", 4]], ["num", 40]], ["list", 2, ["list", 36, ["num", 45], ["num", 42]], ["num", 23]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 48, [["num", 75], ["num", 3], ["num", 74], ["num", 4], ["num", 73], ["num", 5], ["num", 72], ["num", 6], ["num", 71], ["num", 7], ["num", 70], ["num", 8], ["num", 69], ["num", 9], ["num", 68], ["num", 10], ["num", 67], ["num", 11], ["num", 66], ["num", 12], ["num", 65], ["num", 13], ["num", 64], ["num", 14], ["num", 63], ["num", 15], ["num", 62], ["num", 16], ["num", 61], ["num", 17], ["num", 60], ["num", 18], ["num", 59], ["num", 19], ["num", 58], ["num", 20], ["num", 57], ["num", 21], ["num", 56], ["num", 22], ["num", 75], ["num", 80], ["num", 82], ["num", 86], ["num", 92], ["num", 95], ["num", 96], ["num", 99]]], ["num", 40]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 36, [["num", 72], ["num", 45], ["num", 71], ["num", 46], ["num", 70], ["num", 47], ["num", 69], ["num", 48], ["num", 68], ["num", 49], ["num", 67], ["num", 50], ["num", 66], ["num", 51], ["num", 65], ["num", 52], ["num", 64], ["num", 53], ["num", 63], ["num", 54], ["num", 62], ["num", 55], ["num", 61], ["num", -52], ["num", -9], ["num", 80], ["num", -16], ["num", -32], ["num", 39], ["num", 25], ["num", -27], ["num", -96], ["num", -24], ["num", -27], ["num", -23], ["num", -52]]], ["num", 23]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 42, [["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", -1], ["num", 2], ["num", -2], ["num", 3], ["num", -3], ["num", 4], ["num", -4], ["num", 5], ["num", -5], ["num", 6], ["num", -6], ["num", 7], ["num", -7], ["num", 8], ["num", -8], ["num", 9], ["num", -9], ["num", 10], ["num", -10], ["num", 11], ["num", -11], ["num", 12], ["num", -12], ["num", 13], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 28]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 3, [["num", 84], ["num", 12], ["num", 16]]], ["num", 2]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 16, [["num", -6], ["num", -85], ["num", -7], ["num", -84], ["num", -8], ["num", -83], ["num", -9], ["num", -82], ["num", -10], ["num", -81], ["num", -11], ["num", -80], ["num", -12], ["num", 77], ["num", 87], ["num", 90]]], ["num", 13]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 15, [["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", -1], ["num", 2], ["num", -2], ["num", 3], ["num", -3], ["num", 4], ["num", -4], ["num", 5], ["num", 0], ["num", 0], ["num", 0]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", 54], ["num", 5], ["num", 53], ["num", 6], ["num", 52], ["num", 7], ["num", 51], ["num", 8], ["num", 50], ["num", 9], ["num", 49], ["num", 10], ["num", 55], ["num", 57], ["num", 57], ["num", 61], ["num", 61], ["num", 66], ["num", 72], ["num", 73], ["num", 83], ["num", 87], ["num", 88], ["num", 89], ["num", 98]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 22, [["num", -43], ["num", 31], ["num", -44], ["num", 32], ["num", -45], ["num", 33], ["num", -46], ["num", 34], ["num", -47], ["num", 35], ["num", -48], ["num", 36], ["num", -49], ["num", -73], ["num", 13], ["num", 33], ["num", -29], ["num", -17], ["num", -43], ["num", 20], ["num", -7], ["num", -85]]], ["num", 13]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 47, [["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", -1], ["num", 2], ["num", -2], ["num", 3], ["num", -3], ["num", 4], ["num", -4], ["num", 5], ["num", -5], ["num", 6], ["num", -6], ["num", 7], ["num", -7], ["num", 8], ["num", -8], ["num", 9], ["num", -9], ["num", 10], ["num", -10], ["num", 11], ["num", -11], ["num", 12], ["num", -12], ["num", 13], ["num", -13], ["num", 14], ["num", -14], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 31]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 10, [["num", 25], ["num", 20], ["num", 24], ["num", 21], ["num", 23], ["num", 22], ["num", 22], ["num", 23], ["num", 21], ["num", 12]]], ["num", 9]]]]];
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
            [3, 4, 8, 10, 12, 14, 14, 17, 18, 19, 20, 25, 28, 29, 30, 31, 34, 35, 37, 38, 40, 41, 42, 45, 47, 49, 54, 54, 55, 58, 58, 63, 65, 66, 66, 67, 67, 72, 74, 75, 75, 80, 82, 86, 92, 95, 96, 99], 40
        ],
        [
            [45, 42, -91, 90, -6, 49, 65, 39, -80, -65, -47, 75, 10, 80, 36, -96, 55, 72, 68, 2, -53, -6, 72, -52, -9, 80, -16, -32, 39, 25, -27, -96, -24, -27, -23, -52], 23
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 28
        ],
        [
            [12, 84, 16], 2
        ],
        [
            [-85, -77, -70, -67, -55, -51, -49, -41, -37, -24, -18, -8, -6, 77, 87, 90], 13
        ],
        [
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0], 12
        ],
        [
            [5, 8, 15, 16, 20, 22, 25, 33, 46, 48, 52, 54, 55, 57, 57, 61, 61, 66, 72, 73, 83, 87, 88, 89, 98], 12
        ],
        [
            [31, 2, -46, -86, -64, 5, -18, -33, -90, -51, 11, -35, -43, -73, 13, 33, -29, -17, -43, 20, -7, -85], 13
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 31
        ],
        [
            [20, 75, 12, 62, 18, 94, 63, 84, 25, 12], 9
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
