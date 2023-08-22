#TESTED_PROGRAM

if special_factorial(4) != 288:
  raise Exception("MyLogError MISMATCH")
if special_factorial(5) != 34560:
  raise Exception("MyLogError MISMATCH")
if special_factorial(7) != 125411328000:
  raise Exception("MyLogError MISMATCH")
if special_factorial(1) != 1:
  raise Exception("MyLogError MISMATCH")