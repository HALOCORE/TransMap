
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 19, ["num", 3], ["num", 6]], ["num", 9]], ["list", 2, ["list", 2, ["num", -88], ["num", -66]], ["num", 1]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["string", 2, "to"]]]], ["MYLOGEX:-1", ["list", 1, [["num", -1]]]], ["MYLOGEX:2", ["num", 0]]];
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
            [3, 6, 16, 16, 18, 19, 22, 39, 40, 42, 60, 66, 69, 70, 70, 73, 74, 80, 99], 9
        ],
        [
            [-88, -66], 1
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19
        ],
        [
            [85, 98, 67, 27, 98, 13, 96, 32, 26, 44, 32], 8
        ],
        [
            [-96, -94, -90, -88, -86, -66, -64, -52, -46, -46, -42, -40, -38, -32, -28, -22, -16, -10, -8, -8, -4, 2, 10, 26, 26, 28, 28, 40, 40, 42, 50, 60, 66, 68, 72, 74, 86, 92, 94], 34
        ],
        [
            [1, 1, 1, 1, 1, 1, 0, 0, 0], 4
        ],
        [
            [25, 64, 86], 1
        ],
        [
            [-4, 78, -76, 12, 4, -38, -98, -26, -8, -98, 56, 0, -34, 36, -90, -36, 54, -68, 12, -44, 62, 60, -34, -52, 18], 17
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 9
        ],
        [
            [2, 25, 45, 98, 71, 8, 58, 94, 53], 8
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
