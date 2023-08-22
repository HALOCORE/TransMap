#TESTED_PROGRAM

if sort_array([1,5,2,3,4]) != [1, 2, 4, 3, 5]:
  raise Exception("MyLogError MISMATCH")
if sort_array([-2,-3,-4,-5,-6]) != [-4, -2, -6, -5, -3]:
  raise Exception("MyLogError MISMATCH")
if sort_array([1,0,2,3,4]) != [0, 1, 2, 4, 3]:
  raise Exception("MyLogError MISMATCH")
if sort_array([]) != []:
  raise Exception("MyLogError MISMATCH")
if sort_array([2,5,77,4,5,3,5,7,2,3,4]) != [2, 2, 4, 4, 3, 3, 5, 5, 5, 7, 77]:
  raise Exception("MyLogError MISMATCH")
if sort_array([3,6,44,12,32,5]) != [32, 3, 5, 6, 12, 44]:
  raise Exception("MyLogError MISMATCH")
if sort_array([2,4,8,16,32]) != [2, 4, 8, 16, 32]:
  raise Exception("MyLogError MISMATCH")
if sort_array([2,4,8,16,32]) != [2, 4, 8, 16, 32]:
  raise Exception("MyLogError MISMATCH")