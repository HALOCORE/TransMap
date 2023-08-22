#TESTED_PROGRAM

if string_sequence(0) != '0':
  raise Exception("MyLogError MISMATCH")
if string_sequence(3) != '0 1 2 3':
  raise Exception("MyLogError MISMATCH")
if string_sequence(10) != '0 1 2 3 4 5 6 7 8 9 10':
  raise Exception("MyLogError MISMATCH")