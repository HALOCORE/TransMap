//TESTED_PROGRAM

function test(){

if(solution([5, 8, 7, 1]) !== 12)
  throw Error("MyLogError MISMATCH");
if(solution([3, 3, 3, 3, 3]) !== 9)
  throw Error("MyLogError MISMATCH");
if(solution([30, 13, 24, 321]) !== 0)
  throw Error("MyLogError MISMATCH");
if(solution([5, 9]) !== 5)
  throw Error("MyLogError MISMATCH");
if(solution([2, 4, 8]) !== 0)
  throw Error("MyLogError MISMATCH");
if(solution([30, 13, 23, 32]) !== 23)
  throw Error("MyLogError MISMATCH");
if(solution([3, 13, 2, 9]) !== 3)
  throw Error("MyLogError MISMATCH");
}

test();
