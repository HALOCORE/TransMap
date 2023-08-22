
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 1, ["num", 75], "EMPTY"], ["num", 0]], ["list", 3, ["list", 30, ["num", -58], ["num", -60]], ["num", 27]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 3, [["list", 1, [["num", 75]]], ["num", 0], ["num", 0]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 3, [["list", 30, [["num", 12], ["num", -58], ["num", 90], ["num", -30], ["num", 10], ["num", -88], ["num", 2], ["num", -14], ["num", 82], ["num", -82], ["num", -58], ["num", -60], ["num", -38], ["num", 48], ["num", -2], ["num", 32], ["num", -48], ["num", -46], ["num", 90], ["num", -54], ["num", -18], ["num", 28], ["num", 72], ["num", 86], ["num", 0], ["num", -2], ["num", -74], ["num", -46], ["num", 2], ["num", -74]]], ["num", 27], ["num", 17]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 3, [["list", 11, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 7], ["num", 7]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 3, [["list", 32, [["num", 51], ["num", 26], ["num", 36], ["num", 10], ["num", 62], ["num", 62], ["num", 56], ["num", 61], ["num", 67], ["num", 86], ["num", 97], ["num", 31], ["num", 93], ["num", 32], ["num", 1], ["num", 14], ["num", 25], ["num", 24], ["num", 30], ["num", 1], ["num", 44], ["num", 7], ["num", 45], ["num", 98], ["num", 56], ["num", 68], ["num", 53], ["num", 59], ["num", 30], ["num", 90], ["num", 79], ["num", 22]]], ["num", 23], ["num", 24]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 3, [["list", 11, [["num", -88], ["num", -72], ["num", -64], ["num", -46], ["num", -40], ["num", -16], ["num", -8], ["num", 0], ["num", 22], ["num", 34], ["num", 44]]], ["num", 6], ["num", 6]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 3, [["list", 47, [["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0]]], ["num", 23], ["num", 30]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 3, [["list", 25, [["num", 83], ["num", 8], ["num", 17], ["num", 20], ["num", 23], ["num", 31], ["num", 32], ["num", 37], ["num", 37], ["num", 44], ["num", 45], ["num", 48], ["num", 64], ["num", 64], ["num", 67], ["num", 69], ["num", 71], ["num", 75], ["num", 77], ["num", 78], ["num", 81], ["num", 87], ["num", 89], ["num", 92], ["num", 94]]], ["num", 21], ["num", 20]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 3, [["list", 24, [["num", 32], ["num", 22], ["num", 96], ["num", -2], ["num", 70], ["num", 40], ["num", -46], ["num", 98], ["num", 34], ["num", 2], ["num", -8], ["num", -88], ["num", -68], ["num", 48], ["num", 8], ["num", 50], ["num", 30], ["num", -88], ["num", 74], ["num", -16], ["num", 6], ["num", 74], ["num", 36], ["num", 94]]], ["num", 23], ["num", 13]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 3, [["list", 9, [["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 5], ["num", 8]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 3, [["list", 15, [["num", 95], ["num", 32], ["num", 80], ["num", 14], ["num", 35], ["num", 25], ["num", 60], ["num", 86], ["num", 45], ["num", 29], ["num", 94], ["num", 6], ["num", 63], ["num", 66], ["num", 38]]], ["num", 9], ["num", 7]]]]];
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
            [75], 0, 0
        ],
        [
            [-58, -60, -38, 48, -2, 32, -48, -46, 90, -54, -18, 28, 72, 86, 0, -2, -74, 12, -58, 90, -30, 10, -88, 2, -14, 82, -82, -46, 2, -74], 27, 17
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 7, 7
        ],
        [
            [45, 51, 26, 36, 10, 62, 62, 56, 61, 67, 86, 97, 31, 93, 32, 1, 14, 25, 24, 30, 1, 44, 7, 98, 56, 68, 53, 59, 30, 90, 79, 22], 23, 24
        ],
        [
            [-88, -72, -64, -46, -40, -16, -8, 0, 22, 34, 44], 6, 6
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0], 23, 30
        ],
        [
            [8, 17, 20, 23, 31, 32, 37, 37, 44, 45, 48, 64, 64, 67, 69, 71, 75, 77, 78, 81, 83, 87, 89, 92, 94], 21, 20
        ],
        [
            [-8, -88, -68, 48, 8, 50, 30, -88, 74, -16, 6, 74, 36, 32, 22, 96, -2, 70, 40, -46, 98, 34, 2, 94], 23, 13
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 1], 5, 8
        ],
        [
            [80, 14, 35, 25, 60, 86, 45, 95, 32, 29, 94, 6, 63, 66, 38], 9, 7
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
