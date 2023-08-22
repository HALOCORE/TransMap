#TESTED_PROGRAM

if largest_divisor(3) != 1:
  raise Exception("MyLogError MISMATCH")
if largest_divisor(7) != 1:
  raise Exception("MyLogError MISMATCH")
if largest_divisor(10) != 5:
  raise Exception("MyLogError MISMATCH")
if largest_divisor(100) != 50:
  raise Exception("MyLogError MISMATCH")
if largest_divisor(49) != 7:
  raise Exception("MyLogError MISMATCH")