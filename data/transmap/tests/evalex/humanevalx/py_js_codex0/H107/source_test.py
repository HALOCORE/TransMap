#TESTED_PROGRAM

if even_odd_palindrome(123) != (8, 13):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(12) != (4, 6):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(3) != (1, 2):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(63) != (6, 8):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(25) != (5, 6):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(19) != (4, 6):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(9) != (4, 5):
  raise Exception("MyLogError MISMATCH")
if even_odd_palindrome(1) != (0, 1):
  raise Exception("MyLogError MISMATCH")