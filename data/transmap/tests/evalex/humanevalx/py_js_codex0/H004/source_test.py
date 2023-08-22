#TESTED_PROGRAM

if abs(mean_absolute_deviation([1.0, 2.0, 3.0]) - 2.0/3.0) >= 1e-6:
  raise Exception("MyLogError MISMATCH")
if abs(mean_absolute_deviation([1.0, 2.0, 3.0, 4.0]) - 1.0) >= 1e-6:
  raise Exception("MyLogError MISMATCH")
if abs(mean_absolute_deviation([1.0, 2.0, 3.0, 4.0, 5.0]) - 6.0/5.0) >= 1e-6:
  raise Exception("MyLogError MISMATCH")