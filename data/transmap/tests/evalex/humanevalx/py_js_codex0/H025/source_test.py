#TESTED_PROGRAM

if factorize(2) != [2]:
  raise Exception("MyLogError MISMATCH")
if factorize(4) != [2, 2]:
  raise Exception("MyLogError MISMATCH")
if factorize(8) != [2, 2, 2]:
  raise Exception("MyLogError MISMATCH")
if factorize(3 * 19) != [3, 19]:
  raise Exception("MyLogError MISMATCH")
if factorize(3 * 19 * 3 * 19) != [3, 3, 19, 19]:
  raise Exception("MyLogError MISMATCH")
if factorize(3 * 19 * 3 * 19 * 3 * 19) != [3, 3, 3, 19, 19, 19]:
  raise Exception("MyLogError MISMATCH")
if factorize(3 * 19 * 19 * 19) != [3, 19, 19, 19]:
  raise Exception("MyLogError MISMATCH")
if factorize(3 * 2 * 3) != [2, 3, 3]:
  raise Exception("MyLogError MISMATCH")