
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 30, ["num", 6], ["num", 8]], ["num", 25]], ["list", 2, ["list", 46, ["num", -82], ["num", 66]], ["num", 39]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 30, [["num", 83], ["num", 6], ["num", 80], ["num", 8], ["num", 79], ["num", 10], ["num", 77], ["num", 11], ["num", 76], ["num", 23], ["num", 68], ["num", 25], ["num", 63], ["num", 26], ["num", 62], ["num", 34], ["num", 58], ["num", 34], ["num", 57], ["num", 37], ["num", 57], ["num", 46], ["num", 56], ["num", 51], ["num", 53], ["num", 85], ["num", 86], ["num", 88], ["num", 88], ["num", 93]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 46, [["num", -94], ["num", -82], ["num", 28], ["num", 66], ["num", -2], ["num", -48], ["num", -36], ["num", -56], ["num", -16], ["num", -4], ["num", -14], ["num", -48], ["num", 6], ["num", 26], ["num", -76], ["num", -66], ["num", 92], ["num", 76], ["num", 44], ["num", -22], ["num", 66], ["num", 58], ["num", -68], ["num", -12], ["num", 30], ["num", -82], ["num", -76], ["num", -90], ["num", 34], ["num", 76], ["num", 54], ["num", 94], ["num", 64], ["num", 84], ["num", -28], ["num", -16], ["num", 44], ["num", -14], ["num", 0], ["num", 72], ["num", -34], ["num", 38], ["num", -76], ["num", -32], ["num", 58], ["num", -98]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 18, [["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 47, [["num", 88], ["num", 12], ["num", 78], ["num", 52], ["num", 66], ["num", 67], ["num", 19], ["num", 11], ["num", 7], ["num", 17], ["num", 9], ["num", 66], ["num", 21], ["num", 25], ["num", 1], ["num", 62], ["num", 40], ["num", 98], ["num", 61], ["num", 77], ["num", 87], ["num", 6], ["num", 80], ["num", 34], ["num", 59], ["num", 13], ["num", 1], ["num", 33], ["num", 72], ["num", 48], ["num", 4], ["num", 55], ["num", 4], ["num", 51], ["num", 57], ["num", 13], ["num", 54], ["num", 69], ["num", 72], ["num", 93], ["num", 32], ["num", 98], ["num", 85], ["num", 90], ["num", 56], ["num", 35], ["num", 70]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 11, [["num", -44], ["num", -94], ["num", -48], ["num", -82], ["num", -62], ["num", -18], ["num", -12], ["num", -12], ["num", 22], ["num", 46], ["num", 94]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 34, [["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 6, [["num", 86], ["num", 5], ["num", 84], ["num", 38], ["num", 89], ["num", 96]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 26, [["num", 82], ["num", -68], ["num", -20], ["num", 80], ["num", -98], ["num", 96], ["num", -76], ["num", 34], ["num", -70], ["num", -40], ["num", -64], ["num", -24], ["num", -74], ["num", 34], ["num", -26], ["num", -32], ["num", -2], ["num", 0], ["num", 66], ["num", -50], ["num", 54], ["num", -44], ["num", 82], ["num", -66], ["num", -42], ["num", -64]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 15, [["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 22, [["num", 73], ["num", 13], ["num", 12], ["num", 46], ["num", 82], ["num", 67], ["num", 26], ["num", 90], ["num", 19], ["num", 7], ["num", 70], ["num", 88], ["num", 30], ["num", 25], ["num", 68], ["num", 31], ["num", 54], ["num", 4], ["num", 91], ["num", 42], ["num", 52], ["num", 41]]]]];
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
            [6, 8, 10, 11, 23, 25, 26, 34, 34, 37, 46, 51, 53, 56, 57, 57, 58, 62, 63, 68, 76, 77, 79, 80, 83, 85, 86, 88, 88, 93], 25
        ],
        [
            [-82, 66, -48, -56, -4, -48, 26, -66, 76, -22, 58, -12, -82, -90, 76, 94, 84, -16, -14, 0, 44, -28, 64, 54, 34, -76, 30, -68, 66, 44, 92, -76, 6, -14, -16, -36, -2, 28, -94, 72, -34, 38, -76, -32, 58, -98], 39
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [12, 52, 67, 11, 17, 66, 25, 62, 98, 77, 6, 34, 13, 33, 48, 55, 51, 4, 4, 72, 1, 59, 80, 87, 61, 40, 1, 21, 9, 7, 19, 66, 78, 88, 57, 13, 54, 69, 72, 93, 32, 98, 85, 90, 56, 35, 70], 34
        ],
        [
            [-94, -82, -62, -48, -44, -18, -12, -12, 22, 46, 94], 5
        ],
        [
            [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0], 24
        ],
        [
            [5, 38, 84, 86, 89, 96], 4
        ],
        [
            [-68, 80, 96, 34, -40, -24, 34, -32, 0, -50, -44, 54, 66, -2, -26, -74, -64, -70, -76, -98, -20, 82, 82, -66, -42, -64], 22
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 9
        ],
        [
            [13, 46, 67, 90, 7, 88, 25, 31, 4, 91, 54, 68, 30, 70, 19, 26, 82, 12, 73, 42, 52, 41], 19
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
