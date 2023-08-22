#TESTED_PROGRAM

if even_odd_count(7) != (0, 1):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(-78) != (1, 1):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(3452) != (2, 2):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(346211) != (3, 3):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(-345821) != (3, 3):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(-2) != (1, 0):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(-45347) != (2, 3):
  raise Exception("MyLogError MISMATCH")
if even_odd_count(0) != (1, 0):
  raise Exception("MyLogError MISMATCH")