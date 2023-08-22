
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 1, ["list", 11, ["string", 1, "B"], ["string", 1, "I"]], "EMPTY"], ["list", 1, ["list", 49, ["string", 1, "7"], ["string", 1, "0"]], "EMPTY"]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["bool", true], ["string", 49, "7025114480264406717986183064463131994744314294128"]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["bool", true], ["string", 35, "oSRmiSzzWXAAMLVQFi iGDTamSNsjPEnQam"]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["bool", true], ["string", 7, "0010001"]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["bool", true], ["string", 23, "54475518669966874073069"]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["bool", false]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["bool", true], ["string", 19, "qaUNVvURxiSNVVjreMN"]]]]];
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
            ["B", "I", "K", "M", "Q", "Y", "b", "e", "e", "t", "x"]
        ],
        [
            ["7", "0", "2", "5", "1", "1", "4", "4", "8", "0", "2", "6", "4", "4", "0", "6", "7", "1", "7", "9", "8", "6", "1", "8", "3", "0", "6", "4", "4", "6", "3", "1", "3", "1", "9", "9", "4", "7", "4", "4", "3", "1", "4", "2", "9", "8", "1", "2", "4"]
        ],
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        [
            ["o", "S", "R", "m", "i", "S", "z", "z", "W", "X", "A", "A", "M", "L", "V", "Q", "F", "i", " ", "i", "G", "D", "T", "a", "m", "S", "N", "s", "j", "P", "E", "n", "a", "Q", "m"]
        ],
        [
            ["0", "0", "0", "0", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "6", "7", "7", "8", "8", "8", "9", "9", "9", "9", "9"]
        ],
        [
            ["0", "0", "1", "0", "1", "0", "0"]
        ],
        [
            [" ", "B", "D", "D", "E", "E", "G", "J", "J", "K", "L", "L", "L", "M", "N", "N", "P", "Q", "V", "W", "W", "X", "Y", "a", "b", "b", "d", "f", "h", "i", "j", "j", "k", "k", "l", "m", "m", "m", "n", "p", "r", "s", "u", "v", "v", "w", "x"]
        ],
        [
            ["5", "4", "4", "7", "5", "5", "1", "8", "6", "6", "9", "9", "6", "6", "8", "7", "4", "0", "7", "3", "6", "0", "9"]
        ],
        [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
        ],
        [
            ["q", "a", "U", "N", "V", "v", "U", "R", "x", "i", "S", "N", "V", "V", "j", "r", "e", "N", "M"]
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
