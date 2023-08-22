//TESTED_PROGRAM

if(hasCloseElements([1.0, 2.0, 3.9, 4.0, 5.0, 2.2], 0.3) !== true)
  throw Error("MyLogError MISMATCH");
if(
    hasCloseElements([1.0, 2.0, 3.9, 4.0, 5.0, 2.2], 0.05) !== false
  )
  throw Error("MyLogError MISMATCH");
if(hasCloseElements([1.0, 2.0, 5.9, 4.0, 5.0], 0.95) !== true)
  throw Error("MyLogError MISMATCH");
if(hasCloseElements([1.0, 2.0, 5.9, 4.0, 5.0], 0.8) !== false)
  throw Error("MyLogError MISMATCH");
if(hasCloseElements([1.0, 2.0, 3.0, 4.0, 5.0, 2.0], 0.1) !== true)
  throw Error("MyLogError MISMATCH");
if(hasCloseElements([1.1, 2.2, 3.1, 4.1, 5.1], 1.0) !== true)
  throw Error("MyLogError MISMATCH");
if(hasCloseElements([1.1, 2.2, 3.1, 4.1, 5.1], 0.5) !== false)
  throw Error("MyLogError MISMATCH");