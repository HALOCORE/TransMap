#TESTED_PROGRAM

if longest([]) != None:
  raise Exception("MyLogError MISMATCH")
if longest(['x', 'y', 'z']) != 'x':
  raise Exception("MyLogError MISMATCH")
if longest(['x', 'yyy', 'zzzz', 'www', 'kkkk', 'abc']) != 'zzzz':
  raise Exception("MyLogError MISMATCH")