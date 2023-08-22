#TESTED_PROGRAM

import random

if add(0, 1) != 1:
  raise Exception("MyLogError MISMATCH")
if add(1, 0) != 1:
  raise Exception("MyLogError MISMATCH")
if add(2, 3) != 5:
  raise Exception("MyLogError MISMATCH")
if add(5, 7) != 12:
  raise Exception("MyLogError MISMATCH")
if add(7, 5) != 12:
  raise Exception("MyLogError MISMATCH")
for i in range(100):
  x, y = random.randint(0, 1000), random.randint(0, 1000)
  if add(x, y) != x + y:
    raise Exception("MyLogError MISMATCH")