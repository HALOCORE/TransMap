//TESTED_PROGRAM

if(digits(5) !== 5)
  throw Error("MyLogError MISMATCH");
if(digits(54) !== 5)
  throw Error("MyLogError MISMATCH");
if(digits(120) !== 1)
  throw Error("MyLogError MISMATCH");
if(digits(5014) !== 5)
  throw Error("MyLogError MISMATCH");
if(digits(98765) !== 315)
  throw Error("MyLogError MISMATCH");
if(digits(5576543) !== 2625)
  throw Error("MyLogError MISMATCH");
if(digits(2468) !== 0)
  throw Error("MyLogError MISMATCH");