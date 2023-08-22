let DUOGLOT_MYLOG_PREPEND =  `
import json
_default_print = print
def mylog_obj_to_comp(is_exact, arg):
  if isinstance(arg, bool): return ["bool", arg]
  elif isinstance(arg, str): 
    if is_exact:
      return ["string", len(arg), arg]
    else:
      return ["string", len(arg), arg if len(arg) < 10 else arg[0:10]]
  elif isinstance(arg, int) or isinstance(arg, float): return ["num", arg]
  elif isinstance(arg, list) or isinstance(arg, tuple): 
    if is_exact:
      return ["list", len(arg), [mylog_obj_to_comp(is_exact, x) for x in arg]]
    else:
      return ["list", len(arg), mylog_obj_to_comp(is_exact, arg[0]) if len(arg) > 0 else "EMPTY", mylog_obj_to_comp(is_exact, arg[1]) if len(arg) > 1 else "EMPTY"]
  elif arg is None: return ["none"]
  else: 
    str_result = str(arg)
    return ["Unknown", len(str_result), str_result]
def _mylog(is_exact, *args):
  prefix = "MYLOGEX:" if is_exact else "MYLOGAP:"
  info_list = [prefix + str(args[0])]
  for arg in args[1:]:
    info_list.append(mylog_obj_to_comp(is_exact, arg))
  _default_print("\\n" + json.dumps(info_list))
def mylog(*args):
  _mylog(False, *args)
def myexactlog(*args):
  _mylog(True, *args)
def print(*args, **kargs):
  myexactlog(-1, args)
  return _default_print(*args, **kargs)
`;

let DUOGLOT_MYLOG_PREPEND_PLACEHOLDER = `# ++++++ to be replaced by tester ++++++
mylog = print
myexactlog = print
"+++++++++++++++++"`;


function duoglot_testcode_to_runnable_py(testcode, tested_code) {
  if (testcode.indexOf(DUOGLOT_MYLOG_PREPEND_PLACEHOLDER) < 0) throw Error("Placeholder not found in code.");
  let replace_code = safeReplace(testcode, DUOGLOT_MYLOG_PREPEND_PLACEHOLDER, DUOGLOT_MYLOG_PREPEND);
  if (testcode.indexOf(`#TESTED_PROGRAM`) < 0) throw Error("Not found #TESTED_PROGRAM placeholder.");
  replace_code = safeReplace(replace_code, `#TESTED_PROGRAM`, tested_code);
  return replace_code;
}


function longcode_get_segment_py(py_code, seg_name) {
  let py_seg_begin_text = "##### Segment BEGIN " + seg_name + "\n";
  let py_seg_end_text = "\n##### Segment END";
  if (py_code.indexOf(py_seg_begin_text) < 0) throw Error("Python code not containing segment expected: " + seg_name);
  let after_segment_line = py_code.split(py_seg_begin_text)[1];
  if (after_segment_line.indexOf(py_seg_end_text) < 0) throw Error("Python code in wrong segment format: No corresponding 'Segment END' found.");
  let before_segend = after_segment_line.split(py_seg_end_text)[0];
  if (before_segend.indexOf("\n##### Segment BEGIN ") >= 0) throw Error("Unexpected py code! Segment inside the splitted segment.");
  return before_segend;
}

function longcode_get_segment_js(js_code, seg_name) {
  let js_seg_begin_text = "///// Segment BEGIN " + seg_name + " DONE\n";
  let js_seg_end_text = "\n///// Segment END";
  if (js_code.indexOf(js_seg_begin_text) < 0) throw Error("JS code not containing segment expected: " + seg_name);
  let after_segment_line = js_code.split(js_seg_begin_text)[1];
  if (after_segment_line.indexOf(js_seg_end_text) < 0) throw Error("JS code in wrong segment format: No corresponding 'Segment END' found.");
  let before_segend = after_segment_line.split(js_seg_end_text)[0];
  if (before_segend.indexOf("\n///// Segment BEGIN ") >= 0) throw Error("Unexpected js code! Segment inside the splitted segment.");
  return before_segend;
}