#TESTED_PROGRAM

if solution([5, 8, 7, 1])    != 12:
  raise Exception("MyLogError MISMATCH")
if solution([3, 3, 3, 3, 3]) != 9:
  raise Exception("MyLogError MISMATCH")
if solution([30, 13, 24, 321]) != 0:
  raise Exception("MyLogError MISMATCH")
if solution([5, 9]) != 5:
  raise Exception("MyLogError MISMATCH")
if solution([2, 4, 8]) != 0:
  raise Exception("MyLogError MISMATCH")
if solution([30, 13, 23, 32]) != 23:
  raise Exception("MyLogError MISMATCH")
if solution([3, 13, 2, 9]) != 3:
  raise Exception("MyLogError MISMATCH")