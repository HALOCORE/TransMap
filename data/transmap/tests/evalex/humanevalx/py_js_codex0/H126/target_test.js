//TESTED_PROGRAM

if(is_sorted([5]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 3, 4, 5]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 3, 2, 4, 5]) !== false)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 3, 4, 5, 6]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 3, 4, 5, 6, 7]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 3, 2, 4, 5, 6, 7]) !== false)
  throw Error("MyLogError MISMATCH");
if(is_sorted([]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([3, 2, 1]) !== false)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 2, 2, 3, 4]) !== false)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 3, 3, 3, 4]) !== false)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 2, 3, 3, 4]) !== true)
  throw Error("MyLogError MISMATCH");
if(is_sorted([1, 2, 3, 4]) !== true)
  throw Error("MyLogError MISMATCH");