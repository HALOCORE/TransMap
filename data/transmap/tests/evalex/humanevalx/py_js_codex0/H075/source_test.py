#TESTED_PROGRAM

if is_multiply_prime(5) != False:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(30) != True:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(8) != True:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(10) != False:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(125) != True:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(3 * 5 * 7) != True:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(3 * 6 * 7) != False:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(9 * 9 * 9) != False:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(11 * 9 * 9) != False:
  raise Exception("MyLogError MISMATCH")
if is_multiply_prime(11 * 13 * 7) != True:
  raise Exception("MyLogError MISMATCH")