#TESTED_PROGRAM

if modp(3, 5) != 3:
  raise Exception("MyLogError MISMATCH")
if modp(1101, 101) != 2:
  raise Exception("MyLogError MISMATCH")
if modp(0, 101) != 1:
  raise Exception("MyLogError MISMATCH")
if modp(3, 11) != 8:
  raise Exception("MyLogError MISMATCH")
if modp(100, 101) != 1:
  raise Exception("MyLogError MISMATCH")
if modp(30, 5) != 4:
  raise Exception("MyLogError MISMATCH")
if modp(31, 5) != 3:
  raise Exception("MyLogError MISMATCH")