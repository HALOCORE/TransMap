//TESTED_PROGRAM

if(is_equal_to_sum_even(4) !== false)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(6) !== false)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(8) !== true)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(10) !== true)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(11) !== false)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(12) !== true)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(13) !== false)
  throw Error("MyLogError MISMATCH");
if(is_equal_to_sum_even(16) !== true)
  throw Error("MyLogError MISMATCH");