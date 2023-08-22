
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

def default_translate(pycode, resp_save_path=None):
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



if __name__ == "__main__":
  filtered_id_list = read_json("./cm_0_folders.json")

  for fdr_name in filtered_id_list:
    py_code = read_file(f"./input_leet/{fdr_name}/source.py")
    try:
      print(f"--- Processing (trans): {fdr_name}")
      trans_js_code = default_translate(py_code)
      write_file(f"./input_leet/{fdr_name}/target.chatgpt.js", trans_js_code)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue
