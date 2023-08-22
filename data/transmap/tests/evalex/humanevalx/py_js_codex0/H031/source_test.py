#TESTED_PROGRAM

if is_prime(6) != False:
  raise Exception("MyLogError MISMATCH")
if is_prime(101) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(11) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(13441) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(61) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(4) != False:
  raise Exception("MyLogError MISMATCH")
if is_prime(1) != False:
  raise Exception("MyLogError MISMATCH")
if is_prime(5) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(11) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(17) != True:
  raise Exception("MyLogError MISMATCH")
if is_prime(5 * 17) != False:
  raise Exception("MyLogError MISMATCH")
if is_prime(11 * 7) != False:
  raise Exception("MyLogError MISMATCH")
if is_prime(13441 * 19) != False:
  raise Exception("MyLogError MISMATCH")