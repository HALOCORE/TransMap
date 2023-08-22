
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 2, ["num", 78], ["num", 81]], ["num", 1]], ["list", 2, ["list", 25, ["num", -44], ["num", -6]], ["num", 16]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 2, [["num", 78], ["num", 81]]], ["num", 1]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", -6], ["num", -44], ["num", -7], ["num", -16], ["num", 89], ["num", -78], ["num", -15], ["num", -84], ["num", -50], ["num", -65], ["num", 28], ["num", 13], ["num", 71], ["num", -83], ["num", 22], ["num", -20], ["num", 86], ["num", 30], ["num", 32], ["num", -15], ["num", 67], ["num", -6], ["num", 34], ["num", -19], ["num", -31]]], ["num", 16]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 20, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 46, [["num", 97], ["num", 18], ["num", 71], ["num", 65], ["num", 97], ["num", 1], ["num", 88], ["num", 4], ["num", 82], ["num", 4], ["num", 43], ["num", 27], ["num", 59], ["num", 32], ["num", 33], ["num", 28], ["num", 60], ["num", 55], ["num", 70], ["num", 62], ["num", 80], ["num", 34], ["num", 88], ["num", 56], ["num", 87], ["num", 13], ["num", 56], ["num", 18], ["num", 77], ["num", 43], ["num", 54], ["num", 39], ["num", 61], ["num", 42], ["num", 81], ["num", 79], ["num", 18], ["num", 23], ["num", 54], ["num", 30], ["num", 98], ["num", 58], ["num", 68], ["num", 67], ["num", 71], ["num", 18]]], ["num", 32]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 7, [["num", -51], ["num", -60], ["num", -32], ["num", -48], ["num", -30], ["num", 14], ["num", 93]]], ["num", 5]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 29, [["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0]]], ["num", 22]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 35, [["num", 14], ["num", 1], ["num", 18], ["num", 17], ["num", 22], ["num", 19], ["num", 29], ["num", 22], ["num", 30], ["num", 30], ["num", 35], ["num", 31], ["num", 38], ["num", 37], ["num", 42], ["num", 41], ["num", 44], ["num", 52], ["num", 56], ["num", 56], ["num", 57], ["num", 62], ["num", 65], ["num", 67], ["num", 70], ["num", 75], ["num", 79], ["num", 84], ["num", 85], ["num", 87], ["num", 89], ["num", 93], ["num", 93], ["num", 98], ["num", 98]]], ["num", 17]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 1, [["num", -79]]], ["num", 0]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 16, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 14]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 7, [["num", 53], ["num", 44], ["num", 79], ["num", 71], ["num", 34], ["num", 46], ["num", 68]]], ["num", 4]]]]];
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
            [78, 81], 1
        ],
        [
            [-44, -6, -7, -16, -15, 89, -78, -65, -84, -50, 22, 28, 13, 71, -83, -20, 86, 30, 32, -15, 67, -6, 34, -19, -31], 16
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15
        ],
        [
            [97, 18, 71, 65, 97, 1, 88, 4, 4, 82, 27, 43, 59, 32, 33, 28, 55, 60, 70, 62, 80, 34, 87, 88, 56, 13, 56, 18, 54, 77, 43, 39, 61, 42, 81, 79, 18, 23, 54, 30, 98, 58, 68, 67, 71, 18], 32
        ],
        [
            [-60, -51, -48, -32, -30, 14, 93], 5
        ],
        [
            [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0], 22
        ],
        [
            [1, 14, 17, 18, 19, 22, 22, 29, 30, 30, 31, 35, 37, 38, 41, 42, 44, 52, 56, 56, 57, 62, 65, 67, 70, 75, 79, 84, 85, 87, 89, 93, 93, 98, 98], 17
        ],
        [
            [-79], 0
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14
        ],
        [
            [44, 53, 71, 79, 34, 46, 68], 4
        ]
    ];
    mylog(0, param);
    for (let i = 0; i < param.length; i++) {
        let parameters_set = param[i];
        let idx = i;
        myexactlog(1, idx);
        f_gold(...parameters_set);
        let result = parameters_set;
        myexactlog(2, result);
    }
}
"-----------------"

//TESTED_PROGRAM

"-----------------"

test()
