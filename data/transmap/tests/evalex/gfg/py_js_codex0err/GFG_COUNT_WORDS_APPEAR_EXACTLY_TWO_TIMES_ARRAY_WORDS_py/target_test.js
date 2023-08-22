
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 10, ["string", 4, "hate"], ["string", 4, "love"]], ["num", 10]], ["list", 2, ["list", 37, ["string", 2, "16"], ["string", 12, "9466131970"]], ["num", 32]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 3]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 2]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 0]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 1]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 2]]];
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
            ["hate", "love", "peace", "love", "peace", "hate", "love", "peace", "love", "peace"], 10
        ],
        [
            ["16", "946613197072", "532052", "42780833", "511552", "1241934", "4", "3444540", "47487223670074", "23753", "14158", "4", "95420017116714", "16", "0845", "689000748", "976403809728", "8922", "487784120896", "329", "611", "59101", "611", "2131059721", "53952148295020", "445948587", "3905249775372", "4683180907", "7169093", "01413852276627", "63", "5864", "40862536595", "2280304422294", "930028582", "05", "33447"], 32
        ],
        [
            ["001000100000", "1010", "01011", "11", "011", "1010"], 6
        ],
        [
            ["Om", "Om", "Shankar", "Tripathi", "Tom", "Jerry", "Jerry"], 7
        ],
        [
            ["2", "644", "2", "42484637089", "81578664", "0778"], 6
        ],
        [
            ["001000101", "011010", "1", "101010011", "011010", "01", "10111000101", "0", "1", "00101101", "0", "0"], 12
        ],
        [
            ["kl", "p sH", "PwCPMPu", "tQoIgPpk", "wtsNP WjS", "kl ", "TXsFWgU", "kl", "AD", "NjjTyFGwNWZcB", "jpFQslbGbDI", "cEpGAgvpk", "EMaDkMOm", "YZuNZgfwDIjG", "k", "hJx jHmGpQYwQP", "CIETe", "RH", "Pj", "h", "DInR", "AEsqOvliQtz", "NwzHTALTt LS", "LwLR", "WvDCzlQF", "soJb", "WktoldCbWyTO", "pIdRJxY", "BmpWxjOwTXkjjL", "zmtCiQ", "g", "yBmDW", "QhaBZrQnOJaAJ", "u", "MGTwCKve", "UxYQrONag", "xsGSz", "dqNPTT", "U W", "ygJKvCEKDClby", "M", "yXJQHxjyDQDLkT", "oJmaREOEk YA", "zUwiwhSMdiC", "jYgZEktcdgLD", "fwyTAAW", "GENttdzeGY "], 43
        ],
        [
            ["938", "074209", "0949093096", "218622476", "71692175", "0714", "81217924991", "74016430795374", "52213147", "338", "939", "798161500954", "90528060774015", "68715", "75810", "43450", "8017", "0193164", "5945740", "212", "4589289", "2912211026", "0", "49", "8230114", "0733435391403", "5429", "10070"], 20
        ],
        [
            ["00", "0", "00", "0101111010100", "110"], 4
        ],
        [
            ["g", "h", "ok", "h", "ok", "sqozuC", "ut", "ZwRcG", "ok", "MR", "jHrWyy", "qaJlrokgRHuZH", "LjPNzDUKszYmCq", "g", "ZGjLfMnyAGL", "kEZoSxOMEWSFpw", "IFtqNaDVnG", "iJoJXl", "vjrQMyWor", "FTEHZqbHGlmHph", "QeSdzm", "nPostKHkigyJt", "mOSekk"], 15
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
