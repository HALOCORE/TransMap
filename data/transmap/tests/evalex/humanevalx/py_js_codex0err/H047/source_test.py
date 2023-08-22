#TESTED_PROGRAM

if median([3, 1, 2, 4, 5]) != 3:
  raise Exception("MyLogError MISMATCH")
if median([-10, 4, 6, 1000, 10, 20]) != 8.0:
  raise Exception("MyLogError MISMATCH")
if median([5]) != 5:
  raise Exception("MyLogError MISMATCH")
if median([6, 5]) != 5.5:
  raise Exception("MyLogError MISMATCH")
if median([8, 1, 3, 9, 9, 2, 7]) != 7:
  raise Exception("MyLogError MISMATCH")