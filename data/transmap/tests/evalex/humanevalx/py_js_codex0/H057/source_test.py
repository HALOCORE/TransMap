#TESTED_PROGRAM

if monotonic([1, 2, 4, 10]) != True:
  raise Exception("MyLogError MISMATCH")
if monotonic([1, 2, 4, 20]) != True:
  raise Exception("MyLogError MISMATCH")
if monotonic([1, 20, 4, 10]) != False:
  raise Exception("MyLogError MISMATCH")
if monotonic([4, 1, 0, -10]) != True:
  raise Exception("MyLogError MISMATCH")
if monotonic([4, 1, 1, 0]) != True:
  raise Exception("MyLogError MISMATCH")
if monotonic([1, 2, 3, 2, 5, 60]) != False:
  raise Exception("MyLogError MISMATCH")
if monotonic([1, 2, 3, 4, 5, 60]) != True:
  raise Exception("MyLogError MISMATCH")
if monotonic([9, 9, 9, 9]) != True:
  raise Exception("MyLogError MISMATCH")