#TESTED_PROGRAM

if is_palindrome('') != True:
  raise Exception("MyLogError MISMATCH")
if is_palindrome('aba') != True:
  raise Exception("MyLogError MISMATCH")
if is_palindrome('aaaaa') != True:
  raise Exception("MyLogError MISMATCH")
if is_palindrome('zbcd') != False:
  raise Exception("MyLogError MISMATCH")
if is_palindrome('xywyx') != True:
  raise Exception("MyLogError MISMATCH")
if is_palindrome('xywyz') != False:
  raise Exception("MyLogError MISMATCH")
if is_palindrome('xywzx') != False:
  raise Exception("MyLogError MISMATCH")