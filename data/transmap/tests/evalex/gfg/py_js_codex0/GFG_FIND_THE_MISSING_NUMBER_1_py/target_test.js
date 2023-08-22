
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 7, ["num", 13], ["num", 27]], ["num", 6]], ["list", 2, ["list", 47, ["num", 22], ["num", 86]], ["num", 38]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", -261]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 524]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 131]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -954]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 694]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 341]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", -506]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 227]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 463]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -697]]];
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
            [13, 27, 46, 59, 62, 82, 92], 6
        ],
        [
            [22, 86, -64, -20, -56, -16, 86, 42, 72, -90, 10, 42, 56, 8, 50, 24, -34, 0, -78, 64, 18, 20, -84, -22, 90, -20, 86, 26, -54, 0, 90, -48, 4, 88, 18, -64, -22, -74, 48, -36, -86, -24, 88, -64, 68, 62, 92], 38
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15
        ],
        [
            [55, 89, 56, 85, 26, 4, 91, 91, 3, 77, 63, 59, 76, 90, 1, 94, 44, 70, 8, 54, 3, 91, 29, 95, 28, 75, 20], 22
        ],
        [
            [-94, -84, -80, -78, -66, -62, -54, -52, -26, -8, -8, -6, 4, 4, 8, 14, 26, 58, 60, 62, 62, 76, 78, 86, 92], 18
        ],
        [
            [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 25
        ],
        [
            [1, 2, 7, 7, 9, 14, 23, 29, 31, 31, 35, 35, 38, 41, 44, 49, 49, 50, 51, 54, 55, 56, 57, 63, 67, 69, 73, 79, 79, 80, 86, 88, 93], 24
        ],
        [
            [78, -48, 16, 22, -16, 34, 56, -20, -62, -82, -74, -40, 20, -24, -46, 64, 66, -76, 58, -84, 96, 76, 86, -32, 46], 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29
        ],
        [
            [73, 76, 25, 59, 40, 85, 90, 38, 13, 97, 93, 99, 45, 7], 12
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
