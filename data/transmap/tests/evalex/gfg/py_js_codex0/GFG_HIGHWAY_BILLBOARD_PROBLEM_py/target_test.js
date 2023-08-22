
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 5, ["num", 16], ["list", 23, ["num", 6], ["num", 15]]], ["list", 5, ["num", 39], ["list", 46, ["num", 76], ["num", 60]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 0]]];
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
        [16, [6, 15, 15, 18, 23, 29, 32, 36, 37, 39, 40, 41, 44, 49, 51, 52, 53, 57, 66, 68, 82, 89, 96],
            [1, 2, 5, 5, 24, 26, 31, 32, 33, 41, 57, 59, 71, 75, 79, 87, 87, 88, 92, 94, 96, 96, 99], 12, 12
        ],
        [39, [76, 60, 88, 46, -20, -78, -22, 54, -18, 92, -42, -66, -90, -72, -48, 22, -72, -42, -46, 94, 82, -78, 14, 86, 10, -64, -78, 66, 78, -36, 50, -20, -40, -12, 10, -46, 56, -18, 4, -76, -64, 74, 22, 34, 4, -2],
            [28, 8, -60, 84, 68, -54, -56, 0, -68, -84, -6, 92, -80, -24, 86, -6, -44, 82, 74, 90, -46, 40, 62, 50, -42, 38, 78, 94, 46, -14, -48, 66, 70, 52, 10, -88, 54, -10, 98, 34, 16, -2, -62, -56, -40, 86], 25, 27
        ],
        [5, [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 9, 6
        ],
        [10, [21, 69, 30, 10, 71, 72, 71, 78, 30, 9, 72, 10, 7, 87, 30, 46, 56, 74, 73, 60, 86],
            [72, 45, 7, 30, 76, 35, 75, 72, 4, 7, 55, 56, 7, 52, 48, 27, 11, 76, 66, 48, 33], 18, 20
        ],
        [14, [-76, -76, -66, -64, -62, -60, -52, -48, -42, -28, -14, -6, -6, 16, 20, 20, 38, 46, 58, 60, 70, 72, 86, 98],
            [-90, -82, -78, -76, -74, -52, -48, -44, -44, -40, -38, -14, -6, 10, 20, 38, 38, 40, 44, 48, 52, 54, 76, 78], 15, 17
        ],
        [32, [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], 28, 36
        ],
        [2, [16, 38, 72, 82],
            [15, 34, 56, 74], 2, 3
        ],
        [22, [28, -76, 42, -2, 30, -10, 52, 66, 26, 96, 96, -72, 26, -86, -30, -78, 32, -32, 58, 12, -72, 8, 34, -68, -28, -66],
            [68, -38, 34, 20, 40, 78, 52, 80, 58, -12, -18, 10, 40, 34, 20, -32, -8, -46, 8, 62, 94, -30, -94, 26, -40, 64], 13, 16
        ],
        [15, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25, 15
        ],
        [8, [95, 12, 65, 97, 92, 49, 94, 32, 37, 97, 9, 35],
            [25, 32, 14, 49, 90, 37, 92, 1, 8, 75, 50, 9], 9, 8
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
