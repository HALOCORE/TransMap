//TESTED_PROGRAM

if(belowThreshold([1, 2, 4, 10], 100) !== true)
  throw Error("MyLogError MISMATCH");
if(belowThreshold([1, 20, 4, 10], 5) !== false)
  throw Error("MyLogError MISMATCH");
if(belowThreshold([1, 20, 4, 10], 21) !== true)
  throw Error("MyLogError MISMATCH");
if(belowThreshold([1, 20, 4, 10], 22) !== true)
  throw Error("MyLogError MISMATCH");
if(belowThreshold([1, 8, 4, 10], 11) !== true)
  throw Error("MyLogError MISMATCH");
if(belowThreshold([1, 8, 4, 10], 10) !== false)
  throw Error("MyLogError MISMATCH");