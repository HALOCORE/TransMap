
import os
import sys
import json

# set working dir as the script dir
os.chdir(os.path.dirname(os.path.abspath(__file__)))
import chatgpt_cached

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
  CONFIGS = read_json("./classic_translate.py.default.json")
else:
  CONFIGS = read_json(f"./classic_translate.py.{sys.argv[1]}.json")

_default_translate_system_autotm2 = \
"""
You are a helpful assistant that translates Python code into JavaScript code.
For user requests, you output the code directly without explanations, and always in the same format.
You should ALWAYS output best-effort translation, even if you are provided partial code, modules, or code with dependencies.
For omitted part of the code in the source '...', you should also use '...' to denote the omitted part in the translation.
"""


_default_translate_tmpl = lambda pycode: f"""**Translate this code from Python into Modern JavaScript:**
### Python

```python
{pycode}
```
"""

_default_trans_result_tmpl = lambda jscode: f"""### JavaScript

```javascript
"use strict";

{jscode}
```
"""

_default_py_code_example = """print("Hello World")"""

_default_js_code_example = """console.log("Hello World");"""

def _extract_jscode_from_trans_result(trans_result, removing_leading_use_strict=True):
  stripped = trans_result.strip()
  if stripped.startswith("### JavaScript"):
    stripped = stripped[len("### JavaScript"):]
  else:
    stripped = "\n" + stripped
    print("[WARN] Result does not start with '### JavaScript': " + stripped.split("\n")[0] + "...")
  # assert stripped.startswith("### JavaScript"), "Result does not start with '### JavaScript': " + stripped.split("\n")[0] + "..."
  if not len(stripped.split("\n```javascript\n")) == 2:
    raise Exception("starting '```javascript' not found in result: " + stripped.split("\n")[0] + "...")
  after_js = stripped.split("\n```javascript\n")[1]
  assert len(after_js.split("\n```")) == 2, "ending '```' not found in result: " + after_js.split("\n")[0] + "..."
  code = after_js.split("\n```")[0]
  if removing_leading_use_strict:
    if code.startswith('"use strict";\n\n'):
      code = code[len('"use strict";\n\n'):]
    if code.startswith('"use strict";\n'):
      code = code[len('"use strict";\n'):]
  return code

def _default_translate(pycode, resp_save_path=None):
  system = _default_translate_system_autotm2
  # user1 = _default_translate_tmpl('print("Hello")')
  user1 = _default_translate_tmpl(_default_py_code_example)
  # assistant1 = _default_trans_result_tmpl('console.log("Hello");')
  assistant1 = _default_trans_result_tmpl(_default_js_code_example)
  history = [(user1, assistant1)]
  user_req = _default_translate_tmpl(pycode)
  trans_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req) # , max_length=2400)
  if resp_save_path is not None:
    print("Save resp to:", resp_save_path)
    write_json(resp_save_path, trans_resp)
  completion = trans_resp["completion"]
  return _extract_jscode_from_trans_result(completion)
  # raise Exception("Impl to be continued...")

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

def translate_source_and_fill_template(source, target_template):
  segs = get_segments(source, seperator_prefix="#####")
  seg_code_dict = {}
  for seg_name, seg_code in segs:
    # translate seg_code
    if seg_name == "IGNORE":
      continue
    assert seg_name not in seg_code_dict
    print("--- Translating segment:", seg_name)
    target_code = _default_translate(seg_code)
    seg_code_dict[seg_name] = {
      "S": seg_code,
      "T": target_code
    }
  # fill the template
  # For each seg_name, there should be an empty marker.
  # all seg_names should be in the template
  # after replacing all, all segment markers should be gone
  for seg_name in seg_code_dict:
    seg_marker = f"///// Segment BEGIN {seg_name}\n///// Segment END"
    assert seg_marker in target_template, f"Segment marker not found in template: {seg_marker}"
    wrapped_code = f"///// Segment BEGIN {seg_name} DONE\n{seg_code_dict[seg_name]['T']}\n///// Segment END"
    target_template = target_template.replace(seg_marker, wrapped_code)
  seg_begin_lines = [line for line in target_template.split("\n") if line.startswith("///// Segment BEGIN")]
  for line in seg_begin_lines:
    if not line.endswith("DONE"):
      raise Exception("Segment not filled: " + line)
  return target_template

for config in CONFIGS:
  source = config["SOURCE"]
  target_template = config["TARGET_TEMPLATE"]
  target = config["TARGET"]

  source_code = read_file(source)
  target_tmpl_code = read_file(target_template)
  target_code = translate_source_and_fill_template(source_code, target_tmpl_code)
  write_file(target, target_code)
  print("Translated and saved to:", target)


