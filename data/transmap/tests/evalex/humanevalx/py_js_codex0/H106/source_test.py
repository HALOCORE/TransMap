#TESTED_PROGRAM

if f(5) != [1, 2, 6, 24, 15]:
  raise Exception("MyLogError MISMATCH")
if f(7) != [1, 2, 6, 24, 15, 720, 28]:
  raise Exception("MyLogError MISMATCH")
if f(1) != [1]:
  raise Exception("MyLogError MISMATCH")
if f(3) != [1, 2, 6]:
  raise Exception("MyLogError MISMATCH")