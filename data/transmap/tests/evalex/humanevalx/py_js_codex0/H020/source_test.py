#TESTED_PROGRAM

if find_closest_elements([1.0, 2.0, 3.9, 4.0, 5.0, 2.2]) != (3.9, 4.0):
  raise Exception("MyLogError MISMATCH")
if find_closest_elements([1.0, 2.0, 5.9, 4.0, 5.0]) != (5.0, 5.9):
  raise Exception("MyLogError MISMATCH")
if find_closest_elements([1.0, 2.0, 3.0, 4.0, 5.0, 2.2]) != (2.0, 2.2):
  raise Exception("MyLogError MISMATCH")
if find_closest_elements([1.0, 2.0, 3.0, 4.0, 5.0, 2.0]) != (2.0, 2.0):
  raise Exception("MyLogError MISMATCH")
if find_closest_elements([1.1, 2.2, 3.1, 4.1, 5.1]) != (2.2, 3.1):
  raise Exception("MyLogError MISMATCH")