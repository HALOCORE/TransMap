# The checked srcmap piece 
# How to check?
# - for base, just compare the srcmap.
# - for group_n, split the srcmap first and compare each.
# - for split, merge the srcmap first and compare.
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

import json

def read_file(filename):
  with open(filename, 'r') as f:
    return f.read()

def read_file_none(filename):
  try: return read_file(filename)
  except: return None

def write_file(filename, content):
  with open(filename, 'w') as f:
    f.write(content)

def read_json(filename):
  return json.loads(read_file(filename))

def read_json_none(filename):
  try: return read_json(filename)
  except: return None

def write_json(filename, content):
  write_file(filename, json.dumps(content, indent=2))

# read the filtered_id_list
filtered_id_list = read_json("./cm_0_folders.json")


def get_stripped_first_line(code):
  return code.strip().split("\n")[0]

# ----------
def get_lines_by_idxes(lines_with_annos, idxes):
  lines = []
  for line, line_idxes in lines_with_annos:
    if line_idxes is None: continue
    for idx in line_idxes:
      if idx in idxes: 
        lines.append(line)
        continue
  return lines

def parse_int_set(s):
  s = s.strip()
  assert s.startswith("{") and s.endswith("}")
  s = s[1:-1]
  return set(int(x) for x in s.split(",") if x.strip() != "")

def is_nomapping_py_line(line):
  line = line.strip()
  return line.startswith("#") or line.startswith("import ") or line.startswith("from ") or line.startswith("global ") or line.startswith("nonlocal ") or line.startswith("def f_gold")


def check_assertion(srcmappiece_asserts, srcmappiece_details, debug_name):
  if srcmappiece_asserts is None:
    print(f"[ERR][CHK] {debug_name} | srcmappiece.asserts.json NOT FOUND! Skip.")
    return False
  else:
    if "idxes_js_in_py" in srcmappiece_asserts:
      print(f"[ERR][CHK] {debug_name} | js has INVALID out-of-range idxes!" + str(srcmappiece_asserts["idxes_js_in_py"]))
      return False
    elif "monotonous_py" in srcmappiece_asserts:
      print(f"[ERR][CHK-WARN] {debug_name} | py NOT MONOTONOUS!")
      return False
    elif "monotonous_js" in srcmappiece_asserts:
      print(f"[ERR][CHK-WARN] {debug_name} | js NOT MONOTONOUS!")
      return False
    elif "idxes_py_in_js" in srcmappiece_asserts:
      errs = srcmappiece_asserts["idxes_py_in_js"]
      if len(errs) == 1 and errs[0].endswith("{1}"):
        print(f"[INFO] {debug_name} | js has UNMAPPED idxes {{1}} (Allowed)")
        return True
      else:
        # check what is the unmapped lines
        # parse srcmap 
        assert len(errs) == 1, "Multiple errs in idxes_py_in_js! " + str(errs)
        diff_idxes = parse_int_set(errs[0].split("diff: ")[1])
        py_lines = srcmappiece_details["py_lines"]
        lines = get_lines_by_idxes(py_lines, diff_idxes)
        if all(is_nomapping_py_line(x) for x in lines):
          print(f"[INFO] {debug_name} | js has UNMAPPED idxes {set(diff_idxes)}, but every diff statement is allowed. (Allowed)")
          return True
        else:
          print(f"[ERR][CHK-WARN] {debug_name} | py has UNMAPPED idxes! " + str(srcmappiece_asserts["idxes_py_in_js"]))
          return False
    elif len(srcmappiece_asserts) == 0:
      print(f"[INFO] {debug_name} | EMPTY ASSERTS!")
      return True
    else:
      assert False, "Unknown assertion: " + str(srcmappiece_asserts)
# ------------

import cm_srcmapping
# how to segment the srcmap into srcmap for each? according to the first line of py and js?
def _segment_grouped_completion(py_js_code_tuples, grouped_completion):
  # need to take out py_part and js_part first.
  full_py_part, full_js_part = cm_srcmapping.default_mapcompletion_to_pypart_and_jspart(grouped_completion)
  # Then loop over the tuples to segment the srcmappiece.
  py_splits = []
  js_splits = []

  # split python on ###
  py_splits = full_py_part.split("###")
  assert py_splits[0].strip() == "", "py_splits[0] should be empty! --- \n" + py_splits[0]
  py_splits = ["###" + x for x in py_splits[1:]]
  js_splits = full_js_part.split("\n\n\n")
  js_splits = [x + "\n\n\n" for x in js_splits]
  for js_split in js_splits:
    jss = js_split.strip()
    assert jss.startswith("function ") or \
      jss.startswith("var ") or jss.startswith("const ") or \
      jss.startswith("exports.") or jss.startswith("//\n"), "js_split should start with function/var/const --- \n" + jss

  assert len(py_splits) == len(js_splits)
  assert len(py_splits) == len(py_js_code_tuples)
  return list(zip(py_splits, js_splits))



def check_seg_without_groundtruth(py_code, js_code, py_map_seg, js_map_seg, debug_name):
  srcmappiece, asserts, details = cm_srcmapping.mapping_completion_to_srcmappiece(
    py_map_seg, js_map_seg,
    py_code, js_code,
    "unknown", 0
  )
  return check_assertion(asserts, details, debug_name)

