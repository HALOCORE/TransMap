import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

import json

def read_file(filename):
  with open(filename, 'r') as f:
    return f.read()

def write_file(filename, content):
  with open(filename, 'w') as f:
    f.write(content)

def read_json(filename):
  return json.loads(read_file(filename))

def write_json(filename, content):
  write_file(filename, json.dumps(content, indent=2))

# read the filtered_id_list
filtered_id_list = read_json("./cm_0_folders.json")

data_tuples = []
for cp_fdr in filtered_id_list:
  # full folder
  full_folder = f"./input_leet/{cp_fdr}"
  full_filepath = lambda x: os.path.join(full_folder, x)
  # read source.py, target.js and target.fixed.js
  text_source = read_file(full_filepath("source.py"))
  text_target = read_file(full_filepath("target.js"))
  text_target_fixed = read_file(full_filepath("target.fixed.js"))
  data_tuples.append((cp_fdr, text_source, text_target, text_target_fixed))


def ensure_outpath(fdr, filename):
  full_output_fdr = f"./output_leet/{fdr}"
  if not os.path.exists(full_output_fdr): os.mkdir(full_output_fdr)
  full_output_filepath = os.path.join(full_output_fdr, filename)
  return full_output_filepath


def save_output(fdr, filename, data, is_json):
  full_output_filepath = ensure_outpath(fdr, filename)
  if is_json:
    write_json(full_output_filepath, data)
  else:
    write_file(full_output_filepath, data)



# prepare to do the source mapping
import cm_srcmapping

import sys
enabled_steps = []
if len(sys.argv) > 1: enabled_steps = sys.argv[1:]
else: enabled_steps = [
  # "basecodex", "basefixed", 
  # "group2", "group2fixed", "group3", 
  "splittarget", 
  # "splitboth",
] 

print(f"enabled_steps: {enabled_steps}")

if "basechatgpt" in enabled_steps:
  for fdr_name in filtered_id_list:
    full_folder = f"./input_leet/{fdr_name}"
    full_filepath = lambda x: os.path.join(full_folder, x)
    # read source.py, target.js and target.fixed.js
    pycode = read_file(full_filepath("source.py"))
    jscode = read_file(full_filepath("target.chatgpt.js"))
    try:
      print(f"--- Processing (jscode_chatgpt): {fdr_name}")
      map_piece, asserts, details = cm_srcmapping.default_source_mapping(pycode, jscode, fdr_name, 0,
        ensure_outpath(fdr_name, "target.chatgpt.mapping_completion"))
      save_output(fdr_name, "target.chatgpt.srcmappiece", map_piece, False)
      save_output(fdr_name, "target.chatgpt.srcmappiece.asserts.json", asserts, True)
      save_output(fdr_name, "target.chatgpt.srcmappiece.details.json", details, True)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue

if "basecomment" in enabled_steps:
  for fdr_name in filtered_id_list:
    full_folder = f"./input_leet/{fdr_name}"
    full_filepath = lambda x: os.path.join(full_folder, x)
    # read source.py, target.js and target.fixed.js
    pycode = read_file(full_filepath("source.py"))
    jscode = read_file(full_filepath("target.comment.js"))
    try:
      print(f"--- Processing (jscode_comment): {fdr_name}")
      map_piece, asserts, details = cm_srcmapping.default_source_mapping(pycode, jscode, fdr_name, 0,
        ensure_outpath(fdr_name, "target.comment.mapping_completion"))
      save_output(fdr_name, "target.comment.srcmappiece", map_piece, False)
      save_output(fdr_name, "target.comment.srcmappiece.asserts.json", asserts, True)
      save_output(fdr_name, "target.comment.srcmappiece.details.json", details, True)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue

if "basevar" in enabled_steps:
  for fdr_name in filtered_id_list:
    full_folder = f"./input_leet/{fdr_name}"
    full_filepath = lambda x: os.path.join(full_folder, x)
    # read source.py, target.js and target.fixed.js
    pycode = read_file(full_filepath("source.py"))
    jscode = read_file(full_filepath("target.renamed.js"))
    try:
      print(f"--- Processing (jscode_renamed): {fdr_name}")
      map_piece, asserts, details = cm_srcmapping.default_source_mapping(pycode, jscode, fdr_name, 0,
        ensure_outpath(fdr_name, "target.renamed.mapping_completion"))
      save_output(fdr_name, "target.renamed.srcmappiece", map_piece, False)
      save_output(fdr_name, "target.renamed.srcmappiece.asserts.json", asserts, True)
      save_output(fdr_name, "target.renamed.srcmappiece.details.json", details, True)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue



