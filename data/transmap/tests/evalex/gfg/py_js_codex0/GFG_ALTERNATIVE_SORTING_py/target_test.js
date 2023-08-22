
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 45, ["num", 1], ["num", 4]], ["num", 42]], ["list", 2, ["list", 35, ["num", 64], ["num", 32]], ["num", 19]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:-1", ["list", 1, [["num", 89]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 86]]]], ["MYLOGEX:-1", ["list", 1, [["num", 4]]]], ["MYLOGEX:-1", ["list", 1, [["num", 84]]]], ["MYLOGEX:-1", ["list", 1, [["num", 5]]]], ["MYLOGEX:-1", ["list", 1, [["num", 84]]]], ["MYLOGEX:-1", ["list", 1, [["num", 8]]]], ["MYLOGEX:-1", ["list", 1, [["num", 84]]]], ["MYLOGEX:-1", ["list", 1, [["num", 8]]]], ["MYLOGEX:-1", ["list", 1, [["num", 79]]]], ["MYLOGEX:-1", ["list", 1, [["num", 10]]]], ["MYLOGEX:-1", ["list", 1, [["num", 79]]]], ["MYLOGEX:-1", ["list", 1, [["num", 11]]]], ["MYLOGEX:-1", ["list", 1, [["num", 68]]]], ["MYLOGEX:-1", ["list", 1, [["num", 13]]]], ["MYLOGEX:-1", ["list", 1, [["num", 67]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 66]]]], ["MYLOGEX:-1", ["list", 1, [["num", 15]]]], ["MYLOGEX:-1", ["list", 1, [["num", 65]]]], ["MYLOGEX:-1", ["list", 1, [["num", 16]]]], ["MYLOGEX:-1", ["list", 1, [["num", 63]]]], ["MYLOGEX:-1", ["list", 1, [["num", 19]]]], ["MYLOGEX:-1", ["list", 1, [["num", 61]]]], ["MYLOGEX:-1", ["list", 1, [["num", 20]]]], ["MYLOGEX:-1", ["list", 1, [["num", 55]]]], ["MYLOGEX:-1", ["list", 1, [["num", 20]]]], ["MYLOGEX:-1", ["list", 1, [["num", 55]]]], ["MYLOGEX:-1", ["list", 1, [["num", 23]]]], ["MYLOGEX:-1", ["list", 1, [["num", 50]]]], ["MYLOGEX:-1", ["list", 1, [["num", 31]]]], ["MYLOGEX:-1", ["list", 1, [["num", 46]]]], ["MYLOGEX:-1", ["list", 1, [["num", 33]]]], ["MYLOGEX:-1", ["list", 1, [["num", 46]]]], ["MYLOGEX:-1", ["list", 1, [["num", 34]]]], ["MYLOGEX:-1", ["list", 1, [["num", 44]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 43]]]], ["MYLOGEX:-1", ["list", 1, [["num", 41]]]], ["MYLOGEX:-1", ["list", 1, [["num", 43]]]], ["MYLOGEX:-1", ["list", 1, [["num", 42]]]], ["MYLOGEX:2", ["list", 2, [["list", 45, [["num", 1], ["num", 4], ["num", 5], ["num", 8], ["num", 8], ["num", 10], ["num", 11], ["num", 13], ["num", 14], ["num", 15], ["num", 16], ["num", 19], ["num", 20], ["num", 20], ["num", 23], ["num", 31], ["num", 33], ["num", 34], ["num", 37], ["num", 41], ["num", 42], ["num", 43], ["num", 43], ["num", 44], ["num", 46], ["num", 46], ["num", 50], ["num", 55], ["num", 55], ["num", 61], ["num", 63], ["num", 65], ["num", 66], ["num", 67], ["num", 68], ["num", 79], ["num", 79], ["num", 84], ["num", 84], ["num", 84], ["num", 86], ["num", 89], ["num", 92], ["num", 96], ["num", 96]]], ["num", 42]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:-1", ["list", 1, [["num", 4]]]], ["MYLOGEX:-1", ["list", 1, [["num", -98]]]], ["MYLOGEX:-1", ["list", 1, [["num", -6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -92]]]], ["MYLOGEX:-1", ["list", 1, [["num", -10]]]], ["MYLOGEX:-1", ["list", 1, [["num", -84]]]], ["MYLOGEX:-1", ["list", 1, [["num", -12]]]], ["MYLOGEX:-1", ["list", 1, [["num", -78]]]], ["MYLOGEX:-1", ["list", 1, [["num", -18]]]], ["MYLOGEX:-1", ["list", 1, [["num", -78]]]], ["MYLOGEX:-1", ["list", 1, [["num", -22]]]], ["MYLOGEX:-1", ["list", 1, [["num", -78]]]], ["MYLOGEX:-1", ["list", 1, [["num", -26]]]], ["MYLOGEX:-1", ["list", 1, [["num", -60]]]], ["MYLOGEX:-1", ["list", 1, [["num", -38]]]], ["MYLOGEX:-1", ["list", 1, [["num", -52]]]], ["MYLOGEX:-1", ["list", 1, [["num", -44]]]], ["MYLOGEX:-1", ["list", 1, [["num", -52]]]], ["MYLOGEX:-1", ["list", 1, [["num", -48]]]], ["MYLOGEX:2", ["list", 2, [["list", 35, [["num", -98], ["num", -92], ["num", -84], ["num", -78], ["num", -78], ["num", -78], ["num", -60], ["num", -52], ["num", -52], ["num", -48], ["num", -44], ["num", -38], ["num", -26], ["num", -22], ["num", -18], ["num", -12], ["num", -10], ["num", -6], ["num", 4], ["num", 8], ["num", 12], ["num", 18], ["num", 28], ["num", 30], ["num", 32], ["num", 34], ["num", 36], ["num", 62], ["num", 64], ["num", 66], ["num", 72], ["num", 74], ["num", 90], ["num", 94], ["num", 94]]], ["num", 19]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 27, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 13]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:-1", ["list", 1, [["num", 83]]]], ["MYLOGEX:-1", ["list", 1, [["num", 3]]]], ["MYLOGEX:-1", ["list", 1, [["num", 75]]]], ["MYLOGEX:-1", ["list", 1, [["num", 7]]]], ["MYLOGEX:-1", ["list", 1, [["num", 68]]]], ["MYLOGEX:-1", ["list", 1, [["num", 11]]]], ["MYLOGEX:-1", ["list", 1, [["num", 67]]]], ["MYLOGEX:-1", ["list", 1, [["num", 13]]]], ["MYLOGEX:-1", ["list", 1, [["num", 61]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 58]]]], ["MYLOGEX:-1", ["list", 1, [["num", 16]]]], ["MYLOGEX:-1", ["list", 1, [["num", 56]]]], ["MYLOGEX:-1", ["list", 1, [["num", 22]]]], ["MYLOGEX:-1", ["list", 1, [["num", 55]]]], ["MYLOGEX:-1", ["list", 1, [["num", 22]]]], ["MYLOGEX:-1", ["list", 1, [["num", 50]]]], ["MYLOGEX:-1", ["list", 1, [["num", 24]]]], ["MYLOGEX:-1", ["list", 1, [["num", 48]]]], ["MYLOGEX:-1", ["list", 1, [["num", 37]]]], ["MYLOGEX:-1", ["list", 1, [["num", 48]]]], ["MYLOGEX:-1", ["list", 1, [["num", 41]]]], ["MYLOGEX:2", ["list", 2, [["list", 28, [["num", 3], ["num", 7], ["num", 11], ["num", 13], ["num", 14], ["num", 16], ["num", 22], ["num", 22], ["num", 24], ["num", 37], ["num", 41], ["num", 48], ["num", 48], ["num", 50], ["num", 55], ["num", 56], ["num", 58], ["num", 61], ["num", 67], ["num", 68], ["num", 75], ["num", 83], ["num", 85], ["num", 89], ["num", 93], ["num", 96], ["num", 98], ["num", 99]]], ["num", 22]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:-1", ["list", 1, [["num", 36]]]], ["MYLOGEX:-1", ["list", 1, [["num", -92]]]], ["MYLOGEX:-1", ["list", 1, [["num", 30]]]], ["MYLOGEX:-1", ["list", 1, [["num", -80]]]], ["MYLOGEX:-1", ["list", 1, [["num", 28]]]], ["MYLOGEX:-1", ["list", 1, [["num", -80]]]], ["MYLOGEX:-1", ["list", 1, [["num", 18]]]], ["MYLOGEX:-1", ["list", 1, [["num", -78]]]], ["MYLOGEX:-1", ["list", 1, [["num", 16]]]], ["MYLOGEX:-1", ["list", 1, [["num", -76]]]], ["MYLOGEX:-1", ["list", 1, [["num", 10]]]], ["MYLOGEX:-1", ["list", 1, [["num", -72]]]], ["MYLOGEX:-1", ["list", 1, [["num", 6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -70]]]], ["MYLOGEX:-1", ["list", 1, [["num", 6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -60]]]], ["MYLOGEX:-1", ["list", 1, [["num", 6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -58]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", -58]]]], ["MYLOGEX:-1", ["list", 1, [["num", -6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -56]]]], ["MYLOGEX:-1", ["list", 1, [["num", -8]]]], ["MYLOGEX:-1", ["list", 1, [["num", -44]]]], ["MYLOGEX:-1", ["list", 1, [["num", -10]]]], ["MYLOGEX:-1", ["list", 1, [["num", -34]]]], ["MYLOGEX:-1", ["list", 1, [["num", -14]]]], ["MYLOGEX:-1", ["list", 1, [["num", -32]]]], ["MYLOGEX:-1", ["list", 1, [["num", -20]]]], ["MYLOGEX:-1", ["list", 1, [["num", -32]]]], ["MYLOGEX:-1", ["list", 1, [["num", -26]]]], ["MYLOGEX:2", ["list", 2, [["list", 42, [["num", -92], ["num", -80], ["num", -80], ["num", -78], ["num", -76], ["num", -72], ["num", -70], ["num", -60], ["num", -58], ["num", -58], ["num", -56], ["num", -44], ["num", -34], ["num", -32], ["num", -32], ["num", -26], ["num", -20], ["num", -14], ["num", -10], ["num", -8], ["num", -6], ["num", 0], ["num", 6], ["num", 6], ["num", 6], ["num", 10], ["num", 16], ["num", 18], ["num", 28], ["num", 30], ["num", 36], ["num", 36], ["num", 38], ["num", 46], ["num", 48], ["num", 52], ["num", 56], ["num", 56], ["num", 60], ["num", 68], ["num", 92], ["num", 96]]], ["num", 31]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 18, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 15]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:-1", ["list", 1, [["num", 45]]]], ["MYLOGEX:-1", ["list", 1, [["num", 4]]]], ["MYLOGEX:-1", ["list", 1, [["num", 41]]]], ["MYLOGEX:-1", ["list", 1, [["num", 10]]]], ["MYLOGEX:-1", ["list", 1, [["num", 41]]]], ["MYLOGEX:-1", ["list", 1, [["num", 12]]]], ["MYLOGEX:-1", ["list", 1, [["num", 36]]]], ["MYLOGEX:-1", ["list", 1, [["num", 13]]]], ["MYLOGEX:-1", ["list", 1, [["num", 31]]]], ["MYLOGEX:-1", ["list", 1, [["num", 15]]]], ["MYLOGEX:-1", ["list", 1, [["num", 30]]]], ["MYLOGEX:-1", ["list", 1, [["num", 17]]]], ["MYLOGEX:-1", ["list", 1, [["num", 26]]]], ["MYLOGEX:-1", ["list", 1, [["num", 24]]]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", 4], ["num", 10], ["num", 12], ["num", 13], ["num", 15], ["num", 17], ["num", 24], ["num", 26], ["num", 30], ["num", 31], ["num", 36], ["num", 41], ["num", 41], ["num", 45], ["num", 49], ["num", 56], ["num", 57], ["num", 57], ["num", 66], ["num", 75], ["num", 75], ["num", 78], ["num", 85], ["num", 93], ["num", 94]]], ["num", 14]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:-1", ["list", 1, [["num", 86]]]], ["MYLOGEX:-1", ["list", 1, [["num", -94]]]], ["MYLOGEX:-1", ["list", 1, [["num", 74]]]], ["MYLOGEX:-1", ["list", 1, [["num", -88]]]], ["MYLOGEX:-1", ["list", 1, [["num", 72]]]], ["MYLOGEX:-1", ["list", 1, [["num", -78]]]], ["MYLOGEX:-1", ["list", 1, [["num", 68]]]], ["MYLOGEX:-1", ["list", 1, [["num", -74]]]], ["MYLOGEX:-1", ["list", 1, [["num", 66]]]], ["MYLOGEX:-1", ["list", 1, [["num", -72]]]], ["MYLOGEX:-1", ["list", 1, [["num", 64]]]], ["MYLOGEX:-1", ["list", 1, [["num", -70]]]], ["MYLOGEX:-1", ["list", 1, [["num", 62]]]], ["MYLOGEX:-1", ["list", 1, [["num", -68]]]], ["MYLOGEX:-1", ["list", 1, [["num", 52]]]], ["MYLOGEX:-1", ["list", 1, [["num", -68]]]], ["MYLOGEX:-1", ["list", 1, [["num", 50]]]], ["MYLOGEX:-1", ["list", 1, [["num", -58]]]], ["MYLOGEX:-1", ["list", 1, [["num", 50]]]], ["MYLOGEX:-1", ["list", 1, [["num", -44]]]], ["MYLOGEX:-1", ["list", 1, [["num", 46]]]], ["MYLOGEX:-1", ["list", 1, [["num", -32]]]], ["MYLOGEX:-1", ["list", 1, [["num", 30]]]], ["MYLOGEX:-1", ["list", 1, [["num", -26]]]], ["MYLOGEX:-1", ["list", 1, [["num", 22]]]], ["MYLOGEX:-1", ["list", 1, [["num", -22]]]], ["MYLOGEX:-1", ["list", 1, [["num", 20]]]], ["MYLOGEX:-1", ["list", 1, [["num", -18]]]], ["MYLOGEX:-1", ["list", 1, [["num", 18]]]], ["MYLOGEX:-1", ["list", 1, [["num", -16]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:-1", ["list", 1, [["num", -16]]]], ["MYLOGEX:-1", ["list", 1, [["num", 10]]]], ["MYLOGEX:-1", ["list", 1, [["num", -14]]]], ["MYLOGEX:-1", ["list", 1, [["num", 6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -14]]]], ["MYLOGEX:-1", ["list", 1, [["num", -2]]]], ["MYLOGEX:-1", ["list", 1, [["num", -12]]]], ["MYLOGEX:-1", ["list", 1, [["num", -6]]]], ["MYLOGEX:-1", ["list", 1, [["num", -12]]]], ["MYLOGEX:2", ["list", 2, [["list", 42, [["num", -94], ["num", -88], ["num", -78], ["num", -74], ["num", -72], ["num", -70], ["num", -68], ["num", -68], ["num", -58], ["num", -44], ["num", -32], ["num", -26], ["num", -22], ["num", -18], ["num", -16], ["num", -16], ["num", -14], ["num", -14], ["num", -12], ["num", -12], ["num", -6], ["num", -2], ["num", 6], ["num", 10], ["num", 14], ["num", 18], ["num", 20], ["num", 22], ["num", 30], ["num", 46], ["num", 50], ["num", 50], ["num", 52], ["num", 62], ["num", 64], ["num", 66], ["num", 68], ["num", 72], ["num", 74], ["num", 86], ["num", 90], ["num", 96]]], ["num", 40]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 1]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:-1", ["list", 1, [["num", 0]]]], ["MYLOGEX:2", ["list", 2, [["list", 33, [["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 1]]], ["num", 20]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:-1", ["list", 1, [["num", 26]]]], ["MYLOGEX:-1", ["list", 1, [["num", 13]]]], ["MYLOGEX:-1", ["list", 1, [["num", 16]]]], ["MYLOGEX:-1", ["list", 1, [["num", 14]]]], ["MYLOGEX:2", ["list", 2, [["list", 6, [["num", 13], ["num", 14], ["num", 16], ["num", 26], ["num", 49], ["num", 96]]], ["num", 4]]]]];
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
            [1, 4, 5, 8, 8, 10, 11, 13, 14, 15, 16, 19, 20, 20, 23, 31, 33, 34, 37, 41, 42, 43, 43, 44, 46, 46, 50, 55, 55, 61, 63, 65, 66, 67, 68, 79, 79, 84, 84, 84, 86, 89, 92, 96, 96], 42
        ],
        [
            [64, 32, -48, -98, 74, -10, 36, 18, 28, 94, -52, 30, 94, -52, 90, -12, -78, 4, -78, 66, -92, -18, -44, -6, -38, -22, 62, 8, -84, -60, -26, 72, -78, 12, 34], 19
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13
        ],
        [
            [61, 41, 24, 22, 96, 75, 48, 83, 22, 93, 85, 67, 37, 48, 98, 13, 58, 89, 56, 99, 14, 55, 7, 3, 11, 68, 50, 16], 22
        ],
        [
            [-92, -80, -80, -78, -76, -72, -70, -60, -58, -58, -56, -44, -34, -32, -32, -26, -20, -14, -10, -8, -6, 0, 6, 6, 6, 10, 16, 18, 28, 30, 36, 36, 38, 46, 48, 52, 56, 56, 60, 68, 92, 96], 31
        ],
        [
            [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0], 15
        ],
        [
            [4, 10, 12, 13, 15, 17, 24, 26, 30, 31, 36, 41, 41, 45, 49, 56, 57, 57, 66, 75, 75, 78, 85, 93, 94], 14
        ],
        [
            [-94, 66, -12, 20, 74, 10, -18, 50, -58, -88, -14, 68, 72, 64, 90, -14, -72, -44, -6, 86, 18, 50, -68, 62, -16, -68, 46, 6, 30, -26, -74, -22, 14, -70, -78, -12, -32, 96, 52, -16, 22, -2], 40
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20
        ],
        [
            [16, 13, 96, 14, 49, 26], 4
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
