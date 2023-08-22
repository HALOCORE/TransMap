//TESTED_PROGRAM

function test(){

if(triangle_area(3, 4, 5) !== 6.0)
  throw Error("MyLogError MISMATCH");
if(triangle_area(1, 2, 10) !== -1)
  throw Error("MyLogError MISMATCH");
if(triangle_area(4, 8, 5) !== 8.18)
  throw Error("MyLogError MISMATCH");
if(triangle_area(2, 2, 2) !== 1.73)
  throw Error("MyLogError MISMATCH");
if(triangle_area(1, 2, 3) !== -1)
  throw Error("MyLogError MISMATCH");
if(triangle_area(10, 5, 7) !== 16.25)
  throw Error("MyLogError MISMATCH");
if(triangle_area(2, 6, 3) !== -1)
  throw Error("MyLogError MISMATCH");
if(triangle_area(1, 1, 1) !== 0.43)
  throw Error("MyLogError MISMATCH");
if(triangle_area(2, 2, 10) !== -1)
  throw Error("MyLogError MISMATCH");
}

test();
