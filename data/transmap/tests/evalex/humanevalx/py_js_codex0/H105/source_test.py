#TESTED_PROGRAM

if by_length([2, 1, 1, 4, 5, 8, 2, 3]) != ["Eight", "Five", "Four", "Three", "Two", "Two", "One", "One"]:
  raise Exception("MyLogError MISMATCH")
if by_length([]) != []:
  raise Exception("MyLogError MISMATCH")
if by_length([1, -1 , 55]) != ['One']:
  raise Exception("MyLogError MISMATCH")
if by_length([1, -1, 3, 2]) != ["Three", "Two", "One"]:
  raise Exception("MyLogError MISMATCH")
if by_length([9, 4, 8]) != ["Nine", "Eight", "Four"]:
  raise Exception("MyLogError MISMATCH")