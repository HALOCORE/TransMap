#TESTED_PROGRAM

if has_close_elements([1.0, 2.0, 3.9, 4.0, 5.0, 2.2], 0.3) != True:
  raise Exception("MyLogError MISMATCH")
if has_close_elements([1.0, 2.0, 3.9, 4.0, 5.0, 2.2], 0.05) != False:
  raise Exception("MyLogError MISMATCH")
if has_close_elements([1.0, 2.0, 5.9, 4.0, 5.0], 0.95) != True:
  raise Exception("MyLogError MISMATCH")
if has_close_elements([1.0, 2.0, 5.9, 4.0, 5.0], 0.8) != False:
  raise Exception("MyLogError MISMATCH")
if has_close_elements([1.0, 2.0, 3.0, 4.0, 5.0, 2.0], 0.1) != True:
  raise Exception("MyLogError MISMATCH")
if has_close_elements([1.1, 2.2, 3.1, 4.1, 5.1], 1.0) != True:
  raise Exception("MyLogError MISMATCH")
if has_close_elements([1.1, 2.2, 3.1, 4.1, 5.1], 0.5) != False:
  raise Exception("MyLogError MISMATCH")