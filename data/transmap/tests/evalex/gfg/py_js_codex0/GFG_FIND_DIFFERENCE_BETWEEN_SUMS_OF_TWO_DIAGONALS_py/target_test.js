
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["num", 0]], ["MYLOGEX:1", ["num", 12]], ["MYLOGAP:0", ["num", 1]], ["MYLOGEX:1", ["num", 36]], ["MYLOGAP:0", ["num", 2]], ["MYLOGEX:1", ["num", 3]], ["MYLOGAP:0", ["num", 3]], ["MYLOGEX:1", ["num", 51]], ["MYLOGAP:0", ["num", 4]], ["MYLOGEX:1", ["num", 6]], ["MYLOGAP:0", ["num", 5]], ["MYLOGEX:1", ["num", 2]], ["MYLOGAP:0", ["num", 6]], ["MYLOGEX:1", ["num", 59]], ["MYLOGAP:0", ["num", 7]], ["MYLOGEX:1", ["num", 370]], ["MYLOGAP:0", ["num", 8]], ["MYLOGEX:1", ["num", 0]], ["MYLOGAP:0", ["num", 9]], ["MYLOGEX:1", ["num", 89]]];
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
    [[[1, 7, 17, 19, 22, 25, 27, 29, 41, 60, 67, 73, 79, 85, 94], [2, 6, 16, 21, 30, 42, 43, 48, 50, 52, 60, 61, 68, 92, 95], [4, 8, 10, 14, 15, 20, 22, 23, 23, 39, 40, 63, 70, 75, 87], [7, 21, 24, 36, 39, 43, 50, 58, 58, 67, 70, 89, 94, 98, 99], [4, 13, 17, 20, 21, 24, 30, 45, 57, 58, 59, 65, 66, 91, 97], [15, 15, 18, 33, 38, 43, 51, 57, 64, 68, 70, 75, 85, 94, 97], [2, 5, 6, 6, 12, 41, 43, 44, 48, 48, 53, 53, 60, 69, 99], [1, 13, 14, 24, 24, 25, 35, 36, 40, 67, 74, 75, 87, 88, 96], [6, 13, 23, 28, 29, 39, 40, 50, 50, 63, 63, 81, 85, 88, 96], [4, 13, 26, 27, 36, 40, 42, 42, 46, 48, 57, 62, 67, 67, 70], [20, 25, 29, 61, 69, 70, 73, 75, 78, 80, 84, 85, 88, 95, 97], [2, 2, 6, 11, 11, 31, 39, 48, 50, 52, 54, 64, 77, 89, 97], [1, 14, 25, 26, 29, 41, 46, 55, 67, 68, 77, 77, 83, 84, 88], [6, 9, 11, 25, 29, 33, 36, 44, 63, 65, 67, 68, 78, 89, 91], [12, 13, 13, 15, 43, 45, 50, 60, 62, 62, 64, 86, 91, 96, 96]],10,],
    [[[74, -94, 42, 56, -64, -46, -34, 54, -2, -92, 0, -38, -76, -16, 42, 20, -58, 36, 66, -88, 6, -82, 46, 2, 2, -62, -76, -10, -26, -44, -38, 70, 46, 16, 12, 84, 4, -72, -84, 66, -6, -92, 46, -94, -46, 74, 64], [20, -22, -40, -22, -40, 56, 0, -84, -96, 32, -36, -16, 56, 36, -24, 20, 50, 28, 52, -44, -36, -18, 14, 42, 28, 24, -88, 90, 76, -72, -80, -80, 48, 56, -28, -18, -56, 32, -72, 30, -46, -60, 8, -90, 52, -10, 86], [-82, 60, 60, 72, -68, 2, 40, -56, -38, -80, 10, 54, -22, 34, 62, -78, 10, 28, -8, 28, -22, -34, 12, 14, -18, 38, 88, -10, -70, 44, -70, 10, 70, -58, 36, -70, -32, -60, -98, 32, 32, 6, 58, -78, -58, -66, 74], [58, -16, 66, -26, 18, 46, 92, 14, 62, -8, 62, 12, 72, 8, 36, 22, -24, -2, 80, 88, -16, 46, 16, -70, 22, -58, -46, -66, 4, 86, 54, -86, -6, -36, -54, 14, -38, 16, -12, -68, -18, 96, 54, 70, -22, 78, 40], [-38, -50, -20, -58, 80, -42, -64, -12, 64, -56, 50, 36, 18, 58, 12, 12, 12, -22, -72, -44, 28, 48, -2, 34, -78, -36, -60, -34, 28, 8, 30, -98, 4, 0, 6, 70, -90, -4, 38, -88, -84, 86, 24, -18, 96, -72, 76], [-78, 18, -82, -18, 32, -26, -54, -18, 84, 68, -94, 42, 26, 88, 34, 18, -22, 20, 44, -60, 54, -60, 14, 86, 18, 10, -48, 96, -36, -98, 96, -6, -96, -2, -92, -78, -24, 40, -82, -74, 0, 18, 0, 28, 16, 78, -76], [32, 46, -30, 98, -92, 24, 42, -2, -92, 12, -24, 84, 80, -74, -80, -48, 54, 30, -4, 28, 0, -56, 78, 76, -96, -32, -52, 82, -78, 46, -92, -16, 58, 78, -14, -82, 78, -44, -34, 34, 2, 76, 72, -34, -80, 88, 20], [-66, 6, 70, 82, -86, -16, 38, 22, 42, 76, 58, 2, -12, 0, 14, -8, -8, 62, 46, -38, -90, 8, 36, -68, 56, 26, 40, -36, 76, -54, 44, 88, 46, -62, 34, -26, 90, -94, 52, 40, 24, -86, 36, 28, -12, -48, 6], [-12, 14, -96, -4, -96, -18, -60, -52, 86, 22, -44, -22, -68, 66, -66, 72, -42, -14, -98, 56, 82, -52, -84, 82, 98, -36, -14, 20, -48, 90, -20, 80, -18, 6, -82, -4, 88, 88, 82, 78, 88, -34, 22, 6, -16, 4, 32], [18, 24, 52, -50, -82, -66, 58, 42, -60, 66, 86, 82, -66, -72, -6, 80, 78, 68, -30, -76, -64, 98, -62, 80, -96, 32, 60, -52, -26, -66, 52, -8, 42, 74, -72, 94, -94, -56, -14, 74, 72, -82, -86, -80, -4, -64, -52], [-82, 2, -16, 56, -14, 70, -60, 16, 82, 62, -52, 12, -74, -22, 50, -82, -14, -48, -88, 52, -12, 92, -40, 16, -66, -92, 30, -80, -10, 48, -4, 16, 50, 66, 44, -40, -52, 48, 18, -16, -56, 58, 28, -42, -80, 22, -58], [42, 38, 28, 30, 16, 66, -92, 36, -40, 28, 12, 2, -50, -42, -96, -56, 6, -16, 10, 96, -62, 64, -8, 82, 46, 94, 6, 30, 84, 64, -58, 88, 42, 88, 0, 16, -30, 48, -10, 30, 94, -42, 56, -82, -60, -84, -34], [60, -50, -90, 24, -8, 40, -92, -28, 28, 84, -36, -62, -24, -54, 98, -90, 50, -26, -18, 8, -74, -20, 54, -22, -44, -84, 64, 66, -20, 56, 96, 54, 94, -60, 96, -46, -66, 66, -48, 2, -90, -94, -86, -80, -36, -66, 36], [82, -38, 10, 18, 8, -12, -92, -96, -50, -34, 18, -54, 8, -36, 56, -32, 80, -84, 96, 76, 6, 72, 62, 24, 58, 20, -56, -94, -92, 16, 22, -68, -18, -26, -56, 80, -52, 50, 56, 78, -6, 54, -58, 16, 78, 52, 80], [-34, -56, -86, 42, 26, -78, 8, 92, 2, 10, -56, -14, 84, -20, 14, -76, 2, 82, 90, 28, 18, 16, 94, -96, -40, 22, -52, -90, -28, -64, 38, -68, -62, -94, 76, -78, -48, 70, -60, -98, 84, -38, -12, -20, 8, 84, -52], [-74, -94, 42, 80, 12, 56, -90, 58, 4, -58, 20, 14, 80, -88, 22, 94, -18, -96, 76, 88, 72, -98, -80, 88, -8, 6, -10, 50, -78, 16, -40, 28, 14, -98, -90, -4, 30, 56, 28, 56, 32, 12, 68, 2, 2, 18, 96], [70, 24, -78, -52, -10, -54, -4, 22, -96, -60, -16, 90, 70, 64, 78, 90, -74, 98, 80, 84, -84, -22, 58, -12, -84, -2, -72, 24, -96, 52, -62, 58, 72, -24, -54, -38, -12, 34, 42, -50, -14, -16, 62, -72, 14, -34, 50], [76, 48, -66, 12, -92, 36, 64, -86, -18, 2, 16, 2, 88, 70, -8, 4, -62, -34, -6, 54, 10, -8, -54, 32, 12, 94, -12, -68, 74, 84, -38, -4, -32, 20, 14, -8, 82, -66, 48, -26, -74, 10, -20, -74, -46, 78, -96], [28, 24, 16, 40, 12, -68, -42, 94, 18, 98, 68, -56, 2, -92, -10, -54, -2, -82, 86, -64, -38, -12, 48, -32, 16, 30, -36, -94, 84, -74, -30, -54, 62, -38, -74, -6, 70, -64, -26, -58, 30, 2, 96, 64, -86, -24, -12], [-30, -78, 84, 58, 20, 2, 10, -24, 62, -56, -80, 76, -40, -20, -66, -2, -62, 48, -74, -48, -82, 88, 64, -72, 74, -42, 30, -60, -88, -46, -72, 36, -98, 70, -84, -52, 68, -18, -90, -20, 44, -40, -92, 20, -98, -80, -84], [-90, 44, -30, 84, -10, 36, 28, 46, -96, -42, -60, 2, -14, 78, 80, 44, -54, -10, -12, -30, 80, -80, 94, 72, 50, -98, 74, 14, -28, -84, 60, 62, -72, -90, -46, -90, 56, -36, 98, 64, -26, 64, -68, -58, -10, -12, -18], [84, -86, 90, -90, -42, 38, 6, 8, -90, -6, -52, 18, -62, 96, 42, -26, -86, -24, 54, 10, 94, -66, 58, -82, 84, -42, -6, 48, 72, 54, 94, -36, -56, -66, 0, 28, 80, -22, 92, 44, 64, -86, -96, 6, 56, -62, -88], [32, -90, 68, 72, -74, -70, -4, 58, -78, -18, -50, -10, -84, 26, 38, -84, 72, 44, -52, 44, -26, 42, -84, 2, -42, 76, -16, -46, 0, -46, -26, -28, -10, 56, -84, -92, 84, 32, -80, -46, -10, -30, 52, -78, -50, 56, -22], [-78, 12, -90, -90, -74, 48, -46, 32, 4, 24, -6, 40, 80, -26, -68, -20, 70, 86, 60, -60, 84, 30, 34, -60, -42, 50, 38, 64, 30, -18, -50, -48, 66, -2, -20, 86, 26, -96, 96, -68, 38, 64, -40, -94, -52, 74, 52], [-40, 88, 72, -56, -26, -48, -48, -20, 46, 88, 14, 86, 4, 46, 6, -54, -86, 34, 58, -72, 92, -18, -88, 8, 0, -28, -78, -4, 40, 0, 28, -38, -60, -28, -44, 48, -56, -52, 2, 20, 72, -98, 6, 22, 64, 36, -60], [90, -8, 0, -42, -58, -96, 80, 52, -78, 24, -24, -92, -70, 42, -46, 96, -10, -32, -18, 22, 24, 86, -4, -86, -70, -70, -96, -98, -34, 0, 16, -84, 28, -70, 94, -72, -52, -78, 62, -56, -12, -88, 76, 74, 12, 12, -28], [-42, -94, 96, 74, 70, -40, 50, -40, -26, 2, -76, -88, -54, 80, 66, 38, -8, 42, 94, -12, -88, 38, -44, -26, -98, 80, -56, -40, 48, -48, -8, 50, 6, 74, 94, -50, -70, -30, 70, -2, 60, -92, 38, -28, -64, -62, -54], [-40, 70, -60, -38, -70, 6, 24, -72, 22, -58, -2, 70, 58, 28, 90, -68, -12, 18, -66, -56, 66, 32, 4, 98, 64, -34, 10, -78, -88, -38, 36, -76, -96, 94, -38, -18, -40, 94, -18, -66, -34, 66, 82, -94, 76, -38, 14], [-98, -72, 14, 10, -30, 56, -56, 30, 20, 60, 52, 46, -16, -60, 60, 0, -70, 50, -64, 90, -62, -10, -94, 74, -92, 98, 86, 42, -18, -66, 34, 40, 36, -44, -44, -86, -22, -50, 50, -28, -34, -40, -30, 44, -54, 74, 54], [16, -12, -44, 82, -60, 36, -24, -12, 78, -74, -82, 66, -48, 74, -2, -4, -4, 10, -4, 18, 8, -84, -56, 64, 66, -46, -56, -60, -60, -72, 92, -82, 44, 28, 30, 84, 68, 34, -36, -58, 60, -26, 10, 74, 50, -70, -40], [-94, -12, -34, -82, -22, 22, -14, -66, 76, -42, -94, 24, 40, 10, -24, 60, 80, -52, 62, 76, 96, 92, 46, -44, -20, -92, -36, -6, -90, -64, -64, 44, 54, -60, -30, 80, 32, 32, -76, -10, 48, 88, -84, -32, -94, -50, 80], [86, 56, -50, -48, 74, 36, 2, 6, -64, 24, 86, 58, -92, -66, -32, -4, -74, -94, 16, -18, 10, -66, 82, -96, -96, 56, 18, 78, -12, 32, 48, 70, 42, 20, 0, -80, 78, -28, 80, 0, -94, -56, -28, 48, -30, -50, -20], [46, -94, -6, 60, -94, -18, 80, -58, -62, -70, -20, -8, -60, 92, 32, 78, 4, -26, -32, 98, 40, 98, -92, -96, 2, -96, 42, 30, 2, -4, 20, -84, -8, -40, 42, 8, 92, 32, -12, 44, -60, 32, 14, -56, -68, -72, -18], [2, 50, 48, 44, -24, 68, 16, 88, -66, -48, -82, -50, -24, -50, -56, 40, 30, -58, 38, 24, 44, 42, 52, 18, -86, 26, -4, -64, 70, -12, 6, -90, 78, 12, -82, 52, 70, 32, 74, 66, -98, -62, 76, 20, 74, -48, -46], [90, 66, -62, 86, 76, -54, 78, 98, 66, -16, 16, 32, 48, -42, 50, 16, -86, 66, 12, 88, -92, -78, -84, 74, 10, 0, -86, -34, 14, -74, -88, 86, -48, -34, 44, -58, 26, -48, -70, -96, -26, 84, 82, -90, -14, 30, -20], [-26, 58, -32, 22, -82, 50, -50, 42, 14, 60, -28, -12, 34, 94, -68, -48, -6, -98, 66, 94, -60, 26, 72, 10, -58, -66, -50, -92, -34, 66, 36, 44, 94, -34, -76, 22, -94, 14, 56, -2, 38, 42, 16, 20, -90, -36, -34], [-90, 98, 34, 26, 58, 70, -86, 46, -40, 70, 94, 40, -36, 2, -82, 0, -4, -18, 70, 40, 92, -38, -46, -74, -82, -54, 44, -34, 24, -46, 60, -36, -86, 92, -32, -38, 76, 46, -42, -56, -42, -8, 48, -64, 88, -50, 24], [70, -26, -72, -18, -88, -58, 76, -96, 62, -12, -56, 74, 62, 68, -86, 82, 34, -98, -52, 22, -16, -48, -14, -8, -56, 10, 48, 98, -70, 82, 2, -86, 76, 72, -70, -6, 58, -18, -48, 52, -48, -76, 68, -64, -34, -56, -88], [34, -80, -50, 74, -26, 2, 40, -66, -16, 56, 22, 10, -72, 86, 54, 34, 30, 38, -86, -22, -38, -28, -86, 28, 96, 6, -86, 54, 4, -84, 34, -58, -6, 40, 54, -60, -22, 84, 74, -92, -58, -86, -76, -66, -36, 90, -30], [26, 74, 84, -60, 52, -14, 98, -74, 24, 16, -96, -86, 18, -82, -34, -82, -56, -86, -8, -50, -32, -44, 8, 50, -12, 82, -10, 80, -28, -28, 2, -34, -88, 28, -44, -94, -42, 2, -48, 54, 90, 16, -38, 14, 82, 42, 58], [-22, 14, 26, -60, -18, -38, -60, 54, -48, 60, 50, -70, 24, -50, 18, 48, 98, 42, -52, -68, 24, 94, 60, 74, 76, 6, -76, -70, -86, -22, 76, 16, -4, 48, 20, -60, 82, 38, 32, 36, -56, -58, 40, 12, 46, 18, -96], [-92, 44, 94, -42, -84, -78, -72, -62, -32, 4, -12, -42, 4, 12, 20, -12, 6, 38, -92, -64, 64, 92, -62, 64, 54, -60, -42, -54, -14, -28, 26, -6, -14, 0, 80, 10, -64, -54, 2, 82, -8, 98, -20, 72, -94, -78, -64], [50, 44, -64, -36, 60, -44, 64, -64, 40, -66, 60, -44, 6, -8, -80, 36, 2, 30, -26, 82, -82, 26, -92, -40, -66, -62, 76, -34, -46, -36, 36, -92, 36, -74, -78, 50, -80, 16, -88, 92, -50, -80, 12, -92, 8, -18, -84], [20, -24, 94, -62, 40, -16, -24, -36, 62, -88, 98, -28, -80, 96, -96, 18, 60, -92, 22, 96, 98, -48, -82, 62, -28, -74, -84, -56, 88, -82, 38, 42, -82, -76, -16, -12, 46, -46, 48, 96, 12, 66, 74, -58, -2, -84, 16], [-4, 18, -28, 22, 70, -70, -70, 66, 46, -68, 72, -60, -54, 2, -82, 60, 86, -92, 36, -44, 98, 88, -88, 86, 24, 88, -80, -12, -18, -8, 0, -26, 2, 56, 94, 90, 30, -96, 32, 48, 2, -72, -36, 10, -52, 0, 98], [46, -62, -78, -50, 98, 26, 42, 6, 26, -28, -56, 60, -36, -54, -84, 90, 68, 94, -28, 60, 52, 54, 28, 12, 58, -42, 86, -74, -84, -88, 54, -18, 54, 38, -96, 84, -78, -26, 50, 86, 58, 24, -2, -78, 40, -68, 6], [2, 26, -82, -84, 46, 46, 0, 18, 90, -92, 24, -34, -70, -84, 18, 32, -36, -84, -36, 20, 26, -72, -12, 36, 72, 42, 58, -34, 30, 40, -6, -18, -52, 20, -52, 4, -64, -64, -2, 36, 64, -86, -70, -38, -50, -34, 60]],44,],
    [[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],16,],
    [[[49, 76, 85, 2, 48, 20], [13, 2, 84, 21, 44, 17], [70, 85, 58, 75, 89, 16], [86, 45, 19, 97, 95, 63], [62, 44, 26, 75, 73, 95], [93, 35, 62, 88, 6, 33]],4,],
    [[[-80, -72, -68, -62, -56, -40, -28, 4, 22, 24, 34, 58, 60, 60, 78], [-88, -68, -48, -28, -24, -4, 0, 2, 12, 30, 42, 48, 52, 64, 68], [-92, -86, -82, -44, -38, -20, -18, -16, 2, 4, 12, 32, 42, 54, 96], [-82, -74, -64, -48, -30, -10, 16, 20, 28, 46, 46, 54, 60, 74, 96], [-84, -78, -70, -30, -28, -18, -10, -2, 2, 14, 30, 44, 50, 92, 98], [-92, -74, -64, -48, -46, -8, 20, 22, 28, 30, 30, 32, 46, 62, 84], [-92, -82, -82, -66, -64, -60, -40, -2, 2, 40, 44, 46, 66, 68, 74], [-70, -58, -54, -46, -34, -18, 14, 20, 22, 32, 48, 62, 84, 86, 90], [-92, -62, -58, -48, -30, -28, 0, 8, 16, 20, 26, 38, 70, 92, 98], [-90, -80, -46, 0, 14, 36, 42, 48, 48, 50, 50, 50, 52, 76, 98], [-80, -78, -58, -58, -54, -44, -42, 6, 20, 24, 28, 34, 40, 58, 78], [-90, -80, -60, -40, 4, 6, 10, 26, 28, 34, 36, 38, 42, 44, 56], [-96, -96, -72, -58, -54, -40, -34, -34, -28, -26, -22, -18, -2, 18, 54], [-98, -90, -76, -64, -62, -58, -54, -30, -16, 14, 36, 54, 54, 72, 92], [-86, -70, -58, -48, -46, -38, -32, 2, 20, 44, 54, 56, 66, 82, 84]],9,],
    [[[0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1], [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0], [1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1], [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1], [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1], [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1], [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0], [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1], [0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1], [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0]],27,],
    [[[1, 2, 2, 2, 3, 3, 10, 11, 11, 19, 27, 30, 31, 36, 38, 51, 55, 64, 64, 68, 72, 78, 79, 83, 87, 98], [1, 3, 5, 6, 19, 25, 31, 32, 39, 40, 51, 51, 52, 54, 57, 58, 64, 65, 66, 73, 76, 83, 87, 90, 92, 97], [1, 6, 7, 26, 29, 33, 35, 42, 44, 46, 47, 50, 61, 64, 65, 67, 73, 75, 81, 81, 86, 87, 88, 88, 95, 95], [1, 3, 6, 19, 19, 21, 29, 34, 36, 36, 43, 44, 52, 53, 53, 63, 64, 67, 68, 75, 75, 75, 76, 78, 81, 83], [9, 10, 18, 18, 20, 22, 28, 31, 35, 42, 47, 48, 48, 62, 63, 65, 65, 70, 73, 75, 75, 82, 92, 95, 95, 97], [10, 14, 16, 17, 27, 30, 33, 36, 37, 37, 39, 47, 48, 48, 56, 57, 62, 74, 78, 81, 82, 84, 87, 88, 95, 95], [2, 16, 16, 18, 21, 21, 25, 26, 33, 38, 51, 51, 57, 59, 66, 68, 68, 69, 70, 74, 74, 74, 84, 86, 96, 98], [3, 5, 14, 14, 17, 23, 26, 26, 27, 31, 33, 36, 37, 51, 63, 64, 70, 70, 72, 75, 79, 86, 90, 90, 97, 97], [15, 15, 16, 19, 23, 29, 31, 33, 35, 35, 37, 38, 44, 49, 56, 68, 73, 74, 75, 76, 80, 84, 87, 89, 95, 99], [2, 3, 7, 13, 14, 16, 19, 19, 21, 28, 32, 39, 43, 47, 58, 64, 66, 80, 80, 82, 83, 84, 91, 91, 95, 98], [2, 3, 11, 21, 22, 24, 26, 34, 39, 41, 41, 47, 49, 50, 50, 59, 61, 67, 78, 79, 80, 85, 87, 87, 90, 96], [6, 9, 11, 15, 20, 27, 27, 27, 28, 42, 47, 47, 58, 61, 67, 70, 70, 71, 76, 77, 78, 80, 83, 91, 97, 98], [4, 8, 12, 13, 14, 14, 15, 20, 21, 22, 24, 25, 29, 51, 51, 57, 60, 68, 73, 76, 76, 81, 92, 93, 94, 98], [1, 8, 23, 26, 26, 26, 31, 40, 41, 45, 46, 49, 50, 53, 55, 58, 62, 65, 66, 68, 71, 77, 87, 87, 97, 98], [3, 9, 11, 17, 26, 28, 31, 32, 32, 33, 35, 41, 41, 41, 44, 48, 48, 63, 72, 74, 82, 84, 85, 91, 92, 94], [3, 5, 6, 8, 10, 17, 36, 41, 42, 45, 50, 51, 52, 53, 56, 58, 63, 64, 69, 72, 73, 74, 78, 87, 90, 92], [2, 6, 12, 19, 20, 25, 27, 30, 35, 38, 42, 45, 45, 50, 53, 54, 56, 59, 62, 62, 66, 74, 78, 81, 91, 94], [6, 8, 9, 15, 18, 20, 23, 23, 29, 30, 39, 41, 49, 62, 65, 69, 76, 79, 83, 84, 85, 86, 90, 94, 98, 98], [5, 6, 7, 11, 12, 16, 19, 19, 20, 20, 26, 44, 46, 53, 56, 60, 61, 74, 75, 75, 76, 80, 93, 95, 96, 99], [7, 15, 19, 22, 23, 24, 31, 34, 35, 37, 40, 42, 44, 52, 57, 67, 73, 74, 76, 77, 78, 83, 84, 95, 96, 97], [2, 4, 15, 16, 16, 23, 26, 32, 34, 39, 40, 41, 46, 52, 56, 61, 62, 65, 76, 80, 81, 82, 84, 85, 86, 87], [9, 13, 22, 41, 42, 42, 42, 45, 48, 49, 51, 51, 54, 58, 59, 60, 73, 74, 75, 83, 83, 86, 91, 94, 98, 98], [5, 9, 9, 16, 21, 21, 22, 27, 28, 31, 31, 32, 38, 38, 49, 51, 61, 62, 65, 69, 73, 75, 85, 91, 91, 96], [4, 4, 7, 7, 7, 9, 11, 21, 31, 36, 43, 43, 57, 58, 63, 63, 64, 66, 70, 71, 73, 77, 82, 83, 92, 97], [1, 6, 9, 9, 12, 14, 15, 16, 20, 24, 25, 29, 30, 37, 43, 44, 45, 53, 58, 63, 69, 70, 72, 78, 83, 88], [1, 15, 16, 17, 19, 24, 25, 35, 43, 44, 44, 46, 48, 49, 50, 53, 54, 61, 61, 67, 70, 74, 74, 83, 87, 88]],24,],
    [[[-62, -26, -90, -96, 66, 8, 88, 98, 26, -4, -62, 38, 24, 18, -88, -78, 22, -80, 80, 8, 62, 22, -20, 42, 78, -96, 38, 22, 44, 18, -98, 4, 66, -58, 50, -98, 42, 48, -52, 98, -72, 72, 60, -66, -78, -92], [24, 94, 24, 64, 78, -82, 12, -96, -80, 32, -18, -8, -98, -32, -8, -40, -98, -52, -86, -50, -16, -36, 6, 6, 70, -78, 10, -34, -98, 24, -62, 4, -8, -86, 60, -52, -48, -44, 82, 68, 98, 30, 6, -58, 94, -52], [-20, 84, -82, 42, 42, 86, 38, 64, 84, 88, 46, -48, -8, -60, -94, -74, -72, -74, -52, -96, 46, 68, 84, -64, 22, -44, 78, -62, 64, 14, -80, 90, -26, 84, 92, -82, 36, -56, -46, 28, 86, -58, 50, -78, -36, -50], [-26, -94, -38, -38, -10, 58, -42, 36, 12, 22, 52, 48, 40, 22, 84, -56, -76, 48, -42, -58, 50, 98, -46, -30, 16, 30, 66, -2, 68, 44, -60, -4, 40, 16, 68, -40, 96, -40, -6, 60, 62, 90, 90, -20, 98, 94], [80, 36, 26, 86, 76, 38, 88, 80, -90, -60, -52, 92, 48, -32, -18, 4, -44, 52, 14, 2, 92, 2, -70, -16, 92, 12, -66, 62, 52, -92, -98, -80, -46, -50, 72, 98, 64, -32, 52, -10, 20, -20, -54, -12, 64, -64], [38, 94, 60, 44, -26, -46, 92, 60, -18, -10, -60, -78, -96, 54, -88, -20, 60, 66, -62, 40, 98, -50, 86, -56, -52, -60, 52, 26, 62, 62, -4, 54, -60, 52, -50, -2, 92, -38, -98, -66, 60, 70, 76, 64, -80, -88], [94, 84, 38, -60, -72, 50, -42, -52, -4, 16, -40, 90, -18, -20, 34, -28, -4, -66, -82, -30, -36, 94, -38, -56, -22, 62, -2, 30, -58, 70, -80, 0, -98, 14, 40, -28, 76, 30, 18, 6, -72, -28, 24, 26, 66, -56], [38, 52, 34, -60, 78, 64, 2, 64, -50, 14, -66, -2, -10, 10, 98, 36, 96, 96, -76, -58, -52, 22, 40, -28, 18, -34, -72, -98, -54, 82, 30, 90, 0, -22, 6, -36, -34, 44, -60, -40, 70, -26, 14, 14, -72, 98], [38, -88, 26, 34, 32, -78, 38, 12, -16, -76, 28, -74, 6, -54, 96, 8, -34, 72, 84, -70, -26, 16, -86, -14, 46, -24, -24, -96, -82, -66, 78, 20, -94, -76, -76, 90, -32, -24, -36, -62, -88, -26, -36, 0, -92, 40], [0, 66, 60, 82, -14, 92, 88, 30, 60, 36, 80, -54, 28, -10, -96, -4, -68, 46, 98, 42, 38, 30, -74, -2, 30, 6, -78, 74, -56, -6, -48, 32, 88, -40, 18, 36, -34, -28, 30, -54, -82, 98, 34, -56, 50, 40], [18, -96, 54, -6, 94, -68, -28, -18, -90, -64, -88, 60, 60, -72, 82, 48, 6, -44, -22, -82, 62, 52, -32, 0, 2, -12, -78, 92, 22, 2, 84, -64, 50, -6, -2, 90, 76, -48, -28, 22, -30, 14, 68, 26, 80, 20], [-94, -26, -52, 4, -44, 12, 74, -26, 28, 64, 84, -62, -10, -12, 74, 68, 94, -80, 32, -26, 80, 44, -80, -74, -82, -86, 98, -12, 30, 60, 90, 16, -58, -28, 18, 14, -86, -46, -62, -88, -84, 74, -48, -8, -26, 60], [10, 64, 58, -92, -48, 38, -30, -64, -58, -68, -26, -68, 52, 48, -72, 96, 32, -48, -60, 54, -6, -72, -22, 74, 4, 14, 80, 52, -50, 22, 74, -14, -92, -96, 54, -90, -18, 18, -16, -82, 26, 98, -68, 8, -78, -48], [-78, 12, 70, -42, 34, -52, 86, 64, -32, -96, -22, -8, 84, 36, -38, -80, 84, 72, 58, 34, -86, -84, 30, -40, -90, 10, 0, -74, 14, 76, -22, -2, 86, 86, -60, 32, -62, -34, 4, 14, 68, -38, 86, 94, 18, 30], [66, 16, 82, -70, -24, -90, -70, 82, 32, -42, -82, 74, -24, -16, 68, -92, 32, -58, -58, -14, -34, 68, -24, 20, 68, 54, 78, -72, -14, -46, 74, -90, -98, -64, -2, -58, -6, -20, 54, -70, -46, -56, 50, -62, 0, -14], [4, 50, 66, 84, -44, 50, -22, 36, 20, 94, -2, 66, -16, -82, -90, -74, 88, 42, 16, 42, -76, 0, 28, -42, -44, 48, -12, 78, -40, 54, 34, -86, -26, -46, 78, -68, -80, -94, -2, -48, -42, 62, 48, -24, -20, 60], [-16, 20, 16, -10, -96, -32, 42, -52, -72, 2, -66, -40, 32, 86, 96, -46, 88, 64, 90, 68, -22, 0, -18, 82, 22, 62, -82, -44, 76, -62, -26, 8, 82, 84, 96, 8, 76, 66, -56, 96, 96, -54, -70, 66, 60, 40], [64, -58, -76, 94, -4, -48, -40, 96, 46, -16, 2, -52, 42, -80, -44, 10, -60, 28, -52, -54, -88, 72, -40, -2, 78, 86, -26, -86, -90, -4, -14, 46, -84, -36, -88, 4, -4, -92, -42, 36, -94, -10, -38, -82, -50, 4], [-72, 22, -40, 24, 10, 26, 72, 14, -90, -66, -88, -30, 40, 40, -80, -56, -4, -88, 32, -98, 22, 10, 58, 62, -10, 24, -80, -90, 28, -64, -26, 30, -32, -44, 90, -12, 16, -48, 98, 88, -58, -54, -10, 48, -12, -40], [70, -36, -30, -26, -48, 86, -12, -78, 62, -8, -80, -14, -48, 52, -38, 38, -54, -40, -24, -80, -94, -50, -46, 64, 12, 62, -8, 12, -22, 24, -30, 20, -8, -76, -18, -76, 52, -74, 38, -26, -98, 58, 76, 38, 44, -14], [32, -62, 24, -58, -50, 32, -84, 0, -62, -12, 28, 72, 0, 42, 82, 32, -20, -96, -20, 92, -32, 86, -70, 74, -76, 64, 48, 66, 94, 52, 48, 6, -78, -88, 24, 74, 32, 38, 38, 92, 50, 24, 34, 46, -14, 18], [-42, 86, -48, -96, -72, 52, -28, 8, -92, -28, -56, -16, -48, -88, 90, 42, 30, 62, -50, 78, -20, 26, 10, -14, -40, 22, -34, -98, -48, -56, 54, 0, -54, -68, 52, 70, 78, -20, 60, -88, -26, 40, -80, -6, 66, -86], [18, -68, -46, 24, -62, -8, 14, -46, -60, -48, 0, -46, 50, 98, -86, 2, 92, -94, 66, -90, -74, -34, -80, 14, -42, -72, -54, 36, 70, 38, -92, 64, -86, -64, 6, -22, 92, -60, 38, 94, -74, 46, 96, -32, -10, 22], [2, 44, 44, -16, -96, 26, -32, -66, -22, 30, 68, -12, -94, 32, -48, 16, -80, -94, 2, -4, -56, -22, -22, 36, 16, 50, -2, 46, 56, -68, -72, -34, -54, -76, -84, 74, 22, -38, 26, 36, 30, -56, -82, 54, 92, -50], [-12, 2, -28, 98, -94, -52, 18, -30, -50, 36, 46, -22, -54, -70, 64, -30, 32, -14, 38, -56, -34, 84, 24, 10, 26, 32, 52, -16, -48, 4, -24, -70, -94, -10, -76, -36, 46, 88, 18, 48, -64, -12, -8, -70, -4, -80], [90, -8, 30, -44, -64, 42, 8, -14, -6, -70, -42, -98, -48, 34, -88, -22, 48, -98, 0, -16, 32, -36, 78, 84, 60, 80, 90, 58, -72, 80, -96, -98, -96, 58, -62, 86, -6, -14, -50, -96, 8, 18, -84, -34, -72, -18], [-42, 36, 86, 26, 10, -20, -22, 46, 28, 88, -34, -84, 60, 8, -22, 38, -40, -36, 18, -76, 40, -22, 14, 86, 22, 24, 98, 88, -90, 58, -58, 30, 70, 84, -32, 2, 20, 80, 28, -44, -98, -6, -64, 90, 42, -92], [0, -38, 82, 46, -24, 34, 34, -82, 2, -86, -30, 64, 16, -6, 22, -88, -26, -88, -74, -20, 82, 94, -16, 64, 26, 76, 58, -92, 28, -16, 44, 56, 20, 40, 20, 78, -96, -86, -54, -46, 54, -76, 82, -50, -54, -40], [-66, -18, 2, 98, 6, 70, 32, -6, 66, 4, 88, 64, 20, -24, 68, 2, -86, 66, -46, 18, 70, -90, 6, -44, -28, -86, 16, -38, -34, 2, 96, 80, 80, 34, -34, -66, 68, -20, 32, 36, 8, -40, -34, 8, 80, -94], [54, -28, -22, -26, 96, -34, 96, -92, 20, -24, 26, 24, 18, 96, 14, 96, 48, -96, 38, 86, 88, -66, 26, -22, 54, 72, 42, 0, -10, -42, -54, 78, -42, -2, -30, -60, -20, -84, -14, 98, 24, 96, -62, -28, -52, 34], [-96, 78, -66, -94, 2, 36, -62, -14, 70, -22, -92, -58, -58, -2, 40, 80, 86, -84, -98, -66, -44, -58, 56, -90, 88, 34, 76, 82, -2, 38, -26, 92, -94, 62, -56, -10, 14, -50, -92, 80, 8, -36, -96, -10, 42, -84], [50, -14, 12, 78, 50, -54, -22, -34, -70, -58, -18, 38, 8, -88, -88, -86, 58, -42, -28, -42, -26, 26, 90, 14, -40, 98, 94, 58, 68, 14, 36, 20, 58, 14, -22, -34, -48, -64, 38, -12, -12, 30, 24, 6, 38, 50], [-48, 6, 82, 94, 30, 58, -30, -54, -26, -32, 48, 40, 20, -68, -28, -50, -4, 88, -58, -46, -70, 48, -30, 76, -58, -96, -56, 36, 10, 56, 14, -6, 38, 12, -52, -78, -56, -36, 48, -56, -78, 98, -56, -92, -50, 46], [-30, -64, -90, -38, -28, 74, 70, -44, 56, -38, 64, 98, 62, -50, -68, 82, -6, 36, -16, -60, -44, -34, 92, -56, 12, 12, 88, 30, -72, 98, -86, -64, 82, -56, 58, 28, 24, -72, -98, -68, -54, -52, 50, 8, 44, 18], [-92, -86, -68, -18, 56, 26, 68, -84, 60, -68, 20, -2, -86, -76, -92, -86, -96, 50, 84, -44, 62, 24, -20, 88, -94, -66, 32, 50, -32, -96, 18, 56, 48, 18, -40, 50, -18, -10, 84, -48, 8, -50, 86, 88, 90, -70], [60, 46, 46, 96, 44, -38, -66, -56, 12, -28, -36, -32, -98, 50, 16, -8, 58, -94, 20, -94, 88, 82, 30, -32, -6, -50, 6, 44, -98, -16, -96, -68, 54, 0, 68, 44, 58, -72, -96, -84, -70, -14, -12, -52, -78, -76], [-8, 72, 32, -90, -68, 60, -10, -34, -38, -88, 22, 82, -46, -76, 96, 54, 0, -52, 94, -66, 34, 28, -50, -32, -80, 0, 98, 18, 96, 28, 72, 64, -52, 98, 14, 28, 46, 48, 34, -34, -96, -24, -48, -86, -26, -74], [36, 26, 22, 18, 4, 78, 72, 28, -24, -64, 28, 2, -4, 46, 82, -70, 36, 66, 22, -32, -48, 24, -20, 66, 80, -22, 88, 26, 68, 22, 84, -44, -28, 76, -10, 90, -46, -40, -94, 22, 14, 96, -66, 66, -4, 40], [-44, -22, 52, 30, 70, 22, 22, 74, 56, -14, 66, -34, 34, -2, -96, -90, -38, 32, -4, -74, 16, -34, -6, 14, 38, -66, 68, -2, -28, -66, -8, -22, 80, -70, -62, -66, -18, -84, 82, -8, 34, -42, 16, 10, -64, 34], [-10, 92, -78, -80, 18, 54, 8, 16, -98, 14, 8, 14, -6, -72, -30, 68, -76, 40, 92, -94, 20, 90, 68, 28, 38, -8, -94, 50, 56, -92, -46, -54, -12, -48, 18, 76, 10, 58, 24, -32, 6, 94, 64, 66, 96, 90], [88, 62, -84, 24, 76, -24, -22, 26, 42, -56, -56, -26, -40, 88, 74, 32, 54, -96, -24, -44, 90, 66, 56, -68, 34, 18, 44, -38, 82, -12, -8, 80, 70, 92, 6, -50, 40, -62, 60, -98, 54, 36, -4, 84, 48, 84], [86, -98, -60, 26, -58, -26, 92, -80, -56, -30, 60, -10, 96, 92, -76, -28, 88, 4, -88, -82, -22, 96, -18, -8, -88, 16, 12, -30, -66, -26, 38, -76, 68, -22, -78, 56, -70, -42, 76, 92, 8, -76, 0, 70, -70, 32], [42, -88, -52, -12, -58, 78, 4, 98, -92, 96, 70, 96, 96, 86, -6, -58, -14, -92, -6, 16, -28, 88, 28, 14, -14, 22, -46, -30, -6, -34, -12, -70, 82, 68, 34, 58, 20, 90, -58, -66, -12, -20, -76, -86, 56, 32], [-62, -58, -60, 26, 38, 68, -18, 26, -42, 30, -52, -28, -98, -58, -2, 86, -38, -58, -58, -82, -52, 80, 42, -4, -92, 32, -90, 60, 70, -96, 96, -36, -16, 40, -24, 44, -34, 48, -54, 80, -86, 14, 34, 52, 50, 38], [68, -46, -50, 64, -32, -94, 14, -66, 90, -54, 60, 20, 52, 36, -26, -92, 38, 10, 84, -18, -38, -98, 92, -50, -58, 40, -56, -44, -46, -50, -2, 52, 22, -80, -20, 86, 8, 64, 48, -8, 14, -86, -56, -26, -6, 28], [-58, -40, -82, 8, 26, -46, -14, -62, -28, -28, 90, 76, 62, -18, -34, 18, -78, 14, 24, 2, 62, 62, -88, -84, -54, 66, 96, 44, -46, -18, -44, 32, -12, -94, -54, -18, 62, 12, 4, 8, -66, 72, 12, -32, 48, 68]],43,],
    [[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],19,],
    [[[94, 55, 14, 44, 30, 47, 19, 87, 68, 17, 34, 15, 93, 98, 10, 27, 43, 51, 83, 24, 19, 45, 91, 59, 84, 82, 80, 51], [4, 37, 73, 13, 56, 1, 10, 52, 62, 6, 71, 18, 21, 24, 48, 82, 41, 86, 45, 79, 74, 42, 49, 92, 73, 40, 57, 28], [63, 27, 3, 18, 66, 35, 77, 76, 77, 17, 69, 56, 34, 48, 83, 96, 57, 6, 7, 20, 41, 11, 14, 78, 10, 10, 24, 76], [75, 75, 93, 9, 27, 21, 26, 88, 55, 93, 73, 46, 37, 14, 94, 15, 87, 91, 66, 76, 90, 95, 6, 14, 33, 22, 69, 34], [32, 11, 56, 49, 83, 82, 15, 80, 85, 68, 22, 87, 8, 33, 50, 87, 59, 82, 73, 34, 31, 39, 77, 30, 51, 44, 57, 92], [66, 57, 78, 33, 72, 1, 88, 46, 15, 89, 96, 67, 28, 91, 99, 7, 69, 13, 18, 26, 36, 48, 20, 39, 66, 57, 25, 66], [40, 41, 73, 88, 44, 60, 53, 70, 38, 51, 3, 35, 25, 34, 30, 56, 58, 66, 67, 63, 7, 64, 48, 46, 43, 21, 33, 67], [41, 71, 98, 92, 82, 99, 88, 68, 7, 52, 92, 75, 25, 95, 54, 39, 46, 30, 71, 69, 53, 51, 73, 65, 2, 63, 60, 95], [19, 56, 87, 21, 61, 51, 78, 34, 40, 23, 65, 80, 94, 90, 70, 98, 32, 89, 65, 82, 35, 91, 83, 18, 46, 89, 47, 10], [69, 26, 55, 42, 59, 37, 59, 88, 16, 97, 11, 51, 67, 3, 84, 50, 39, 44, 92, 36, 36, 88, 44, 29, 73, 92, 93, 48], [86, 59, 11, 78, 91, 40, 93, 61, 6, 20, 70, 18, 98, 14, 25, 89, 49, 26, 32, 79, 1, 76, 30, 47, 22, 81, 28, 9], [96, 52, 64, 21, 57, 31, 23, 75, 71, 69, 40, 67, 54, 18, 64, 52, 99, 77, 20, 52, 59, 16, 47, 26, 49, 83, 53, 86], [27, 61, 59, 50, 90, 15, 24, 36, 40, 96, 35, 46, 52, 45, 97, 77, 15, 67, 59, 18, 86, 6, 21, 40, 29, 89, 94, 21], [97, 78, 48, 95, 78, 24, 11, 45, 29, 18, 41, 68, 88, 66, 20, 13, 75, 14, 90, 17, 40, 76, 91, 40, 62, 21, 19, 55], [92, 89, 85, 12, 93, 53, 47, 60, 39, 14, 63, 87, 82, 98, 49, 59, 34, 64, 57, 85, 49, 27, 87, 67, 94, 62, 89, 68], [98, 25, 36, 88, 5, 79, 87, 67, 70, 88, 2, 33, 46, 81, 38, 43, 11, 10, 38, 32, 40, 94, 63, 52, 77, 32, 52, 39], [25, 2, 1, 7, 56, 64, 59, 37, 56, 32, 37, 58, 28, 67, 45, 61, 95, 69, 96, 96, 16, 86, 18, 8, 8, 89, 8, 46], [41, 21, 95, 76, 6, 55, 40, 59, 96, 50, 38, 15, 82, 58, 76, 3, 80, 21, 63, 97, 17, 20, 8, 50, 22, 75, 46, 30], [72, 75, 28, 67, 4, 83, 57, 98, 8, 24, 9, 39, 3, 97, 49, 32, 91, 36, 68, 1, 76, 98, 67, 68, 34, 38, 43, 96], [84, 29, 46, 41, 1, 42, 79, 84, 49, 95, 25, 18, 22, 61, 39, 90, 51, 11, 57, 28, 35, 68, 51, 77, 46, 72, 19, 54], [72, 65, 70, 48, 89, 7, 92, 78, 95, 27, 41, 85, 20, 54, 54, 33, 19, 28, 84, 35, 29, 35, 97, 63, 57, 2, 29, 28], [26, 65, 73, 34, 38, 95, 83, 73, 23, 67, 42, 19, 79, 13, 13, 63, 1, 53, 52, 71, 40, 40, 45, 42, 13, 50, 30, 39], [9, 56, 62, 34, 18, 82, 94, 2, 12, 45, 40, 38, 35, 20, 95, 13, 21, 90, 68, 20, 59, 1, 6, 89, 24, 96, 40, 68], [27, 44, 44, 50, 10, 72, 77, 69, 49, 66, 94, 32, 3, 48, 67, 77, 49, 71, 46, 76, 91, 5, 69, 46, 61, 90, 14, 74], [88, 44, 35, 20, 13, 82, 8, 38, 67, 85, 88, 93, 16, 96, 4, 43, 67, 24, 44, 66, 57, 26, 26, 32, 85, 1, 91, 88], [74, 52, 93, 80, 26, 34, 69, 46, 61, 3, 45, 82, 17, 45, 90, 67, 36, 39, 9, 56, 76, 79, 34, 94, 53, 87, 80, 71], [81, 47, 80, 21, 34, 27, 67, 38, 92, 35, 37, 74, 17, 91, 36, 91, 49, 18, 92, 1, 55, 46, 55, 48, 19, 36, 25, 26], [30, 49, 79, 30, 21, 84, 33, 48, 65, 43, 62, 63, 52, 43, 5, 88, 75, 27, 54, 95, 83, 42, 41, 18, 62, 99, 77, 68]],20,]
        ];
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
