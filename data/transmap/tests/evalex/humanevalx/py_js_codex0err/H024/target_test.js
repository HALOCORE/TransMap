//TESTED_PROGRAM

function test(){

if(largest_divisor(3) !== 1)
  throw Error("MyLogError MISMATCH");
if(largest_divisor(7) !== 1)
  throw Error("MyLogError MISMATCH");
if(largest_divisor(10) !== 5)
  throw Error("MyLogError MISMATCH");
if(largest_divisor(100) !== 50)
  throw Error("MyLogError MISMATCH");
if(largest_divisor(49) !== 7)
  throw Error("MyLogError MISMATCH");

}

test();
