//TESTED_PROGRAM

if(is_simple_power(1, 4) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(2, 2) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(8, 2) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(3, 2) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(3, 1) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(5, 3) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(16, 2) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(143214, 16) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(4, 2) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(9, 3) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(16, 4) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(24, 2) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(128, 4) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(12, 6) !== false)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(1, 1) !== true)
  throw Error("MyLogError MISMATCH");
if(is_simple_power(1, 12) !== true)
  throw Error("MyLogError MISMATCH");