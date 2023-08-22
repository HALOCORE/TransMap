#TESTED_PROGRAM

if sort_array([]) != []:
  raise Exception("MyLogError MISMATCH")
if sort_array([5]) != [5]:
  raise Exception("MyLogError MISMATCH")
if sort_array([2, 4, 3, 0, 1, 5]) != [0, 1, 2, 3, 4, 5]:
  raise Exception("MyLogError MISMATCH")
if sort_array([2, 4, 3, 0, 1, 5, 6]) != [6, 5, 4, 3, 2, 1, 0]:
  raise Exception("MyLogError MISMATCH")
if sort_array([2, 1]) != [1, 2]:
  raise Exception("MyLogError MISMATCH")
if sort_array([15, 42, 87, 32 ,11, 0]) != [0, 11, 15, 32, 42, 87]:
  raise Exception("MyLogError MISMATCH")
if sort_array([21, 14, 23, 11]) != [23, 21, 14, 11]:
  raise Exception("MyLogError MISMATCH")