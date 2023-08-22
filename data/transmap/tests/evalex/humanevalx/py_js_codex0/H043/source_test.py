#TESTED_PROGRAM

if pairs_sum_to_zero([1, 3, 5, 0]) != False:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([1, 3, -2, 1]) != False:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([1, 2, 3, 7]) != False:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([2, 4, -5, 3, 5, 7]) != True:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([1]) != False:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([-3, 9, -1, 3, 2, 30]) != True:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([-3, 9, -1, 3, 2, 31]) != True:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([-3, 9, -1, 4, 2, 30]) != False:
  raise Exception("MyLogError MISMATCH")
if pairs_sum_to_zero([-3, 9, -1, 4, 2, 31]) != False:
  raise Exception("MyLogError MISMATCH")