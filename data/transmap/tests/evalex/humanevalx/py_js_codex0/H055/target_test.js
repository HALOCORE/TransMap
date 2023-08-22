//TESTED_PROGRAM

if(fib(10) !== 55)
  throw Error("MyLogError MISMATCH");
if(fib(1) !== 1)
  throw Error("MyLogError MISMATCH");
if(fib(8) !== 21)
  throw Error("MyLogError MISMATCH");
if(fib(11) !== 89)
  throw Error("MyLogError MISMATCH");
if(fib(12) !== 144)
  throw Error("MyLogError MISMATCH");