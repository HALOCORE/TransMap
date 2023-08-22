#TESTED_PROGRAM

if hex_key("AB") != 1:
  raise Exception("MyLogError MISMATCH")
if hex_key("1077E") != 2:
  raise Exception("MyLogError MISMATCH")
if hex_key("ABED1A33") != 4:
  raise Exception("MyLogError MISMATCH")
if hex_key("2020") != 2:
  raise Exception("MyLogError MISMATCH")
if hex_key("123456789ABCDEF0") != 6:
  raise Exception("MyLogError MISMATCH")
if hex_key("112233445566778899AABBCCDDEEFF00") != 12:
  raise Exception("MyLogError MISMATCH")
if hex_key([]) != 0:
  raise Exception("MyLogError MISMATCH")