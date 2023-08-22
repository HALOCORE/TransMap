#TESTED_PROGRAM

if any_int(2, 3, 1)!=True:
  raise Exception("MyLogError MISMATCH")
if any_int(2.5, 2, 3)!=False:
  raise Exception("MyLogError MISMATCH")
if any_int(1.5, 5, 3.5)!=False:
  raise Exception("MyLogError MISMATCH")
if any_int(2, 6, 2)!=False:
  raise Exception("MyLogError MISMATCH")
if any_int(4, 2, 2)!=True:
  raise Exception("MyLogError MISMATCH")
if any_int(2.2, 2.2, 2.2)!=False:
  raise Exception("MyLogError MISMATCH")
if any_int(-4, 6, 2)!=True:
  raise Exception("MyLogError MISMATCH")
if any_int(2,1,1)!=True:
  raise Exception("MyLogError MISMATCH")
if any_int(3,4,7)!=True:
  raise Exception("MyLogError MISMATCH")
if any_int(3.0,4,7)!=False:
  raise Exception("MyLogError MISMATCH")