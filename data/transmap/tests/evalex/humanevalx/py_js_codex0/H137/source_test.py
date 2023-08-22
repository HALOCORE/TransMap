#TESTED_PROGRAM

if compare_one(1, 2) != 2:
  raise Exception("MyLogError MISMATCH")
if compare_one(1, 2.5) != 2.5:
  raise Exception("MyLogError MISMATCH")
if compare_one(2, 3) != 3:
  raise Exception("MyLogError MISMATCH")
if compare_one(5, 6) != 6:
  raise Exception("MyLogError MISMATCH")
if compare_one(1, "2,3") != "2,3":
  raise Exception("MyLogError MISMATCH")
if compare_one("5,1", "6") != "6":
  raise Exception("MyLogError MISMATCH")
if compare_one("1", "2") != "2":
  raise Exception("MyLogError MISMATCH")
if compare_one("1", 1) != None:
  raise Exception("MyLogError MISMATCH")