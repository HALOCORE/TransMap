#TESTED_PROGRAM

if fruit_distribution("5 apples and 6 oranges",19) != 8:
  raise Exception("MyLogError MISMATCH")
if fruit_distribution("5 apples and 6 oranges",21) != 10:
  raise Exception("MyLogError MISMATCH")
if fruit_distribution("0 apples and 1 oranges",3) != 2:
  raise Exception("MyLogError MISMATCH")
if fruit_distribution("1 apples and 0 oranges",3) != 2:
  raise Exception("MyLogError MISMATCH")
if fruit_distribution("2 apples and 3 oranges",100) != 95:
  raise Exception("MyLogError MISMATCH")
if fruit_distribution("2 apples and 3 oranges",5) != 0:
  raise Exception("MyLogError MISMATCH")
if fruit_distribution("1 apples and 100 oranges",120) != 19:
  raise Exception("MyLogError MISMATCH")