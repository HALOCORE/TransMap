#TESTED_PROGRAM

if iscube(1) != True:
  raise Exception("MyLogError MISMATCH")
if iscube(2) != False:
  raise Exception("MyLogError MISMATCH")
if iscube(-1) != True:
  raise Exception("MyLogError MISMATCH")
if iscube(64) != True:
  raise Exception("MyLogError MISMATCH")
if iscube(180) != False:
  raise Exception("MyLogError MISMATCH")
if iscube(1000) != True:
  raise Exception("MyLogError MISMATCH")
if iscube(0) != True:
  raise Exception("MyLogError MISMATCH")
if iscube(1729) != False:
  raise Exception("MyLogError MISMATCH")