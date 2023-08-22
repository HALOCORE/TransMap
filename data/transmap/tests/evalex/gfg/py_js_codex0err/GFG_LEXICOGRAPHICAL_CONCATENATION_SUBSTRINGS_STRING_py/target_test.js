
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 1, ["string", 5, "sqGOi"], "EMPTY"], ["list", 1, ["string", 6, "848580"], "EMPTY"]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["string", 35, "GGOGOiOOiiqqGqGOqGOissqsqGsqGOsqGOi"]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["string", 56, "04484854858485805585808888084848848584858848580858588580"]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["string", 560, "00000000000000010010010011001100110001100001100100111001110001110000111001001110011001110011000111001100001110011001010101010100100010010100110100111010011100100111000100111001010011100110100111001100100111001100010011100110010110110110011000110010111011100111000111001011100110111001100111001100011100110011111111101010100100100100110011001100111001110011010011001001100110011110011101001110010011100110011100111001110011010011100110010011100110011111111101101100110011001110011100111100110110011001100110011111110111001110011110011111001101110011001110011001"]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["string", 220, "IKKmKmeKmeiKmeiIUUKUKmUKmeUKmeiUKmeiIWWXWXUWXUKWXUKmWXUKmeWXUKmeiWXUKmeiIXXUXUKXUKmXUKmeXUKmeiXUKmeiIZZhZhWZhWXZhWXUZhWXUKZhWXUKmZhWXUKmeZhWXUKmeiZhWXUKmeiIeeieiIhhWhWXhWXUhWXUKhWXUKmhWXUKmehWXUKmeihWXUKmeiIiiImmemeimeiI"]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["string", 455, "00909109170917209172909172960917296509172965409172965410917296541209172965412809172965412851112128128517172172917296172965172965417296541172965412172965412817296541285222828529296296529654296541296541229654128296541285441412412841285555454154125412854128566565465416541265412865412857727297296729657296547296541729654127296541287296541285885999191791729172991729691729659172965491729654191729654129172965412891729654128596965965496541965412965412896541285"]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["string", 560, "00000000000010011001110011110011111001111100011111000101010100100010010100110100111010011110100111110100111110010011111000110110110011010110100110100011010010110100110110100111011010011110110100111110110100111110011010011111000111011110111110111110011111001111111110101010010010011001110011110011111001111110011111010011111001011010101001010011010011101001111010011111010011111101001111101010011111001111111111110110110011011101011010011010011101001111010011111010011111101001111111010011111011010011111001111111111110111001111111111110111100111111111101111100"]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["string", 56, "  k kRPP P kP kRRjjPjP jP kjP kRkkRttjtjPtjP tjP ktjP kR"]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["string", 56, "00779999909079999999909907999999999099907999999990999907"]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["string", 56, "00000010110111011100111001111010011111101100111111011100"]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["string", 220, "HHNHNSHNSJHNSJOHNSJOUHNSJOUjJJJOJOUJOUjJPJPHJPHNJPHNSJPHNSJJPHNSJOJPHNSJOUJPHNSJOUjNNSNSJNSJONSJOUNSJOUjOOUOUjPPHPHNPHNSPHNSJPHNSJOPHNSJOUPHNSJOUjSSJSJOSJOUSJOUjUUjjqqJqJPqJPHqJPHNqJPHNSqJPHNSJqJPHNSJOqJPHNSJOUqJPHNSJOUj"]]];
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
        ["sqGOi"],
        ["848580"],
        ["01001110011001"],
        ["ZhWXUKmeiI"],
        ["0917296541285"],
        ["01101001111100"],
        ["tjP kR"],
        ["999907"],
        ["011100"],
        ["qJPHNSJOUj"]
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
