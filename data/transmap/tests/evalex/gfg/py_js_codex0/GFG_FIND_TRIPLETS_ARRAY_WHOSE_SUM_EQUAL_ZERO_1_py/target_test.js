
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 35, ["num", 1], ["num", 7]], ["num", 18]], ["list", 2, ["list", 37, ["num", 38], ["num", 68]], ["num", 19]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 1, [["string", 16, "No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 35, [["num", 1], ["num", 7], ["num", 12], ["num", 18], ["num", 18], ["num", 25], ["num", 26], ["num", 28], ["num", 29], ["num", 33], ["num", 33], ["num", 37], ["num", 39], ["num", 39], ["num", 53], ["num", 54], ["num", 55], ["num", 59], ["num", 61], ["num", 63], ["num", 63], ["num", 65], ["num", 66], ["num", 68], ["num", 68], ["num", 71], ["num", 71], ["num", 77], ["num", 81], ["num", 85], ["num", 90], ["num", 93], ["num", 94], ["num", 95], ["num", 97]]], ["num", 18]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 3, [["num", -10], ["num", 38], ["num", -28]]]], ["MYLOGEX:-1", ["list", 3, [["num", -66], ["num", 68], ["num", -2]]]], ["MYLOGEX:-1", ["list", 3, [["num", -10], ["num", 68], ["num", -58]]]], ["MYLOGEX:-1", ["list", 3, [["num", -28], ["num", 86], ["num", -58]]]], ["MYLOGEX:2", ["list", 2, [["list", 37, [["num", 38], ["num", 68], ["num", 16], ["num", 96], ["num", -10], ["num", 6], ["num", 86], ["num", -42], ["num", -66], ["num", -2], ["num", -10], ["num", 48], ["num", 16], ["num", -28], ["num", 92], ["num", -24], ["num", 0], ["num", 46], ["num", -58], ["num", -58], ["num", 56], ["num", -70], ["num", 10], ["num", -2], ["num", -92], ["num", -80], ["num", 14], ["num", -78], ["num", 16], ["num", -84], ["num", -88], ["num", 42], ["num", -24], ["num", 6], ["num", 86], ["num", 82], ["num", 84]]], ["num", 19]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 8, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["string", 16, "No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 1, [["num", 45]]], ["num", 0]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 3, [["num", 38], ["num", -80], ["num", 42]]]], ["MYLOGEX:-1", ["list", 3, [["num", 14], ["num", -54], ["num", 40]]]], ["MYLOGEX:-1", ["list", 3, [["num", 14], ["num", -38], ["num", 24]]]], ["MYLOGEX:-1", ["list", 3, [["num", -10], ["num", -32], ["num", 42]]]], ["MYLOGEX:-1", ["list", 3, [["num", -10], ["num", -28], ["num", 38]]]], ["MYLOGEX:-1", ["list", 3, [["num", -10], ["num", -28], ["num", 38]]]], ["MYLOGEX:-1", ["list", 3, [["num", -12], ["num", -28], ["num", 40]]]], ["MYLOGEX:-1", ["list", 3, [["num", -18], ["num", -28], ["num", 46]]]], ["MYLOGEX:-1", ["list", 3, [["num", -18], ["num", -28], ["num", 46]]]], ["MYLOGEX:-1", ["list", 3, [["num", -18], ["num", -22], ["num", 40]]]], ["MYLOGEX:2", ["list", 2, [["list", 28, [["num", -80], ["num", -68], ["num", -54], ["num", -44], ["num", -40], ["num", -38], ["num", -32], ["num", -28], ["num", -22], ["num", -18], ["num", -12], ["num", -10], ["num", 14], ["num", 24], ["num", 38], ["num", 38], ["num", 40], ["num", 42], ["num", 46], ["num", 46], ["num", 64], ["num", 64], ["num", 66], ["num", 68], ["num", 68], ["num", 68], ["num", 70], ["num", 96]]], ["num", 20]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 14, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0]]], ["num", 13]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["string", 16, "No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 44, [["num", 1], ["num", 3], ["num", 4], ["num", 6], ["num", 8], ["num", 9], ["num", 10], ["num", 10], ["num", 11], ["num", 17], ["num", 17], ["num", 21], ["num", 22], ["num", 22], ["num", 25], ["num", 32], ["num", 34], ["num", 38], ["num", 46], ["num", 46], ["num", 48], ["num", 51], ["num", 58], ["num", 59], ["num", 62], ["num", 63], ["num", 64], ["num", 65], ["num", 70], ["num", 70], ["num", 72], ["num", 72], ["num", 72], ["num", 74], ["num", 77], ["num", 78], ["num", 81], ["num", 82], ["num", 83], ["num", 89], ["num", 90], ["num", 92], ["num", 95], ["num", 97]]], ["num", 43]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 3, [["num", 36], ["num", -70], ["num", 34]]]], ["MYLOGEX:-1", ["list", 3, [["num", 36], ["num", 20], ["num", -56]]]], ["MYLOGEX:2", ["list", 2, [["list", 10, [["num", -70], ["num", 78], ["num", 70], ["num", 20], ["num", -52], ["num", 36], ["num", -42], ["num", 34], ["num", -56], ["num", -94]]], ["num", 9]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:-1", ["list", 3, [["num", 0], ["num", 0], ["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 7]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["string", 16, "No Triplet Found"]]]], ["MYLOGEX:2", ["list", 2, [["list", 28, [["num", 72], ["num", 50], ["num", 10], ["num", 44], ["num", 66], ["num", 67], ["num", 76], ["num", 19], ["num", 3], ["num", 24], ["num", 76], ["num", 56], ["num", 53], ["num", 42], ["num", 15], ["num", 50], ["num", 86], ["num", 43], ["num", 77], ["num", 28], ["num", 42], ["num", 65], ["num", 92], ["num", 73], ["num", 60], ["num", 86], ["num", 52], ["num", 65]]], ["num", 21]]]]];
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
            [1, 7, 12, 18, 18, 25, 26, 28, 29, 33, 33, 37, 39, 39, 53, 54, 55, 59, 61, 63, 63, 65, 66, 68, 68, 71, 71, 77, 81, 85, 90, 93, 94, 95, 97], 18
        ],
        [
            [38, 68, 16, 96, -10, 6, 86, -42, -66, -2, -10, 48, 16, -28, 92, -24, 0, 46, -58, -58, 56, -70, 10, -2, -92, -80, 14, -78, 16, -84, -88, 42, -24, 6, 86, 82, 84], 19
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1], 6
        ],
        [
            [45], 0
        ],
        [
            [-80, -68, -54, -44, -40, -38, -32, -28, -22, -18, -12, -10, 14, 24, 38, 38, 40, 42, 46, 46, 64, 64, 66, 68, 68, 68, 70, 96], 20
        ],
        [
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0], 13
        ],
        [
            [1, 3, 4, 6, 8, 9, 10, 10, 11, 17, 17, 21, 22, 22, 25, 32, 34, 38, 46, 46, 48, 51, 58, 59, 62, 63, 64, 65, 70, 70, 72, 72, 72, 74, 77, 78, 81, 82, 83, 89, 90, 92, 95, 97], 43
        ],
        [
            [-70, 78, 70, 20, -52, 36, -42, 34, -56, -94], 9
        ],
        [
            [0, 0, 0, 0, 1, 1, 1, 1, 1], 7
        ],
        [
            [72, 50, 10, 44, 66, 67, 76, 19, 3, 24, 76, 56, 53, 42, 15, 50, 86, 43, 77, 28, 42, 65, 92, 73, 60, 86, 52, 65], 21
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
