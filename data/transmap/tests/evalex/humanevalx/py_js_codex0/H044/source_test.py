#TESTED_PROGRAM

if change_base(8, 3) != "22":
  raise Exception("MyLogError MISMATCH")
if change_base(9, 3) != "100":
  raise Exception("MyLogError MISMATCH")
if change_base(234, 2) != "11101010":
  raise Exception("MyLogError MISMATCH")
if change_base(16, 2) != "10000":
  raise Exception("MyLogError MISMATCH")
if change_base(8, 2) != "1000":
  raise Exception("MyLogError MISMATCH")
if change_base(7, 2) != "111":
  raise Exception("MyLogError MISMATCH")
for x in range(2, 8):
  if change_base(x, x + 1) != str(x):
    raise Exception("MyLogError MISMATCH")