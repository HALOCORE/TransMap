#TESTED_PROGRAM

if not below_threshold([1, 2, 4, 10], 100):
  raise Exception("MyLogError MISMATCH")
if below_threshold([1, 20, 4, 10], 5):
  raise Exception("MyLogError MISMATCH")
if not below_threshold([1, 20, 4, 10], 21):
  raise Exception("MyLogError MISMATCH")
if not below_threshold([1, 20, 4, 10], 22):
  raise Exception("MyLogError MISMATCH")
if not below_threshold([1, 8, 4, 10], 11):
  raise Exception("MyLogError MISMATCH")
if below_threshold([1, 8, 4, 10], 10):
  raise Exception("MyLogError MISMATCH")