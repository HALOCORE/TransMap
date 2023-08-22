#TESTED_PROGRAM

if digitSum("") != 0:
  raise Exception("MyLogError MISMATCH")
if digitSum("abAB") != 131:
  raise Exception("MyLogError MISMATCH")
if digitSum("abcCd") != 67:
  raise Exception("MyLogError MISMATCH")
if digitSum("helloE") != 69:
  raise Exception("MyLogError MISMATCH")
if digitSum("woArBld") != 131:
  raise Exception("MyLogError MISMATCH")
if digitSum("aAaaaXa") != 153:
  raise Exception("MyLogError MISMATCH")
if digitSum(" How are yOu?") != 151:
  raise Exception("MyLogError MISMATCH")
if digitSum("You arE Very Smart") != 327:
  raise Exception("MyLogError MISMATCH")