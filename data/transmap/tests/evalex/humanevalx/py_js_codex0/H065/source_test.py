#TESTED_PROGRAM

if circular_shift(100, 2) != "001":
  raise Exception("MyLogError MISMATCH")
if circular_shift(12, 2) != "12":
  raise Exception("MyLogError MISMATCH")
if circular_shift(97, 8) != "79":
  raise Exception("MyLogError MISMATCH")
if circular_shift(12, 1) != "21":
  raise Exception("MyLogError MISMATCH")
if circular_shift(11, 101) != "11":
  raise Exception("MyLogError MISMATCH")