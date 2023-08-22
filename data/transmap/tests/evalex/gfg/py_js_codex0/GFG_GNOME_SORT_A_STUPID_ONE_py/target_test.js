
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 21, ["num", 5], ["num", 20]], ["num", 17]], ["list", 2, ["list", 10, ["num", 34], ["num", -54]], ["num", 7]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 21, [["num", 5], ["num", 20], ["num", 27], ["num", 28], ["num", 31], ["num", 31], ["num", 31], ["num", 34], ["num", 49], ["num", 55], ["num", 61], ["num", 63], ["num", 68], ["num", 69], ["num", 73], ["num", 78], ["num", 78], ["num", 82], ["num", 85], ["num", 87], ["num", 98]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 10, [["num", -58], ["num", -54], ["num", 0], ["num", 16], ["num", 34], ["num", 66], ["num", 88], ["num", -38], ["num", -94], ["num", -10]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 45, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 38, [["num", 1], ["num", 3], ["num", 5], ["num", 9], ["num", 10], ["num", 11], ["num", 15], ["num", 16], ["num", 25], ["num", 25], ["num", 28], ["num", 43], ["num", 45], ["num", 46], ["num", 52], ["num", 54], ["num", 56], ["num", 65], ["num", 72], ["num", 73], ["num", 75], ["num", 75], ["num", 77], ["num", 77], ["num", 78], ["num", 98], ["num", 93], ["num", 73], ["num", 31], ["num", 69], ["num", 8], ["num", 89], ["num", 44], ["num", 58], ["num", 64], ["num", 36], ["num", 7], ["num", 4]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 9, [["num", -86], ["num", -50], ["num", -12], ["num", 26], ["num", 30], ["num", 68], ["num", 70], ["num", 80], ["num", 82]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 22, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 16, [["num", 14], ["num", 28], ["num", 29], ["num", 31], ["num", 41], ["num", 59], ["num", 60], ["num", 62], ["num", 66], ["num", 67], ["num", 70], ["num", 70], ["num", 74], ["num", 76], ["num", 92], ["num", 96]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 21, [["num", -98], ["num", -94], ["num", -54], ["num", -26], ["num", -22], ["num", 2], ["num", 8], ["num", 14], ["num", 24], ["num", 28], ["num", 50], ["num", 58], ["num", 94], ["num", 4], ["num", -78], ["num", 98], ["num", 80], ["num", 72], ["num", -32], ["num", 58], ["num", -74]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 34, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 44, [["num", 3], ["num", 10], ["num", 11], ["num", 13], ["num", 13], ["num", 14], ["num", 16], ["num", 19], ["num", 25], ["num", 28], ["num", 29], ["num", 29], ["num", 30], ["num", 36], ["num", 47], ["num", 47], ["num", 51], ["num", 52], ["num", 52], ["num", 53], ["num", 54], ["num", 54], ["num", 59], ["num", 61], ["num", 63], ["num", 66], ["num", 69], ["num", 73], ["num", 74], ["num", 77], ["num", 80], ["num", 81], ["num", 82], ["num", 82], ["num", 84], ["num", 85], ["num", 85], ["num", 86], ["num", 91], ["num", 92], ["num", 93], ["num", 30], ["num", 35], ["num", 74]]]]];
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
            [5, 20, 27, 28, 31, 31, 31, 34, 49, 55, 61, 63, 68, 69, 73, 78, 78, 82, 85, 87, 98], 17
        ],
        [
            [34, -54, 0, 16, 66, -58, 88, -38, -94, -10], 7
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 22
        ],
        [
            [10, 28, 65, 98, 25, 25, 77, 46, 77, 54, 16, 43, 52, 75, 9, 15, 1, 72, 56, 75, 73, 45, 5, 78, 11, 3, 93, 73, 31, 69, 8, 89, 44, 58, 64, 36, 7, 4], 26
        ],
        [
            [-86, -50, -12, 26, 30, 68, 70, 80, 82], 6
        ],
        [
            [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0], 17
        ],
        [
            [14, 28, 29, 31, 41, 59, 60, 62, 66, 67, 70, 70, 74, 76, 92, 96], 13
        ],
        [
            [8, -22, 94, 28, 2, 14, 50, -54, 24, -26, -98, 58, -94, 4, -78, 98, 80, 72, -32, 58, -74], 13
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24
        ],
        [
            [3, 30, 84, 92, 29, 47, 36, 54, 93, 73, 53, 91, 81, 16, 51, 69, 82, 74, 80, 66, 77, 14, 85, 59, 86, 25, 85, 29, 19, 28, 13, 47, 61, 54, 13, 82, 52, 11, 10, 63, 52, 30, 35, 74], 41
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