if "basecodex" in enabled_steps:
  for fdr_name, pycode, jscode, jscode_fixed in data_tuples:
    try:
      print(f"--- Processing (jscode): {fdr_name}")
      map_piece, asserts, details = cm_srcmapping.default_source_mapping(pycode, jscode, fdr_name, 0, 
        ensure_outpath(fdr_name, "target.mapping_completion"))
      save_output(fdr_name, "target.srcmappiece", map_piece, False)
      save_output(fdr_name, "target.srcmappiece.asserts.json", asserts, True)
      save_output(fdr_name, "target.srcmappiece.details.json", details, True)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue

if "basefixed" in enabled_steps:
  for fdr_name, pycode, jscode, jscode_fixed in data_tuples:
    try:
      print(f"--- Processing (jscode_fixed): {fdr_name}")
      map_piece, asserts, details = cm_srcmapping.default_source_mapping(pycode, jscode_fixed, fdr_name, 0, 
        ensure_outpath(fdr_name, "target.fixed.mapping_completion"))
      save_output(fdr_name, "target.fixed.srcmappiece", map_piece, False)
      save_output(fdr_name, "target.fixed.srcmappiece.asserts.json", asserts, True)
      save_output(fdr_name, "target.fixed.srcmappiece.details.json", details, True)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue


def map_group(count, is_fixed = False):
  for i in range(0, len(data_tuples), count):
    tuples = data_tuples[i:i+count]
    # the length of tuples may be less than count
    assert len(tuples) > 0
    fdr_name = "GRP" + str(count) + "__" + "_".join([t[0] for t in tuples])
    print(f"--- Processing (group{count}): {fdr_name}")
    merged_py_code = "\n".join([t[1] for t in tuples])
    merged_js_code = "\n".join([t[2] for t in tuples])
    if is_fixed:
      merged_js_code = "\n".join([t[3] for t in tuples])
    try:
      completion_filename = "target.mapping_completion" if not is_fixed else "target.fixed.mapping_completion"
      map_piece, asserts, details = cm_srcmapping.default_source_mapping(merged_py_code, merged_js_code, fdr_name, 0, ensure_outpath(fdr_name, completion_filename))
      save_filename = "target.fixed.srcmappiece" if is_fixed else "target.srcmappiece"
      save_output(fdr_name, save_filename, map_piece, False)
      save_output(fdr_name, save_filename + ".asserts.json", asserts, True)
      save_output(fdr_name, save_filename + ".details.json", details, True)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue

if "group2" in enabled_steps:
  map_group(2)

if "group2fixed" in enabled_steps:
  map_group(2, True)

if "group3" in enabled_steps:
  map_group(3)




if "splittarget" in enabled_steps:
  for fdr_name, pycode, jscode, jscode_fixed in data_tuples:
    try:
      print(f"--- Processing (splittarget): {fdr_name}")
      # split the target code in half
      # strip it first
      jscode = jscode.strip()
      js_code_lines = jscode.split("\n")
      if len(js_code_lines) < 6: 
        print(f"[ERROR][SKIP] {fdr_name} js_code_lines < 6.")
        continue
      js_first_half = "\n".join(js_code_lines[:len(js_code_lines)//2])
      js_second_half = "\n".join(js_code_lines[len(js_code_lines)//2:])
      
      try:
        print("Mapping first half. #line(js_first_half):", len(js_first_half.split("\n")))
        map_result_1 = cm_srcmapping.partial_source_mapping(pycode, js_first_half, fdr_name, 0, ensure_outpath(fdr_name, "target.splittarget.mapping_completion.1"))
        save_output(fdr_name, "target.splittarget.srcmappiece.1", map_result_1, False)
      except Exception as e:
        print(f"SubError: {fdr_name} {e}")
      
      try:
        print("Mapping second half. #line(js_second_half):", len(js_second_half.split("\n")))
        map_result_2 = cm_srcmapping.partial_source_mapping(pycode, js_second_half, fdr_name, 0, ensure_outpath(fdr_name, "target.splittarget.mapping_completion.2"))
        save_output(fdr_name, "target.splittarget.srcmappiece.2", map_result_2, False)
      except Exception as e:
        print(f"SubError: {fdr_name} {e}")

      # save_output(fdr_name, "target.srcmappiece", map_result, False)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue