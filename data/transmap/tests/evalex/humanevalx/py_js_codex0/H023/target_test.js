//TESTED_PROGRAM

if(strlen('') !== 0)
  throw Error("MyLogError MISMATCH");
if(strlen('x') !== 1)
  throw Error("MyLogError MISMATCH");
if(strlen('asdasnakj') !== 9)
  throw Error("MyLogError MISMATCH");