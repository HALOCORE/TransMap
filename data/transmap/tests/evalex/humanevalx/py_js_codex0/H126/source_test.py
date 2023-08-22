#TESTED_PROGRAM

if is_sorted([5]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 3, 4, 5]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 3, 2, 4, 5]) != False:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 3, 4, 5, 6]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 3, 4, 5, 6, 7]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 3, 2, 4, 5, 6, 7]) != False:
  raise Exception("MyLogError MISMATCH")
if is_sorted([]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([3, 2, 1]) != False:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 2, 2, 3, 4]) != False:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 3, 3, 3, 4]) != False:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 2, 3, 3, 4]) != True:
  raise Exception("MyLogError MISMATCH")
if is_sorted([1, 2, 3, 4]) != True:
  raise Exception("MyLogError MISMATCH")