#TESTED_PROGRAM

if tuple(sort_third([1, 2, 3])) != tuple(sort_third([1, 2, 3])):
  raise Exception("MyLogError MISMATCH")
if tuple(sort_third([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10])) != tuple(sort_third([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10])):
  raise Exception("MyLogError MISMATCH")
if tuple(sort_third([5, 8, -12, 4, 23, 2, 3, 11, 12, -10])) != tuple(sort_third([5, 8, -12, 4, 23, 2, 3, 11, 12, -10])):
  raise Exception("MyLogError MISMATCH")
if tuple(sort_third([5, 6, 3, 4, 8, 9, 2])) != tuple([2, 6, 3, 4, 8, 9, 5]):
  raise Exception("MyLogError MISMATCH")
if tuple(sort_third([5, 8, 3, 4, 6, 9, 2])) != tuple([2, 8, 3, 4, 6, 9, 5]):
  raise Exception("MyLogError MISMATCH")
if tuple(sort_third([5, 6, 9, 4, 8, 3, 2])) != tuple([2, 6, 9, 4, 8, 3, 5]):
  raise Exception("MyLogError MISMATCH")
if tuple(sort_third([5, 6, 3, 4, 8, 9, 2, 1])) != tuple([2, 6, 3, 4, 8, 9, 5, 1]):
  raise Exception("MyLogError MISMATCH")