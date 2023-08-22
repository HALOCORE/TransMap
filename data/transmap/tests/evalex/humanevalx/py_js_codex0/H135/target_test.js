//TESTED_PROGRAM

if(canArrange([1, 2, 4, 3, 5]) !== 3)
  throw Error("MyLogError MISMATCH");
if(canArrange([1, 2, 4, 5]) !== -1)
  throw Error("MyLogError MISMATCH");
if(canArrange([1, 4, 2, 5, 6, 7, 8, 9, 10]) !== 2)
  throw Error("MyLogError MISMATCH");
if(canArrange([4, 8, 5, 7, 3]) !== 4)
  throw Error("MyLogError MISMATCH");
if(canArrange([]) !== -1)
  throw Error("MyLogError MISMATCH");