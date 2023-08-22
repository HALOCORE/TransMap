#TESTED_PROGRAM

if sum_product([]) != (0, 1):
  raise Exception("MyLogError MISMATCH")
if sum_product([1, 1, 1]) != (3, 1):
  raise Exception("MyLogError MISMATCH")
if sum_product([100, 0]) != (100, 0):
  raise Exception("MyLogError MISMATCH")
if sum_product([3, 5, 7]) != (3 + 5 + 7, 3 * 5 * 7):
  raise Exception("MyLogError MISMATCH")
if sum_product([10]) != (10, 10):
  raise Exception("MyLogError MISMATCH")