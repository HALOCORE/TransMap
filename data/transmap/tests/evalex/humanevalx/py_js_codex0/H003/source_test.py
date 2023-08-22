#TESTED_PROGRAM

if below_zero([]) != False:
  raise Exception("MyLogError MISMATCH")
if below_zero([1, 2, -3, 1, 2, -3]) != False:
  raise Exception("MyLogError MISMATCH")
if below_zero([1, 2, -4, 5, 6]) != True:
  raise Exception("MyLogError MISMATCH")
if below_zero([1, -1, 2, -2, 5, -5, 4, -4]) != False:
  raise Exception("MyLogError MISMATCH")
if below_zero([1, -1, 2, -2, 5, -5, 4, -5]) != True:
  raise Exception("MyLogError MISMATCH")
if below_zero([1, -2, 2, -2, 5, -5, 4, -4]) != True:
  raise Exception("MyLogError MISMATCH")