#TESTED_PROGRAM

if max_element([1, 2, 3]) != 3:
  raise Exception("MyLogError MISMATCH")
if max_element([5, 3, -5, 2, -3, 3, 9, 0, 124, 1, -10]) != 124:
  raise Exception("MyLogError MISMATCH")