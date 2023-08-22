
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["num", 0]], ["MYLOGEX:1", ["num", 309]], ["MYLOGAP:0", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGAP:0", ["num", 2]], ["MYLOGEX:1", ["num", 454]], ["MYLOGAP:0", ["num", 3]], ["MYLOGEX:1", ["num", 0]], ["MYLOGAP:0", ["num", 4]], ["MYLOGEX:1", ["num", 60]], ["MYLOGAP:0", ["num", 5]], ["MYLOGEX:1", ["num", 20]], ["MYLOGAP:0", ["num", 6]], ["MYLOGEX:1", ["num", 185]], ["MYLOGAP:0", ["num", 7]], ["MYLOGEX:1", ["num", 63]], ["MYLOGAP:0", ["num", 8]], ["MYLOGEX:1", ["num", 191]], ["MYLOGAP:0", ["num", 9]], ["MYLOGEX:1", ["num", 295]]];
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
    let param = [[[[-43, -43, -39, -38, -36, -26, -25, -22, -12, -12, -11, -4, -3, 2, 3, 4, 18, 19, 25, 26, 27, 31, 31, 33, 33, 36, 42, 44, 47], [-48, -45, -40, -36, -35, -35, -29, -27, -25, -23, -13, -4, 5, 12, 13, 13, 18, 21, 22, 25, 32, 33, 34, 37, 43, 45, 46, 48, 48], [-48, -47, -46, -45, -36, -36, -30, -27, -27, -24, -22, -22, -18, -3, -3, -2, -1, 0, 0, 3, 4, 16, 19, 21, 28, 32, 34, 39, 49], [-46, -38, -36, -31, -30, -30, -29, -27, -21, -19, -14, -13, -12, -8, -7, -2, 1, 1, 3, 10, 11, 19, 19, 22, 28, 36, 47, 47, 49], [-45, -42, -29, -27, -25, -20, -17, -15, -12, -12, -10, -5, 1, 2, 3, 4, 11, 22, 29, 29, 31, 34, 36, 37, 42, 42, 44, 48, 48], [-49, -44, -43, -40, -39, -30, -30, -22, -22, -18, -15, -14, -12, -11, -7, -7, -3, -1, 0, 1, 13, 22, 40, 42, 42, 42, 44, 46, 48], [-49, -49, -42, -34, -29, -27, -24, -19, -14, -7, -3, -2, 1, 4, 5, 8, 12, 13, 18, 23, 24, 24, 29, 30, 36, 38, 44, 46, 48], [-47, -42, -38, -33, -28, -27, -26, -25, -24, -18, -15, -14, -14, -11, -6, -5, -3, -2, 1, 2, 6, 7, 17, 17, 20, 36, 37, 41, 41], [-47, -47, -43, -41, -39, -38, -27, -25, -23, -22, -21, -18, -14, -13, -12, -10, -8, 3, 13, 25, 27, 28, 30, 33, 33, 35, 38, 42, 45], [-49, -48, -47, -47, -45, -39, -36, -35, -28, -28, -26, -9, 0, 3, 9, 16, 19, 19, 20, 22, 24, 25, 27, 33, 35, 43, 47, 48, 49], [-49, -41, -36, -36, -35, -34, -34, -32, -28, -27, -23, -18, -4, 2, 4, 10, 16, 16, 18, 21, 25, 25, 27, 34, 36, 42, 42, 43, 44], [-48, -35, -32, -28, -23, -22, -21, -17, -10, -10, -2, 3, 6, 7, 9, 12, 20, 21, 22, 22, 23, 24, 25, 28, 33, 37, 41, 42, 44], [-48, -47, -45, -44, -44, -41, -37, -32, -32, -28, -26, -25, -21, -8, 2, 2, 5, 7, 9, 12, 13, 14, 17, 25, 26, 32, 33, 35, 39], [-44, -40, -39, -39, -37, -27, -27, -16, -13, -11, -4, -3, 4, 8, 16, 19, 22, 24, 25, 27, 31, 32, 35, 36, 40, 45, 45, 47, 48], [-41, -39, -37, -30, -29, -27, -23, -21, -21, -16, -15, -15, -11, -11, -10, -9, -7, 2, 2, 5, 6, 8, 8, 8, 17, 30, 32, 42, 45], [-45, -42, -39, -32, -28, -25, -24, -23, -18, -16, -15, -12, -7, 3, 4, 8, 11, 12, 15, 17, 20, 21, 30, 32, 35, 38, 43, 44, 45], [-42, -41, -40, -37, -35, -33, -32, -21, -18, -16, -11, -8, -8, -3, -3, -2, 4, 13, 15, 22, 24, 31, 32, 34, 37, 38, 43, 45, 48], [-49, -43, -39, -38, -25, -22, -20, -17, -14, -13, -13, -4, 1, 7, 7, 10, 14, 16, 20, 24, 27, 30, 37, 38, 39, 40, 43, 48, 49], [-49, -49, -48, -48, -46, -43, -43, -35, -34, -28, -24, -8, -8, -2, 11, 11, 18, 19, 20, 22, 26, 30, 30, 33, 38, 38, 41, 48, 49], [-44, -43, -36, -36, -32, -29, -26, -23, -21, -16, -15, -5, -5, -4, -3, -2, 4, 5, 5, 10, 13, 19, 21, 22, 24, 26, 35, 39, 47], [-49, -48, -44, -40, -32, -25, -23, -7, -4, -3, -2, -1, 4, 4, 11, 19, 20, 20, 22, 24, 24, 27, 30, 31, 39, 42, 44, 45, 45], [-43, -42, -38, -37, -30, -27, -20, -18, -16, -15, -14, -12, -7, 7, 12, 13, 14, 16, 17, 18, 22, 22, 23, 31, 37, 38, 43, 44, 48], [-43, -36, -33, -31, -30, -23, -17, -15, -14, -14, -13, -12, -11, -10, -9, -7, -5, -2, 0, 12, 14, 23, 24, 24, 28, 33, 37, 42, 44], [-49, -47, -47, -46, -44, -43, -34, -31, -19, -18, -16, -9, -8, -7, -6, -3, 0, 7, 14, 16, 16, 18, 28, 33, 36, 36, 37, 47, 49], [-48, -45, -45, -40, -38, -35, -34, -32, -27, -27, -18, -17, -17, -9, -6, -3, 2, 6, 6, 7, 11, 12, 13, 16, 29, 35, 37, 40, 42], [-49, -46, -46, -46, -42, -40, -39, -39, -36, -30, -26, -26, -25, -20, -18, -17, -15, -9, -5, -5, 0, 6, 10, 11, 13, 14, 14, 26, 31], [-49, -46, -43, -41, -35, -34, -33, -32, -28, -19, -12, -11, -7, -5, -1, 10, 11, 11, 12, 12, 13, 18, 18, 22, 26, 32, 42, 43, 43], [-47, -40, -35, -34, -32, -31, -29, -18, -17, -13, -8, -8, -6, -6, 5, 6, 11, 18, 22, 23, 24, 27, 28, 30, 33, 34, 45, 47, 49], [-46, -44, -41, -38, -37, -34, -30, -19, -17, -14, -14, -13, -12, -7, 1, 9, 10, 11, 11, 12, 15, 17, 20, 20, 23, 29, 29, 32, 42]], 27, 27], [[[-33, 6], [-16, 18]], 1, 1], [[[-48, -48, -45, -44, -43, -41, -39, -37, -36, -35, -34, -32, -29, -29, -27, -27, -27, -26, -16, -13, -11, -10, -8, -5, -3, -3, 5, 6, 13, 14, 16, 24, 26, 32, 44, 49], [-48, -45, -45, -39, -39, -30, -25, -23, -21, -21, -20, -16, -15, -13, -10, -1, 0, 2, 3, 3, 8, 8, 11, 19, 22, 22, 27, 31, 34, 35, 36, 38, 40, 40, 44, 48], [-43, -43, -42, -41, -40, -34, -32, -28, -26, -24, -23, -23, -21, -19, -18, -18, -8, -8, -8, -7, -4, -3, 5, 5, 9, 18, 20, 24, 25, 28, 28, 32, 32, 33, 36, 46], [-49, -48, -46, -42, -39, -33, -32, -30, -26, -19, -17, -16, -16, -13, -12, -11, -4, -3, 0, 6, 8, 19, 26, 26, 32, 33, 37, 39, 39, 39, 41, 42, 42, 47, 47, 48], [-46, -46, -44, -42, -40, -40, -38, -38, -33, -31, -24, -23, -22, -21, -21, -15, -6, -3, -2, 7, 9, 10, 14, 15, 17, 17, 20, 20, 24, 25, 29, 31, 32, 33, 46, 47], [-48, -44, -43, -43, -40, -35, -25, -13, -13, -12, -9, -5, -3, 0, 4, 5, 5, 7, 10, 18, 19, 22, 23, 27, 27, 27, 29, 30, 30, 30, 36, 40, 42, 43, 44, 45], [-48, -45, -44, -43, -36, -34, -31, -28, -28, -27, -26, -26, -24, -18, -15, -15, -14, -7, -3, -2, 2, 3, 6, 13, 13, 15, 19, 22, 26, 35, 36, 37, 40, 40, 47, 49], [-49, -49, -46, -46, -44, -44, -44, -34, -28, -24, -21, -20, -19, -19, -11, -10, -4, 1, 1, 8, 8, 11, 18, 21, 24, 29, 31, 32, 35, 39, 39, 43, 43, 43, 44, 46], [-48, -42, -36, -34, -30, -29, -27, -23, -15, -11, -11, -5, -5, -5, -4, -1, -1, 0, 1, 5, 5, 7, 14, 17, 23, 23, 23, 23, 26, 36, 37, 39, 41, 42, 46, 49], [-46, -43, -43, -42, -42, -42, -41, -39, -38, -29, -24, -24, -22, -22, -21, -14, -11, -9, -3, 1, 2, 6, 9, 10, 12, 13, 15, 15, 25, 26, 27, 36, 37, 40, 43, 49], [-45, -41, -41, -37, -36, -32, -31, -31, -31, -23, -21, -14, -9, -8, -6, -3, -2, 2, 4, 13, 13, 14, 20, 21, 24, 26, 27, 28, 31, 32, 32, 37, 38, 43, 44, 44], [-49, -47, -38, -37, -36, -31, -25, -24, -15, -15, -14, -8, -6, -4, -3, -1, 0, 0, 3, 5, 5, 11, 11, 23, 24, 25, 26, 27, 27, 31, 37, 39, 40, 48, 49, 49], [-49, -44, -41, -31, -31, -28, -21, -20, -17, -9, -4, -1, 0, 4, 6, 7, 12, 15, 15, 16, 16, 16, 17, 17, 21, 22, 22, 23, 25, 27, 31, 32, 33, 39, 40, 44], [-49, -48, -48, -38, -29, -26, -25, -25, -18, -16, -15, -15, -15, -14, -1, 0, 2, 7, 11, 13, 18, 19, 24, 24, 25, 29, 31, 31, 32, 33, 35, 38, 48, 48, 48, 49], [-44, -43, -43, -31, -31, -30, -21, -20, -20, -19, -15, -9, -6, -5, -2, 3, 3, 3, 6, 8, 8, 13, 13, 19, 20, 23, 24, 25, 31, 34, 35, 43, 43, 43, 47, 48], [-48, -45, -45, -35, -27, -24, -21, -16, -15, -15, -13, -11, -10, -5, 0, 0, 1, 2, 6, 6, 9, 9, 10, 12, 12, 13, 14, 17, 20, 26, 28, 28, 29, 30, 33, 35], [-48, -47, -45, -37, -35, -32, -32, -31, -29, -25, -24, -20, -19, -15, -10, -7, -1, 2, 2, 2, 4, 7, 8, 10, 14, 17, 17, 19, 19, 24, 31, 35, 41, 46, 47, 47], [-47, -45, -43, -39, -37, -37, -36, -27, -27, -27, -26, -13, -12, -10, -8, -2, -1, 1, 3, 4, 4, 8, 10, 18, 25, 29, 30, 31, 31, 33, 36, 41, 43, 46, 46, 49], [-49, -42, -37, -33, -27, -20, -19, -19, -17, -13, -12, -12, -10, -9, -9, -6, -6, -1, 14, 16, 20, 21, 24, 25, 25, 26, 27, 30, 30, 31, 33, 40, 43, 43, 46, 46], [-48, -43, -42, -41, -38, -36, -27, -26, -13, -11, -11, -8, -3, 2, 2, 4, 5, 6, 10, 14, 15, 16, 22, 25, 26, 28, 29, 30, 30, 35, 37, 41, 41, 45, 48, 49], [-47, -39, -35, -27, -19, -14, -14, -12, -7, -7, -6, -2, -2, 1, 3, 6, 12, 13, 13, 14, 14, 14, 15, 17, 19, 20, 22, 24, 25, 29, 33, 34, 34, 39, 42, 49], [-47, -47, -42, -37, -36, -36, -34, -26, -22, -21, -16, -15, -14, -13, -11, 0, 0, 0, 5, 10, 14, 18, 18, 21, 22, 25, 26, 26, 29, 30, 32, 33, 37, 38, 41, 45], [-48, -47, -44, -41, -38, -28, -27, -21, -21, -17, -16, -16, -16, -15, -14, -7, -3, 2, 4, 4, 4, 5, 6, 11, 15, 16, 18, 19, 22, 26, 28, 30, 32, 36, 39, 47], [-49, -42, -41, -39, -38, -32, -30, -28, -23, -22, -17, -15, -14, -12, -7, -4, -2, 0, 1, 6, 7, 9, 13, 13, 13, 16, 19, 20, 21, 24, 25, 26, 27, 29, 31, 31], [-49, -48, -47, -46, -41, -41, -39, -39, -38, -34, -33, -27, -26, -20, -19, -16, -13, -12, -12, -9, -8, -2, -2, -1, 0, 8, 10, 15, 20, 21, 22, 32, 32, 36, 38, 40], [-43, -42, -41, -37, -35, -33, -30, -25, -24, -24, -22, -22, -21, -15, -14, -10, -9, -7, -4, -1, 9, 11, 11, 12, 16, 17, 23, 23, 24, 26, 33, 35, 36, 39, 39, 45], [-41, -40, -39, -34, -32, -30, -29, -26, -25, -23, -22, -20, -19, -19, -13, -12, -8, -7, -7, -6, -6, -6, 0, 0, 0, 4, 7, 8, 13, 18, 34, 39, 41, 44, 48, 48], [-49, -49, -47, -45, -38, -34, -27, -23, -23, -23, -21, -20, -20, -19, -10, -5, -4, 1, 9, 11, 16, 19, 19, 19, 21, 21, 24, 25, 27, 29, 32, 33, 34, 43, 47, 49], [-46, -42, -36, -35, -35, -32, -29, -27, -27, -26, -23, -23, -23, -22, -18, -14, -12, -9, -7, -4, -4, 11, 16, 17, 17, 19, 19, 19, 21, 23, 27, 32, 38, 38, 45, 49], [-48, -42, -42, -42, -40, -39, -34, -34, -32, -25, -18, -12, -11, -9, -8, -8, 0, 2, 4, 9, 12, 13, 13, 14, 19, 22, 25, 25, 27, 28, 31, 32, 38, 38, 39, 39], [-46, -46, -45, -42, -41, -41, -41, -31, -31, -31, -29, -27, -25, -18, -9, -9, -8, -3, -2, -2, 4, 5, 9, 14, 14, 20, 25, 29, 30, 34, 40, 42, 44, 48, 49, 49], [-49, -49, -45, -44, -43, -43, -39, -36, -28, -20, -19, -18, -16, -14, -8, -7, -7, -6, -1, 1, 1, 3, 3, 4, 5, 16, 18, 19, 22, 30, 35, 38, 40, 46, 46, 47], [-48, -37, -36, -35, -32, -29, -27, -23, -22, -22, -16, -15, -14, -14, -9, -8, -6, 3, 5, 8, 9, 9, 12, 14, 15, 16, 22, 26, 29, 29, 37, 38, 44, 48, 48, 49], [-47, -46, -46, -42, -42, -41, -40, -39, -34, -33, -32, -30, -23, -23, -21, -20, -16, -14, -13, -12, -7, -1, 0, 6, 7, 7, 13, 17, 17, 18, 25, 25, 27, 28, 40, 45], [-47, -47, -47, -34, -33, -33, -28, -8, -5, 0, 1, 1, 1, 8, 9, 11, 12, 15, 15, 17, 17, 18, 23, 26, 28, 29, 30, 32, 35, 35, 39, 40, 40, 41, 43, 49], [-49, -46, -42, -35, -35, -35, -33, -33, -30, -17, -16, -14, -14, -13, -11, -4, -4, -3, 7, 7, 12, 13, 16, 16, 16, 18, 28, 30, 36, 37, 38, 41, 41, 43, 47, 49]], 35, 28], [[[5, 11, 41, 46], [-32, -25, -2, 10], [4, 22, 34, 44], [-40, -27, 12, 29]], 3, 2], [[[-43, -38, -33, -18, -1, 7, 7, 9, 11, 14, 15, 18, 27, 45], [-43, -29, -27, -23, -14, -13, -12, -7, -3, 2, 19, 26, 29, 32], [-46, -43, -42, -27, -13, 2, 5, 7, 23, 25, 28, 38, 45, 49], [-49, -45, -23, -20, -5, -1, 21, 25, 28, 36, 39, 39, 41, 46], [-45, -42, -31, -29, -17, 3, 14, 15, 24, 36, 38, 40, 40, 45], [-36, -31, -27, -21, -11, -2, 10, 16, 18, 18, 33, 46, 47, 47], [-49, -44, -32, -14, -10, 3, 13, 22, 25, 35, 37, 42, 44, 48], [-48, -26, -26, -19, -16, -12, -5, -4, 0, 9, 26, 26, 40, 40], [-49, -47, -46, -40, 8, 15, 15, 18, 19, 23, 32, 35, 45, 48], [-31, -31, -29, -11, -6, 2, 14, 20, 23, 33, 35, 43, 46, 47], [-46, -37, -36, -36, -13, -2, -1, 4, 7, 14, 26, 27, 32, 43], [-48, -43, -38, -31, -31, -27, -20, -17, -9, 16, 17, 34, 35, 45], [-44, -38, -25, -15, -12, -1, 3, 11, 21, 27, 30, 36, 44, 47], [-48, -43, -43, -37, -37, -31, -26, -24, -18, -11, -3, -2, -2, 29]], 13, 13], [[[-37, -29, -26, -3, 2, 6, 8, 14, 28, 42], [-44, -43, -36, -27, -11, 0, 18, 25, 38, 47], [-33, -3, 2, 11, 13, 15, 16, 17, 24, 28], [-39, -34, -5, -3, 0, 11, 32, 33, 44, 44], [-47, -23, 2, 8, 12, 31, 32, 33, 35, 41], [-45, -34, -10, -3, 15, 26, 38, 40, 41, 44], [-45, -36, -32, -12, -11, -8, 13, 22, 33, 39], [-42, -36, -32, -27, -27, -15, 17, 19, 30, 39], [-42, -24, -23, -12, -10, -5, 23, 33, 33, 40], [-49, -39, -26, -14, 0, 2, 28, 32, 37, 40]], 8, 8], [[[-47, -44, -44, -33, -32, -28, -26, -22, -21, -21, -20, -15, -13, -11, -7, -5, 3, 6, 22, 25, 27, 31, 39, 42, 47, 48], [-44, -39, -29, -23, -21, -16, -15, -13, -7, -7, -6, -4, -3, -1, 0, 2, 3, 6, 10, 13, 13, 28, 32, 33, 34, 39], [-48, -43, -42, -40, -33, -33, -33, -23, -22, -16, -14, -13, -12, -11, -9, -9, -3, 4, 8, 9, 15, 20, 24, 36, 42, 45], [-41, -40, -34, -34, -31, -31, -31, -29, -22, -18, -16, -12, -8, -5, -3, 3, 7, 16, 16, 18, 18, 20, 25, 29, 30, 45], [-48, -47, -43, -41, -37, -36, -34, -34, -23, -6, -1, 2, 5, 9, 9, 17, 20, 21, 23, 30, 31, 34, 38, 43, 44, 46], [-44, -41, -39, -36, -32, -29, -20, -12, -7, 2, 2, 4, 4, 5, 11, 13, 14, 18, 22, 23, 24, 27, 32, 34, 44, 49], [-47, -34, -33, -29, -28, -27, -22, -9, -8, -3, 3, 4, 6, 7, 10, 11, 13, 15, 19, 27, 37, 42, 43, 45, 46, 47], [-43, -37, -31, -31, -29, -27, -25, -24, -14, -12, -6, -2, -2, 1, 8, 21, 23, 26, 26, 28, 30, 31, 39, 39, 49, 49], [-48, -40, -37, -34, -34, -26, -21, -19, -17, -15, -12, -4, 3, 5, 5, 6, 15, 23, 27, 28, 29, 36, 42, 45, 47, 49], [-47, -46, -45, -38, -37, -37, -36, -26, -25, -12, -8, -1, 0, 4, 9, 9, 19, 24, 26, 28, 29, 30, 36, 39, 43, 44], [-48, -48, -46, -43, -33, -25, -22, -21, -21, -17, -15, -13, -13, -11, -5, -3, 1, 4, 11, 13, 16, 16, 24, 30, 38, 41], [-48, -41, -40, -38, -38, -27, -27, -24, -15, -13, -11, -2, 4, 7, 11, 16, 17, 18, 27, 28, 28, 30, 32, 36, 45, 48], [-47, -42, -41, -32, -31, -24, -24, -22, -18, -16, -14, -14, -11, -8, 3, 4, 10, 12, 20, 21, 22, 25, 29, 34, 37, 47], [-49, -49, -44, -42, -38, -34, -29, -26, -24, -24, -19, -14, -7, -4, -1, 3, 8, 12, 14, 15, 24, 28, 34, 36, 42, 46], [-46, -38, -34, -32, -30, -29, -28, -19, -14, -8, -3, 8, 14, 17, 20, 20, 20, 22, 23, 24, 24, 29, 36, 42, 45, 46], [-49, -47, -46, -35, -32, -28, -28, -24, -24, -23, -14, -11, -10, -9, -8, -7, -5, 4, 14, 22, 24, 29, 31, 37, 46, 48], [-49, -47, -45, -43, -41, -38, -38, -35, -32, -29, -27, -15, -14, -13, -2, 2, 12, 13, 13, 19, 21, 22, 25, 26, 30, 30], [-47, -47, -38, -35, -35, -34, -33, -30, -29, -22, -21, -15, -14, -10, -8, -4, 4, 10, 15, 25, 26, 27, 31, 32, 36, 48], [-45, -43, -42, -41, -40, -30, -25, -24, -18, -18, -16, -10, -10, -8, -6, -1, 9, 15, 23, 25, 26, 28, 32, 34, 42, 43], [-48, -38, -34, -32, -31, -27, -27, -26, -23, -16, -11, -10, -9, -7, -6, -1, -1, 2, 12, 13, 17, 19, 23, 31, 37, 45], [-42, -25, -19, -18, -12, -12, -10, 0, 2, 4, 6, 6, 19, 28, 31, 37, 37, 38, 39, 40, 40, 40, 41, 42, 48, 49], [-48, -45, -41, -37, -36, -35, -34, -33, -29, -18, -18, -13, -11, -10, 4, 5, 5, 14, 23, 28, 29, 29, 29, 31, 32, 35], [-47, -42, -31, -22, -19, -14, -12, -8, -8, 1, 2, 3, 8, 13, 18, 19, 27, 29, 31, 39, 42, 43, 48, 49, 49, 49], [-45, -43, -22, -20, -16, -16, -3, 0, 0, 4, 6, 13, 13, 14, 19, 23, 23, 32, 34, 37, 37, 39, 40, 43, 44, 47], [-49, -36, -29, -27, -26, -25, -19, -14, -12, -11, -10, -7, -6, -3, -1, 0, 1, 6, 10, 16, 18, 23, 24, 38, 46, 48], [-47, -45, -39, -34, -29, -23, -17, -11, -10, -8, -7, -7, -5, 2, 2, 7, 14, 17, 17, 26, 29, 31, 31, 33, 34, 49]], 18, 15], [[[-48, -47, -44, -39, -37, -35, -28, -12, -7, -7, -5, 2, 8, 9, 15, 27], [-34, -25, -25, -23, -17, -9, -6, 4, 8, 16, 19, 36, 36, 44, 45, 46], [-47, -26, -20, -12, -6, 0, 8, 9, 13, 17, 22, 24, 29, 29, 38, 38], [-44, -36, -34, -32, -30, -27, -26, -21, -10, 9, 16, 27, 28, 31, 36, 40], [-23, -20, -16, -15, -9, -2, 0, 0, 4, 12, 14, 20, 22, 33, 35, 41], [-44, -43, -41, -39, -36, -27, -20, -13, -13, -5, 3, 28, 30, 31, 36, 40], [-47, -37, -33, -33, -2, -1, 10, 16, 20, 25, 25, 35, 40, 44, 45, 46], [-49, -47, -45, -42, -41, -37, -32, -31, -15, -14, 0, 21, 26, 27, 34, 47], [-43, -43, -34, -33, -31, -25, -24, -17, -5, -1, 15, 23, 24, 34, 40, 46], [-48, -42, -34, -34, -27, -26, -19, -11, -7, 8, 19, 22, 23, 34, 35, 42], [-49, -43, -39, -15, -8, -4, -3, -2, 16, 20, 21, 22, 22, 30, 32, 34], [-49, -46, -40, -31, -28, -19, -15, -12, -10, -8, 5, 8, 37, 42, 42, 43], [-48, -35, -22, -20, -16, -15, -11, -9, -6, 2, 17, 18, 29, 38, 46, 49], [-39, -34, -25, -24, -11, -9, 2, 9, 14, 18, 21, 26, 29, 34, 39, 47], [-41, -31, -19, -12, -9, -6, 1, 10, 11, 16, 22, 24, 26, 27, 35, 43], [-42, -32, -32, -31, -18, -13, -5, 3, 5, 13, 20, 26, 28, 42, 43, 47]], 11, 11], [[[-47, -46, -43, -40, -39, -36, -31, -30, -28, -26, -23, -9, -5, -5, -4, 4, 5, 9, 15, 34, 35, 38, 38, 39, 42, 42, 45, 47, 48], [-47, -46, -46, -43, -34, -31, -31, -29, -27, -24, -23, -19, -15, -12, -11, -11, -2, 0, 4, 10, 19, 19, 28, 28, 40, 42, 45, 45, 47], [-48, -47, -42, -41, -41, -27, -26, -23, -21, -19, -16, -13, -2, 0, 1, 6, 18, 20, 20, 24, 28, 29, 29, 36, 42, 46, 48, 49, 49], [-48, -43, -43, -37, -33, -33, -25, -20, -19, -19, -18, -8, -5, -4, -3, -2, 3, 4, 5, 9, 9, 9, 12, 13, 13, 23, 39, 43, 45], [-45, -43, -42, -34, -34, -26, -24, -17, -15, -12, -7, -4, -3, -1, 3, 12, 14, 16, 20, 21, 21, 23, 27, 33, 37, 46, 46, 47, 47], [-48, -44, -41, -38, -23, -18, -14, -14, -7, -7, -5, -4, 1, 3, 4, 4, 9, 14, 15, 16, 23, 25, 28, 29, 30, 34, 35, 38, 38], [-47, -46, -45, -44, -40, -38, -34, -33, -12, -9, -6, 2, 6, 9, 10, 11, 11, 13, 14, 28, 30, 30, 31, 33, 35, 36, 41, 41, 41], [-45, -44, -42, -39, -38, -37, -33, -29, -29, -25, -18, -8, 1, 8, 8, 9, 10, 10, 10, 13, 18, 19, 20, 25, 29, 33, 42, 42, 43], [-49, -47, -47, -46, -41, -39, -36, -36, -32, -29, -29, -15, -8, -7, 2, 4, 6, 10, 14, 16, 21, 26, 27, 27, 34, 42, 42, 47, 49], [-49, -48, -42, -41, -34, -33, -25, -24, -22, -20, -14, -14, -13, -10, -8, -6, -5, -5, -4, -2, 0, 3, 6, 11, 23, 35, 40, 44, 45], [-44, -40, -33, -28, -28, -24, -22, -22, -21, -18, -18, -13, -10, -10, -8, -7, -5, 1, 3, 3, 6, 8, 20, 20, 25, 31, 33, 40, 40], [-47, -47, -45, -44, -38, -33, -33, -30, -28, -15, -14, -13, -8, -5, -4, -3, 1, 2, 9, 9, 13, 20, 25, 36, 37, 38, 43, 43, 48], [-48, -45, -44, -38, -37, -37, -34, -30, -28, -23, -23, -17, -16, -15, -6, 1, 3, 5, 9, 10, 10, 16, 16, 26, 28, 31, 32, 44, 47], [-44, -43, -41, -33, -30, -27, -27, -26, -23, -22, -22, -16, -15, -9, -3, -2, -1, 5, 9, 9, 13, 16, 21, 29, 33, 39, 39, 47, 47], [-48, -38, -36, -32, -28, -28, -27, -23, -21, -21, -16, -6, -4, -2, 4, 10, 13, 15, 19, 21, 25, 26, 26, 30, 31, 38, 40, 48, 48], [-48, -46, -43, -41, -37, -36, -32, -31, -25, -12, -11, -11, -7, -7, -5, 1, 12, 16, 19, 21, 27, 31, 32, 33, 34, 41, 44, 46, 48], [-42, -42, -41, -31, -27, -24, -22, -21, -8, -7, -1, 0, 2, 2, 4, 6, 8, 13, 20, 21, 21, 24, 28, 31, 36, 39, 41, 45, 46], [-48, -47, -46, -41, -34, -26, -25, -24, -23, -18, -13, -8, -4, -4, -2, 5, 5, 11, 12, 13, 14, 20, 23, 25, 29, 34, 36, 38, 39], [-45, -45, -40, -38, -38, -36, -33, -27, -25, -24, -24, -22, -16, -14, -13, -8, -5, -3, 3, 12, 13, 14, 17, 20, 38, 41, 46, 47, 48], [-44, -43, -37, -34, -33, -21, -20, -20, -19, -19, -18, -17, -15, -11, -10, -6, -5, -4, 0, 2, 4, 6, 23, 24, 31, 32, 35, 44, 49], [-47, -43, -39, -34, -24, -17, -17, -12, -10, -10, -5, -1, 2, 7, 11, 12, 13, 16, 19, 24, 24, 25, 26, 26, 33, 38, 40, 45, 46], [-42, -40, -38, -37, -35, -35, -34, -26, -24, -22, -10, -6, -2, 2, 3, 10, 11, 12, 16, 17, 27, 28, 29, 31, 32, 33, 34, 44, 49], [-47, -43, -42, -30, -26, -26, -26, -24, -22, -22, -18, -13, -9, -8, -7, -2, -2, 1, 5, 6, 14, 15, 18, 19, 24, 26, 46, 48, 48], [-48, -45, -41, -30, -23, -22, -21, -17, -16, -14, -13, -7, -5, -2, -1, 4, 6, 8, 14, 19, 30, 31, 33, 34, 34, 40, 43, 49, 49], [-49, -46, -45, -44, -38, -37, -36, -35, -31, -30, -28, -28, -26, -25, -15, -13, -8, -4, 4, 4, 10, 20, 24, 27, 30, 30, 30, 37, 48], [-47, -46, -44, -44, -42, -41, -40, -30, -29, -29, -27, -23, -17, -12, -10, -9, 7, 12, 19, 22, 30, 38, 40, 41, 43, 43, 46, 49, 49], [-47, -44, -37, -37, -29, -27, -25, -20, -17, -14, -14, -13, -6, -1, -1, 1, 6, 7, 8, 8, 12, 18, 18, 22, 28, 29, 37, 42, 45], [-46, -45, -43, -42, -41, -34, -31, -23, -20, -15, -15, -11, -7, -2, 1, 1, 9, 10, 12, 21, 22, 27, 29, 29, 33, 34, 41, 42, 49], [-47, -45, -41, -39, -31, -29, -28, -23, -22, -15, -14, -14, -8, -8, -3, 5, 5, 8, 9, 11, 12, 16, 20, 25, 32, 32, 36, 38, 49]], 16, 15], [[[-43, -41, -38, -35, -34, -32, -30, -30, -30, -25, -25, -18, -16, -12, -9, -7, -5, -2, -1, 1, 2, 5, 10, 12, 12, 17, 22, 23, 23, 28, 33, 37, 40, 43, 47, 48], [-48, -46, -41, -40, -36, -28, -27, -18, -16, -12, -12, -7, -7, -7, -6, -5, 5, 6, 7, 13, 13, 14, 14, 22, 24, 26, 26, 27, 29, 46, 46, 46, 47, 47, 48, 49], [-47, -47, -46, -44, -40, -38, -37, -35, -35, -34, -30, -16, -7, -6, -6, -3, -2, -1, 3, 4, 8, 13, 13, 16, 17, 20, 21, 21, 31, 31, 33, 33, 42, 43, 44, 47], [-48, -45, -39, -30, -29, -29, -29, -24, -21, -20, -16, -14, -13, -13, -10, -10, -4, -4, -3, -1, 6, 9, 10, 11, 11, 13, 14, 14, 16, 17, 24, 25, 34, 35, 41, 48], [-45, -39, -36, -33, -32, -31, -30, -26, -26, -17, -17, -15, -14, -13, -11, -11, -6, -5, 1, 2, 5, 6, 13, 15, 18, 23, 26, 32, 35, 35, 36, 42, 44, 47, 47, 49], [-44, -43, -40, -39, -38, -37, -35, -30, -24, -24, -15, -15, -15, -14, -11, -4, -4, 1, 1, 4, 4, 10, 13, 16, 17, 17, 23, 29, 35, 35, 37, 38, 41, 44, 45, 47], [-46, -46, -46, -43, -43, -38, -35, -30, -26, -23, -21, -18, -16, -6, -6, -6, -5, -4, -3, -1, -1, 4, 8, 10, 13, 18, 20, 22, 27, 27, 28, 39, 42, 43, 46, 49], [-48, -41, -34, -31, -26, -21, -21, -2, -1, 3, 5, 5, 5, 10, 12, 14, 15, 15, 18, 19, 21, 29, 31, 33, 35, 37, 38, 38, 39, 43, 43, 45, 45, 47, 48, 49], [-44, -43, -41, -35, -30, -28, -28, -28, -19, -18, -15, -12, -5, -4, -2, 2, 2, 4, 4, 6, 10, 12, 14, 16, 16, 21, 26, 26, 27, 27, 30, 31, 32, 38, 39, 39], [-43, -42, -40, -39, -39, -37, -36, -31, -30, -28, -28, -27, -27, -24, -23, -20, -15, -5, 1, 1, 10, 12, 14, 14, 16, 16, 28, 30, 31, 32, 37, 42, 44, 44, 45, 49], [-45, -39, -36, -36, -36, -35, -33, -33, -22, -19, -17, -14, -14, -4, -3, -1, 10, 12, 14, 16, 17, 19, 22, 22, 24, 26, 27, 28, 31, 38, 39, 40, 48, 48, 49, 49], [-43, -39, -38, -34, -32, -29, -28, -25, -24, -15, -12, -10, -9, -7, -2, -2, 0, 3, 3, 5, 5, 11, 11, 18, 19, 20, 20, 20, 27, 28, 36, 39, 40, 41, 43, 45], [-49, -43, -41, -36, -34, -33, -30, -26, -23, -23, -23, -22, -13, -8, -4, -3, -1, 2, 6, 13, 17, 18, 20, 23, 23, 31, 31, 33, 34, 36, 37, 39, 41, 43, 44, 46], [-46, -46, -45, -44, -42, -38, -35, -32, -28, -28, -26, -21, -20, -16, -13, -12, -12, -8, -3, 1, 2, 4, 5, 5, 13, 16, 18, 18, 19, 22, 25, 33, 34, 38, 41, 44], [-49, -49, -49, -47, -46, -37, -34, -31, -30, -25, -22, -18, -17, -13, -13, -12, -7, -5, -4, -3, -2, -2, 1, 4, 12, 12, 24, 30, 30, 30, 33, 38, 43, 44, 45, 49], [-44, -43, -39, -39, -38, -37, -35, -34, -34, -26, -17, -14, -12, -8, -6, -2, 1, 6, 6, 8, 13, 16, 16, 19, 22, 22, 26, 26, 30, 34, 38, 39, 42, 43, 45, 49], [-48, -46, -44, -42, -36, -35, -32, -31, -28, -25, -23, -22, -18, -18, -18, -16, -15, -1, 1, 2, 2, 4, 4, 6, 9, 9, 10, 13, 14, 14, 18, 23, 43, 45, 47, 49], [-48, -43, -41, -41, -36, -35, -34, -16, -14, -13, -7, -5, -5, -3, 2, 2, 3, 8, 9, 9, 10, 20, 20, 22, 22, 24, 25, 26, 33, 36, 38, 42, 43, 43, 44, 44], [-48, -46, -45, -40, -36, -33, -30, -29, -29, -28, -27, -26, -24, -24, -24, -22, -17, -16, -11, -6, -1, 1, 3, 8, 9, 11, 14, 14, 23, 24, 25, 26, 27, 41, 45, 49], [-49, -42, -31, -30, -30, -30, -28, -27, -26, -18, -14, -13, -10, -7, -6, 3, 4, 7, 12, 14, 16, 19, 20, 22, 25, 26, 27, 28, 30, 30, 32, 39, 43, 44, 44, 45], [-49, -48, -46, -44, -44, -43, -40, -40, -40, -37, -33, -27, -23, -17, -14, -7, -5, -2, 8, 9, 11, 13, 13, 15, 20, 26, 30, 30, 33, 35, 35, 39, 40, 41, 42, 43], [-38, -36, -36, -35, -35, -28, -26, -22, -20, -18, -18, -16, -16, -15, -14, -14, -13, -12, -11, -7, -6, -4, 1, 3, 6, 8, 12, 16, 18, 22, 22, 36, 37, 40, 45, 49], [-49, -46, -43, -43, -40, -38, -32, -32, -31, -30, -28, -26, -25, -16, -16, -15, -14, -14, -13, -11, -6, -5, -4, 0, 3, 6, 21, 37, 37, 38, 39, 40, 42, 45, 45, 47], [-49, -40, -37, -35, -34, -34, -33, -31, -28, -22, -19, -19, -18, -18, -16, -12, -12, -11, -8, -8, -2, -1, 8, 10, 18, 21, 23, 25, 26, 34, 38, 42, 42, 44, 44, 47], [-48, -46, -39, -38, -34, -22, -19, -14, -10, -9, -5, 2, 3, 7, 7, 7, 7, 9, 11, 15, 20, 24, 26, 27, 28, 28, 28, 29, 30, 30, 30, 33, 37, 38, 38, 47], [-49, -44, -43, -42, -37, -36, -31, -31, -20, -19, -17, -14, -11, -10, -9, -7, -3, -3, -2, -2, -1, 5, 7, 14, 14, 16, 18, 20, 23, 23, 30, 31, 38, 43, 45, 47], [-49, -44, -44, -38, -37, -32, -32, -31, -31, -29, -29, -22, -20, -19, -19, -16, -9, -7, 1, 3, 4, 5, 5, 13, 15, 17, 21, 21, 29, 35, 35, 39, 40, 41, 44, 45], [-48, -46, -43, -43, -40, -40, -38, -38, -32, -29, -26, -19, -18, -17, -14, -13, -9, -7, -5, -2, 1, 3, 4, 8, 10, 15, 17, 18, 26, 27, 30, 32, 33, 36, 43, 46], [-47, -45, -41, -40, -39, -39, -38, -29, -26, -24, -21, -21, -17, -15, -9, -8, -7, -3, -2, 6, 6, 7, 8, 10, 11, 11, 17, 23, 26, 27, 28, 29, 33, 34, 36, 42], [-49, -49, -49, -42, -41, -33, -33, -32, -29, -26, -24, -23, -21, -20, -17, -17, -13, -13, -9, -2, -2, -1, 1, 4, 7, 11, 11, 12, 22, 24, 24, 36, 37, 41, 41, 43], [-45, -39, -36, -33, -33, -31, -29, -24, -23, -23, -21, -20, -8, -8, -7, -5, -2, 1, 4, 8, 8, 11, 13, 14, 14, 14, 16, 16, 17, 19, 22, 27, 28, 34, 37, 38], [-49, -48, -47, -41, -41, -38, -38, -35, -34, -27, -26, -26, -19, -17, -5, -2, -2, -1, 1, 4, 5, 5, 6, 9, 11, 12, 16, 29, 33, 34, 36, 42, 42, 43, 43, 47], [-46, -45, -44, -41, -35, -35, -28, -25, -24, -14, -13, -11, -11, -7, -4, -4, 2, 4, 5, 6, 7, 7, 8, 11, 13, 16, 16, 20, 25, 27, 35, 36, 37, 39, 43, 48], [-48, -41, -40, -38, -37, -32, -24, -20, -19, -15, -7, -5, -1, 0, 3, 7, 8, 15, 18, 25, 25, 26, 27, 28, 31, 33, 37, 38, 38, 39, 43, 43, 47, 48, 48, 49], [-49, -39, -37, -35, -28, -23, -22, -21, -20, -17, -16, -11, -8, -2, -1, 2, 3, 3, 7, 8, 9, 10, 14, 19, 23, 23, 26, 28, 28, 35, 40, 41, 44, 45, 47, 48], [-48, -44, -40, -38, -37, -30, -27, -26, -24, -23, -23, -22, -22, -20, -16, -16, -12, 0, 0, 1, 2, 5, 8, 16, 22, 22, 27, 27, 32, 35, 39, 39, 44, 46, 46, 49]], 27, 25]];
    for (let i = 0; i < param.length; i++) {
        let parameters_set = param[i];
        let idx = i;
        mylog(0, idx);
        let result = f_gold(...parameters_set);
        myexactlog(1, result);
    }
}
"-----------------"

//TESTED_PROGRAM

"-----------------"

test()
