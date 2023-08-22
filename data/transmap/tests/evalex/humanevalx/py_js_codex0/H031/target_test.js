//TESTED_PROGRAM

if(is_prime(6) !== false)
  throw Error("MyLogError MISMATCH");
if(is_prime(101) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(11) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(13441) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(61) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(4) !== false)
  throw Error("MyLogError MISMATCH");
if(is_prime(1) !== false)
  throw Error("MyLogError MISMATCH");
if(is_prime(5) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(11) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(17) !== true)
  throw Error("MyLogError MISMATCH");
if(is_prime(5 * 17) !== false)
  throw Error("MyLogError MISMATCH");
if(is_prime(11 * 7) !== false)
  throw Error("MyLogError MISMATCH");
if(is_prime(13441 * 19) !== false)
  throw Error("MyLogError MISMATCH");