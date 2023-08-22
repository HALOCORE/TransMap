#TESTED_PROGRAM

if same_chars('eabcdzzzz', 'dddzzzzzzzddeddabc') != True:
  raise Exception("MyLogError MISMATCH")
if same_chars('abcd', 'dddddddabc') != True:
  raise Exception("MyLogError MISMATCH")
if same_chars('dddddddabc', 'abcd') != True:
  raise Exception("MyLogError MISMATCH")
if same_chars('eabcd', 'dddddddabc') != False:
  raise Exception("MyLogError MISMATCH")
if same_chars('abcd', 'dddddddabcf') != False:
  raise Exception("MyLogError MISMATCH")
if same_chars('eabcdzzzz', 'dddzzzzzzzddddabc') != False:
  raise Exception("MyLogError MISMATCH")
if same_chars('aabb', 'aaccc') != False:
  raise Exception("MyLogError MISMATCH")