
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 37, ["num", 8], ["num", 9]], ["num", 34]], ["list", 2, ["list", 36, ["num", 0], ["num", 48]], ["num", 24]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1454]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 1980]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 170]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 2812]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 20]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1542]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 1608]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 20]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 344]]];
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
            [8, 9, 12, 13, 17, 21, 24, 29, 37, 37, 39, 40, 41, 45, 49, 50, 53, 54, 56, 59, 60, 60, 70, 71, 72, 74, 77, 77, 78, 85, 89, 89, 90, 90, 95, 98, 98], 34
        ],
        [
            [0, 48, -32, 28, -84, 14, 30, -80, 92, 76, -52, -20, 52, 78, 20, 32, 96, 66, 48, 26, 88, 6, 94, 32, -40, 44, -84, 54, -84, -80, -80, -64, -92, -84, -16, -18], 24
        ],
        [
            [0, 0, 0, 1, 1, 1], 3
        ],
        [
            [47, 7, 84, 96, 59, 53, 80], 5
        ],
        [
            [-88, -80, -68, -62, -60, -60, -48, -46, -44, -38, -16, -16, 0, 0, 2, 8, 20, 36, 40, 40, 44, 54, 60, 68, 70, 82, 82, 84, 92, 94, 96], 29
        ],
        [
            [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1], 32
        ],
        [
            [2, 5, 10, 11, 13, 14, 15, 17, 17, 23, 23, 24, 27, 27, 28, 29, 30, 40, 42, 43, 46, 47, 51, 52, 57, 64, 65, 73, 74, 75, 76, 77, 81, 81, 82, 87, 89, 93, 95, 95, 99], 35
        ],
        [
            [-72, -84, 84, 2, -76, 48, 12, -72, -92, -72, 38, 26, -38, 26, 50, 2, 20, 26, -48, 30, 24, -12, -84, -54, 20, -16, -94, 26, -22, 86], 21
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 37
        ],
        [
            [57, 74, 53, 52, 80, 31, 27, 53, 8, 57, 46, 73, 46, 56, 73, 84, 37, 7, 97], 13
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
