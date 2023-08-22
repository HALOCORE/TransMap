#TESTED_PROGRAM

if make_palindrome('') != '':
  raise Exception("MyLogError MISMATCH")
if make_palindrome('x') != 'x':
  raise Exception("MyLogError MISMATCH")
if make_palindrome('xyz') != 'xyzyx':
  raise Exception("MyLogError MISMATCH")
if make_palindrome('xyx') != 'xyx':
  raise Exception("MyLogError MISMATCH")
if make_palindrome('jerry') != 'jerryrrej':
  raise Exception("MyLogError MISMATCH")