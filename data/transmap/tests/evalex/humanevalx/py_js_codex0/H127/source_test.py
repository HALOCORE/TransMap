#TESTED_PROGRAM

if intersection((1, 2), (2, 3)) != "NO":
  raise Exception("MyLogError MISMATCH")
if intersection((-1, 1), (0, 4)) != "NO":
  raise Exception("MyLogError MISMATCH")
if intersection((-3, -1), (-5, 5)) != "YES":
  raise Exception("MyLogError MISMATCH")
if intersection((-2, 2), (-4, 0)) != "YES":
  raise Exception("MyLogError MISMATCH")
if intersection((-11, 2), (-1, -1)) != "NO":
  raise Exception("MyLogError MISMATCH")
if intersection((1, 2), (3, 5)) != "NO":
  raise Exception("MyLogError MISMATCH")
if intersection((1, 2), (1, 2)) != "NO":
  raise Exception("MyLogError MISMATCH")
if intersection((-2, -2), (-3, -2)) != "NO":
  raise Exception("MyLogError MISMATCH")