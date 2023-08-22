
import os
# set working dir as the script dir
os.chdir(os.path.dirname(os.path.abspath(__file__)))

import json
import sys
import chatgpt_cached
from Levenshtein import distance as levenshtein_distance
import cm_srcmapping_tmpl
import cm_srcmapping_tmpl_partial

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
  def _normalize(sori):
    s = sori.strip()
    if skip_comment_prefix in s:
      s = s[:s.index(skip_comment_prefix)].strip()
    if s.endswith(";"): s = s[:-1]
    print("[Normalized] '", sori, "' -> '", s, "'", sep="")
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
    # print("[INFO] SEQ RELAXED NODE")
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
          elif al.strip().startswith(skip_comment_prefix) and not bl.strip().startswith(skip_comment_prefix):
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

SRCMAP_PIECE_TEMPLATE = lambda py_part, js_part : f"""### Python
```python
{py_part}
```

### JavaScript
```javascript
{js_part}
```
"""

def default_mapcompletion_to_pypart_and_jspart(map_str):
  map_str = _assert_once_beginning_trim(map_str, "### Python")
  py_part, js_part = _assert_once_middle_split(map_str, "### JavaScript")
  py_part = _assert_once_beginning_trim(py_part, "\n```python\n")
  py_part = _assert_once_end_trim(py_part, "\n```")
  js_part = _assert_once_beginning_trim(js_part, "\n```javascript\n")
  js_part, after_js = _assert_once_middle_split(js_part, "\n```")
  if after_js.strip() != "":
    stripped_after_js = after_js.strip()
    if (stripped_after_js.startswith("Note: ") or "Please note that" in stripped_after_js) \
      and len(stripped_after_js.split("\n")) == 1:
      print("[WARN] after_js is a note: `" + stripped_after_js + "`")
    else:
      raise Exception(f'expected empty string, got """{after_js}"""')
  return py_part, js_part

def partial_mapcompletion_to_pypart_and_jspart(map_str):
  map_str = _assert_once_beginning_trim(map_str, "### Python")
  py_part, js_part = _assert_once_middle_split(map_str, "### JavaScript")
  py_part = _assert_once_beginning_trim(py_part, "\n```python\n")
  py_part = _assert_once_end_trim(py_part, "\n```")
  js_part = _assert_once_beginning_trim(js_part, "\n```javascript\n")
  js_part, after_js = _assert_once_middle_split(js_part, "\n```")
  if after_js.strip() != "":
    stripped_after_js = after_js.strip()
    if stripped_after_js.startswith("Note: ") and len(stripped_after_js.split("\n")) == 1:
      print("[WARN] after_js is a note: `" + stripped_after_js + "`")
    else:
      raise Exception(f'expected empty string, got """{after_js}"""')
  return py_part, js_part

def mapping_completion_to_srcmappiece(py_part, js_part, pycode, jscode, segname, starting_idx):
  asserts = {}
  def _print_add_asserts(key, msg):
    print(f"[ASSERT_ERR] {key}:", msg)
    if key not in asserts:
      asserts[key] = []
    asserts[key].append(msg)
  # there should be two sections, one for py, one for js.
  if _if_all_lines_start_with(py_part, "#") and _if_all_lines_start_with(js_part, "//"):
    # TODO: produce a default mapping for this case.
    assert _if_all_lines_start_with(pycode, "#"), f"expected all lines in py_code_info['focus_code'] to start with #, got {pycode}"
    assert _if_all_lines_start_with(jscode, "//"), f"expected all lines in js_code_info['focus_code'] to start with //, got {jscode}"
    pyfoc_lines_with_annos = [(line, None) for line in pycode.split("\n")]
    jsfoc_lines_with_annos = [(line, None) for line in jscode.split("\n")]
    mod_py_part = lines_with_annos_to_srcmap_part(pyfoc_lines_with_annos, "#")
    mod_js_part = lines_with_annos_to_srcmap_part(jsfoc_lines_with_annos, "//")
  else:
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
    # if stripped_py_code != original_py_code_stripped:
    #   print(f"[WARN]: py code not equal. segname: {segname}")
    # if stripped_js_code != original_js_code_stripped:
    #   print(f"[WARN]: js code not equal. segname: {segname}")
  
    # try to map the py_lines_with_annos to py_code and js_lines_with_annos to js_code
    pyfoc_lines_with_annos = seq_match_inf_transfer(pycode.split("\n"), py_lines_with_annos, False, "#") #expect_py_equal)
    jsfoc_lines_with_annos = seq_match_inf_transfer(jscode.split("\n"), js_lines_with_annos, False, "//") #expect_js_equal)

    py_idxes = get_all_ids(pyfoc_lines_with_annos)
    js_idxes = get_all_ids(jsfoc_lines_with_annos)

    # js_idxes should be a subset of py_idxes
    if not set(js_idxes).issubset(set(py_idxes)):
      _print_add_asserts("idxes_js_in_py", f"js_idxes not subset of py_idxes. segname: {segname} diff: {set(js_idxes) - set(py_idxes)}")
    # check if all py_idxes exist in js_idxes
    if not set(py_idxes).issubset(set(js_idxes)):
      _print_add_asserts("idxes_py_in_js", f"py_idxes not subset of js_idxes. segname: {segname} diff: {set(py_idxes) - set(js_idxes)}")
  
    pyfoc_lines_with_annos = [(line, add_all_if_not_none(idxs, starting_idx)) for line, idxs in pyfoc_lines_with_annos]
    jsfoc_lines_with_annos = [(line, add_all_if_not_none(idxs, starting_idx)) for line, idxs in jsfoc_lines_with_annos]

    # check if the mapping is monotonous
    py_small_idx = -1
    for line, idxs in pyfoc_lines_with_annos:
      if idxs is None: continue
      for idx in idxs:
        if idx < py_small_idx:
          _print_add_asserts("monotonous_py", f"pyfoc_lines_with_annos not monotonous. segname: {segname} idx: {idx} prev: {py_small_idx}")
        py_small_idx = idx
    js_small_idx = -1
    for line, idxs in jsfoc_lines_with_annos:
      if idxs is None: continue
      for idx in idxs:
        if idx < js_small_idx:
          _print_add_asserts("monotonous_js", f"jsfoc_lines_with_annos not monotonous. segname: {segname} idx: {idx} prev: {js_small_idx}")
        js_small_idx = idx
    
    # output the python part and js part
    mod_py_part = lines_with_annos_to_srcmap_part(pyfoc_lines_with_annos, "#")
    mod_js_part = lines_with_annos_to_srcmap_part(jsfoc_lines_with_annos, "//")
    
  details = {
    "py_lines": pyfoc_lines_with_annos,
    "js_lines": jsfoc_lines_with_annos
  }
  return SRCMAP_PIECE_TEMPLATE(mod_py_part, mod_js_part), asserts, details


