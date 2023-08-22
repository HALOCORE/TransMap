#TESTED_PROGRAM

if double_the_difference([]) != 0:
  raise Exception("MyLogError MISMATCH")
if double_the_difference([5, 4]) != 25:
  raise Exception("MyLogError MISMATCH")
if double_the_difference([0.1, 0.2, 0.3]) != 0:
  raise Exception("MyLogError MISMATCH")
if double_the_difference([-10, -20, -30]) != 0:
  raise Exception("MyLogError MISMATCH")
if double_the_difference([-1, -2, 8]) != 0:
  raise Exception("MyLogError MISMATCH")
if double_the_difference([0.2, 3, 5]) != 34:
  raise Exception("MyLogError MISMATCH")
lst = list(range(-99, 100, 2))
odd_sum = sum([i**2 for i in lst if i%2!=0 and i > 0])
if double_the_difference(lst) != odd_sum:
  raise Exception("MyLogError MISMATCH")