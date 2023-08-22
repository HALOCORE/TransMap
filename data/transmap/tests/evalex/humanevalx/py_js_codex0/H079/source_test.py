#TESTED_PROGRAM

if decimal_to_binary(0) != "db0db":
  raise Exception("MyLogError MISMATCH")
if decimal_to_binary(32) != "db100000db":
  raise Exception("MyLogError MISMATCH")
if decimal_to_binary(103) != "db1100111db":
  raise Exception("MyLogError MISMATCH")
if decimal_to_binary(15) != "db1111db":
  raise Exception("MyLogError MISMATCH")