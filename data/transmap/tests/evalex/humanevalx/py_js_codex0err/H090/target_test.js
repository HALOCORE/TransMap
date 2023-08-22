//TESTED_PROGRAM

function test(){

if(next_smallest([1, 2, 3, 4, 5]) !== 2)
  throw Error("MyLogError MISMATCH");
if(next_smallest([5, 1, 4, 3, 2]) !== 2)
  throw Error("MyLogError MISMATCH");
if(next_smallest([]) !== null)
  throw Error("MyLogError MISMATCH");
if(next_smallest([1, 1]) !== null)
  throw Error("MyLogError MISMATCH");
if(next_smallest([1, 1, 1, 1, 0]) !== 1)
  throw Error("MyLogError MISMATCH");
if(next_smallest([1, 0 ** 0]) !== null)
  throw Error("MyLogError MISMATCH");
if(next_smallest([-35, 34, 12, -45]) !== -35)
  throw Error("MyLogError MISMATCH");
}

test();
