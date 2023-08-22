#TESTED_PROGRAM

if closest_integer("10") != 10:
  raise Exception("MyLogError MISMATCH")
if closest_integer("14.5") != 15:
  raise Exception("MyLogError MISMATCH")
if closest_integer("-15.5") != -16:
  raise Exception("MyLogError MISMATCH")
if closest_integer("15.3") != 15:
  raise Exception("MyLogError MISMATCH")
if closest_integer("0") != 0:
  raise Exception("MyLogError MISMATCH")