#TESTED_PROGRAM

if make_a_pile(3) != [3, 5, 7]:
  raise Exception("MyLogError MISMATCH")
if make_a_pile(4) != [4,6,8,10]:
  raise Exception("MyLogError MISMATCH")
if make_a_pile(5) != [5, 7, 9, 11, 13]:
  raise Exception("MyLogError MISMATCH")
if make_a_pile(6) != [6, 8, 10, 12, 14, 16]:
  raise Exception("MyLogError MISMATCH")
if make_a_pile(8) != [8, 10, 12, 14, 16, 18, 20, 22]:
  raise Exception("MyLogError MISMATCH")