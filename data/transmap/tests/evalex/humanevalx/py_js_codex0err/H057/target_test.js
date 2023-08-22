//TESTED_PROGRAM

function test(){

if(monotonic([1, 2, 4, 10]) !== true)
  throw Error("MyLogError MISMATCH");
if(monotonic([1, 2, 4, 20]) !== true)
  throw Error("MyLogError MISMATCH");
if(monotonic([1, 20, 4, 10]) !== false)
  throw Error("MyLogError MISMATCH");
if(monotonic([4, 1, 0, -10]) !== true)
  throw Error("MyLogError MISMATCH");
if(monotonic([4, 1, 1, 0]) !== true)
  throw Error("MyLogError MISMATCH");
if(monotonic([1, 2, 3, 2, 5, 60]) !== false)
  throw Error("MyLogError MISMATCH");
if(monotonic([1, 2, 3, 4, 5, 60]) !== true)
  throw Error("MyLogError MISMATCH");
if(monotonic([9, 9, 9, 9]) !== true)
  throw Error("MyLogError MISMATCH");
}

test();
