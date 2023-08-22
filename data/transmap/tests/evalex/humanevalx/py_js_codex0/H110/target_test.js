//TESTED_PROGRAM

if(exchange([1, 2, 3, 4], [1, 2, 3, 4]) !== 'YES')
  throw Error("MyLogError MISMATCH");
if(exchange([1, 2, 3, 4], [1, 5, 3, 4]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(exchange([1, 2, 3, 4], [2, 1, 4, 3]) !== 'YES')
  throw Error("MyLogError MISMATCH");
if(exchange([5, 7, 3], [2, 6, 4]) !== 'YES')
  throw Error("MyLogError MISMATCH");
if(exchange([5, 7, 3], [2, 6, 3]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(exchange([3, 2, 6, 1, 8, 9], [3, 5, 5, 1, 1, 1]) !== 'NO')
  throw Error("MyLogError MISMATCH");
if(exchange([100, 200], [200, 200]) !== 'YES')
  throw Error("MyLogError MISMATCH");