#TESTED_PROGRAM

if intersperse([], 7) != []:
  raise Exception("MyLogError MISMATCH")
if intersperse([5, 6, 3, 2], 8) != [5, 8, 6, 8, 3, 8, 2]:
  raise Exception("MyLogError MISMATCH")
if intersperse([2, 2, 2], 2) != [2, 2, 2, 2, 2]:
  raise Exception("MyLogError MISMATCH")