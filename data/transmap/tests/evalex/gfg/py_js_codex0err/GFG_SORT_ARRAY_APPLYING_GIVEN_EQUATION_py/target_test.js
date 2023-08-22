
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 5, ["list", 8, ["num", 9], ["num", 30]], ["num", 4]], ["list", 5, ["list", 31, ["num", -48], ["num", 89]], ["num", 18]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 5, [["list", 8, [["num", 373], ["num", 3754], ["num", 9853], ["num", 0], ["num", 78], ["num", 85], ["num", 85], ["num", 92]]], ["num", 4], ["num", 4], ["num", 5], ["num", 4]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 5, [["list", 31, [["num", 1463], ["num", 10143], ["num", 45143], ["num", 80663], ["num", 120143], ["num", 63863], ["num", 160223], ["num", 70823], ["num", 88463], ["num", 102263], ["num", 26663], ["num", 45143], ["num", 49023], ["num", 75663], ["num", 34463], ["num", 9263], ["num", 143], ["num", 0], ["num", -90], ["num", -5], ["num", -94], ["num", -43], ["num", 29], ["num", -29], ["num", 86], ["num", -79], ["num", -8], ["num", 27], ["num", -20], ["num", -44], ["num", 16]]], ["num", 18], ["num", 20], ["num", 20], ["num", 23]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 5, [["list", 28, [["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 18], ["num", 59], ["num", 59], ["num", 59], ["num", 59], ["num", 59], ["num", 59], ["num", 1], ["num", 1], ["num", 1]]], ["num", 25], ["num", 26], ["num", 15], ["num", 18]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 5, [["list", 48, [["num", 86666], ["num", 68641], ["num", 55733], ["num", 65288], ["num", 278438], ["num", 214248], ["num", 285319], ["num", 65288], ["num", 202418], ["num", 12774], ["num", 15868], ["num", 163659], ["num", 168944], ["num", 279], ["num", 94464], ["num", 31604], ["num", 12774], ["num", 226414], ["num", 17541], ["num", 148308], ["num", 75599], ["num", 75599], ["num", 168944], ["num", 2344], ["num", 292284], ["num", 15868], ["num", 185303], ["num", 278438], ["num", 226414], ["num", 320984], ["num", 251754], ["num", 208291], ["num", 320984], ["num", 4], ["num", 25], ["num", 69], ["num", 30], ["num", 76], ["num", 68], ["num", 88], ["num", 29], ["num", 73], ["num", 68], ["num", 51], ["num", 24], ["num", 14], ["num", 69], ["num", 18]]], ["num", 33], ["num", 42], ["num", 35], ["num", 41]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 5, [["list", 17, [["num", 5132], ["num", 6728], ["num", 54952], ["num", 58248], ["num", 63372], ["num", 70540], ["num", 86028], ["num", 98652], ["num", -12], ["num", -1], ["num", 9], ["num", 29], ["num", 48], ["num", 52], ["num", 56], ["num", 63], ["num", 88]]], ["num", 8], ["num", 12], ["num", 8], ["num", 8]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 5, [["list", 10, [["num", 7], ["num", 7], ["num", 7], ["num", 21], ["num", 7], ["num", 21], ["num", 21], ["num", 1], ["num", 1], ["num", 1]]], ["num", 7], ["num", 8], ["num", 6], ["num", 7]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 5, [["list", 39, [["num", 629], ["num", 945], ["num", 2869], ["num", 6759], ["num", 11059], ["num", 13605], ["num", 16415], ["num", 17919], ["num", 21125], ["num", 26429], ["num", 30295], ["num", 32327], ["num", 38819], ["num", 41115], ["num", 43477], ["num", 48399], ["num", 48399], ["num", 50959], ["num", 64749], ["num", 76969], ["num", 80189], ["num", 0], ["num", 54], ["num", 55], ["num", 59], ["num", 64], ["num", 66], ["num", 71], ["num", 72], ["num", 72], ["num", 73], ["num", 76], ["num", 78], ["num", 82], ["num", 82], ["num", 84], ["num", 92], ["num", 93], ["num", 95]]], ["num", 22], ["num", 33], ["num", 19], ["num", 25]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 5, [["list", 31, [["num", 26376], ["num", 706], ["num", 18067], ["num", 1192], ["num", 54591], ["num", 22398], ["num", 12921], ["num", 98842], ["num", 52738], ["num", 118], ["num", 9688], ["num", 26376], ["num", 217], ["num", 34746], ["num", 143178], ["num", 10338], ["num", 1192], ["num", 8178], ["num", 108663], ["num", 0], ["num", 19], ["num", 62], ["num", 98], ["num", -55], ["num", -42], ["num", 79], ["num", 26], ["num", 62], ["num", -56], ["num", -85], ["num", -22]]], ["num", 20], ["num", 16], ["num", 19], ["num", 16]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 5, [["list", 32, [["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 23], ["num", 63], ["num", 63], ["num", 63], ["num", 63], ["num", 63], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 23], ["num", 21], ["num", 19], ["num", 23]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 5, [["list", 35, [["num", 281], ["num", 39841], ["num", 98691], ["num", 34543], ["num", 49511], ["num", 62501], ["num", 26553], ["num", 179883], ["num", 58003], ["num", 93017], ["num", 58003], ["num", 126303], ["num", 153], ["num", 139667], ["num", 191733], ["num", 67167], ["num", 168411], ["num", 34543], ["num", 126303], ["num", 98691], ["num", 45517], ["num", 129581], ["num", 3871], ["num", 15953], ["num", 917], ["num", 6483], ["num", 28067], ["num", 0], ["num", 90], ["num", 22], ["num", 55], ["num", 67], ["num", 99], ["num", 60], ["num", 58]]], ["num", 28], ["num", 21], ["num", 23], ["num", 23]]]]];
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
            [9, 30, 49, 65, 78, 85, 85, 92], 4, 4, 5, 4
        ],
        [
            [-48, 89, -60, 66, 71, -37, 47, -50, 61, 41, -22, -3, 90, -57, 77, -64, 22, 8, -90, -5, -94, -43, 29, -29, 86, -79, -8, 27, -20, -44, 16], 18, 20, 20, 23
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25, 26, 15, 18
        ],
        [
            [87, 70, 77, 87, 73, 81, 66, 19, 83, 7, 63, 42, 42, 59, 20, 73, 17, 27, 47, 2, 63, 62, 19, 17, 69, 39, 82, 71, 81, 39, 36, 40, 45, 4, 25, 69, 30, 76, 68, 88, 29, 73, 68, 51, 24, 14, 69, 18], 33, 42, 35, 41
        ],
        [
            [-91, -85, -77, -73, -70, -68, -24, -21, -12, -1, 9, 29, 48, 52, 56, 63, 88], 8, 12, 8, 8
        ],
        [
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 1], 7, 8, 6, 7
        ],
        [
            [4, 5, 9, 14, 18, 20, 22, 23, 25, 28, 30, 31, 34, 35, 36, 38, 38, 39, 44, 48, 49, 51, 54, 55, 59, 64, 66, 71, 72, 72, 73, 76, 78, 82, 82, 84, 92, 93, 95], 22, 33, 19, 25
        ],
        [
            [40, 6, 33, 8, 78, -58, 2, 24, 40, 3, 46, 94, -26, 8, 22, -83, 96, -29, -38, -59, 19, 62, 98, -55, -42, 79, 26, 62, -56, -85, -22], 20, 16, 19, 16
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 23, 21, 19, 23
        ],
        [
            [3, 68, 40, 48, 54, 35, 95, 56, 89, 40, 77, 68, 46, 78, 13, 27, 6, 17, 36, 99, 81, 2, 77, 52, 66, 52, 92, 43, 90, 22, 55, 67, 99, 60, 58], 28, 21, 23, 23
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
