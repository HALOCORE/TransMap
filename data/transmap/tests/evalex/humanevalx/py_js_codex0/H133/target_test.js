//TESTED_PROGRAM

if(sumSquares([1, 2, 3]) !== 14)
  throw Error("MyLogError MISMATCH");
if(sumSquares([1.0, 2, 3]) !== 14)
  throw Error("MyLogError MISMATCH");
if(sumSquares([1, 3, 5, 7]) !== 84)
  throw Error("MyLogError MISMATCH");
if(sumSquares([1.4, 4.2, 0]) !== 29)
  throw Error("MyLogError MISMATCH");
if(sumSquares([-2.4, 1, 1]) !== 6)
  throw Error("MyLogError MISMATCH");
if(sumSquares([100, 1, 15, 2]) !== 10230)
  throw Error("MyLogError MISMATCH");
if(sumSquares([10000, 10000]) !== 200000000)
  throw Error("MyLogError MISMATCH");
if(sumSquares([-1.4, 4.6, 6.3]) !== 75)
  throw Error("MyLogError MISMATCH");
if(sumSquares([-1.4, 17.9, 18.9, 19.9]) !== 1086)
  throw Error("MyLogError MISMATCH");
if(sumSquares([0]) !== 0)
  throw Error("MyLogError MISMATCH");
if(sumSquares([-1]) !== 1)
  throw Error("MyLogError MISMATCH");
if(sumSquares([-1, 1, 0]) !== 2)
  throw Error("MyLogError MISMATCH");