def default_mapping_completion(py_code, js_code):
  system, history, user_req = cm_srcmapping_tmpl.srcmapping_messages_template(py_code, js_code)
  mapping_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req)  # , max_length=1536
  is_incomplete = mapping_resp["usage"]["total_tokens"] == 4096
  if is_incomplete: 
    print("[WARN] Incomplete mapping! 4096 tokens reached. Using 16k context instead...")
    mapping_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req, use_16k=True)
  is_incomplete = mapping_resp["usage"]["total_tokens"] == 16384
  if is_incomplete:
    raise Exception("[ERROR] Mapping failed! 16384 tokens reached.")
  completion = mapping_resp["completion"]
  return completion

def default_source_mapping(py_code, js_code, segname, starting_idx=0, debug_completion_savepath=None):
  completion = default_mapping_completion(py_code, js_code)
  if debug_completion_savepath is not None:
    with open(debug_completion_savepath, "w") as f: f.write(completion)
  pypart, jspart = default_mapcompletion_to_pypart_and_jspart(completion)
  return mapping_completion_to_srcmappiece(pypart, jspart, py_code, js_code, segname, starting_idx)

def default_source_mapping_from_completion(completion, py_code, js_code, segname, starting_idx=0):
  pypart, jspart = default_mapcompletion_to_pypart_and_jspart(completion)
  return mapping_completion_to_srcmappiece(pypart, jspart, py_code, js_code, segname, starting_idx)

def partial_mapping_completion(py_code, js_code):
  system, history, user_req = cm_srcmapping_tmpl_partial.srcmapping_messages_template(py_code, js_code)
  mapping_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req)  # , max_length=1536
  is_incomplete = mapping_resp["usage"]["total_tokens"] == 4096
  if is_incomplete: 
    print("[WARN] Incomplete mapping! 4096 tokens reached. Using 16k context instead...")
    mapping_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req, use_16k=True)
  is_incomplete = mapping_resp["usage"]["total_tokens"] == 16384
  if is_incomplete:
    raise Exception("[ERROR] Mapping failed! 16384 tokens reached.")
  completion = mapping_resp["completion"]
  return completion

def partial_source_mapping(py_code, js_code, segname, starting_idx=0, debug_completion_savepath=None):
  completion = partial_mapping_completion(py_code, js_code)
  if debug_completion_savepath is not None:
    with open(debug_completion_savepath, "w") as f: f.write(completion)
  pypart, jspart = default_mapcompletion_to_pypart_and_jspart(completion)
  return mapping_completion_to_srcmappiece(pypart, jspart, py_code, js_code, segname, starting_idx)

def partial_source_mapping_from_completion(completion, py_code, js_code, segname, starting_idx=0):
  pypart, jspart = default_mapcompletion_to_pypart_and_jspart(completion)
  return mapping_completion_to_srcmappiece(pypart, jspart, py_code, js_code, segname, starting_idx)
