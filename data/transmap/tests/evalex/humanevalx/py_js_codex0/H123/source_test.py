#TESTED_PROGRAM

if get_odd_collatz(14) != [1, 5, 7, 11, 13, 17]:
  raise Exception("MyLogError MISMATCH")
if get_odd_collatz(5) != [1, 5]:
  raise Exception("MyLogError MISMATCH")
if get_odd_collatz(12) != [1, 3, 5]:
  raise Exception("MyLogError MISMATCH")
if get_odd_collatz(1) != [1]:
  raise Exception("MyLogError MISMATCH")