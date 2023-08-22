
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 46, ["num", 4], ["num", 4]], ["num", 38]], ["list", 2, ["list", 6, ["num", 30], ["num", 78]], ["num", 3]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 46, [["num", 14], ["num", 40], ["num", 29], ["num", 39], ["num", 56], ["num", 36], ["num", 73], ["num", 12], ["num", 42], ["num", 49], ["num", 43], ["num", 26], ["num", 28], ["num", 64], ["num", 31], ["num", 23], ["num", 21], ["num", 29], ["num", 67], ["num", 4], ["num", 61], ["num", 16], ["num", 10], ["num", 10], ["num", 38], ["num", 46], ["num", 58], ["num", 4], ["num", 21], ["num", 10], ["num", 80], ["num", 32], ["num", 25], ["num", 76], ["num", 20], ["num", 67], ["num", 44], ["num", 22], ["num", 81], ["num", 82], ["num", 89], ["num", 89], ["num", 90], ["num", 92], ["num", 96], ["num", 97]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 6, [["num", -42], ["num", 30], ["num", 78], ["num", 0], ["num", 98], ["num", -58]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 38, [["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 27, [["num", 92], ["num", 36], ["num", 56], ["num", 78], ["num", 84], ["num", 49], ["num", 35], ["num", 91], ["num", 76], ["num", 10], ["num", 64], ["num", 87], ["num", 80], ["num", 5], ["num", 89], ["num", 7], ["num", 32], ["num", 7], ["num", 77], ["num", 97], ["num", 2], ["num", 60], ["num", 27], ["num", 65], ["num", 72], ["num", 39], ["num", 97]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 41, [["num", 2], ["num", -94], ["num", -98], ["num", -84], ["num", -96], ["num", -86], ["num", -84], ["num", -46], ["num", -24], ["num", 4], ["num", -76], ["num", -48], ["num", 18], ["num", -86], ["num", -98], ["num", -24], ["num", -40], ["num", -72], ["num", -38], ["num", -46], ["num", -52], ["num", -78], ["num", -32], ["num", 18], ["num", 18], ["num", 24], ["num", 24], ["num", 24], ["num", 26], ["num", 40], ["num", 40], ["num", 42], ["num", 48], ["num", 50], ["num", 54], ["num", 56], ["num", 58], ["num", 62], ["num", 80], ["num", 88], ["num", 92]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 37, [["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 8, [["num", 61], ["num", 15], ["num", 37], ["num", 50], ["num", 42], ["num", 20], ["num", 2], ["num", 99]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 36, [["num", -20], ["num", 86], ["num", 24], ["num", 88], ["num", -4], ["num", -70], ["num", 18], ["num", -46], ["num", 88], ["num", 98], ["num", 68], ["num", 22], ["num", -78], ["num", 72], ["num", -90], ["num", -64], ["num", -30], ["num", 12], ["num", 68], ["num", 92], ["num", -14], ["num", -80], ["num", 6], ["num", 8], ["num", -34], ["num", 96], ["num", -68], ["num", -76], ["num", -68], ["num", 84], ["num", -78], ["num", 92], ["num", -32], ["num", -82], ["num", 14], ["num", -60]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["num", 0], ["num", 1]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 38, [["num", 72], ["num", 23], ["num", 60], ["num", 54], ["num", 12], ["num", 75], ["num", 8], ["num", 9], ["num", 82], ["num", 98], ["num", 53], ["num", 60], ["num", 21], ["num", 36], ["num", 76], ["num", 27], ["num", 25], ["num", 62], ["num", 94], ["num", 74], ["num", 87], ["num", 13], ["num", 96], ["num", 40], ["num", 91], ["num", 89], ["num", 42], ["num", 97], ["num", 55], ["num", 80], ["num", 62], ["num", 76], ["num", 45], ["num", 47], ["num", 55], ["num", 67], ["num", 91], ["num", 25]]]]];
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
            [4, 4, 10, 10, 10, 12, 14, 16, 20, 21, 21, 22, 23, 25, 26, 28, 29, 29, 31, 32, 36, 38, 39, 40, 42, 43, 44, 46, 49, 56, 58, 61, 64, 67, 67, 73, 76, 80, 81, 82, 89, 89, 90, 92, 96, 97], 38
        ],
        [
            [30, 78, -42, 0, 98, -58], 3
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 32
        ],
        [
            [78, 5, 87, 36, 49, 89, 35, 84, 76, 91, 7, 64, 56, 80, 92, 10, 32, 7, 77, 97, 2, 60, 27, 65, 72, 39, 97], 16
        ],
        [
            [-98, -98, -96, -94, -86, -86, -84, -84, -78, -76, -72, -52, -48, -46, -46, -40, -38, -32, -24, -24, 2, 4, 18, 18, 18, 24, 24, 24, 26, 40, 40, 42, 48, 50, 54, 56, 58, 62, 80, 88, 92], 23
        ],
        [
            [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 21
        ],
        [
            [2, 15, 20, 37, 42, 50, 61, 99], 7
        ],
        [
            [-14, 86, -46, 24, -4, 18, 88, -64, 72, 68, 22, -90, -78, -20, -70, -30, 12, 92, 68, -80, 88, 98, 6, 8, -34, 96, -68, -76, -68, 84, -78, 92, -32, -82, 14, -60], 22
        ],
        [
            [0, 1], 1
        ],
        [
            [23, 40, 62, 21, 87, 54, 76, 72, 76, 60, 89, 74, 13, 75, 91, 53, 96, 94, 12, 36, 60, 62, 55, 82, 27, 80, 97, 42, 25, 98, 9, 8, 45, 47, 55, 67, 91, 25], 32
        ]
    ];
    mylog(0, param);
    for (let i = 0; i < param.length; i++) {
        let parameters_set = param[i];
        let idx = i;
        myexactlog(1, idx);
        let result = f_gold(...parameters_set);
        myexactlog(2, result);
    }
}
"-----------------"

//TESTED_PROGRAM

"-----------------"

test()
