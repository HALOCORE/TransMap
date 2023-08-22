//TESTED_PROGRAM

if(intersection([1, 2], [2, 3]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(intersection([-1, 1], [0, 4]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(intersection([-3, -1], [-5, 5]) !== 'YES')
  throw Error("MyLogError MISMATCH");
if(intersection([-2, 2], [-4, 0]) !== 'YES')
  throw Error("MyLogError MISMATCH");
if(intersection([-11, 2], [-1, -1]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(intersection([1, 2], [3, 5]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(intersection([1, 2], [1, 2]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(intersection([-2, -2], [-3, -2]) !== 'NO')
  throw Error("MyLogError MISMATCH");