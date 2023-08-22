//TESTED_PROGRAM

if(will_it_fly([3, 2, 3], 9) !== true)
  throw Error("MyLogError MISMATCH");
if(will_it_fly([1, 2], 5) !== false)
  throw Error("MyLogError MISMATCH");
if(will_it_fly([3], 5) !== true)
  throw Error("MyLogError MISMATCH");
if(will_it_fly([3, 2, 3], 1) !== false)
  throw Error("MyLogError MISMATCH");
if(will_it_fly([1, 2, 3], 6) !== false)
  throw Error("MyLogError MISMATCH");
if(will_it_fly([5], 5) !== true)
  throw Error("MyLogError MISMATCH");