_SRC_MAPPING_SYSTEM_MSG = \
"""You are a helpful assistant that map Python code and translated JavaScript code. 
For user requests, you output the mapping directly in consistent formats without explanations.
You should not make any changes to the provided code pair when you output the mapping. 
You can only add annotations at the end of the line for each statement.
You should not skip statements when you output the mapping.
"""



# https://github.com/HALOCORE/CodeSnart/blob/cc1bc0b975326b3ae2bdc4aa629a7229f6c37635/frontend/transmap/index_evalex__selfexp.js#L340
_OLD_TRANS_HEADER = "##### Translate this code from Python to JavaScript"
_NEW_TRANS_HEADER = "## Code Translation from Python to JavaScript"
_OLD_MAPPING_HEADER = "##### Match the above translation statement by statement"
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

srcmapping_messages_template = lambda pycode, jscode : (
  _SRC_MAPPING_SYSTEM_MSG,
  [(_SRC_MAPPING_EXAMPLE, _SRC_MAPPING_EXAMPLE_RESP)],
  _SRC_MAPPING_INPUT_TMPL(pycode, jscode)
)