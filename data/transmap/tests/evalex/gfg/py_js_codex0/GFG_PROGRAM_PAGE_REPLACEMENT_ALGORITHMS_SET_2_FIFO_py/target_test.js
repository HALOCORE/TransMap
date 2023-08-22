
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 38, ["num", 4], ["num", 4]], ["num", 36]], ["list", 3, ["list", 34, ["num", 78], ["num", -48]], ["num", 33]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 34]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 30]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 13]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 9]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 16]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 25]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 15]]];
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
            [4, 4, 6, 7, 8, 11, 13, 18, 26, 35, 36, 37, 45, 46, 46, 47, 48, 49, 51, 52, 53, 56, 61, 74, 75, 77, 80, 83, 85, 86, 87, 90, 93, 95, 97, 98, 99, 99], 36, 37
        ],
        [
            [78, -48, 50, -20, -6, 58, -8, 66, 72, 68, 4, 80, 58, -26, -82, -56, 92, 76, 20, 82, -46, 86, 38, 60, -62, -48, 76, 8, -66, -4, -98, -96, -52, 92], 33, 23
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19, 13
        ],
        [
            [98, 78, 94, 42, 62, 83, 7, 62, 60, 94, 16, 28, 50, 15, 18, 71, 86, 47, 62, 89], 15, 11
        ],
        [
            [-82, -70, -68, -56, -50, -44, 4, 18, 28, 30, 30, 42, 66, 78, 80], 9, 11
        ],
        [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0], 25, 25
        ],
        [
            [4, 5, 13, 15, 18, 28, 32, 40, 46, 46, 55, 57, 61, 63, 65, 68, 77, 79, 79, 96], 17, 18
        ],
        [
            [-2, 82, 2, -74, -6, -24, 54, -74, -98, 8, -94, -60, -42, -38, 36, -38, -58, -70, -28, -34, 70, -6, -2, -76, -40, -4, 0, -4, 76, 48, -34, -26, -48, -58, -88, -44, 20, -22, 78], 31, 24
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 26, 24
        ],
        [
            [4, 90, 28, 71, 69, 45, 92, 63, 72, 76, 47, 85, 36, 59, 88, 46, 28, 19, 50, 31, 63, 13], 15, 12
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
