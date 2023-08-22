#TESTED_PROGRAM

if move_one_ball([3, 4, 5, 1, 2])!=True:
  raise Exception("MyLogError MISMATCH")
if move_one_ball([3, 5, 10, 1, 2])!=True:
  raise Exception("MyLogError MISMATCH")
if move_one_ball([4, 3, 1, 2])!=False:
  raise Exception("MyLogError MISMATCH")
if move_one_ball([3, 5, 4, 1, 2])!=False:
  raise Exception("MyLogError MISMATCH")
if move_one_ball([])!=True:
  raise Exception("MyLogError MISMATCH")