import os
# set working dir as the script dir
os.chdir(os.path.dirname(os.path.abspath(__file__)))

import json
import sys
import chatgpt_cached
from Levenshtein import distance as levenshtein_distance

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


if len(sys.argv) == 1:
  CONFIGS = read_json("./classic_srcmapping.py.default.json")
else:
  CONFIGS = read_json(f"./classic_srcmapping.py.{sys.argv[1]}.json")


_SRC_MAPPING_SYSTEM_MSG = \
"""You are a helpful assistant that map Python code and translated JavaScript code. 
For user requests, you output the mapping directly in consistent formats without explanations.
You should not make any changes to the provided code pair when you output the mapping. 
You can only add annotations at the end of the line for each statement.
You should not skip statements when you output the mapping.
"""



# https://github.com/HALOCORE/CodeSnart/blob/cc1bc0b975326b3ae2bdc4aa629a7229f6c37635/frontend/transmap/index_evalex__selfexp.js#L340
# _OLD_TRANS_HEADER = "##### Translate this code from Python to JavaScript"
_NEW_TRANS_HEADER = "## Code Translation from Python to JavaScript"
# _OLD_MAPPING_HEADER = "##### Match the above translation statement by statement"
_NEW_MAPPING_HEADER = "**Please match the above translation statement by statement by appending annotations to the code lines.**"
_SRC_MAPPING_EXAMPLE = _NEW_TRANS_HEADER \
+ """

### Python

```python
from typing import *
def f_gold(s: str) -> int:
    i = 0
    ans = 0
    chars = set()
    for j, c in enumerate(s):
        if c == ' ':
            continue
        elif c == '*':
            break
        while c in chars:
            chars.remove(s[i])
            i += 1
        chars.add(c)
        ans = max(ans, j - i + 1)
        ans = max(
          ans, i - j + 1
        )
    ans, i = ans * 2, i + 1
    return ans
```

### JavaScript

```javascript
var f_gold = function(s) {
    var i = 0, ans = 0;
    var chars = new Set();
    for (var j = 0; j < s.length; j++) {
        if (s[j] === ' ') continue;
        else if (c === '*') {
            break;
        }
        while (chars.has(s[j])) {
            chars.delete(s[i]);
            i++;
        }
        chars.add(s[j]);
        ans = Math.max(ans, j - i + 1);
        ans = Math.max(ans, i - j + 1);
    }
    ans = ans * 2;
    i = i + 1;
    return ans;
}
```

""" + _NEW_MAPPING_HEADER + "\n"

_SRC_MAPPING_EXAMPLE_RESP = """### Python

```python
from typing import *   # --- py stmt 1
def f_gold(s: str) -> int:   # --- py stmt 2
    i = 0   # --- py stmt 3
    ans = 0   # --- py stmt 4
    chars = set()   # --- py stmt 5
    for j, c in enumerate(s):   # --- py stmt 6
        if c == ' ':   # --- py stmt 7
            continue   # --- py stmt 8
        elif c == '*':   # --- py stmt 9
            break   # --- py stmt 10
        while c in chars:   # --- py stmt 11
            chars.remove(s[i])   # --- py stmt 12
            i += 1   # --- py stmt 13
        chars.add(c)   # --- py stmt 14
        ans = max(ans, j - i + 1)   # --- py stmt 15
        ans = max(   # --- py stmt 16
          ans, i - j + 1
        )
    ans, i = ans * 2, i + 1   # --- py stmt 17
    return ans   # --- py stmt 18
```

### JavaScript

```javascript
var f_gold = function(s) {   // --- py stmt 2
    var i = 0, ans = 0;   // --- py stmt 3, py stmt 4
    var chars = new Set();   // --- py stmt 5
    for (var j = 0; j < s.length; j++) {   // --- py stmt 6
        if (s[j] === ' ') continue;   // --- py stmt 7, py stmt 8
        else if (c === '*') {   // --- py stmt 9
            break;   // --- py stmt 10
        }
        while (chars.has(s[j])) {   // --- py stmt 11
            chars.delete(s[i]);   // --- py stmt 12
            i++;   // --- py stmt 13
        }
        chars.add(s[j]);   // --- py stmt 14
        ans = Math.max(ans, j - i + 1);   // --- py stmt 15
        ans = Math.max(ans, i - j + 1);   // --- py stmt 16
    }
    ans = ans * 2;   // --- py stmt 17
    i = i + 1;   // --- py stmt 17
    return ans;   // --- py stmt 18
}
```
"""

