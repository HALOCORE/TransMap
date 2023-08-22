
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["num", 3287.4842316041018], ["num", 4503.332888443404]], ["list", 3, ["num", -3707.427510963942], ["num", -6671.335781753231]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 531379639833.05774]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -287348660250.6971]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 379127256148.80035]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -108762980362.90225]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1650704251171.7974]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -1966615618344.9363]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 305534635263.3107]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -235411379188.32523]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 201639162973.6474]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -1567753314543.6833]]];
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
        [3287.4842316041018, 4503.332888443404, 8590.24729914204],
        [-3707.427510963942, -6671.335781753231, -2780.4954870801926],
        [8980.643174783816, 3584.781688607942, 2818.469507143102],
        [-2698.0187368852694, -1004.7289573934537, -9602.530725071243],
        [8627.156664162168, 9572.27618966978, 4783.930377855004],
        [-7316.329924623669, -6591.043206581106, -9760.465488363216],
        [7857.3846206400485, 3671.761679299217, 2534.5825334137794],
        [-6502.657905007728, -1412.2240121470609, -6135.238350044512],
        [4468.400513325576, 2272.1999139470304, 4753.075799180736],
        [-7231.864791620428, -8036.087711033032, -6456.263512521035]
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
