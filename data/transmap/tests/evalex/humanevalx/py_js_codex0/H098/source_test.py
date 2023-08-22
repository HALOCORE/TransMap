#TESTED_PROGRAM

if count_upper('aBCdEf')  != 1:
  raise Exception("MyLogError MISMATCH")
if count_upper('abcdefg') != 0:
  raise Exception("MyLogError MISMATCH")
if count_upper('dBBE') != 0:
  raise Exception("MyLogError MISMATCH")
if count_upper('B')  != 0:
  raise Exception("MyLogError MISMATCH")
if count_upper('U')  != 1:
  raise Exception("MyLogError MISMATCH")
if count_upper('') != 0:
  raise Exception("MyLogError MISMATCH")
if count_upper('EEEE') != 2:
  raise Exception("MyLogError MISMATCH")