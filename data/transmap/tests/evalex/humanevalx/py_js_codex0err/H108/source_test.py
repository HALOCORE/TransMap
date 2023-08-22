#TESTED_PROGRAM

if count_nums([]) != 0:
  raise Exception("MyLogError MISMATCH")
if count_nums([-1, -2, 0]) != 0:
  raise Exception("MyLogError MISMATCH")
if count_nums([1, 1, 2, -2, 3, 4, 5]) != 6:
  raise Exception("MyLogError MISMATCH")
if count_nums([1, 6, 9, -6, 0, 1, 5]) != 5:
  raise Exception("MyLogError MISMATCH")
if count_nums([1, 100, 98, -7, 1, -1]) != 4:
  raise Exception("MyLogError MISMATCH")
if count_nums([12, 23, 34, -45, -56, 0]) != 5:
  raise Exception("MyLogError MISMATCH")
if count_nums([-0, 1**0]) != 1:
  raise Exception("MyLogError MISMATCH")
if count_nums([1]) != 1:
  raise Exception("MyLogError MISMATCH")