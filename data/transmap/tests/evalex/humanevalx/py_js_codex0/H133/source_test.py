#TESTED_PROGRAM

if sum_squares([1,2,3])!=14:
  raise Exception("MyLogError MISMATCH")
if sum_squares([1.0,2,3])!=14:
  raise Exception("MyLogError MISMATCH")
if sum_squares([1,3,5,7])!=84:
  raise Exception("MyLogError MISMATCH")
if sum_squares([1.4,4.2,0])!=29:
  raise Exception("MyLogError MISMATCH")
if sum_squares([-2.4,1,1])!=6:
  raise Exception("MyLogError MISMATCH")
if sum_squares([100,1,15,2])!=10230:
  raise Exception("MyLogError MISMATCH")
if sum_squares([10000,10000])!=200000000:
  raise Exception("MyLogError MISMATCH")
if sum_squares([-1.4,4.6,6.3])!=75:
  raise Exception("MyLogError MISMATCH")
if sum_squares([-1.4,17.9,18.9,19.9])!=1086:
  raise Exception("MyLogError MISMATCH")
if sum_squares([0])!=0:
  raise Exception("MyLogError MISMATCH")
if sum_squares([-1])!=1:
  raise Exception("MyLogError MISMATCH")
if sum_squares([-1,1,0])!=2:
  raise Exception("MyLogError MISMATCH")