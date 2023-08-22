#TESTED_PROGRAM

if solve(1000) != "1":
  raise Exception("MyLogError MISMATCH")
if solve(150) != "110":
  raise Exception("MyLogError MISMATCH")
if solve(147) != "1100":
  raise Exception("MyLogError MISMATCH")
if solve(333) != "1001":
  raise Exception("MyLogError MISMATCH")
if solve(963) != "10010":
  raise Exception("MyLogError MISMATCH")