_SRC_MAPPING_INPUT_TMPL = lambda pycode, jscode :  \
_NEW_TRANS_HEADER + f"""

### Python

```python
{pycode}
```

### JavaScript

```javascript
{jscode}
```

""" + _NEW_MAPPING_HEADER + "\n"

_srcmapping_messages_template = lambda pycode, jscode : (
  _SRC_MAPPING_SYSTEM_MSG,
  [(_SRC_MAPPING_EXAMPLE, _SRC_MAPPING_EXAMPLE_RESP)],
  _SRC_MAPPING_INPUT_TMPL(pycode, jscode)
)

def _assert_once_beginning_trim(s, begin):
  splits = s.split(begin)
  assert len(splits) == 2, f"expected 2 splits (begin), got {len(splits)} for {s}"
  assert splits[0].strip() == ""
  return splits[1]

def _assert_once_middle_split(s, middle):
  splits = s.split(middle)
  assert len(splits) == 2, f"expected 2 splits (middle), got {len(splits)} for {s}"
  return splits 

def _assert_once_end_trim(s, end):
  splits = s.split(end)
  assert len(splits) == 2, f"expected 2 splits (end), got {len(splits)} for {s}"
  assert splits[1].strip() == "", f'expected empty string, got """{splits[1]}""" for """{s}"""'
  return splits[0]

def _seperate_annos_and_codelines(s, seperator, assert_seperator):
  raw_code_lines = s.split("\n")
  lines_with_annos = []
  for i, line in enumerate(raw_code_lines):
    if assert_seperator in line:
      assert seperator in line, f"line {i} ({line}) does not contain seperator {seperator}"
      code, anno = line.split(seperator)
      lines_with_annos.append((code, anno))
    else:
      lines_with_annos.append((line, None))
  return lines_with_annos, "\n".join([line for line, _ in lines_with_annos])

def _seperate_numeric_annos_and_codelines(s, comment_prefix):
  anno_first_sep = comment_prefix + " --- py stmt "
  lines_with_annos, code = _seperate_annos_and_codelines(s, "   " + anno_first_sep, "--- py")
  new_lines_with_annos = []
  for line, idx in lines_with_annos:
    if idx is None:
      new_lines_with_annos.append((line, None))
    else:
      idxs = tuple(int(i) for i in idx.split(", py stmt "))
      new_lines_with_annos.append((line, idxs))
  return new_lines_with_annos, code

def add_all_if_not_none(tuple_or_none, add_val):
  if tuple_or_none is None:
    return None
  new_list = tuple(v + add_val for v in tuple_or_none)
  return new_list

def get_all_ids(lines_with_annos):
  all_ids = []
  for _, idxs in lines_with_annos:
    if idxs is not None:
      all_ids.extend(idxs)
  return all_ids

def _rtrim_per_line(code):
  lines = code.split("\n")
  lines = [line.rstrip() for line in lines]
  return "\n".join(lines)

def _if_all_lines_start_with(code, prefix, filt=lambda x : x.strip() != "" and x.strip() != "..."):
  lines = code.split("\n")
  return all([line.startswith(prefix) for line in lines if filt(line)])


def _diff_code(lang, ori_code, new_code):
  return {
    "lang": lang,
    "is_diff": True,
    "ori_code": ori_code,
    "code": new_code,
  }

def equal_without_space(str1, str2):
  return "".join(str1.split()) == "".join(str2.split())

