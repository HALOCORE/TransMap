
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 4, ["list", 9, ["string", 1, "A"], ["string", 1, "D"]], ["list", 9, ["string", 1, "D"], ["string", 1, "F"]]], ["list", 4, ["list", 42, ["string", 1, "9"], ["string", 1, "3"]], ["list", 42, ["string", 1, "5"], ["string", 1, "5"]]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 29]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 7]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 1]]];
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
            ["A", "D", "E", "E", "L", "L", "T", "r", "x"],
            ["D", "F", "H", "O", "g", "o", "u", "v", "w"], 4, 4
        ],
        [
            ["9", "3", "4", "8", "7", "6", "3", "8", "3", "3", "5", "3", "5", "4", "2", "5", "5", "3", "6", "2", "1", "7", "4", "2", "7", "3", "2", "1", "3", "7", "6", "5", "0", "6", "3", "8", "5", "1", "7", "9", "2", "7"],
            ["5", "5", "3", "7", "8", "0", "9", "8", "5", "8", "5", "1", "4", "4", "0", "2", "9", "2", "3", "1", "1", "3", "6", "1", "2", "0", "5", "4", "3", "7", "5", "5", "8", "1", "1", "4", "8", "1", "7", "5", "5", "4"], 41, 37
        ],
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], 35, 29
        ],
        [
            ["W", "X", "P", "u", "s", "k", "O", "y", "Q", "i", "t", "z", "F", "f", "s", "N", "K", "m", "I", "M", "g", "e", "E", "P", "b", "Y", "c", "O", " ", "G", "F", "x"],
            ["e", "R", "P", "W", "d", "a", "A", "j", "H", "v", "T", "w", "x", "I", "d", "o", "z", "K", "B", "M", "J", "L", "a", " ", "T", "L", "V", "t", "M", "U", "z", "R"], 31, 18
        ],
        [
            ["0", "1", "2", "4", "5", "7", "7", "7", "8", "8", "9", "9", "9"],
            ["0", "0", "2", "2", "2", "3", "4", "6", "6", "7", "8", "9", "9"], 12, 8
        ],
        [
            ["0", "0", "1"],
            ["0", "0", "1"], 1, 1
        ],
        [
            ["A", "C", "F", "G", "G", "H", "I", "K", "K", "N", "O", "Q", "R", "V", "V", "W", "Y", "a", "a", "c", "d", "k", "k", "m", "o", "p", "t", "u", "y", "y", "y", "z"],
            [" ", " ", "B", "C", "C", "C", "D", "E", "I", "J", "M", "N", "P", "T", "U", "U", "V", "V", "W", "W", "Y", "b", "c", "e", "i", "o", "p", "r", "t", "y", "y", "z"], 21, 23
        ],
        [
            ["0", "0", "0", "2", "8", "3", "5", "1", "0", "7", "7", "9", "9", "4", "8", "9", "5"],
            ["8", "5", "8", "7", "1", "4", "0", "2", "2", "7", "2", "4", "0", "8", "3", "8", "7"], 13, 12
        ],
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
            ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1"], 9, 9
        ],
        [
            ["B", "o", "R", "k", "Y", "M", "g", "b", "h", "A", "i", "X", "p", "i", "j", "f", "V", "n", "d", "P", "T", "U", "f", "G", "M", "W", "g", "a", "C", "E", "v", "C", " "],
            ["F", "h", "G", "H", "Q", "Q", "K", "g", "k", "u", "l", "c", "c", "o", "n", "G", "i", "Z", "d", "b", "c", "b", "v", "t", "S", "t", "P", "A", "K", "g", "G", "i", "m"], 19, 32
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
