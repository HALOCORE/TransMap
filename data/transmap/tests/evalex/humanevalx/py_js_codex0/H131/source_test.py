#TESTED_PROGRAM

if digits(5) != 5:
  raise Exception("MyLogError MISMATCH")
if digits(54) != 5:
  raise Exception("MyLogError MISMATCH")
if digits(120) !=1:
  raise Exception("MyLogError MISMATCH")
if digits(5014) != 5:
  raise Exception("MyLogError MISMATCH")
if digits(98765) != 315:
  raise Exception("MyLogError MISMATCH")
if digits(5576543) != 2625:
  raise Exception("MyLogError MISMATCH")
if digits(2468) != 0:
  raise Exception("MyLogError MISMATCH")