
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 30, ["num", 3], ["num", 5]], ["num", 28]], ["list", 2, ["list", 36, ["num", 80], ["num", -70]], ["num", 18]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 30, [["num", 3], ["num", 5], ["num", 6], ["num", 9], ["num", 13], ["num", 15], ["num", 17], ["num", 17], ["num", 25], ["num", 27], ["num", 28], ["num", 32], ["num", 37], ["num", 38], ["num", 51], ["num", 53], ["num", 57], ["num", 63], ["num", 63], ["num", 67], ["num", 69], ["num", 80], ["num", 80], ["num", 81], ["num", 81], ["num", 86], ["num", 88], ["num", 92], ["num", 96], ["num", 98]]], ["num", 28]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 36, [["num", -96], ["num", -86], ["num", -80], ["num", -70], ["num", -66], ["num", -62], ["num", -60], ["num", -48], ["num", -46], ["num", -8], ["num", -2], ["num", 32], ["num", 38], ["num", 64], ["num", 66], ["num", 66], ["num", 74], ["num", 80], ["num", 80], ["num", 18], ["num", -48], ["num", -90], ["num", -72], ["num", -62], ["num", 84], ["num", -92], ["num", -96], ["num", -22], ["num", -62], ["num", 20], ["num", 54], ["num", 88], ["num", -62], ["num", 70], ["num", 6], ["num", -36]]], ["num", 18]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 7, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 4, [["num", 1], ["num", 51], ["num", 56], ["num", 89]]], ["num", 4]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", -98], ["num", -98], ["num", -88], ["num", -74], ["num", -72], ["num", -64], ["num", -56], ["num", -42], ["num", -32], ["num", -28], ["num", -26], ["num", -22], ["num", -14], ["num", -6], ["num", -4], ["num", -2], ["num", 0], ["num", 20], ["num", 42], ["num", 62], ["num", 84], ["num", 84], ["num", 90], ["num", 94], ["num", 98]]], ["num", 25]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 21, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 21]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 3], ["num", 6], ["num", 10], ["num", 11], ["num", 12], ["num", 13], ["num", 14], ["num", 19], ["num", 19], ["num", 20], ["num", 20], ["num", 23], ["num", 28], ["num", 37], ["num", 38], ["num", 38], ["num", 39], ["num", 41], ["num", 43], ["num", 45], ["num", 48], ["num", 49], ["num", 51], ["num", 52], ["num", 53], ["num", 55], ["num", 56], ["num", 56], ["num", 58], ["num", 62], ["num", 65], ["num", 69], ["num", 73], ["num", 74], ["num", 75], ["num", 82], ["num", 89], ["num", 97], ["num", 97], ["num", 99]]], ["num", 28]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 44, [["num", -92], ["num", -78], ["num", -76], ["num", -60], ["num", -50], ["num", -44], ["num", -42], ["num", -40], ["num", -38], ["num", -36], ["num", -34], ["num", -28], ["num", -26], ["num", -6], ["num", -6], ["num", 4], ["num", 10], ["num", 12], ["num", 16], ["num", 18], ["num", 18], ["num", 24], ["num", 30], ["num", 38], ["num", 42], ["num", 48], ["num", 52], ["num", 54], ["num", 54], ["num", 56], ["num", 56], ["num", 58], ["num", 60], ["num", 66], ["num", 76], ["num", 98], ["num", 90], ["num", 72], ["num", -40], ["num", 40], ["num", -62], ["num", -64], ["num", -54], ["num", -4]]], ["num", 36]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 23, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 24, [["num", 4], ["num", 7], ["num", 16], ["num", 20], ["num", 32], ["num", 36], ["num", 44], ["num", 46], ["num", 52], ["num", 57], ["num", 58], ["num", 59], ["num", 61], ["num", 65], ["num", 70], ["num", 73], ["num", 77], ["num", 85], ["num", 92], ["num", 92], ["num", 30], ["num", 41], ["num", 43], ["num", 88]]], ["num", 20]]]]];
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
            [3, 5, 6, 9, 13, 15, 17, 17, 25, 27, 28, 32, 37, 38, 51, 53, 57, 63, 63, 67, 69, 80, 80, 81, 81, 86, 88, 92, 96, 98], 28
        ],
        [
            [80, -70, 38, -48, -96, -66, 64, -8, 66, -2, 66, -62, -60, 32, 74, -86, -46, -80, 80, 18, -48, -90, -72, -62, 84, -92, -96, -22, -62, 20, 54, 88, -62, 70, 6, -36], 18
        ],
        [
            [0, 0, 0, 0, 1, 1, 1], 6
        ],
        [
            [89, 51, 56, 1], 4
        ],
        [
            [-98, -98, -88, -74, -72, -64, -56, -42, -32, -28, -26, -22, -14, -6, -4, -2, 0, 20, 42, 62, 84, 84, 90, 94, 98], 25
        ],
        [
            [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1], 21
        ],
        [
            [3, 6, 10, 11, 12, 13, 14, 19, 19, 20, 20, 23, 28, 37, 38, 38, 39, 41, 43, 45, 48, 49, 51, 52, 53, 55, 56, 56, 58, 62, 65, 69, 73, 74, 75, 82, 89, 97, 97, 99], 28
        ],
        [
            [30, 48, 38, 4, 66, 54, -34, 56, 42, -36, -6, -28, 54, -38, 18, 58, -44, -76, 56, 98, 60, -6, -26, 52, -50, 76, 18, -78, -60, 12, 16, 10, -40, 24, -42, -92, 90, 72, -40, 40, -62, -64, -54, -4], 36
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 12
        ],
        [
            [46, 77, 73, 20, 7, 59, 58, 92, 44, 61, 16, 65, 36, 32, 52, 92, 70, 85, 57, 4, 30, 41, 43, 88], 20
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
