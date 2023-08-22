#TESTED_PROGRAM

if generate_integers(2, 10) != [2, 4, 6, 8]:
  raise Exception("MyLogError MISMATCH")
if generate_integers(10, 2) != [2, 4, 6, 8]:
  raise Exception("MyLogError MISMATCH")
if generate_integers(132, 2) != [2, 4, 6, 8]:
  raise Exception("MyLogError MISMATCH")
if generate_integers(17,89) != []:
  raise Exception("MyLogError MISMATCH")