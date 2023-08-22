#TESTED_PROGRAM

if histogram('a b b a') != {'a':2,'b': 2}:
  raise Exception("MyLogError MISMATCH")
if histogram('a b c a b') != {'a': 2, 'b': 2}:
  raise Exception("MyLogError MISMATCH")
if histogram('a b c d g') != {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'g': 1}:
  raise Exception("MyLogError MISMATCH")
if histogram('r t g') != {'r': 1,'t': 1,'g': 1}:
  raise Exception("MyLogError MISMATCH")
if histogram('b b b b a') != {'b': 4}:
  raise Exception("MyLogError MISMATCH")
if histogram('r t g') != {'r': 1,'t': 1,'g': 1}:
  raise Exception("MyLogError MISMATCH")
if histogram('') != {}:
  raise Exception("MyLogError MISMATCH")
if histogram('a') != {'a': 1}:
  raise Exception("MyLogError MISMATCH")