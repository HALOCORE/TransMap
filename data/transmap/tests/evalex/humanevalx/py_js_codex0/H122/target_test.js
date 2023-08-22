//TESTED_PROGRAM

if(addElements([1, -2, -3, 41, 57, 76, 87, 88, 99], 3) !== -4)
  throw Error("MyLogError MISMATCH");
if(addElements([111, 121, 3, 4000, 5, 6], 2) !== 0)
  throw Error("MyLogError MISMATCH");
if(addElements([11, 21, 3, 90, 5, 6, 7, 8, 9], 4) !== 125)
  throw Error("MyLogError MISMATCH");
if(addElements([111, 21, 3, 4000, 5, 6, 7, 8, 9], 4) !== 24)
  throw Error("MyLogError MISMATCH");
if(addElements([1], 1) !== 1)
  throw Error("MyLogError MISMATCH");