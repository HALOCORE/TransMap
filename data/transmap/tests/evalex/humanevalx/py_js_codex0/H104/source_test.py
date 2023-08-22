#TESTED_PROGRAM

if unique_digits([15, 33, 1422, 1]) != [1, 15, 33]:
  raise Exception("MyLogError MISMATCH")
if unique_digits([152, 323, 1422, 10]) != []:
  raise Exception("MyLogError MISMATCH")
if unique_digits([12345, 2033, 111, 151]) != [111, 151]:
  raise Exception("MyLogError MISMATCH")
if unique_digits([135, 103, 31]) != [31, 135]:
  raise Exception("MyLogError MISMATCH")