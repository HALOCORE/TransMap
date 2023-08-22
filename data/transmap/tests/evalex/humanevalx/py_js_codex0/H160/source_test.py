#TESTED_PROGRAM

if do_algebra(['**', '*', '+'], [2, 3, 4, 5]) != 37:
  raise Exception("MyLogError MISMATCH")
if do_algebra(['+', '*', '-'], [2, 3, 4, 5]) != 9:
  raise Exception("MyLogError MISMATCH")
if do_algebra(['//', '*'], [7, 3, 4]) != 8:
  raise Exception("MyLogError MISMATCH")