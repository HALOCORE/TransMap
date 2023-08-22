
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 1, ["list", 13, ["string", 1, " "], ["string", 1, "G"]], "EMPTY"], ["list", 1, ["list", 26, ["string", 1, "6"], ["string", 1, "4"]], "EMPTY"]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 1, [["list", 13, [["string", 1, "p"], ["string", 1, "m"], ["string", 1, "l"], ["string", 1, "j"], ["string", 1, "e"], ["string", 1, "c"], ["string", 1, "S"], ["string", 1, "S"], ["string", 1, "O"], ["string", 1, "N"], ["string", 1, "I"], ["string", 1, "G"], ["string", 1, " "]]]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 1, [["list", 26, [["string", 1, "1"], ["string", 1, "5"], ["string", 1, "5"], ["string", 1, "6"], ["string", 1, "5"], ["string", 1, "0"], ["string", 1, "6"], ["string", 1, "6"], ["string", 1, "8"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "8"], ["string", 1, "3"], ["string", 1, "8"], ["string", 1, "5"], ["string", 1, "1"], ["string", 1, "6"], ["string", 1, "7"], ["string", 1, "2"], ["string", 1, "1"], ["string", 1, "3"], ["string", 1, "9"], ["string", 1, "9"], ["string", 1, "7"], ["string", 1, "4"], ["string", 1, "6"]]]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 1, [["list", 22, [["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"]]]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 1, [["list", 31, [["string", 1, "g"], ["string", 1, "z"], ["string", 1, "A"], ["string", 1, "S"], ["string", 1, "D"], ["string", 1, "A"], ["string", 1, "x"], ["string", 1, "t"], ["string", 1, "S"], ["string", 1, "M"], ["string", 1, " "], ["string", 1, "B"], ["string", 1, "e"], ["string", 1, "p"], ["string", 1, "O"], ["string", 1, "m"], ["string", 1, "D"], ["string", 1, "b"], ["string", 1, "B"], ["string", 1, "H"], ["string", 1, "I"], ["string", 1, "L"], ["string", 1, "p"], ["string", 1, "G"], ["string", 1, "w"], ["string", 1, "r"], ["string", 1, "R"], ["string", 1, "V"], ["string", 1, "P"], ["string", 1, "o"], ["string", 1, "j"]]]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 1, [["list", 42, [["string", 1, "9"], ["string", 1, "9"], ["string", 1, "9"], ["string", 1, "9"], ["string", 1, "8"], ["string", 1, "8"], ["string", 1, "8"], ["string", 1, "7"], ["string", 1, "6"], ["string", 1, "6"], ["string", 1, "6"], ["string", 1, "6"], ["string", 1, "5"], ["string", 1, "5"], ["string", 1, "5"], ["string", 1, "5"], ["string", 1, "5"], ["string", 1, "4"], ["string", 1, "4"], ["string", 1, "4"], ["string", 1, "4"], ["string", 1, "4"], ["string", 1, "3"], ["string", 1, "3"], ["string", 1, "3"], ["string", 1, "3"], ["string", 1, "2"], ["string", 1, "2"], ["string", 1, "2"], ["string", 1, "2"], ["string", 1, "2"], ["string", 1, "2"], ["string", 1, "2"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"]]]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 1, [["list", 2, [["string", 1, "1"], ["string", 1, "1"]]]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 1, [["list", 38, [["string", 1, "z"], ["string", 1, "z"], ["string", 1, "z"], ["string", 1, "u"], ["string", 1, "u"], ["string", 1, "u"], ["string", 1, "p"], ["string", 1, "p"], ["string", 1, "p"], ["string", 1, "o"], ["string", 1, "m"], ["string", 1, "l"], ["string", 1, "j"], ["string", 1, "j"], ["string", 1, "h"], ["string", 1, "f"], ["string", 1, "e"], ["string", 1, "e"], ["string", 1, "c"], ["string", 1, "c"], ["string", 1, "b"], ["string", 1, "a"], ["string", 1, "Z"], ["string", 1, "X"], ["string", 1, "W"], ["string", 1, "W"], ["string", 1, "V"], ["string", 1, "U"], ["string", 1, "U"], ["string", 1, "T"], ["string", 1, "S"], ["string", 1, "R"], ["string", 1, "Q"], ["string", 1, "L"], ["string", 1, "K"], ["string", 1, "J"], ["string", 1, "E"], ["string", 1, "E"]]]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 1, [["list", 27, [["string", 1, "3"], ["string", 1, "5"], ["string", 1, "9"], ["string", 1, "9"], ["string", 1, "8"], ["string", 1, "8"], ["string", 1, "1"], ["string", 1, "9"], ["string", 1, "7"], ["string", 1, "3"], ["string", 1, "7"], ["string", 1, "4"], ["string", 1, "5"], ["string", 1, "2"], ["string", 1, "7"], ["string", 1, "4"], ["string", 1, "5"], ["string", 1, "6"], ["string", 1, "4"], ["string", 1, "0"], ["string", 1, "7"], ["string", 1, "7"], ["string", 1, "8"], ["string", 1, "5"], ["string", 1, "9"], ["string", 1, "9"], ["string", 1, "5"]]]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 1, [["list", 20, [["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "1"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"], ["string", 1, "0"]]]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 1, [["list", 27, [["string", 1, "w"], ["string", 1, "a"], ["string", 1, "A"], ["string", 1, " "], ["string", 1, "i"], ["string", 1, "y"], ["string", 1, "b"], ["string", 1, "T"], ["string", 1, "A"], ["string", 1, "O"], ["string", 1, "J"], ["string", 1, "P"], ["string", 1, "g"], ["string", 1, "P"], ["string", 1, "e"], ["string", 1, "C"], ["string", 1, "w"], ["string", 1, "h"], ["string", 1, "B"], ["string", 1, "B"], ["string", 1, "Q"], ["string", 1, "W"], ["string", 1, "Y"], ["string", 1, "C"], ["string", 1, "z"], ["string", 1, "m"], ["string", 1, "x"]]]]]]];
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
            [" ", "G", "I", "N", "O", "S", "S", "c", "e", "j", "l", "m", "p"]
        ],
        [
            ["6", "4", "7", "9", "9", "3", "1", "2", "7", "6", "1", "5", "8", "3", "8", "1", "1", "8", "6", "6", "0", "5", "6", "5", "5", "1"]
        ],
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        [
            ["j", "o", "P", "V", "R", "r", "w", "G", "p", "L", "I", "H", "B", "b", "D", "m", "O", "p", "e", "B", " ", "M", "S", "t", "x", "A", "D", "S", "A", "z", "g"]
        ],
        [
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7", "8", "8", "8", "9", "9", "9", "9"]
        ],
        [
            ["1", "1"]
        ],
        [
            ["E", "E", "J", "K", "L", "Q", "R", "S", "T", "U", "U", "V", "W", "W", "X", "Z", "a", "b", "c", "c", "e", "e", "f", "h", "j", "j", "l", "m", "o", "p", "p", "p", "u", "u", "u", "z", "z", "z"]
        ],
        [
            ["5", "9", "9", "5", "8", "7", "7", "0", "4", "6", "5", "4", "7", "2", "5", "4", "7", "3", "7", "9", "1", "8", "8", "9", "9", "5", "3"]
        ],
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        [
            ["x", "m", "z", "C", "Y", "W", "Q", "B", "B", "h", "w", "C", "e", "P", "g", "P", "J", "O", "A", "T", "b", "y", "i", " ", "A", "a", "w"]
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
