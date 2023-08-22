//TESTED_PROGRAM

if(add([4, 88]) !== 88)
  throw Error("MyLogError MISMATCH");
if(add([4, 5, 6, 7, 2, 122]) !== 122)
  throw Error("MyLogError MISMATCH");
if(add([4, 0, 6, 7]) !== 0)
  throw Error("MyLogError MISMATCH");
if(add([4, 4, 6, 8]) !== 12)
  throw Error("MyLogError MISMATCH");