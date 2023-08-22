#TESTED_PROGRAM

if remove_duplicates([]) != []:
  raise Exception("MyLogError MISMATCH")
if remove_duplicates([1, 2, 3, 4]) != [1, 2, 3, 4]:
  raise Exception("MyLogError MISMATCH")
if remove_duplicates([1, 2, 3, 2, 4, 3, 5]) != [1, 4, 5]:
  raise Exception("MyLogError MISMATCH")