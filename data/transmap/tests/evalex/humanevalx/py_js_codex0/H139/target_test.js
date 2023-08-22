//TESTED_PROGRAM

if(special_factorial(4) !== 288)
  throw Error("MyLogError MISMATCH");
if(special_factorial(5) !== 34560)
  throw Error("MyLogError MISMATCH");
if(special_factorial(7) !== 125411328000)
  throw Error("MyLogError MISMATCH");
if(special_factorial(1) !== 1)
  throw Error("MyLogError MISMATCH");