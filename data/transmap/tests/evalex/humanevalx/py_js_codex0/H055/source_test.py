#TESTED_PROGRAM

if fib(10) != 55:
  raise Exception("MyLogError MISMATCH")
if fib(1) != 1:
  raise Exception("MyLogError MISMATCH")
if fib(8) != 21:
  raise Exception("MyLogError MISMATCH")
if fib(11) != 89:
  raise Exception("MyLogError MISMATCH")
if fib(12) != 144:
  raise Exception("MyLogError MISMATCH")