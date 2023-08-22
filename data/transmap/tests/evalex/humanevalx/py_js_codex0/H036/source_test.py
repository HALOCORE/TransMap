#TESTED_PROGRAM

if fizz_buzz(50) != 0:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(78) != 2:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(79) != 3:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(100) != 3:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(200) != 6:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(4000) != 192:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(10000) != 639:
  raise Exception("MyLogError MISMATCH")
if fizz_buzz(100000) != 8026:
  raise Exception("MyLogError MISMATCH")