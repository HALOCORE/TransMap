#TESTED_PROGRAM

if parse_music('') != []:
  raise Exception("MyLogError MISMATCH")
if parse_music('o o o o') != [4, 4, 4, 4]:
  raise Exception("MyLogError MISMATCH")
if parse_music('.| .| .| .|') != [1, 1, 1, 1]:
  raise Exception("MyLogError MISMATCH")
if parse_music('o| o| .| .| o o o o') != [2, 2, 1, 1, 4, 4, 4, 4]:
  raise Exception("MyLogError MISMATCH")
if parse_music('o| .| o| .| o o| o o|') != [2, 1, 2, 1, 4, 2, 4, 2]:
  raise Exception("MyLogError MISMATCH")