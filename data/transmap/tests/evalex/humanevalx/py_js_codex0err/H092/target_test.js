//TESTED_PROGRAM

function test(){

if(any_int(2, 3, 1) !== true)
  throw Error("MyLogError MISMATCH");
if(any_int(2.5, 2, 3) !== false)
  throw Error("MyLogError MISMATCH");
if(any_int(1.5, 5, 3.5) !== false)
  throw Error("MyLogError MISMATCH");
if(any_int(2, 6, 2) !== false)
  throw Error("MyLogError MISMATCH");
if(any_int(4, 2, 2) !== true)
  throw Error("MyLogError MISMATCH");
if(any_int(2.2, 2.2, 2.2) !== false)
  throw Error("MyLogError MISMATCH");
if(any_int(-4, 6, 2) !== true)
  throw Error("MyLogError MISMATCH");
if(any_int(2, 1, 1) !== true)
  throw Error("MyLogError MISMATCH");
if(any_int(3, 4, 7) !== true)
  throw Error("MyLogError MISMATCH");
if(any_int(3.0, 4, 7) !== true)
  throw Error("MyLogError MISMATCH");
}

test();
