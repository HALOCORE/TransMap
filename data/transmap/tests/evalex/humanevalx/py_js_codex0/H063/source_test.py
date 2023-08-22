#TESTED_PROGRAM

if fibfib(2) != 1:
  raise Exception("MyLogError MISMATCH")
if fibfib(1) != 0:
  raise Exception("MyLogError MISMATCH")
if fibfib(5) != 4:
  raise Exception("MyLogError MISMATCH")
if fibfib(8) != 24:
  raise Exception("MyLogError MISMATCH")
if fibfib(10) != 81:
  raise Exception("MyLogError MISMATCH")
if fibfib(12) != 274:
  raise Exception("MyLogError MISMATCH")
if fibfib(14) != 927:
  raise Exception("MyLogError MISMATCH")