def seq_match_inf_transfer(a, binf, equal_expected, skip_comment_prefix="#"):
  """
  What should this func return? associate ainf
  """
  def _normalize(s):
    s = s.strip()
    if s.endswith(";"): s = s[:-1]
    if '#' in s:
      s2 = s[:s.index('#')].strip()
      if len(s) > 0: return s2
      return s
    return s
  def _is_skippable_if_necessary(s):
    cset = set(s)
    # cset is a subset of {' ', '\t', '(', ')', '{', '}', '[', ']', ',', ';'}
    return cset.issubset({' ', '\t', '(', ')', '{', '}', '[', ']', ',', ';'})
  if equal_expected:
    raise Exception("equal case not implemented")
    # if len(a) != len(binf):
    #   raise Exception(f"expected length equal, got {len(a)} and {len(binf)}")
    # result = []
    # for al, (bl, bli) in zip(a, binf):
    #   if al != bl:
    #     assert False, f"eq case. Expected str equal, got '{al}' and '{bl}'"
    #   result.append((al, bli))
    # return result
  else:
    print("[INFO] SEQ RELAXED NODE")
    # strategy: enumerate through idx of a and binf, try to skip some lines in a
    result = []
    i = 0; j = 0
    while True:
      while i < len(a) and a[i].strip() == "": 
        result.append((a[i], None))
        i += 1
      while j < len(binf) and binf[j][0].strip() == "": 
        j += 1
      if i < len(a) and j < len(binf):
        al = a[i]; bl, bli = binf[j]
        if al == bl:
          i += 1; j += 1
          result.append((al, bli))
        elif _normalize(al) == _normalize(bl):
          print("[WARN] eq after nomalization: ", al, bl)
          i += 1; j += 1
          result.append((al, bli))
        else:
          # check the length and distance of the 2 strings
          str_dis = levenshtein_distance(al, bl)
          if len(al) > 5 * str_dis: 
            print(f"[WARN] str_dis={str_dis} acceptable (len={len(al)}) between '{al}' and '{bl}'")
            # acceptable
            i += 1; j += 1
            result.append((al, bli))
          elif i + 1 < len(a) and a[i+1] == bl and _is_skippable_if_necessary(a[i]):
            print(f"[WARN] skippable line and next line match: skip '{al}', '{a[i+1]}' == '{bl}'")
            # acceptable
            i += 2; j += 1
            result.append((a[i+1], bli))
          elif j + 1 < len(binf) and equal_without_space(al, binf[j][0] + binf[j+1][0]) and binf[j+1][1] is None:
            print(f"[WARN] one line match two lines: '{al}', '{binf[j][0]}' + '{binf[j+1][0]}'")
            # acceptable
            i += 1; j += 2
            result.append((al, bli))
          elif al.startswith(skip_comment_prefix) and not bl.startswith(skip_comment_prefix):
            # source comment is in a, but not in binf
            print(f"[WARN] full line source comment is in a, but not in binf: '{al}', '{bl}'")
            i += 1
            result.append((al, None))
          elif bl.startswith(al) and bl[len(al):].strip().startswith(skip_comment_prefix):
            # source comment is in binf, but not in a
            print(f"[WARN] inline source comment is in binf, but not in a: '{al}', '{bl}'")
            i += 1; j += 1
            result.append((al, bli))
          else:
            assert False, f"!eq case. Expected str equal, got '{al}' and '{bl}'"
        continue
      if i >= len(a) and j >= len(binf):
        break
      elif i >= len(a):
        if _is_skippable_if_necessary(binf[j][0]):
          print(f"[WARN] a exhausted. skip b '{binf[j][0]}'")
          j += 1
          continue
        assert False, f"!eq case. Expected str equal, got {None} and {binf[j]}"
      elif j >= len(binf):
        assert False, f"!eq case. Expected str equal, got '{a[i]}' and {None}"
    return result
  assert False, "seq_match_inf_transfer: should not reach here"

SRCMAP_TEMPLATE = lambda py_part, js_part : f"""### Python
```python
{py_part}
```

### JavaScript
```javascript
{js_part}
```
"""

