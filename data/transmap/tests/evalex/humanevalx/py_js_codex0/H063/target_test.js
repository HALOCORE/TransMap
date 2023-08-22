//TESTED_PROGRAM

if(fibfib(2) !== 1)
  throw Error("MyLogError MISMATCH");
if(fibfib(1) !== 0)
  throw Error("MyLogError MISMATCH");
if(fibfib(5) !== 4)
  throw Error("MyLogError MISMATCH");
if(fibfib(8) !== 24)
  throw Error("MyLogError MISMATCH");
if(fibfib(10) !== 81)
  throw Error("MyLogError MISMATCH");
if(fibfib(12) !== 274)
  throw Error("MyLogError MISMATCH");
if(fibfib(14) !== 927)
  throw Error("MyLogError MISMATCH");