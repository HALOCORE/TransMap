//TESTED_PROGRAM

function test(){

if(count_nums([]) !== 0)
  throw Error("MyLogError MISMATCH");
if(count_nums([-1, -2, 0]) !== 0)
  throw Error("MyLogError MISMATCH");
if(count_nums([1, 1, 2, -2, 3, 4, 5]) !== 6)
  throw Error("MyLogError MISMATCH");
if(count_nums([1, 6, 9, -6, 0, 1, 5]) !== 5)
  throw Error("MyLogError MISMATCH");
if(count_nums([1, 100, 98, -7, 1, -1]) !== 4)
  throw Error("MyLogError MISMATCH");
if(count_nums([12, 23, 34, -45, -56, 0]) !== 5)
  throw Error("MyLogError MISMATCH");
if(count_nums([-0, 1 ** 0]) !== 1)
  throw Error("MyLogError MISMATCH");
if(count_nums([1]) !== 1)
  throw Error("MyLogError MISMATCH");
}

test();
