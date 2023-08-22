
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["list", 31, ["num", 2], ["num", 7]], ["num", 30]], ["list", 3, ["list", 31, ["num", -72], ["num", 44]], ["num", 20]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 1, [["num", 2]]]], ["MYLOGEX:-1", ["list", 1, [["num", 7]]]], ["MYLOGEX:-1", ["list", 1, [["num", 8]]]], ["MYLOGEX:-1", ["list", 1, [["num", 11]]]], ["MYLOGEX:-1", ["list", 1, [["num", 11]]]], ["MYLOGEX:-1", ["list", 1, [["num", 25]]]], ["MYLOGEX:-1", ["list", 1, [["num", 28]]]], ["MYLOGEX:-1", ["list", 1, [["num", 29]]]], ["MYLOGEX:-1", ["list", 1, [["num", 30]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 41]]]], ["MYLOGEX:-1", ["list", 1, [["num", 43]]]], ["MYLOGEX:-1", ["list", 1, [["num", 46]]]], ["MYLOGEX:-1", ["list", 1, [["num", 50]]]], ["MYLOGEX:-1", ["list", 1, [["num", 57]]]], ["MYLOGEX:-1", ["list", 1, [["num", 61]]]], ["MYLOGEX:-1", ["list", 1, [["num", 61]]]], ["MYLOGEX:-1", ["list", 1, [["num", 64]]]], ["MYLOGEX:-1", ["list", 1, [["num", 65]]]], ["MYLOGEX:2", ["list", 3, [["list", 31, [["num", 2], ["num", 7], ["num", 8], ["num", 11], ["num", 11], ["num", 25], ["num", 28], ["num", 29], ["num", 30], ["num", 37], ["num", 41], ["num", 43], ["num", 46], ["num", 50], ["num", 57], ["num", 61], ["num", 61], ["num", 64], ["num", 65], ["num", 69], ["num", 78], ["num", 80], ["num", 84], ["num", 85], ["num", 85], ["num", 85], ["num", 89], ["num", 90], ["num", 94], ["num", 94], ["num", 97]]], ["num", 30], ["num", 19]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 1, [["num", -72]]]], ["MYLOGEX:-1", ["list", 1, [["num", 44]]]], ["MYLOGEX:-1", ["list", 1, [["num", -60]]]], ["MYLOGEX:-1", ["list", 1, [["num", -22]]]], ["MYLOGEX:-1", ["list", 1, [["num", -50]]]], ["MYLOGEX:-1", ["list", 1, [["num", 68]]]], ["MYLOGEX:-1", ["list", 1, [["num", -36]]]], ["MYLOGEX:-1", ["list", 1, [["num", -44]]]], ["MYLOGEX:-1", ["list", 1, [["num", -4]]]], ["MYLOGEX:-1", ["list", 1, [["num", -42]]]], ["MYLOGEX:-1", ["list", 1, [["num", 90]]]], ["MYLOGEX:-1", ["list", 1, [["num", 90]]]], ["MYLOGEX:-1", ["list", 1, [["num", -46]]]], ["MYLOGEX:-1", ["list", 1, [["num", -16]]]], ["MYLOGEX:-1", ["list", 1, [["num", -20]]]], ["MYLOGEX:-1", ["list", 1, [["num", -88]]]], ["MYLOGEX:-1", ["list", 1, [["num", 8]]]], ["MYLOGEX:-1", ["list", 1, [["num", -98]]]], ["MYLOGEX:-1", ["list", 1, [["num", -86]]]], ["MYLOGEX:-1", ["list", 1, [["num", -20]]]], ["MYLOGEX:-1", ["list", 1, [["num", 54]]]], ["MYLOGEX:-1", ["list", 1, [["num", 56]]]], ["MYLOGEX:-1", ["list", 1, [["num", 94]]]], ["MYLOGEX:-1", ["list", 1, [["num", -20]]]], ["MYLOGEX:-1", ["list", 1, [["num", -88]]]], ["MYLOGEX:-1", ["list", 1, [["num", 78]]]], ["MYLOGEX:-1", ["list", 1, [["num", 60]]]], ["MYLOGEX:2", ["list", 3, [["list", 31, [["num", -72], ["num", 44], ["num", -60], ["num", -22], ["num", -50], ["num", 68], ["num", -36], ["num", -44], ["num", -4], ["num", -42], ["num", 90], ["num", 90], ["num", -46], ["num", -16], ["num", -20], ["num", -88], ["num", 8], ["num", -98], ["num", -86], ["num", -20], ["num", 54], ["num", 56], ["num", 94], ["num", -20], ["num", -88], ["num", 78], ["num", 60], ["num", -20], ["num", -70], ["num", 82], ["num", -4]]], ["num", 20], ["num", 27]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:2", ["list", 3, [["list", 4, [["num", 0], ["num", 0], ["num", 1], ["num", 1]]], ["num", 3], ["num", 3]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["num", 54]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 29]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 71]]]], ["MYLOGEX:-1", ["list", 1, [["num", 91]]]], ["MYLOGEX:-1", ["list", 1, [["num", 79]]]], ["MYLOGEX:-1", ["list", 1, [["num", 60]]]], ["MYLOGEX:-1", ["list", 1, [["num", 38]]]], ["MYLOGEX:-1", ["list", 1, [["num", 63]]]], ["MYLOGEX:-1", ["list", 1, [["num", 54]]]], ["MYLOGEX:-1", ["list", 1, [["num", 9]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 43]]]], ["MYLOGEX:-1", ["list", 1, [["num", 12]]]], ["MYLOGEX:2", ["list", 3, [["list", 27, [["num", 54], ["num", 37], ["num", 29], ["num", 37], ["num", 71], ["num", 91], ["num", 79], ["num", 60], ["num", 38], ["num", 63], ["num", 54], ["num", 9], ["num", 14], ["num", 43], ["num", 12], ["num", 43], ["num", 12], ["num", 98], ["num", 46], ["num", 62], ["num", 89], ["num", 56], ["num", 44], ["num", 82], ["num", 11], ["num", 17], ["num", 94]]], ["num", 17], ["num", 15]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["num", -94]]]], ["MYLOGEX:-1", ["list", 1, [["num", -94]]]], ["MYLOGEX:-1", ["list", 1, [["num", -92]]]], ["MYLOGEX:-1", ["list", 1, [["num", -82]]]], ["MYLOGEX:-1", ["list", 1, [["num", -80]]]], ["MYLOGEX:-1", ["list", 1, [["num", -70]]]], ["MYLOGEX:-1", ["list", 1, [["num", -70]]]], ["MYLOGEX:-1", ["list", 1, [["num", -64]]]], ["MYLOGEX:-1", ["list", 1, [["num", -62]]]], ["MYLOGEX:-1", ["list", 1, [["num", -60]]]], ["MYLOGEX:-1", ["list", 1, [["num", -60]]]], ["MYLOGEX:-1", ["list", 1, [["num", -58]]]], ["MYLOGEX:-1", ["list", 1, [["num", -52]]]], ["MYLOGEX:-1", ["list", 1, [["num", -14]]]], ["MYLOGEX:-1", ["list", 1, [["num", -8]]]], ["MYLOGEX:-1", ["list", 1, [["num", -6]]]], ["MYLOGEX:2", ["list", 3, [["list", 31, [["num", -94], ["num", -94], ["num", -92], ["num", -82], ["num", -80], ["num", -70], ["num", -70], ["num", -64], ["num", -62], ["num", -60], ["num", -60], ["num", -58], ["num", -52], ["num", -14], ["num", -8], ["num", -6], ["num", 2], ["num", 4], ["num", 12], ["num", 16], ["num", 18], ["num", 20], ["num", 36], ["num", 38], ["num", 42], ["num", 48], ["num", 60], ["num", 66], ["num", 78], ["num", 78], ["num", 84]]], ["num", 28], ["num", 16]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:2", ["list", 3, [["list", 30, [["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 1]]], ["num", 22], ["num", 21]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 2]]]], ["MYLOGEX:-1", ["list", 1, [["num", 11]]]], ["MYLOGEX:-1", ["list", 1, [["num", 18]]]], ["MYLOGEX:-1", ["list", 1, [["num", 25]]]], ["MYLOGEX:-1", ["list", 1, [["num", 30]]]], ["MYLOGEX:-1", ["list", 1, [["num", 34]]]], ["MYLOGEX:-1", ["list", 1, [["num", 43]]]], ["MYLOGEX:-1", ["list", 1, [["num", 46]]]], ["MYLOGEX:-1", ["list", 1, [["num", 49]]]], ["MYLOGEX:-1", ["list", 1, [["num", 55]]]], ["MYLOGEX:-1", ["list", 1, [["num", 58]]]], ["MYLOGEX:-1", ["list", 1, [["num", 58]]]], ["MYLOGEX:-1", ["list", 1, [["num", 60]]]], ["MYLOGEX:-1", ["list", 1, [["num", 70]]]], ["MYLOGEX:-1", ["list", 1, [["num", 78]]]], ["MYLOGEX:-1", ["list", 1, [["num", 85]]]], ["MYLOGEX:2", ["list", 3, [["list", 19, [["num", 1], ["num", 2], ["num", 11], ["num", 18], ["num", 25], ["num", 30], ["num", 34], ["num", 43], ["num", 46], ["num", 49], ["num", 55], ["num", 58], ["num", 58], ["num", 60], ["num", 70], ["num", 78], ["num", 85], ["num", 88], ["num", 99]]], ["num", 12], ["num", 17]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 1, [["num", -48]]]], ["MYLOGEX:-1", ["list", 1, [["num", 46]]]], ["MYLOGEX:-1", ["list", 1, [["num", -6]]]], ["MYLOGEX:-1", ["list", 1, [["num", 26]]]], ["MYLOGEX:-1", ["list", 1, [["num", -62]]]], ["MYLOGEX:-1", ["list", 1, [["num", 44]]]], ["MYLOGEX:-1", ["list", 1, [["num", 60]]]], ["MYLOGEX:-1", ["list", 1, [["num", -84]]]], ["MYLOGEX:-1", ["list", 1, [["num", -20]]]], ["MYLOGEX:-1", ["list", 1, [["num", 96]]]], ["MYLOGEX:-1", ["list", 1, [["num", -60]]]], ["MYLOGEX:-1", ["list", 1, [["num", -70]]]], ["MYLOGEX:-1", ["list", 1, [["num", -90]]]], ["MYLOGEX:-1", ["list", 1, [["num", -92]]]], ["MYLOGEX:-1", ["list", 1, [["num", -70]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 60]]]], ["MYLOGEX:-1", ["list", 1, [["num", 54]]]], ["MYLOGEX:-1", ["list", 1, [["num", 50]]]], ["MYLOGEX:-1", ["list", 1, [["num", 20]]]], ["MYLOGEX:-1", ["list", 1, [["num", -2]]]], ["MYLOGEX:2", ["list", 3, [["list", 24, [["num", -48], ["num", 46], ["num", -6], ["num", 26], ["num", -62], ["num", 44], ["num", 60], ["num", -84], ["num", -20], ["num", 96], ["num", -60], ["num", -70], ["num", -90], ["num", -92], ["num", -70], ["num", 14], ["num", 60], ["num", 54], ["num", 50], ["num", 20], ["num", -2], ["num", -36], ["num", -12], ["num", 18]]], ["num", 19], ["num", 21]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 3, [["list", 1, [["num", 0]]], ["num", 0], ["num", 0]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["num", 4]]]], ["MYLOGEX:-1", ["list", 1, [["num", 99]]]], ["MYLOGEX:-1", ["list", 1, [["num", 78]]]], ["MYLOGEX:-1", ["list", 1, [["num", 78]]]], ["MYLOGEX:-1", ["list", 1, [["num", 91]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 32]]]], ["MYLOGEX:-1", ["list", 1, [["num", 3]]]], ["MYLOGEX:-1", ["list", 1, [["num", 23]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 19]]]], ["MYLOGEX:-1", ["list", 1, [["num", 45]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 55]]]], ["MYLOGEX:-1", ["list", 1, [["num", 74]]]], ["MYLOGEX:-1", ["list", 1, [["num", 15]]]], ["MYLOGEX:-1", ["list", 1, [["num", 68]]]], ["MYLOGEX:-1", ["list", 1, [["num", 79]]]], ["MYLOGEX:-1", ["list", 1, [["num", 88]]]], ["MYLOGEX:-1", ["list", 1, [["num", 31]]]], ["MYLOGEX:-1", ["list", 1, [["num", 20]]]], ["MYLOGEX:-1", ["list", 1, [["num", 72]]]], ["MYLOGEX:-1", ["list", 1, [["num", 55]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 72]]]], ["MYLOGEX:-1", ["list", 1, [["num", 81]]]], ["MYLOGEX:-1", ["list", 1, [["num", 83]]]], ["MYLOGEX:2", ["list", 3, [["list", 30, [["num", 4], ["num", 99], ["num", 78], ["num", 78], ["num", 91], ["num", 14], ["num", 32], ["num", 3], ["num", 23], ["num", 37], ["num", 19], ["num", 45], ["num", 14], ["num", 55], ["num", 74], ["num", 15], ["num", 68], ["num", 79], ["num", 88], ["num", 31], ["num", 20], ["num", 72], ["num", 55], ["num", 37], ["num", 72], ["num", 81], ["num", 83], ["num", 53], ["num", 32], ["num", 64]]], ["num", 22], ["num", 27]]]]];
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
            [2, 7, 8, 11, 11, 25, 28, 29, 30, 37, 41, 43, 46, 50, 57, 61, 61, 64, 65, 69, 78, 80, 84, 85, 85, 85, 89, 90, 94, 94, 97], 30, 19
        ],
        [
            [-72, 44, -60, -22, -50, 68, -36, -44, -4, -42, 90, 90, -46, -16, -20, -88, 8, -98, -86, -20, 54, 56, 94, -20, -88, 78, 60, -20, -70, 82, -4], 20, 27
        ],
        [
            [0, 0, 1, 1], 3, 3
        ],
        [
            [54, 37, 29, 37, 71, 91, 91, 79, 60, 38, 63, 54, 91, 9, 14, 43, 12, 98, 46, 62, 89, 56, 44, 82, 11, 17, 94], 17, 15
        ],
        [
            [-94, -94, -92, -82, -80, -70, -70, -64, -62, -60, -60, -58, -52, -14, -8, -6, 2, 4, 12, 16, 18, 20, 36, 38, 42, 48, 60, 66, 78, 78, 84], 28, 16
        ],
        [
            [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1], 22, 21
        ],
        [
            [1, 2, 11, 18, 25, 30, 34, 43, 46, 49, 55, 58, 58, 60, 70, 78, 85, 88, 99], 12, 17
        ],
        [
            [-48, 46, -6, 26, -62, 44, 60, -84, -20, 96, -60, -70, -90, -92, -70, 14, 60, 54, 50, 20, -2, -36, -12, 18], 19, 21
        ],
        [
            [0], 0, 0
        ],
        [
            [4, 99, 78, 78, 91, 14, 32, 3, 23, 37, 19, 45, 14, 55, 74, 15, 68, 79, 88, 31, 20, 72, 55, 37, 72, 81, 83, 53, 32, 64], 22, 27
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
