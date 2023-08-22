#TESTED_PROGRAM

if how_many_times('', 'x') != 0:
  raise Exception("MyLogError MISMATCH")
if how_many_times('xyxyxyx', 'x') != 4:
  raise Exception("MyLogError MISMATCH")
if how_many_times('cacacacac', 'cac') != 4:
  raise Exception("MyLogError MISMATCH")
if how_many_times('john doe', 'john') != 1:
  raise Exception("MyLogError MISMATCH")