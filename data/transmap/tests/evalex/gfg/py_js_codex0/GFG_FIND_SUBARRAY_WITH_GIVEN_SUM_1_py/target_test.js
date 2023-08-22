
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 20, ["num", 7], ["num", 7]], ["num", 16]], ["list", 3, ["list", 40, ["num", -62], ["num", -62]], ["num", 39]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 7, "3 and 4"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 1, [["string", 17, "No subarray found"]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 8, "0 and 29"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 8, "8 and 10"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["string", 17, "No subarray found"]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 8, "0 and 16"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 7, "9 and 9"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 7, "0 and 0"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 7, "0 and 0"]]]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["string", 25, "Sum found between indexes"]]]], ["MYLOGEX:-1", ["list", 1, [["string", 9, "10 and 13"]]]], ["MYLOGEX:2", ["num", 1]]];
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
            [7, 7, 8, 8, 23, 24, 28, 32, 48, 53, 56, 62, 69, 77, 81, 82, 84, 87, 88, 90], 16, 31
        ],
        [
            [-62, -62, -80, -30, -80, 44, -12, -76, 16, -52, -86, 72, 32, -60, -70, -62, -78, -96, -18, 40, -4, -18, -58, 30, -70, 6, 0, -62, -66, 20, 92, -64, 20, -48, 48, -32, 64, 22, 16, 26], 39, 44
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 40, 7
        ],
        [
            [50, 25, 6, 87, 55, 86, 61, 97, 24, 30, 51, 43, 26, 1, 80, 47, 19, 36, 64, 62, 92, 5, 48, 27, 82, 76, 70, 59, 1, 43, 1, 36, 28, 9, 52, 22, 43], 29, 105
        ],
        [
            [-86, -76, -64, -22, -16, -8, 4, 6, 8, 32, 38, 60, 68, 74], 7, 2
        ],
        [
            [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0], 31, 10
        ],
        [
            [7, 7, 12, 25, 25, 32, 33, 34, 37, 39, 39, 41, 46, 48, 56, 56, 57, 58, 61, 62, 62, 63, 65, 66, 69, 72, 74, 78, 78, 79, 80, 85, 89, 94, 95, 99], 22, 39
        ],
        [
            [98, -60], 1, 98
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 8, 0
        ],
        [
            [80, 89, 83, 42, 75, 30, 64, 25, 95, 17, 90, 6, 11, 1, 77, 16, 75, 86, 96, 67, 27, 80, 27], 16, 108
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
