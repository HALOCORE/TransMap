#TESTED_PROGRAM

if  cycpattern_check("xyzw","xyw") != False:
  raise Exception("MyLogError MISMATCH")
if  cycpattern_check("yello","ell") != True:
  raise Exception("MyLogError MISMATCH")
if  cycpattern_check("whattup","ptut") != False:
  raise Exception("MyLogError MISMATCH")
if  cycpattern_check("efef","fee") != True:
  raise Exception("MyLogError MISMATCH")
if  cycpattern_check("abab","aabb") != False:
  raise Exception("MyLogError MISMATCH")
if  cycpattern_check("winemtt","tinem") != True:
  raise Exception("MyLogError MISMATCH")