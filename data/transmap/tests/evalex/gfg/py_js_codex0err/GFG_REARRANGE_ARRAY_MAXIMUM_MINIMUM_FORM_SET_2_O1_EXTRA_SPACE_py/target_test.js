
"use strict";
const SKIP_LOGGING = false;
const MYLOG_LIST = [["MYLOGAP:0", ["list", 10, ["list", 2, ["list", 43, ["num", 1], ["num", 1]], ["num", 29]], ["list", 2, ["list", 41, ["num", 50], ["num", 46]], ["num", 38]]]], ["MYLOGEX:1", ["num", 0]], ["MYLOGEX:2", ["list", 2, [["list", 43, [["num", 53.01851851851852], ["num", 1.0185185185185186], ["num", 52.03703703703704], ["num", 1.0555555555555556], ["num", 49.166666666666664], ["num", 2.185185185185185], ["num", 47.25925925925926], ["num", 3.4074074074074074], ["num", 45.48148148148148], ["num", 9.518518518518519], ["num", 43.53703703703704], ["num", 10.537037037037036], ["num", 42.55555555555556], ["num", 14.592592592592593], ["num", 42.592592592592595], ["num", 22.59259259259259], ["num", 42.629629629629626], ["num", 26.685185185185187], ["num", 40.72222222222222], ["num", 28.74074074074074], ["num", 39.77777777777778], ["num", 29.77777777777778], ["num", 37.77777777777778], ["num", 29.796296296296298], ["num", 34.833333333333336], ["num", 30.87037037037037], ["num", 32.907407407407405], ["num", 32.96296296296296], ["num", 32.98148148148148], ["num", 54], ["num", 56], ["num", 58], ["num", 59], ["num", 68], ["num", 71], ["num", 73], ["num", 76], ["num", 81], ["num", 81], ["num", 83], ["num", 84], ["num", 91], ["num", 94]]], ["num", 29]]]], ["MYLOGEX:1", ["num", 1]], ["MYLOGEX:2", ["list", 2, [["list", 41, [["num", 94.52631578947368], ["num", 50.48421052631579], ["num", 83.06315789473685], ["num", 45.4], ["num", 46.705263157894734], ["num", 6.3578947368421055], ["num", 83.45263157894736], ["num", 38.27368421052632], ["num", 71.02105263157895], ["num", 68.02105263157895], ["num", 31.11578947368421], ["num", 34.305263157894736], ["num", 32.1578947368421], ["num", 42.33684210526316], ["num", 32.68421052631579], ["num", 26.263157894736842], ["num", 51.8], ["num", 2.968421052631579], ["num", 6.6], ["num", 1.7052631578947368], ["num", 77.93684210526315], ["num", 11.263157894736842], ["num", 88.6421052631579], ["num", 28.642105263157895], ["num", 14.263157894736842], ["num", 14.157894736842104], ["num", 25.926315789473684], ["num", 31.810526315789474], ["num", 61.07368421052632], ["num", 65.54736842105264], ["num", 61.33684210526316], ["num", 24.33684210526316], ["num", 25.33684210526316], ["num", 75.7578947368421], ["num", 88.88421052631578], ["num", 92.48421052631579], ["num", 66.87368421052632], ["num", 57.98947368421052], ["num", 76], ["num", -67], ["num", -42]]], ["num", 38]]]], ["MYLOGEX:1", ["num", 2]], ["MYLOGEX:2", ["list", 2, [["list", 9, [["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1]]], ["num", 4]]]], ["MYLOGEX:1", ["num", 3]], ["MYLOGEX:2", ["list", 2, [["list", 47, [["num", 58.25423728813559], ["num", 16.677966101694917], ["num", 34.96610169491525], ["num", 41.16949152542373], ["num", 3.3728813559322033], ["num", 58.08474576271186], ["num", 41.69491525423729], ["num", 11.474576271186441], ["num", 40.20338983050848], ["num", 22.949152542372882], ["num", 31.389830508474578], ["num", 5.423728813559322], ["num", 38.54237288135593], ["num", 41.101694915254235], ["num", 11.576271186440678], ["num", 29.06779661016949], ["num", 1.152542372881356], ["num", 13.016949152542374], ["num", 51.83050847457627], ["num", 57.644067796610166], ["num", 38.86440677966102], ["num", 24.016949152542374], ["num", 50.186440677966104], ["num", 25.627118644067796], ["num", 1.5254237288135593], ["num", 33.66101694915254], ["num", 9.694915254237289], ["num", 7.0508474576271185], ["num", 5.576271186440678], ["num", 34.983050847457626], ["num", 14], ["num", 36], ["num", 36], ["num", 79], ["num", 8], ["num", 26], ["num", 36], ["num", 48], ["num", 85], ["num", 28], ["num", 68], ["num", 62], ["num", 80], ["num", 86], ["num", 76], ["num", 80], ["num", 51]]], ["num", 30]]]], ["MYLOGEX:1", ["num", 4]], ["MYLOGEX:2", ["list", 2, [["list", 38, [["num", 65.54411764705883], ["num", 35.544117647058826], ["num", 46.6764705882353], ["num", 35.6764705882353], ["num", 36.75], ["num", 44.75], ["num", 31.83823529411765], ["num", 44.86764705882353], ["num", 30.941176470588236], ["num", 49.955882352941174], ["num", 26.014705882352942], ["num", 50.029411764705884], ["num", 23.102941176470587], ["num", 56.4264705882353], ["num", 9.426470588235293], ["num", 58.48529411764706], ["num", 5.485294117647059], ["num", 63.661764705882355], ["num", 4.705882352941177], ["num", 64.73529411764706], ["num", 0.7647058823529411], ["num", 0.8088235294117647], ["num", 65.97058823529412], ["num", 2.014705882352941], ["num", 55.0735294117647], ["num", 7.088235294117647], ["num", 52.14705882352941], ["num", 29.352941176470587], ["num", 50.39705882352941], ["num", 29.470588235294116], ["num", 48.48529411764706], ["num", 33.55882352941177], ["num", 45.705882352941174], ["num", 33.98529411764706], ["num", 70], ["num", 76], ["num", 82], ["num", 88]]], ["num", 34]]]], ["MYLOGEX:1", ["num", 5]], ["MYLOGEX:2", ["list", 2, [["list", 45, [["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 1.0], ["num", 1.0], ["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 1.0], ["num", 1.0], ["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 1.0], ["num", 0.0], ["num", 0.0], ["num", 0.0], ["num", 1.0], ["num", 1.0], ["num", 0.0], ["num", 1], ["num", 0], ["num", 0], ["num", 1], ["num", 1], ["num", 1], ["num", 1], ["num", 0], ["num", 0], ["num", 0], ["num", 1], ["num", 0]]], ["num", 33]]]], ["MYLOGEX:1", ["num", 6]], ["MYLOGEX:2", ["list", 2, [["list", 10, [["num", 66.02985074626865], ["num", 2.328358208955224], ["num", 43.47761194029851], ["num", 22.507462686567163], ["num", 34.64179104477612], ["num", 32.985074626865675], ["num", 70], ["num", 74], ["num", 94], ["num", 94]]], ["num", 6]]]], ["MYLOGEX:1", ["num", 7]], ["MYLOGEX:2", ["list", 2, [["list", 16, [["num", 2.96], ["num", -22.88], ["num", -20.04], ["num", -1.0], ["num", -4.64], ["num", -20.6], ["num", -20.12], ["num", -2.88], ["num", -6.32], ["num", -7.96], ["num", -54], ["num", -31], ["num", 14], ["num", 47], ["num", 66], ["num", 23]]], ["num", 10]]]], ["MYLOGEX:1", ["num", 8]], ["MYLOGEX:2", ["list", 2, [["list", 43, [["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.0], ["num", 1.0], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1.5], ["num", 0.5], ["num", 1]]], ["num", 42]]]], ["MYLOGEX:1", ["num", 9]], ["MYLOGEX:2", ["list", 2, [["list", 25, [["num", 85.22093023255815], ["num", 19.36046511627907], ["num", 31.302325581395348], ["num", 31.488372093023255], ["num", 77.47674418604652], ["num", 26.267441860465116], ["num", 41.54651162790697], ["num", 42.151162790697676], ["num", 36.03488372093023], ["num", 41.76744186046512], ["num", 77.76744186046511], ["num", 23.186046511627907], ["num", 28.848837209302324], ["num", 47.325581395348834], ["num", 73.8953488372093], ["num", 13.406976744186046], ["num", 16.476744186046513], ["num", 3.895348837209302], ["num", 66.36046511627907], ["num", 66.98837209302326], ["num", 32], ["num", 54], ["num", 98], ["num", 72], ["num", 59]]], ["num", 20]]]]];
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
            [1, 1, 2, 3, 9, 10, 14, 22, 26, 28, 29, 29, 30, 32, 32, 32, 34, 37, 39, 40, 42, 42, 42, 43, 45, 47, 49, 52, 53, 54, 56, 58, 59, 68, 71, 73, 76, 81, 81, 83, 84, 91, 94], 29
        ],
        [
            [50, 46, 6, -57, 67, 34, -52, 26, -93, 97, -84, 29, 15, -63, 65, 25, -19, 92, -38, -28, 89, 25, 61, -34, -70, -80, 88, -18, 7, 52, 32, -63, 32, -23, -11, 46, -12, 94, 76, -67, -42], 38
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 1, 1], 4
        ],
        [
            [15, 99, 57, 69, 22, 64, 41, 87, 71, 56, 23, 25, 91, 6, 34, 63, 9, 60, 49, 97, 51, 60, 70, 37, 31, 98, 41, 62, 93, 58, 14, 36, 36, 79, 8, 26, 36, 48, 85, 28, 68, 62, 80, 86, 76, 80, 51], 30
        ],
        [
            [-99, -99, -90, -90, -85, -85, -79, -77, -72, -71, -67, -66, -61, -39, -39, -35, -35, -23, -20, -18, -16, -13, -2, 1, 5, 6, 10, 24, 27, 32, 33, 38, 48, 67, 70, 76, 82, 88], 34
        ],
        [
            [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0], 33
        ],
        [
            [2, 22, 32, 34, 43, 66, 70, 74, 94, 94], 6
        ],
        [
            [-99, -28, 76, -50, 41, -85, -47, 72, -92, -26, -54, -31, 14, 47, 66, 23], 10
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 42
        ],
        [
            [19, 31, 26, 42, 41, 23, 47, 13, 89, 66, 66, 16, 73, 28, 77, 35, 41, 77, 31, 85, 32, 54, 98, 72, 59], 20
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
