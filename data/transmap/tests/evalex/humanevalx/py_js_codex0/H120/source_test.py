#TESTED_PROGRAM

if maximum([-3, -4, 5], 3) != [-4, -3, 5]:
  raise Exception("MyLogError MISMATCH")
if maximum([4, -4, 4], 2) != [4, 4]:
  raise Exception("MyLogError MISMATCH")
if maximum([-3, 2, 1, 2, -1, -2, 1], 1) != [2]:
  raise Exception("MyLogError MISMATCH")
if maximum([123, -123, 20, 0 , 1, 2, -3], 3) != [2, 20, 123]:
  raise Exception("MyLogError MISMATCH")
if maximum([-123, 20, 0 , 1, 2, -3], 4) != [0, 1, 2, 20]:
  raise Exception("MyLogError MISMATCH")
if maximum([5, 15, 0, 3, -13, -8, 0], 7) != [-13, -8, 0, 0, 3, 5, 15]:
  raise Exception("MyLogError MISMATCH")
if maximum([-1, 0, 2, 5, 3, -10], 2) != [3, 5]:
  raise Exception("MyLogError MISMATCH")
if maximum([1, 0, 5, -7], 1) != [5]:
  raise Exception("MyLogError MISMATCH")
if maximum([4, -4], 2) != [-4, 4]:
  raise Exception("MyLogError MISMATCH")
if maximum([-10, 10], 2) != [-10, 10]:
  raise Exception("MyLogError MISMATCH")
if maximum([1, 2, 3, -23, 243, -400, 0], 0) != []:
  raise Exception("MyLogError MISMATCH")