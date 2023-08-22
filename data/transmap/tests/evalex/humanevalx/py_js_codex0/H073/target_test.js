//TESTED_PROGRAM

if(smallest_change([1, 2, 3, 5, 4, 7, 9, 6]) !== 4)
  throw Error("MyLogError MISMATCH");
if(smallest_change([1, 2, 3, 4, 3, 2, 2]) !== 1)
  throw Error("MyLogError MISMATCH");
if(smallest_change([1, 4, 2]) !== 1)
  throw Error("MyLogError MISMATCH");
if(smallest_change([1, 4, 4, 2]) !== 1)
  throw Error("MyLogError MISMATCH");
if(smallest_change([1, 2, 3, 2, 1]) !== 0)
  throw Error("MyLogError MISMATCH");
if(smallest_change([3, 1, 1, 3]) !== 0)
  throw Error("MyLogError MISMATCH");
if(smallest_change([1]) !== 0)
  throw Error("MyLogError MISMATCH");
if(smallest_change([0, 1]) !== 1)
  throw Error("MyLogError MISMATCH");