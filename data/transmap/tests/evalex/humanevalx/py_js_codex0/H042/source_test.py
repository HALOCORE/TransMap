#TESTED_PROGRAM

if incr_list([]) != []:
  raise Exception("MyLogError MISMATCH")
if incr_list([3, 2, 1]) != [4, 3, 2]:
  raise Exception("MyLogError MISMATCH")
if incr_list([5, 2, 5, 2, 3, 3, 9, 0, 123]) != [6, 3, 6, 3, 4, 4, 10, 1, 124]:
  raise Exception("MyLogError MISMATCH")