
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 43, ["num", 4], ["num", 6]], ["num", 26]], ["list", 3, ["list", 49, ["num", -84], ["num", 0]], ["num", 33]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 3, [["list", 43, [["num", 4], ["num", 6], ["num", 6], ["num", 10], ["num", 12], ["num", 13], ["num", 17], ["num", 18], ["num", 21], ["num", 25], ["num", 30], ["num", 30], ["num", 32], ["num", 33], ["num", 36], ["num", 36], ["num", 37], ["num", 39], ["num", 41], ["num", 42], ["num", 42], ["num", 43], ["num", 47], ["num", 49], ["num", 50], ["num", 54], ["num", 54], ["num", 55], ["num", 59], ["num", 71], ["num", 72], ["num", 73], ["num", 74], ["num", 79], ["num", 80], ["num", 82], ["num", 83], ["num", 86], ["num", 89], ["num", 90], ["num", 92], ["num", 97], ["num", 98]]], ["num", 26], ["num", 25]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 3, [["list", 49, [["num", -98], ["num", -94], ["num", -84], ["num", -74], ["num", 0], ["num", 0], ["num", 8], ["num", 42], ["num", 44], ["num", -24], ["num", 94], ["num", -90], ["num", -60], ["num", 90], ["num", -14], ["num", -22], ["num", 38], ["num", -72], ["num", 92], ["num", 94], ["num", -64], ["num", 92], ["num", -22], ["num", -36], ["num", 34], ["num", 68], ["num", -96], ["num", -34], ["num", -40], ["num", 28], ["num", 76], ["num", 68], ["num", -28], ["num", 2], ["num", -98], ["num", -24], ["num", -66], ["num", 40], ["num", 22], ["num", 84], ["num", 28], ["num", 48], ["num", 12], ["num", 98], ["num", 6], ["num", 2], ["num", -74], ["num", 86], ["num", 98]]], ["num", 33], ["num", 37]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 3, [["list", 48, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 35], ["num", 40]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 3, [["list", 1, [["num", 6]]], ["num", 0], ["num", 0]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 3, [["list", 1, [["num", -26]]], ["num", 0], ["num", 0]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 3, [["list", 13, [["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0]]], ["num", 7], ["num", 11]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 3, [["list", 24, [["num", 6], ["num", 23], ["num", 34], ["num", 37], ["num", 37], ["num", 38], ["num", 39], ["num", 45], ["num", 56], ["num", 56], ["num", 57], ["num", 59], ["num", 60], ["num", 65], ["num", 67], ["num", 68], ["num", 69], ["num", 71], ["num", 82], ["num", 85], ["num", 89], ["num", 94], ["num", 97], ["num", 99]]], ["num", 12], ["num", 18]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 3, [["list", 47, [["num", -98], ["num", -96], ["num", -96], ["num", 10], ["num", 18], ["num", 0], ["num", 72], ["num", 42], ["num", 34], ["num", -86], ["num", -88], ["num", -66], ["num", -62], ["num", -30], ["num", 72], ["num", 56], ["num", -42], ["num", -54], ["num", -24], ["num", -6], ["num", 10], ["num", 22], ["num", -30], ["num", 58], ["num", -48], ["num", -14], ["num", -96], ["num", -42], ["num", -76], ["num", 82], ["num", 2], ["num", 44], ["num", 64], ["num", -48], ["num", 96], ["num", 46], ["num", -50], ["num", 42], ["num", -46], ["num", -94], ["num", 78], ["num", 82], ["num", 20], ["num", -46], ["num", -44], ["num", -80], ["num", 12]]], ["num", 32], ["num", 46]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 3, [["list", 27, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 19], ["num", 21]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 3, [["list", 46, [["num", 3], ["num", 6], ["num", 84], ["num", 84], ["num", 82], ["num", 82], ["num", 54], ["num", 12], ["num", 68], ["num", 59], ["num", 21], ["num", 16], ["num", 80], ["num", 6], ["num", 30], ["num", 12], ["num", 95], ["num", 96], ["num", 63], ["num", 37], ["num", 15], ["num", 41], ["num", 40], ["num", 88], ["num", 49], ["num", 37], ["num", 8], ["num", 24], ["num", 36], ["num", 65], ["num", 47], ["num", 67], ["num", 78], ["num", 36], ["num", 6], ["num", 58], ["num", 66], ["num", 75], ["num", 71], ["num", 14], ["num", 99], ["num", 14], ["num", 56], ["num", 50], ["num", 85], ["num", 33]]], ["num", 30], ["num", 32]]]]];
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
            [4, 6, 6, 10, 12, 13, 17, 18, 21, 25, 30, 30, 32, 33, 36, 36, 37, 39, 41, 42, 42, 43, 47, 49, 50, 54, 54, 55, 59, 71, 72, 73, 74, 79, 80, 82, 83, 86, 89, 90, 92, 97, 98], 26, 25
        ],
        [
            [-84, 0, 8, 42, 0, 44, -74, -24, 94, -90, -60, 90, -14, -22, -98, 38, -72, -94, 92, 94, -64, 92, -22, -36, 34, 68, -96, -34, -40, 28, 76, 68, -28, 2, -98, -24, -66, 40, 22, 84, 28, 48, 12, 98, 6, 2, -74, 86, 98], 33, 37
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 35, 40
        ],
        [
            [6], 0, 0
        ],
        [
            [-26], 0, 0
        ],
        [
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0], 7, 11
        ],
        [
            [6, 23, 34, 37, 37, 38, 39, 45, 56, 56, 57, 59, 60, 65, 67, 68, 69, 71, 82, 85, 89, 94, 97, 99], 12, 18
        ],
        [
            [10, 18, 72, 42, 34, 0, -86, -96, -88, -66, -62, -30, 72, 56, -42, -54, -24, -6, -98, 10, -96, 22, -30, 58, -48, -14, -96, -42, -76, 82, 2, 44, 64, -48, 96, 46, -50, 42, -46, -94, 78, 82, 20, -46, -44, -80, 12], 32, 46
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19, 21
        ],
        [
            [84, 84, 82, 82, 54, 12, 68, 59, 21, 6, 16, 80, 6, 30, 12, 95, 96, 63, 37, 15, 41, 40, 88, 3, 49, 37, 8, 24, 36, 65, 47, 67, 78, 36, 6, 58, 66, 75, 71, 14, 99, 14, 56, 50, 85, 33], 30, 32
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
