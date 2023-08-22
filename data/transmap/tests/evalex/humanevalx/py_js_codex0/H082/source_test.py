#TESTED_PROGRAM

if prime_length('Hello') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('abcdcba') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('kittens') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('orange') != False:
  raise Exception("MyLogError MISMATCH")
if prime_length('wow') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('world') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('MadaM') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('Wow') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('') != False:
  raise Exception("MyLogError MISMATCH")
if prime_length('HI') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('go') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('gogo') != False:
  raise Exception("MyLogError MISMATCH")
if prime_length('aaaaaaaaaaaaaaa') != False:
  raise Exception("MyLogError MISMATCH")
if prime_length('Madam') != True:
  raise Exception("MyLogError MISMATCH")
if prime_length('M') != False:
  raise Exception("MyLogError MISMATCH")
if prime_length('0') != False:
  raise Exception("MyLogError MISMATCH")