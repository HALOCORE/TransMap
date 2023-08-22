//TESTED_PROGRAM

if(pairs_sum_to_zero([1, 3, 5, 0]) !== false)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([1, 3, -2, 1]) !== false)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([1, 2, 3, 7]) !== false)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([2, 4, -5, 3, 5, 7]) !== true)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([1]) !== false)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([-3, 9, -1, 3, 2, 30]) !== true)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([-3, 9, -1, 3, 2, 31]) !== true)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([-3, 9, -1, 4, 2, 30]) !== false)
  throw Error("MyLogError MISMATCH");
if(pairs_sum_to_zero([-3, 9, -1, 4, 2, 31]) !== false)
  throw Error("MyLogError MISMATCH");