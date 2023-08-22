
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



_default_comment_system_js = \
"""
You are a helpful assistant that add line comments to JavaScript code.
For user requests, you output the code with line comments added directly without explanations, and always in the same format.
You should NOT change any code lines except adding comments---all lines not started with '//' MUST be kept as-is.
"""


_default_pycomment_tmpl = lambda pycode: f"""**Add comment to this Python code.**
### Python

```python
{pycode}
```
"""

_default_jscomment_tmpl = lambda jscode: f"""**Add comment to this JavaScript code.**
### JavaScript

```javascript
{jscode}
```
"""

_default_py_code_example = """print("Hello World")
r = 3
a = math.PI * r**2"""

_default_py_comment_resp = """```python
# print the string "Hello World"
print("Hello World")
# calculate the area of a circle with radius 3
r = 3
a = math.PI * r**2
```
"""

_default_js_code_example = """console.log("Hello World");
const r = 3;
const a = Math.PI * r**2;"""

_default_js_comment_resp = """```javascript
// print the string "Hello World"
console.log("Hello World");
// calculate the area of a circle with radius 3
const r = 3;
const a = Math.PI * r**2;
```
"""



def _extract_jscode_from_comment_result(trans_result, removing_leading_use_strict=True):
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

def default_comment_js(jscode):
  system = _default_comment_system_js
  user1 = _default_jscomment_tmpl(_default_js_code_example)
  assistant1 = _default_js_comment_resp
  history = [(user1, assistant1)]
  user_req = _default_jscomment_tmpl(jscode)
  comment_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req) # , max_length=2400)
  completion = comment_resp["completion"]
  return _extract_jscode_from_comment_result(completion)
  # raise Exception("Impl to be continued...")



if __name__ == "__main__":
  filtered_id_list = read_json("./cm_0_folders.json")

  for fdr_name in filtered_id_list:
    js_code = read_file(f"./input_leet/{fdr_name}/target.fixed.js")
    try:
      print(f"--- Processing (comment): {fdr_name}")
      comment_js_code = default_comment_js(js_code)
      write_file(f"./input_leet/{fdr_name}/target.comment.js", comment_js_code)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue
