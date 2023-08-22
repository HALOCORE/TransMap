#TESTED_PROGRAM

if common([1, 4, 3, 34, 653, 2, 5], [5, 7, 1, 5, 9, 653, 121]) != [1, 5, 653]:
  raise Exception("MyLogError MISMATCH")
if common([5, 3, 2, 8], [3, 2]) != [2, 3]:
  raise Exception("MyLogError MISMATCH")
if common([4, 3, 2, 8], [3, 2, 4]) != [2, 3, 4]:
  raise Exception("MyLogError MISMATCH")
if common([4, 3, 2, 8], []) != []:
  raise Exception("MyLogError MISMATCH")