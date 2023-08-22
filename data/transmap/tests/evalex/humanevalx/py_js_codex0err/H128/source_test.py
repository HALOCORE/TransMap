#TESTED_PROGRAM

if prod_signs([1, 2, 2, -4]) != -9:
  raise Exception("MyLogError MISMATCH")
if prod_signs([0, 1]) != 0:
  raise Exception("MyLogError MISMATCH")
if prod_signs([1, 1, 1, 2, 3, -1, 1]) != -10:
  raise Exception("MyLogError MISMATCH")
if prod_signs([]) != None:
  raise Exception("MyLogError MISMATCH")
if prod_signs([2, 4,1, 2, -1, -1, 9]) != 20:
  raise Exception("MyLogError MISMATCH")
if prod_signs([-1, 1, -1, 1]) != 4:
  raise Exception("MyLogError MISMATCH")
if prod_signs([-1, 1, 1, 1]) != -4:
  raise Exception("MyLogError MISMATCH")
if prod_signs([-1, 1, 1, 0]) != 0:
  raise Exception("MyLogError MISMATCH")