def lines_with_annos_to_srcmap_part(lines_with_annos, comment_prefix):
  result_lines = []
  for line, idxes in lines_with_annos:
    if idxes is None:
      result_lines.append(line)
    else:
      stmt_strs = ["py stmt " + str(idx) for idx in idxes]
      line_append = "   " + comment_prefix + " --- " + ", ".join(stmt_strs)
      result_lines.append(line + line_append)
  return "\n".join(result_lines)

import difflib
def _extract_sourcemap_from_srcmapping_result(ori_mapstr, pycode, jscode, segname, starting_idx):
  # there should be two sections, one for py, one for js.
  # Problem: even if I have the source mapping, can I merge the code without the focus tag?
  # Try to extract the mapping first. And figure out the mapped focus range.
  # The mapped focus range should be useful for validating the focus tag.
  map_str = ori_mapstr
  map_str = _assert_once_beginning_trim(map_str, "### Python")
  py_part, js_part = _assert_once_middle_split(map_str, "### JavaScript")
  py_part = _assert_once_beginning_trim(py_part, "\n```python\n")
  py_part = _assert_once_end_trim(py_part, "\n```")
  js_part = _assert_once_beginning_trim(js_part, "\n```javascript\n")
  js_part, after_js = _assert_once_middle_split(js_part, "\n```")
  if _if_all_lines_start_with(py_part, "#") and _if_all_lines_start_with(js_part, "//"):
    # TODO: produce a default mapping for this case.
    assert _if_all_lines_start_with(pycode, "#"), f"expected all lines in py_code_info['focus_code'] to start with #, got {pycode}"
    assert _if_all_lines_start_with(jscode, "//"), f"expected all lines in js_code_info['focus_code'] to start with //, got {jscode}"
    pyfoc_lines_with_annos = [(line, None) for line in pycode.split("\n")]
    jsfoc_lines_with_annos = [(line, None) for line in jscode.split("\n")]
    mod_py_part = lines_with_annos_to_srcmap_part(pyfoc_lines_with_annos, "#")
    mod_js_part = lines_with_annos_to_srcmap_part(jsfoc_lines_with_annos, "//")
  else:
    if after_js.strip() != "":
      stripped_after_js = after_js.strip()
      if stripped_after_js.startswith("Note: ") and len(stripped_after_js.split("\n")) == 1:
        print("[WARN] after_js is a note: `" + stripped_after_js + "`")
      else:
        raise Exception(f'expected empty string, got """{after_js}"""')
    py_lines_with_annos, py_code = _seperate_numeric_annos_and_codelines(py_part, "#")
    # if there are `--- js stmt` in js_part, assert that there is no `--- py stmt` in js_part and split on that instead.
    if "--- js stmt" in js_part:
      print("[WARN]: js_part contains `--- js stmt`. Converting them into py stmt.")
      js_part = js_part.replace("--- js stmt", "--- py stmt")
      js_part = js_part.replace(", js stmt", ", py stmt")
    assert "js stmt" not in js_part, f"expected no `--- js stmt` in js_part, got {js_part}"
    js_lines_with_annos, js_code = _seperate_numeric_annos_and_codelines(js_part, "//")
    

    stripped_py_code = _rtrim_per_line(py_code).strip()
    stripped_js_code = _rtrim_per_line(js_code).strip()
    original_py_code_stripped = _rtrim_per_line(pycode).strip()
    original_js_code_stripped = _rtrim_per_line(jscode).strip()
    expect_py_equal = stripped_py_code == original_py_code_stripped
    if stripped_py_code != original_py_code_stripped:
      print(f"[WARN]: py code not equal. segname: {segname}")
    expect_js_equal = stripped_js_code == original_js_code_stripped
    if stripped_js_code != original_js_code_stripped:
      print(f"[WARN]: js code not equal. segname: {segname}")
  

    # try to map the py_lines_with_annos to py_code and js_lines_with_annos to js_code
    pyfoc_lines_with_annos = seq_match_inf_transfer(pycode.split("\n"), py_lines_with_annos, False, "#") #expect_py_equal)
    jsfoc_lines_with_annos = seq_match_inf_transfer(jscode.split("\n"), js_lines_with_annos, False, "//") #expect_js_equal)

    py_idxes = get_all_ids(pyfoc_lines_with_annos)
    js_idxes = get_all_ids(jsfoc_lines_with_annos)

    # js_idxes should be a subset of py_idxes
    if not set(js_idxes).issubset(set(py_idxes)):
      print(f"[ERROR]: js_idxes not subset of py_idxes. segname: {segname} diff: {set(js_idxes) - set(py_idxes)}")
    # check if all py_idxes exist in js_idxes
    if not set(py_idxes).issubset(set(js_idxes)):
      print(f"[ERROR]: py_idxes not subset of js_idxes. segname: {segname} diff: {set(py_idxes) - set(js_idxes)}")
  
    pyfoc_lines_with_annos = [(line, add_all_if_not_none(idxs, starting_idx)) for line, idxs in pyfoc_lines_with_annos]
    jsfoc_lines_with_annos = [(line, add_all_if_not_none(idxs, starting_idx)) for line, idxs in jsfoc_lines_with_annos]

    # TODO NOT URGENT: check if the mapping is monotonous
    # convert array to dict
    
    # output the python part and js part
    mod_py_part = lines_with_annos_to_srcmap_part(pyfoc_lines_with_annos, "#")
    mod_js_part = lines_with_annos_to_srcmap_part(jsfoc_lines_with_annos, "//")
  
  return SRCMAP_TEMPLATE(mod_py_part, mod_js_part)

