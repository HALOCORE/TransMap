
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 14, ["num", 10], ["num", 17]], ["num", 12]], ["list", 2, ["list", 25, ["num", -34], ["num", 10]], ["num", 12]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", 58]]]], ["MYLOGEX:2", ["list", 2, [["list", 14, [["num", 10], ["num", 17], ["num", 28], ["num", 42], ["num", 42], ["num", 45], ["num", 49], ["num", 54], ["num", 55], ["num", 58], ["num", 80], ["num", 82], ["num", 88], ["num", 91]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", 58]]]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", -34], ["num", 10], ["num", 52], ["num", -38], ["num", 58], ["num", -14], ["num", -26], ["num", 96], ["num", 22], ["num", 74], ["num", -28], ["num", 20], ["num", 78], ["num", 94], ["num", -38], ["num", -26], ["num", 58], ["num", 10], ["num", -56], ["num", 10], ["num", 50], ["num", 66], ["num", -60], ["num", -96], ["num", 74]]], ["num", 12]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", -9223372036854775807]]]], ["MYLOGEX:2", ["list", 2, [["list", 8, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", 77]]]], ["MYLOGEX:2", ["list", 2, [["list", 32, [["num", 33], ["num", 24], ["num", 18], ["num", 31], ["num", 49], ["num", 18], ["num", 70], ["num", 64], ["num", 66], ["num", 13], ["num", 65], ["num", 62], ["num", 6], ["num", 39], ["num", 77], ["num", 59], ["num", 28], ["num", 63], ["num", 32], ["num", 88], ["num", 59], ["num", 84], ["num", 20], ["num", 2], ["num", 42], ["num", 29], ["num", 99], ["num", 40], ["num", 9], ["num", 41], ["num", 47], ["num", 46]]], ["num", 25]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["string", 15, " Invalid Input "]]]], ["MYLOGEX:2", ["list", 2, [["list", 1, [["num", 40]]], ["num", 0]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 1, [["string", 15, " Invalid Input "]]]], ["MYLOGEX:2", ["list", 2, [["list", 4, [["num", 0], ["num", 1], ["num", 0], ["num", 0]]], ["num", 2]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", 89]]]], ["MYLOGEX:2", ["list", 2, [["list", 27, [["num", 7], ["num", 7], ["num", 10], ["num", 12], ["num", 20], ["num", 21], ["num", 27], ["num", 32], ["num", 37], ["num", 40], ["num", 43], ["num", 44], ["num", 44], ["num", 45], ["num", 47], ["num", 47], ["num", 50], ["num", 53], ["num", 56], ["num", 60], ["num", 68], ["num", 70], ["num", 81], ["num", 89], ["num", 92], ["num", 95], ["num", 95]]], ["num", 26]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", 88]]]], ["MYLOGEX:2", ["list", 2, [["list", 49, [["num", 94], ["num", -96], ["num", 52], ["num", -78], ["num", -52], ["num", -14], ["num", 78], ["num", 66], ["num", 74], ["num", -80], ["num", 82], ["num", 90], ["num", -40], ["num", -84], ["num", 44], ["num", -72], ["num", -18], ["num", -98], ["num", 84], ["num", -22], ["num", 32], ["num", 18], ["num", -72], ["num", 94], ["num", -10], ["num", 84], ["num", 52], ["num", 2], ["num", -48], ["num", 80], ["num", -68], ["num", 64], ["num", -80], ["num", -92], ["num", -18], ["num", -50], ["num", 88], ["num", -98], ["num", -98], ["num", -50], ["num", 60], ["num", -20], ["num", -38], ["num", 12], ["num", -54], ["num", 30], ["num", -54], ["num", -32], ["num", -42]]], ["num", 43]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", -9223372036854775807]]]], ["MYLOGEX:2", ["list", 2, [["list", 39, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 24]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 3, [["string", 17, "The Third Largest"], ["string", 10, "element is"], ["num", 88]]]], ["MYLOGEX:2", ["list", 2, [["list", 40, [["num", 43], ["num", 88], ["num", 28], ["num", 24], ["num", 58], ["num", 40], ["num", 33], ["num", 90], ["num", 69], ["num", 37], ["num", 13], ["num", 9], ["num", 28], ["num", 83], ["num", 65], ["num", 63], ["num", 96], ["num", 36], ["num", 64], ["num", 20], ["num", 21], ["num", 90], ["num", 60], ["num", 18], ["num", 58], ["num", 18], ["num", 68], ["num", 58], ["num", 50], ["num", 13], ["num", 79], ["num", 92], ["num", 3], ["num", 63], ["num", 19], ["num", 20], ["num", 79], ["num", 68], ["num", 83], ["num", 47]]], ["num", 24]]]]];
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
            [10, 17, 28, 42, 42, 45, 49, 54, 55, 58, 80, 82, 88, 91], 12
        ],
        [
            [-34, 10, 52, -38, 58, -14, -26, 96, 22, 74, -28, 20, 78, 94, -38, -26, 58, 10, -56, 10, 50, 66, -60, -96, 74], 12
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1], 6
        ],
        [
            [33, 24, 18, 31, 49, 18, 70, 64, 66, 13, 65, 62, 6, 39, 77, 59, 28, 63, 32, 88, 59, 84, 20, 2, 42, 29, 99, 40, 9, 41, 47, 46], 25
        ],
        [
            [40], 0
        ],
        [
            [0, 1, 0, 0], 2
        ],
        [
            [7, 7, 10, 12, 20, 21, 27, 32, 37, 40, 43, 44, 44, 45, 47, 47, 50, 53, 56, 60, 68, 70, 81, 89, 92, 95, 95], 26
        ],
        [
            [94, -96, 52, -78, -52, -14, 78, 66, 74, -80, 82, 90, -40, -84, 44, -72, -18, -98, 84, -22, 32, 18, -72, 94, -10, 84, 52, 2, -48, 80, -68, 64, -80, -92, -18, -50, 88, -98, -98, -50, 60, -20, -38, 12, -54, 30, -54, -32, -42], 43
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24
        ],
        [
            [43, 88, 28, 24, 58, 40, 33, 90, 69, 37, 13, 9, 28, 83, 65, 63, 96, 36, 64, 20, 21, 90, 60, 18, 58, 18, 68, 58, 50, 13, 79, 92, 3, 63, 19, 20, 79, 68, 83, 47], 24
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