def check_without_ground_truth(py_code, js_code, completion, debug_name):
  srcmappiece, asserts, details = cm_srcmapping.default_source_mapping_from_completion(
    completion,
    py_code, js_code,
    "unknown", 0
  )
  return check_assertion(asserts, details, debug_name)

def check_without_ground_truth(py_code, js_code, completion, debug_name):
  srcmappiece, asserts, details = cm_srcmapping.default_source_mapping_from_completion(
    completion,
    py_code, js_code,
    "unknown", 0
  )
  return check_assertion(asserts, details, debug_name)

def check_grouped_completion(py_js_code_tuples, grouped_completion, ground_truth_dict=None):
  split_tuples = _segment_grouped_completion(py_js_code_tuples, grouped_completion)
  py_segs_firstlines = []
  js_segs_firstlines = []
  for i, (bid, py_code, js_code) in enumerate(py_js_code_tuples):
    py_code_stripped = py_code.strip()
    js_code_stripped = js_code.strip()
    py_code_firstline = py_code_stripped.split('\n')[0]
    js_code_firstline = js_code_stripped.split('\n')[0]
    py_segs_firstlines.append(py_code_firstline)
    js_segs_firstlines.append(js_code_firstline)
    print("py-js | " + py_code_firstline + " | " + js_code_firstline)


    py_seg, js_seg = split_tuples[i]
    try:
      check_seg_without_groundtruth(py_code, js_code, py_seg, js_seg, bid)
    except Exception as e:
      print(f"[ERR][EXCEPTION] {bid} | {e}")
      continue



def check_grouped_all(count, is_fixed = False):
  for i in range(0, len(filtered_id_list), count):
    bids = filtered_id_list[i:i+count]
    # the length of tuples may be less than count
    assert len(bids) > 0
    fdr_name = "GRP" + str(count) + "__" + "_".join(bids)
    print(f"--- Processing (group{count}): {fdr_name}")
    # for each bid, read source.py and target.js / target.fixed.js
    full_in_filepath = lambda bid, x: os.path.join("./input_leet/", bid, x)
    full_out_folder = f"./output_leet/{fdr_name}/"
    full_out_filepath = lambda x: os.path.join(full_out_folder, x)
    map_path = os.path.abspath(full_out_filepath(("target.mapping_completion" if not is_fixed else "target.fixed.mapping_completion")))
    grouped_completion = read_file(map_path)
    print("   grouped_completion:", map_path)
    code_tuples = []
    for bid in bids:
      py_path = os.path.abspath(full_in_filepath(bid, "source.py"))
      js_path = os.path.abspath(full_in_filepath(bid, ("target.js" if not is_fixed else "target.fixed.js")))
      py_code = read_file(py_path)
      js_code = read_file(js_path)
      print("   py:", py_path)
      print("   js:", js_path)
      code_tuples.append((bid, py_code, js_code))
    
    check_grouped_completion(code_tuples, grouped_completion) 


def check_single_all(friendly_name, py_filename, js_filename, map_filename):
  for i in range(0, len(filtered_id_list)):
    bid = filtered_id_list[i]
    print(f"--- Processing ({friendly_name}): {bid}")
    full_in_filepath = lambda bid, x: os.path.join("./input_leet/", bid, x)
    full_out_filepath = lambda x: os.path.join("./output_leet/", bid, x)
    py_path = os.path.abspath(full_in_filepath(bid, py_filename))
    js_path = os.path.abspath(full_in_filepath(bid, js_filename))
    map_path = os.path.abspath(full_out_filepath(map_filename))
    py_code = read_file(py_path)
    js_code = read_file(js_path)
    srcmap_result = read_file(map_path)
    print("   py:", py_path)
    print("   js:", js_path)
    print("   map:", map_path)
    try:
      check_without_ground_truth(py_code, js_code, srcmap_result, bid)
    except Exception as e:
      print(f"[ERR][EXCEPTION] {bid} | {e}")
      continue


import sys
check_config = sys.argv[1] if len(sys.argv) > 1 else "basechatgpt"

if check_config == "group2":
  check_grouped_all(2, False)

if check_config == "group2fixed":
  check_grouped_all(2, True)

if check_config == "group3":
  check_grouped_all(3, False)

if check_config == "basecodex":
  check_single_all(
    check_config,
    "source.py",
    "target.js",
    "target.mapping_completion"
  )

if check_config == "basefixed":
  check_single_all(
    check_config,
    "source.py",
    "target.fixed.js",
    "target.fixed.mapping_completion"
  )

if check_config == "basechatgpt":
  check_single_all(
    check_config,
    "source.py",
    "target.chatgpt.js",
    "target.chatgpt.mapping_completion"
  )
  

if check_config == "basecomment":
  check_single_all(
    check_config,
    "source.py",
    "target.comment.js",
    "target.comment.mapping_completion"
  )

if check_config == "basevar":
  check_single_all(
    check_config,
    "source.py",
    "target.renamed.js",
    "target.renamed.mapping_completion"
  )
