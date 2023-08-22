#TESTED_PROGRAM

if int_to_mini_roman(19) != 'xix':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(152) != 'clii':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(251) != 'ccli':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(426) != 'cdxxvi':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(500) != 'd':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(1) != 'i':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(4) != 'iv':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(43) != 'xliii':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(90) != 'xc':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(94) != 'xciv':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(532) != 'dxxxii':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(900) != 'cm':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(994) != 'cmxciv':
  raise Exception("MyLogError MISMATCH")
if int_to_mini_roman(1000) != 'm':
  raise Exception("MyLogError MISMATCH")