def _default_source_mapping(py_code, js_code, segname, starting_idx):
  system, history, user_req = _srcmapping_messages_template(py_code, js_code)
  mapping_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req)  # , max_length=1536
  is_incomplete = mapping_resp["usage"]["total_tokens"] == 4096
  if is_incomplete: 
    print("[WARN] Incomplete mapping! 4096 tokens reached. Using 16k context instead...")
    mapping_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req, use_16k=True)
  is_incomplete = mapping_resp["usage"]["total_tokens"] == 16384
  if is_incomplete:
    raise Exception("[ERROR] Mapping failed! 16384 tokens reached.")
  completion = mapping_resp["completion"]
  return _extract_sourcemap_from_srcmapping_result(completion, py_code, js_code, segname, starting_idx)



# same as the function in classic_translate.py
def get_segments(code, seperator_prefix):
  # ignore begin marker
  ignore_begin = seperator_prefix + " Segment IGNORE BEGIN"
  ignore_end = seperator_prefix + " Segment IGNORE END"
  normal_begin = seperator_prefix + " Segment BEGIN "
  normal_end = seperator_prefix + " Segment END"

  is_ignore_begin = lambda line: line.startswith(ignore_begin)
  is_ignore_end = lambda line: line.startswith(ignore_end)
  is_normal_begin = lambda line: line.startswith(normal_begin)
  is_normal_end = lambda line: line.startswith(normal_end)
  is_plain_text = lambda line: not (is_ignore_begin(line) or is_ignore_end(line) or is_normal_begin(line) or is_normal_end(line))
  # split the code into lines
  segments = []
  cur_segment_name = None
  cur_segment_lines = []
  lines = code.split("\n")
  i = 0
  while True:
    if i >= len(lines):
      break
    line = lines[i]
    if cur_segment_name is None and line.strip() == "":
      i += 1
      continue
    if is_ignore_begin(line):
      assert cur_segment_name is None
      cur_segment_name = "IGNORE"
    elif is_ignore_end(line):
      assert cur_segment_name == "IGNORE"
      segments.append((cur_segment_name, "\n".join(cur_segment_lines)))
      cur_segment_name = None
      cur_segment_lines = []
    elif is_normal_begin(line):
      assert cur_segment_name is None
      cur_segment_name = line[len(normal_begin):]
    elif is_normal_end(line):
      assert cur_segment_name is not None
      segments.append((cur_segment_name, "\n".join(cur_segment_lines)))
      cur_segment_name = None
      cur_segment_lines = []
    elif is_plain_text(line):
      assert cur_segment_name is not None
      cur_segment_lines.append(line)
    else:
      raise Exception("Unrecognized line: " + line)
    i += 1
  return segments


