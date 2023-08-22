//TESTED_PROGRAM

function test(){

if(prod_signs([1, 2, 2, -4]) !== -9)
  throw Error("MyLogError MISMATCH");
if(prod_signs([0, 1]) !== 0)
  throw Error("MyLogError MISMATCH");
if(prod_signs([1, 1, 1, 2, 3, -1, 1]) !== -10)
  throw Error("MyLogError MISMATCH");
if(prod_signs([]) !== null)
  throw Error("MyLogError MISMATCH");
if(prod_signs([2, 4, 1, 2, -1, -1, 9]) !== 20)
  throw Error("MyLogError MISMATCH");
if(prod_signs([-1, 1, -1, 1]) !== 4)
  throw Error("MyLogError MISMATCH");
if(prod_signs([-1, 1, 1, 1]) !== -4)
  throw Error("MyLogError MISMATCH");
if(prod_signs([-1, 1, 1, 0]) !== 0)
  throw Error("MyLogError MISMATCH");
}

test();
