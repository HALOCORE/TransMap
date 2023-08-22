#TESTED_PROGRAM

if get_positive([-1, -2, 4, 5, 6]) != [4, 5, 6]:
  raise Exception("MyLogError MISMATCH")
if get_positive([5, 3, -5, 2, 3, 3, 9, 0, 123, 1, -10]) != [5, 3, 2, 3, 3, 9, 123, 1]:
  raise Exception("MyLogError MISMATCH")
if get_positive([-1, -2]) != []:
  raise Exception("MyLogError MISMATCH")
if get_positive([]) != []:
  raise Exception("MyLogError MISMATCH")