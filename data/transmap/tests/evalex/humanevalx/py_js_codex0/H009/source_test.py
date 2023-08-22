#TESTED_PROGRAM

if rolling_max([]) != []:
  raise Exception("MyLogError MISMATCH")
if rolling_max([1, 2, 3, 4]) != [1, 2, 3, 4]:
  raise Exception("MyLogError MISMATCH")
if rolling_max([4, 3, 2, 1]) != [4, 4, 4, 4]:
  raise Exception("MyLogError MISMATCH")
if rolling_max([3, 2, 3, 100, 3]) != [3, 3, 3, 100, 100]:
  raise Exception("MyLogError MISMATCH")