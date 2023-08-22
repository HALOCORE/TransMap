#TESTED_PROGRAM

if derivative([3, 1, 2, 4, 5]) != [1, 4, 12, 20]:
  raise Exception("MyLogError MISMATCH")
if derivative([1, 2, 3]) != [2, 6]:
  raise Exception("MyLogError MISMATCH")
if derivative([3, 2, 1]) != [2, 2]:
  raise Exception("MyLogError MISMATCH")
if derivative([3, 2, 1, 0, 4]) != [2, 2, 0, 16]:
  raise Exception("MyLogError MISMATCH")
if derivative([1]) != []:
  raise Exception("MyLogError MISMATCH")