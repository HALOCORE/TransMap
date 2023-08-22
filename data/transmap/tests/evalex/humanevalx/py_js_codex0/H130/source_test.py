#TESTED_PROGRAM

if tri(3) != [1, 3, 2.0, 8.0]:
  raise Exception("MyLogError MISMATCH")
if tri(4) != [1, 3, 2.0, 8.0, 3.0]:
  raise Exception("MyLogError MISMATCH")
if tri(5) != [1, 3, 2.0, 8.0, 3.0, 15.0]:
  raise Exception("MyLogError MISMATCH")
if tri(6) != [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0]:
  raise Exception("MyLogError MISMATCH")
if tri(7) != [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0]:
  raise Exception("MyLogError MISMATCH")
if tri(8) != [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0]:
  raise Exception("MyLogError MISMATCH")
if tri(9) != [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0, 35.0]:
  raise Exception("MyLogError MISMATCH")
if tri(20) != [1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0, 35.0, 6.0, 48.0, 7.0, 63.0, 8.0, 80.0, 9.0, 99.0, 10.0, 120.0, 11.0]:
  raise Exception("MyLogError MISMATCH")
if tri(0) != [1]:
  raise Exception("MyLogError MISMATCH")
if tri(1) != [1, 3]:
  raise Exception("MyLogError MISMATCH")