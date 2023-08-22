//TESTED_PROGRAM

if(modp(3, 5) !== 3)
  throw Error("MyLogError MISMATCH");
if(modp(1101, 101) !== 2)
  throw Error("MyLogError MISMATCH");
if(modp(0, 101) !== 1)
  throw Error("MyLogError MISMATCH");
if(modp(3, 11) !== 8)
  throw Error("MyLogError MISMATCH");
if(modp(100, 101) !== 1)
  throw Error("MyLogError MISMATCH");
if(modp(30, 5) !== 4)
  throw Error("MyLogError MISMATCH");
if(modp(31, 5) !== 3)
  throw Error("MyLogError MISMATCH");