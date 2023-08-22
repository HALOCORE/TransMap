
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



_default_rename_system_js = \
"""
You are a helpful assistant that rename variable names in JavaScript code.
For user requests, you output the code with variables renamed directly without explanations, and always in the same format.
You should NOT change the exact semantics of the statements except changing variable names---the AST structure and function calls MUST be kept as-is.
"""


_default_jsrename_tmpl = lambda jscode: f"""**Improve variable naming (to be more verbose) of the code below:**
### JavaScript

```javascript
{jscode}
```
"""


_default_js_code_example = """var s = "Hello world";
console.log(s);
const r = 3;
let a = Math.PI * r**2;"""

_default_js_rename_resp = """```javascript
var welcome_message = "Hello world";
console.log(welcome_message);
const radius = 3;
let area = Math.PI * radius**2;
```
"""



def _extract_jscode_from_rename_result(trans_result, removing_leading_use_strict=True):
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

def default_rename_js(jscode):
  system = _default_rename_system_js
  user1 = _default_jsrename_tmpl(_default_js_code_example)
  assistant1 = _default_js_rename_resp
  history = [(user1, assistant1)]
  user_req = _default_jsrename_tmpl(jscode)
  comment_resp = chatgpt_cached.turbo_chat_completion(system, history, user_req) # , max_length=2400)
  completion = comment_resp["completion"]
  return _extract_jscode_from_rename_result(completion)
  # raise Exception("Impl to be continued...")



if __name__ == "__main__":
  filtered_id_list = read_json("./cm_0_folders.json")

  for fdr_name in filtered_id_list:
    js_code = read_file(f"./input_leet/{fdr_name}/target.fixed.js")
    try:
      print(f"--- Processing (rename): {fdr_name}")
      comment_js_code = default_rename_js(js_code)
      write_file(f"./input_leet/{fdr_name}/target.renamed.js", comment_js_code)
    except Exception as e:
      print(f"Error: {fdr_name} {e}")
      continue
