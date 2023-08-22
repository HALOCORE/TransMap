#TESTED_PROGRAM

if can_arrange([1,2,4,3,5])!=3:
  raise Exception("MyLogError MISMATCH")
if can_arrange([1,2,4,5])!=-1:
  raise Exception("MyLogError MISMATCH")
if can_arrange([1,4,2,5,6,7,8,9,10])!=2:
  raise Exception("MyLogError MISMATCH")
if can_arrange([4,8,5,7,3])!=4:
  raise Exception("MyLogError MISMATCH")
if can_arrange([])!=-1:
  raise Exception("MyLogError MISMATCH")