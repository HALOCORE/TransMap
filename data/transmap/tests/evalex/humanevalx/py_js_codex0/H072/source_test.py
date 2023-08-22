#TESTED_PROGRAM

if will_it_fly([3, 2, 3], 9) != True:
  raise Exception("MyLogError MISMATCH")
if will_it_fly([1, 2], 5) != False:
  raise Exception("MyLogError MISMATCH")
if will_it_fly([3], 5) != True:
  raise Exception("MyLogError MISMATCH")
if will_it_fly([3, 2, 3], 1) != False:
  raise Exception("MyLogError MISMATCH")
if will_it_fly([1, 2, 3], 6) != False:
  raise Exception("MyLogError MISMATCH")
if will_it_fly([5], 5) != True:
  raise Exception("MyLogError MISMATCH")