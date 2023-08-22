#TESTED_PROGRAM

if eat(5, 6, 10) != [11, 4]:
  raise Exception("MyLogError MISMATCH")
if eat(4, 8, 9) != [12, 1]:
  raise Exception("MyLogError MISMATCH")
if eat(1, 10, 10) != [11, 0]:
  raise Exception("MyLogError MISMATCH")
if eat(2, 11, 5) != [7, 0]:
  raise Exception("MyLogError MISMATCH")
if eat(4, 5, 7) != [9, 2]:
  raise Exception("MyLogError MISMATCH")
if eat(4, 5, 1) != [5, 0]:
  raise Exception("MyLogError MISMATCH")