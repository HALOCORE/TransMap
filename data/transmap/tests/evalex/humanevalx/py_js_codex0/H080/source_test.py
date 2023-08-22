#TESTED_PROGRAM

if is_happy("a") != False:
  raise Exception("MyLogError MISMATCH")
if is_happy("aa") != False:
  raise Exception("MyLogError MISMATCH")
if is_happy("abcd") != True:
  raise Exception("MyLogError MISMATCH")
if is_happy("aabb") != False:
  raise Exception("MyLogError MISMATCH")
if is_happy("adb") != True:
  raise Exception("MyLogError MISMATCH")
if is_happy("xyy") != False:
  raise Exception("MyLogError MISMATCH")
if is_happy("iopaxpoi") != True:
  raise Exception("MyLogError MISMATCH")
if is_happy("iopaxioi") != False:
  raise Exception("MyLogError MISMATCH")