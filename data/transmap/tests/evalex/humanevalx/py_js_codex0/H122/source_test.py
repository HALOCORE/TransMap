#TESTED_PROGRAM

if add_elements([1,-2,-3,41,57,76,87,88,99], 3) != -4:
  raise Exception("MyLogError MISMATCH")
if add_elements([111,121,3,4000,5,6], 2) != 0:
  raise Exception("MyLogError MISMATCH")
if add_elements([11,21,3,90,5,6,7,8,9], 4) != 125:
  raise Exception("MyLogError MISMATCH")
if add_elements([111,21,3,4000,5,6,7,8,9], 4) != 24:
  raise Exception("MyLogError MISMATCH")
if add_elements([1], 1) != 1:
  raise Exception("MyLogError MISMATCH")