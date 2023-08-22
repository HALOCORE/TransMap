
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 22, ["num", 3], ["num", 18]], ["num", 16]], ["list", 3, ["list", 33, ["num", 42], ["num", -88]], ["num", 31]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 4863064503445832794]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 40449126700122460089497012241585406843374]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 73]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 4439152634035859071320]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", -563275647468877027649000626873775860928]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 14575198352436218261735001]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 2602117847418815959021235860]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -7620126224138078712141271966338903121760]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 292561]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 67907758875578]]];
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
            [3, 18, 22, 27, 31, 33, 36, 36, 37, 37, 40, 48, 49, 49, 50, 58, 66, 71, 75, 85, 89, 91], 16, 16
        ],
        [
            [42, -88, 28, 8, 30, -8, -16, 86, 50, 84, 12, -20, -70, -40, -54, -76, 84, 90, -40, -68, -40, 36, -34, 14, 94, -44, 70, 58, -48, -72, 14, -70, 32], 31, 20
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], 10, 8
        ],
        [
            [66, 72, 27, 72, 71, 75, 94, 49, 47, 21, 21, 71, 84, 61, 14, 20, 5, 31, 62, 12, 56, 56, 12, 66, 26, 68, 30, 98, 20], 15, 26
        ],
        [
            [-96, -96, -94, -82, -72, -54, -54, -46, -34, -30, -28, -18, -2, 2, 6, 8, 10, 16, 18, 24, 26, 28, 44, 48, 48, 52, 56, 58, 58, 70, 70, 82, 84, 88, 94], 25, 34
        ],
        [
            [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], 20, 25
        ],
        [
            [2, 3, 8, 13, 15, 17, 18, 18, 25, 29, 29, 31, 36, 37, 42, 42, 42, 51, 52, 52, 54, 54, 58, 64, 70, 70, 74, 75, 78, 80, 83, 85, 86, 88, 95, 96, 97, 98, 99], 19, 32
        ],
        [
            [-56, -12, -92, -48, -98, -80, -96, -42, -50, 74, 88, 20, 78, -74, -20, -32, -30, 58, -22, -16, 68, 72, -50, -72, 66, 72, 74, -98, -22, -40, -90, 88, 42, 24], 29, 23
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20, 23
        ],
        [
            [86, 62, 30, 27, 98, 75, 93, 37, 70, 16, 20, 74, 46, 74, 25, 59, 86, 32, 17, 90, 80, 10, 17], 12, 12
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
