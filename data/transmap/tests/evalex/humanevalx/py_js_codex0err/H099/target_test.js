//TESTED_PROGRAM

function test(){

if(closest_integer('10') !== 10)
  throw Error("MyLogError MISMATCH");
if(closest_integer('14.5') !== 15)
  throw Error("MyLogError MISMATCH");
if(closest_integer('-15.5') !== -16)
  throw Error("MyLogError MISMATCH");
if(closest_integer('15.3') !== 15)
  throw Error("MyLogError MISMATCH");
if(closest_integer('0') !== 0)
  throw Error("MyLogError MISMATCH");
}

test();
