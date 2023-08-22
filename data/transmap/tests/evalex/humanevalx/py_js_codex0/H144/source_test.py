#TESTED_PROGRAM

if simplify("1/5", "5/1") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("1/6", "2/1") != False:
  raise Exception("MyLogError MISMATCH")
if simplify("5/1", "3/1") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("7/10", "10/2") != False:
  raise Exception("MyLogError MISMATCH")
if simplify("2/10", "50/10") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("7/2", "4/2") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("11/6", "6/1") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("2/3", "5/2") != False:
  raise Exception("MyLogError MISMATCH")
if simplify("5/2", "3/5") != False:
  raise Exception("MyLogError MISMATCH")
if simplify("2/4", "8/4") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("2/4", "4/2") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("1/5", "5/1") != True:
  raise Exception("MyLogError MISMATCH")
if simplify("1/5", "1/5") != False:
  raise Exception("MyLogError MISMATCH")