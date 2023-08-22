//TESTED_PROGRAM

if(is_multiply_prime(5) !== false)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(30) !== true)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(8) !== true)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(10) !== false)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(125) !== true)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(3 * 5 * 7) !== true)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(3 * 6 * 7) !== false)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(9 * 9 * 9) !== false)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(11 * 9 * 9) !== false)
  throw Error("MyLogError MISMATCH");
if(is_multiply_prime(11 * 13 * 7) !== true)
  throw Error("MyLogError MISMATCH");