
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["num", 12], ["list", 20, ["num", 3], ["num", 11]]], ["list", 2, ["num", 46], ["list", 47, ["num", 76], ["num", 48]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 78]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 92]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 17]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 15]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 50]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 106]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 16]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 19]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 64]]];
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
        [12, [3, 11, 12, 15, 16, 21, 24, 29, 32, 39, 42, 44, 51, 68, 79, 81, 81, 85, 92, 94]],
        [46, [76, 48, 88, 70, -64, 66, -6, -58, 26, -28, -42, -94, 80, -4, -56, -46, 4, 90, -12, -78, 64, 18, -38, 26, 56, -24, 66, -18, -12, 0, -94, 12, -10, 4, -68, -20, 88, 2, -58, 16, 46, -80, -42, 44, -86, 96, -44]],
        [16, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
        [9, [2, 95, 20, 50, 2, 58, 20, 14, 65, 69, 78, 7]],
        [0, [-88]],
        [38, [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]],
        [28, [2, 3, 6, 8, 9, 10, 14, 17, 17, 22, 25, 27, 29, 29, 30, 32, 33, 35, 38, 42, 50, 51, 51, 57, 59, 59, 59, 60, 62, 62, 63, 67, 70, 75, 76, 77, 81, 81, 83, 84]],
        [9, [-52, 62, 74, -62, -58, 62, 38, 42, -50, 20]],
        [18, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
        [29, [96, 15, 9, 9, 40, 34, 17, 4, 51, 49, 34, 66, 97, 28, 64, 65, 92, 56, 74, 48, 43, 17, 82, 8, 21, 39, 83, 35, 42, 37, 64, 34, 42, 59, 45, 61, 55, 93, 94, 29, 20, 96, 77, 66]]
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
