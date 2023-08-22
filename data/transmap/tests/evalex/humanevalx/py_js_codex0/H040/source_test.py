#TESTED_PROGRAM

if triples_sum_to_zero([1, 3, 5, 0]) != False:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([1, 3, 5, -1]) != False:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([1, 3, -2, 1]) != True:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([1, 2, 3, 7]) != False:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([1, 2, 5, 7]) != False:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([2, 4, -5, 3, 9, 7]) != True:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([1]) != False:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([1, 3, 5, -100]) != False:
  raise Exception("MyLogError MISMATCH")
if triples_sum_to_zero([100, 3, 5, -100]) != False:
  raise Exception("MyLogError MISMATCH")