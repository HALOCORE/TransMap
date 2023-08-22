
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 17, ["num", 1], ["num", 1]], ["num", 12]], ["list", 2, ["list", 29, ["num", 46], ["num", -58]], ["num", 27]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 527070499200]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 150247930560]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 11822682300]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 233902080]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 16841260800]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 13234752]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1604731564800]]];
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
            [1, 1, 4, 7, 7, 9, 12, 20, 45, 53, 58, 63, 65, 65, 86, 98, 98], 12
        ],
        [
            [46, -58, 70, 60, 74, 42, 6, -26, 78, 32, 14, -56, -48, 86, -2, 94, -44, -62, -50, -8, -4, -36, -62, -98, -98, -78, 56, 92, 88], 27
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [13, 71, 93, 68, 43, 75, 44, 15, 1, 91, 7, 9, 65, 85, 46, 87, 37, 74, 19, 30, 87, 27, 82, 92, 12, 36, 6, 27, 76, 80, 30, 83, 67, 83, 65, 28, 81, 59, 63, 11, 70], 20
        ],
        [
            [-96, -94, -92, -88, -84, -80, -74, -70, -62, -56, -48, -46, -40, -34, -32, -26, -22, -22, -12, -10, -8, -6, -2, 0, 2, 4, 6, 18, 18, 30, 34, 34, 38, 38, 40, 48, 54, 56, 60, 84, 88, 88, 90, 94, 96], 30
        ],
        [
            [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 22
        ],
        [
            [1, 1, 5, 5, 6, 7, 18, 35, 39, 51, 64, 73, 87, 90, 91, 92], 11
        ],
        [
            [-54, 8, -92, -28, 72, 54, -74, 36, -10, 54, -30, -16, -72, -32, -92, 38, -76, -76, -50, -92, 48], 19
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 26
        ],
        [
            [47, 57, 72, 40, 53, 46, 62, 51, 42, 89, 9, 91, 58, 67, 20, 91, 63, 50, 32, 6, 63, 49, 3, 89, 87, 54, 65, 72, 72, 62, 31, 6, 48, 87, 17, 95, 59, 57], 30
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
