//TESTED_PROGRAM

if(belowZero([]) !== false)
  throw Error("MyLogError MISMATCH");
if(belowZero([1, 2, -3, 1, 2, -3]) !== false)
  throw Error("MyLogError MISMATCH");
if(belowZero([1, 2, -4, 5, 6]) !== true)
  throw Error("MyLogError MISMATCH");
if(belowZero([1, -1, 2, -2, 5, -5, 4, -4]) !== false)
  throw Error("MyLogError MISMATCH");
if(belowZero([1, -1, 2, -2, 5, -5, 4, -5]) !== true)
  throw Error("MyLogError MISMATCH");
if(belowZero([1, -2, 2, -2, 5, -5, 4, -4]) !== true)
  throw Error("MyLogError MISMATCH");