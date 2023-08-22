
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 21, ["num", 5], ["num", 11]], ["num", 20]], ["list", 2, ["list", 8, ["num", 52], ["num", 80]], ["num", 6]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 21, [["num", 11], ["num", 5], ["num", 14], ["num", 14], ["num", 20], ["num", 17], ["num", 35], ["num", 30], ["num", 44], ["num", 43], ["num", 45], ["num", 44], ["num", 56], ["num", 51], ["num", 61], ["num", 56], ["num", 65], ["num", 63], ["num", 71], ["num", 70], ["num", 83]]], ["num", 20]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 8, [["num", -78], ["num", -98], ["num", -10], ["num", -30], ["num", 54], ["num", 52], ["num", 58], ["num", 80]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 5]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 14, [["num", 4], ["num", 3], ["num", 14], ["num", 11], ["num", 22], ["num", 21], ["num", 33], ["num", 26], ["num", 44], ["num", 42], ["num", 53], ["num", 58], ["num", 83], ["num", 92]]], ["num", 10]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 13, [["num", -78], ["num", -94], ["num", -42], ["num", -76], ["num", -16], ["num", -26], ["num", 4], ["num", -10], ["num", 16], ["num", 38], ["num", 60], ["num", 86], ["num", 98]]], ["num", 9]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 15, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 8]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 20, [["num", 12], ["num", 5], ["num", 26], ["num", 20], ["num", 35], ["num", 30], ["num", 44], ["num", 39], ["num", 56], ["num", 54], ["num", 70], ["num", 72], ["num", 74], ["num", 74], ["num", 79], ["num", 80], ["num", 88], ["num", 95], ["num", 95], ["num", 98]]], ["num", 10]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 21, [["num", -84], ["num", -88], ["num", -76], ["num", -80], ["num", -22], ["num", -68], ["num", -10], ["num", -10], ["num", 0], ["num", -2], ["num", 8], ["num", 2], ["num", 22], ["num", 22], ["num", 36], ["num", 40], ["num", 42], ["num", 48], ["num", 66], ["num", 88], ["num", 90]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 4]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 29, [["num", 9], ["num", 2], ["num", 20], ["num", 11], ["num", 22], ["num", 22], ["num", 37], ["num", 24], ["num", 42], ["num", 38], ["num", 51], ["num", 47], ["num", 53], ["num", 52], ["num", 56], ["num", 53], ["num", 59], ["num", 57], ["num", 61], ["num", 60], ["num", 64], ["num", 64], ["num", 67], ["num", 70], ["num", 75], ["num", 79], ["num", 82], ["num", 82], ["num", 89]]], ["num", 20]]]]];
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
            [5, 11, 14, 14, 17, 20, 30, 35, 43, 44, 44, 45, 51, 56, 56, 61, 63, 65, 70, 71, 83], 20
        ],
        [
            [52, 80, -10, 54, 58, -78, -30, -98], 6
        ],
        [
            [0, 0, 0, 1, 1, 1, 1, 1, 1], 5
        ],
        [
            [26, 83, 21, 22, 58, 42, 4, 14, 11, 53, 33, 3, 92, 44], 10
        ],
        [
            [-94, -78, -76, -42, -26, -16, -10, 4, 16, 38, 60, 86, 98], 9
        ],
        [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0], 8
        ],
        [
            [5, 12, 20, 26, 30, 35, 39, 44, 54, 56, 70, 72, 74, 74, 79, 80, 88, 95, 95, 98], 10
        ],
        [
            [-80, 22, 36, 90, -22, -10, 40, -10, -68, 88, 48, 22, 8, 2, -76, -88, -2, 66, -84, 42, 0], 12
        ],
        [
            [0, 0, 0, 1, 1, 1, 1, 1, 1], 4
        ],
        [
            [61, 79, 82, 75, 51, 64, 20, 42, 57, 70, 9, 22, 64, 38, 60, 53, 53, 56, 24, 37, 52, 67, 47, 2, 59, 89, 82, 11, 22], 20
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
