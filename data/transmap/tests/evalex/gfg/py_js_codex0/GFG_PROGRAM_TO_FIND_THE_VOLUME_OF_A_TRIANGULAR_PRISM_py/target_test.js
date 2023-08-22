
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 3, ["num", 8448.900678262902], ["num", 8135.461799983198]], ["list", 3, ["num", -1849.728957491451], ["num", -4240.89241631363]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 226045593884.95786]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", -39040194699.58562]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 2931270907.5877957]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", -15863477478.565292]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 340504220608.1437]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", -23882990818.874195]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 45359252560.89365]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", -7495479637.450533]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 610364933.1115178]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", -92632540179.42117]]];
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
        [8448.900678262902, 8135.461799983198, 6577.239053611328],
        [-1849.728957491451, -4240.89241631363, -9953.518310747193],
        [412.667844022232, 9798.083992381831, 1449.9204200270522],
        [-5954.835911765373, -661.8872499003203, -8049.6051526695055],
        [8437.913444665008, 8182.675681595904, 9863.296545513396],
        [-7183.181663518317, -6846.746446198541, -971.2199894221352],
        [2340.7905920227954, 5479.00956987109, 7073.449591910562],
        [-7281.157547371143, -615.8705455524116, -3343.0245192607968],
        [471.3930826982504, 1357.3753126091392, 1907.815700915636],
        [-7550.426360065503, -2693.2262997056355, -9110.64755244532]
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
