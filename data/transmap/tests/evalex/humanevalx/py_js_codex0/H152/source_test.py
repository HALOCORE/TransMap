#TESTED_PROGRAM

if compare([1,2,3,4,5,1],[1,2,3,4,2,-2])!=[0,0,0,0,3,3]:
  raise Exception("MyLogError MISMATCH")
if compare([0,5,0,0,0,4],[4,1,1,0,0,-2])!=[4,4,1,0,0,6]:
  raise Exception("MyLogError MISMATCH")
if compare([1,2,3,4,5,1],[1,2,3,4,2,-2])!=[0,0,0,0,3,3]:
  raise Exception("MyLogError MISMATCH")
if compare([0,0,0,0,0,0],[0,0,0,0,0,0])!=[0,0,0,0,0,0]:
  raise Exception("MyLogError MISMATCH")
if compare([1,2,3],[-1,-2,-3])!=[2,4,6]:
  raise Exception("MyLogError MISMATCH")
if compare([1,2,3,5],[-1,2,3,4])!=[2,0,0,1]:
  raise Exception("MyLogError MISMATCH")