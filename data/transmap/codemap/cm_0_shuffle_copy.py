import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

import random
import hashlib
import json
import shutil

# util functions
def write_json(data, file_path):
  with open(file_path, 'w') as outfile:
    json.dump(data, outfile, indent=2)

def read_json(file_path):
  with open(file_path) as json_file:
    data = json.load(json_file)
  return data

# using the hash of "TransMap" as the seed
rand_seed = hashlib.md5("TransMap".encode('utf-8')).hexdigest()
random.seed(rand_seed)

# shuffle the id within 2400
id_list = list(range(2400))
random.shuffle(id_list)

# get the list of folders
fdr_path = "../tests/evalex/leetcode/py_js_codex0err"
fdrs = [x for x in list(os.listdir(fdr_path)) if x.startswith("L")]

filtered_id_list = []
for i in id_list:
  # 5 -> "L0005"
  str_id = "L" + str(i).zfill(4)
  # find the folder name in fdrs that starts with str_id
  fdr = [x for x in fdrs if x.startswith(str_id)]
  if len(fdr) == 1:
    # check if the folder contains target.fixed.js
    if os.path.exists(os.path.join(fdr_path, fdr[0], "injects.json")):
      # injects.json should exist
      assert os.path.exists(os.path.join(fdr_path, fdr[0], "target.fixed.js")), fdr[0]
      filtered_id_list.append(fdr[0])
  else:
    assert len(fdr) == 0

# save filtered_id_list to "./cm_0_folders.json"
write_json(filtered_id_list, "./cm_0_folders.json")

# create folder if not existing "input_leet" "output_leet"
if not os.path.exists("./input_leet"):
  os.mkdir("./input_leet")
if not os.path.exists("./output_leet"):
  os.mkdir("./output_leet")

# copy the files to input_leet and output_leet
for cp_fdr in filtered_id_list:
  # make folder
  if not os.path.exists(f"./input_leet/{cp_fdr}"):
    os.mkdir(f"./input_leet/{cp_fdr}")
  # copy using shutil
  shutil.copyfile(f"{fdr_path}/{cp_fdr}/source.py", f"./input_leet/{cp_fdr}/source.py")
  shutil.copyfile(f"{fdr_path}/{cp_fdr}/target.fixed.js", f"./input_leet/{cp_fdr}/target.fixed.js")
  shutil.copyfile(f"{fdr_path}/{cp_fdr}/target.js", f"./input_leet/{cp_fdr}/target.js")

