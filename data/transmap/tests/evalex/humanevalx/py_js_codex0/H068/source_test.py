#TESTED_PROGRAM

if pluck([4,2,3]) != [2, 1]:
  raise Exception("MyLogError MISMATCH")
if pluck([1,2,3]) != [2, 1]:
  raise Exception("MyLogError MISMATCH")
if pluck([]) != []:
  raise Exception("MyLogError MISMATCH")
if pluck([5, 0, 3, 0, 4, 2]) != [0, 1]:
  raise Exception("MyLogError MISMATCH")
if pluck([1, 2, 3, 0, 5, 3]) != [0, 3]:
  raise Exception("MyLogError MISMATCH")
if pluck([5, 4, 8, 4 ,8]) != [4, 1]:
  raise Exception("MyLogError MISMATCH")
if pluck([7, 6, 7, 1]) != [6, 1]:
  raise Exception("MyLogError MISMATCH")
if pluck([7, 9, 7, 1]) != []:
  raise Exception("MyLogError MISMATCH")