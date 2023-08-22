#TESTED_PROGRAM

if next_smallest([1, 2, 3, 4, 5]) != 2:
  raise Exception("MyLogError MISMATCH")
if next_smallest([5, 1, 4, 3, 2]) != 2:
  raise Exception("MyLogError MISMATCH")
if next_smallest([]) != None:
  raise Exception("MyLogError MISMATCH")
if next_smallest([1, 1]) != None:
  raise Exception("MyLogError MISMATCH")
if next_smallest([1,1,1,1,0]) != 1:
  raise Exception("MyLogError MISMATCH")
if next_smallest([1, 0**0]) != None:
  raise Exception("MyLogError MISMATCH")
if next_smallest([-35, 34, 12, -45]) != -35:
  raise Exception("MyLogError MISMATCH")