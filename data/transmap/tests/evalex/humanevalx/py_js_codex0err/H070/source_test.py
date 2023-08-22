#TESTED_PROGRAM

if strange_sort_list([1, 2, 3, 4]) != [1, 4, 2, 3]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([5, 6, 7, 8, 9]) != [5, 9, 6, 8, 7]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([1, 2, 3, 4, 5]) != [1, 5, 2, 4, 3]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([5, 6, 7, 8, 9, 1]) != [1, 9, 5, 8, 6, 7]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([5, 5, 5, 5]) != [5, 5, 5, 5]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([]) != []:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([1,2,3,4,5,6,7,8]) != [1, 8, 2, 7, 3, 6, 4, 5]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([0,2,2,2,5,5,-5,-5]) != [-5, 5, -5, 5, 0, 2, 2, 2]:
  raise Exception("MyLogError MISMATCH")
if strange_sort_list([111111]) != [111111]:
  raise Exception("MyLogError MISMATCH")