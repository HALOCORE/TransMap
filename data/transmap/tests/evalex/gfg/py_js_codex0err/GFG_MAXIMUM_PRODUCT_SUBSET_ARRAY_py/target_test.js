
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 3, ["num", 22], ["num", 62]], ["num", 2]], ["list", 2, ["list", 44, ["num", -96], ["num", 30]], ["num", 41]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1364]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 302250068531776034222739897357475499578036828475291074560000000]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 689508348936863540089694008320000]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 510537135542353920]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 7895685600]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 15927273509513644992364544]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 180384264027136163328990905457639350599680000000]]];
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
            [22, 62, 97], 2
        ],
        [
            [-96, 30, 34, 16, 82, 12, 68, 6, -2, -78, -74, -52, 38, 62, 20, 4, -32, 44, -34, 12, -44, -66, -94, 24, -86, 56, -20, -62, 90, -16, -2, 54, 80, -16, -56, -98, 20, 84, 30, -44, -78, 66, -62, 18], 41
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 43
        ],
        [
            [9, 1, 90, 53, 67, 14, 42, 52, 55, 52, 86, 99, 43, 74, 48, 71, 55, 85, 87, 73, 41, 55, 52], 20
        ],
        [
            [-92, -78, -74, -72, -70, -66, -46, -44, -42, -34, -32, -30, -10, 18, 30, 34, 56, 64, 66], 10
        ],
        [
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], 16
        ],
        [
            [1, 2, 3, 18, 20, 33, 38, 53, 55, 56, 67, 80, 83, 87, 90, 97, 98], 9
        ],
        [
            [-78, -14, 20, 70, -40, -96, 78, 70, -36, -30, 24, -36, 86, 42, 24, 86, -52, -34, 72, -58, -36, -24, -10, -68, -20, -64, 34, 42, -2, -8], 16
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11
        ],
        [
            [1, 6, 32, 4, 63, 85, 48, 64, 11, 29, 77, 59, 1, 99, 17, 17, 38, 49, 78, 82, 50, 87, 75, 18, 75, 73, 98, 17, 27, 51, 4, 98, 96, 6, 74, 5], 32
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
