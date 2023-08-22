
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 1, ["num", 19], "EMPTY"], ["num", 0]], ["list", 2, ["list", 2, ["num", -47], ["num", 72]], ["num", 1]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 1, [["num", 19]]], ["num", 0]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 2, [["num", 1], ["num", 72]]], ["num", 1]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 26, [["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 17], ["num", 18], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 18]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 16, [["num", 1], ["num", 3], ["num", 2], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 20], ["num", 96], ["num", 71], ["num", 52], ["num", 33], ["num", 40], ["num", 39]]], ["num", 9]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 1], ["num", 2], ["num", 3], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 14], ["num", 15], ["num", 17], ["num", 18], ["num", 19], ["num", 4], ["num", 21], ["num", 12], ["num", 22], ["num", 13], ["num", 16], ["num", 20], ["num", 29], ["num", 29], ["num", 31], ["num", 40], ["num", 44], ["num", 47], ["num", 48], ["num", 51], ["num", 52], ["num", 52], ["num", 59], ["num", 60], ["num", 61], ["num", 64], ["num", 66], ["num", 78], ["num", 85], ["num", 97]]], ["num", 22]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 48, [["num", 4], ["num", 6], ["num", 8], ["num", 17], ["num", 19], ["num", 21], ["num", 22], ["num", 24], ["num", 1], ["num", 2], ["num", 3], ["num", 5], ["num", 7], ["num", 9], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 18], ["num", 20], ["num", 23], ["num", 25], ["num", 26], ["num", 54], ["num", 59], ["num", 60], ["num", 61], ["num", 63], ["num", 64], ["num", 64], ["num", 69], ["num", 76], ["num", 85], ["num", 86], ["num", 87], ["num", 92], ["num", 93], ["num", 93], ["num", 95], ["num", 97], ["num", 97], ["num", 97], ["num", 98], ["num", 99], ["num", 99]]], ["num", 26]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 18, [["num", 1], ["num", 2], ["num", 3], ["num", 5], ["num", 4], ["num", 6], ["num", 7], ["num", 8], ["num", 9], ["num", 75], ["num", -14], ["num", 51], ["num", 94], ["num", 27], ["num", 55], ["num", 30], ["num", -83], ["num", 4]]], ["num", 9]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 1], ["num", 2], ["num", 3], ["num", 4], ["num", 5], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 5]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", 24], ["num", 13], ["num", 1], ["num", 7], ["num", 2], ["num", 3], ["num", 4], ["num", 20], ["num", 5], ["num", 8], ["num", 16], ["num", 14], ["num", 6], ["num", 9], ["num", 15], ["num", 10], ["num", 11], ["num", 12], ["num", 17], ["num", 18], ["num", 19], ["num", 21], ["num", 22], ["num", 23], ["num", 58]]], ["num", 24]]]]];
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
            [19], 0
        ],
        [
            [-47, 72], 1
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 18
        ],
        [
            [93, 3, 20, 59, 36, 19, 90, 67, 19, 20, 96, 71, 52, 33, 40, 39], 9
        ],
        [
            [-98, -93, -91, -89, -63, -58, -52, -52, -46, -40, -25, -16, -10, -1, -1, 4, 12, 12, 13, 13, 16, 20, 29, 29, 31, 40, 44, 47, 48, 51, 52, 52, 59, 60, 61, 64, 66, 78, 85, 97], 22
        ],
        [
            [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], 12
        ],
        [
            [4, 6, 8, 17, 19, 21, 22, 24, 27, 27, 28, 30, 30, 30, 32, 33, 35, 37, 38, 44, 46, 46, 48, 49, 51, 53, 54, 59, 60, 61, 63, 64, 64, 69, 76, 85, 86, 87, 92, 93, 93, 95, 97, 97, 97, 98, 99, 99], 26
        ],
        [
            [-75, -46, -42, -33, 4, 74, -76, 14, -68, 75, -14, 51, 94, 27, 55, 30, -83, 4], 9
        ],
        [
            [0, 0, 0, 0, 0, 1, 1, 1, 1], 5
        ],
        [
            [24, 13, 60, 7, 57, 36, 45, 20, 65, 8, 16, 14, 76, 87, 15, 92, 98, 66, 32, 87, 63, 86, 51, 25, 58], 24
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
