//TESTED_PROGRAM

if(fizz_buzz(50) !== 0)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(78) !== 2)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(79) !== 3)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(100) !== 3)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(200) !== 6)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(4000) !== 192)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(10000) !== 639)
  throw Error("MyLogError MISMATCH");
if(fizz_buzz(100000) !== 8026)
  throw Error("MyLogError MISMATCH");