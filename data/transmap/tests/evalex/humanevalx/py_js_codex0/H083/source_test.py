#TESTED_PROGRAM

if starts_one_ends(1) != 1:
  raise Exception("MyLogError MISMATCH")
if starts_one_ends(2) != 18:
  raise Exception("MyLogError MISMATCH")
if starts_one_ends(3) != 180:
  raise Exception("MyLogError MISMATCH")
if starts_one_ends(4) != 1800:
  raise Exception("MyLogError MISMATCH")
if starts_one_ends(5) != 18000:
  raise Exception("MyLogError MISMATCH")