def sourcemapping_whole(py_code, js_code):
  source_segments = get_segments(py_code, "#####")
  target_segments = get_segments(js_code, "/////")
  source_dict = {}
  for segname, segcode in source_segments:
    if segname == "IGNORE": continue
    assert segname not in source_dict, f"Duplicate segment name: {segname} in source code."
    source_dict[segname] = segcode
  target_dict = {}
  for segname, segcode in target_segments:
    if segname == "IGNORE": continue
    assert segname.endswith(" DONE"), f"Segment name: {segname} in target code should end with DONE."
    segname = segname[:-len(" DONE")]
    assert segname == segname.strip(), f"Segment name: {segname} in target code should not have leading or trailing spaces."
    assert segname not in target_dict, f"Duplicate segment name: {segname} in target code."
    target_dict[segname] = segcode
  assert set(source_dict.keys()) == set(target_dict.keys()), f"Segment names in source and target code do not match."
  segnames = list(source_dict.keys())
  source_maps = []
  for idx, segname in enumerate(segnames):
    print("--- Processing segment", segname, "idx", idx)
    source_piece = source_dict[segname]
    target_piece = target_dict[segname]
    starting_idx = idx * 1000
    sourcemap = _default_source_mapping(source_piece, target_piece, segname, starting_idx)
    source_maps.append("##### ///// Segment " + segname + " Idx " + str(starting_idx))
    source_maps.append(sourcemap)
  return "\n\n".join(source_maps)

def merge_sourcemapping_pieces(sourcemap_pieces_str):
  # split on "### Python" and "### JavaScript"
  merged_py = []
  srcmap_segs = sourcemap_pieces_str.split("##### /////")
  merged_js = []
  assert srcmap_segs[0].strip() == "", f"First segment should be empty, but got: {srcmap_segs[0]}"
  for seg in srcmap_segs[1:]:
    first_line = seg.split("\n")[0]
    assert first_line.startswith(" Segment "), f"First line of segment should start with ' Segment ', but got: {first_line}"
    segname = first_line[len(" Segment "):]
    segname, idx = segname.split(" Idx ")
    # split the rest on "### Python" and "### JavaScript"
    py_js_segs = seg.split("### Python")
    assert len(py_js_segs) == 2, f"Should have exactly one ### Python in segment {segname}"
    py_seg, js_seg = py_js_segs[1].split("### JavaScript")
    py_seg = py_seg.strip()
    js_seg = js_seg.strip()
    py_part = _assert_once_beginning_trim(py_seg, "```python\n")
    py_part = _assert_once_end_trim(py_part, "\n```")
    js_part = _assert_once_beginning_trim(js_seg, "```javascript\n")
    js_part = _assert_once_end_trim(js_part, "\n```")
    merged_py.append(py_part)
    merged_js.append(js_part)
  return "### Python\n\n" + "\n\n".join(merged_py) + "\n\n### JavaScript\n\n" + "\n\n".join(merged_js)
    

for config in CONFIGS:
  source_path = config["SOURCE"]
  target_path = config["TARGET"]
  source_map_path = config["SOURCEMAP"]
  source_map_pieces_path = config["SOURCEMAP_PIECES"]
  

  # get pairs of segments from source and target
  source_code = read_file(source_path)
  target_code = read_file(target_path)
  sourcemap_pieces_str = sourcemapping_whole(source_code, target_code)
  write_file(source_map_pieces_path, sourcemap_pieces_str)
  sourcemap = merge_sourcemapping_pieces(sourcemap_pieces_str)
  write_file(source_map_path, sourcemap)

  

