#TESTED_PROGRAM

if truncate_number(3.5) != 0.5:
  raise Exception("MyLogError MISMATCH")
if abs(truncate_number(1.33) - 0.33) >= 1e-6:
  raise Exception("MyLogError MISMATCH")
if abs(truncate_number(123.456) - 0.456) >= 1e-6:
  raise Exception("MyLogError MISMATCH")