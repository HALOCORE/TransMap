
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["num", 66], ["num", 4]], ["list", 2, ["num", 82], ["num", 66]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["num", 18974736]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["num", 2049813067056723342764042528136639432893302901053747234410457506551439003896274462989048978198596972547480537410778555874279424]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["num", 102067469997853225734913580209377959215104]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["num", 2703763826271496729576234682033435790799558162689208984375]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["num", 6583424253569334549714045134721532297216]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["num", 7511413302012830262726227918848]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["num", 14670621958378535701248951980679675362359612235946397336166799404770169821526482604486897413846048403503973929]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["num", 3115213932270015574240321075487727651114005391975957427662136579551294946632819644909745590885376136652528718398394835039492143654352249398781676001]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["num", 625860689720153894675329779023119791218668885268715162182982152269031697289005722783299512029943273307646917630098521886631180215670000397341006070978669962917342878463139250176]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["num", 47565412418731695995325063205757104132618835280422352325906643572446408993964434931530762914275688771381165739887487663383969696390920030197916461394378917181718058763198583013376]]];
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
        [66, 4],
        [82, 66],
        [12, 38],
        [55, 33],
        [34, 26],
        [22, 23],
        [13, 98],
        [57, 84],
        [76, 94],
        [76, 95]
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
