#TESTED_PROGRAM

if specialFilter([5, -2, 1, -5]) != 0  :
  raise Exception("MyLogError MISMATCH")
if specialFilter([15, -73, 14, -15]) != 1:
  raise Exception("MyLogError MISMATCH")
if specialFilter([33, -2, -3, 45, 21, 109]) != 2:
  raise Exception("MyLogError MISMATCH")
if specialFilter([43, -12, 93, 125, 121, 109]) != 4:
  raise Exception("MyLogError MISMATCH")
if specialFilter([71, -2, -33, 75, 21, 19]) != 3:
  raise Exception("MyLogError MISMATCH")
if specialFilter([1]) != 0              :
  raise Exception("MyLogError MISMATCH")
if specialFilter([]) != 0:
  raise Exception("MyLogError MISMATCH")