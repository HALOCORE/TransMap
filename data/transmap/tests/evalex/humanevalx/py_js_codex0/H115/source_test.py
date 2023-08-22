#TESTED_PROGRAM

if max_fill([[0,0,1,0], [0,1,0,0], [1,1,1,1]], 1) != 6:
  raise Exception("MyLogError MISMATCH")
if max_fill([[0,0,1,1], [0,0,0,0], [1,1,1,1], [0,1,1,1]], 2) != 5:
  raise Exception("MyLogError MISMATCH")
if max_fill([[0,0,0], [0,0,0]], 5) != 0:
  raise Exception("MyLogError MISMATCH")
if max_fill([[1,1,1,1], [1,1,1,1]], 2) != 4:
  raise Exception("MyLogError MISMATCH")
if max_fill([[1,1,1,1], [1,1,1,1]], 9) != 2:
  raise Exception("MyLogError MISMATCH")