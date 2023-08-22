//TESTED_PROGRAM

if(stringSequence(0) !== '0')
  throw Error("MyLogError MISMATCH");
if(stringSequence(3) !== '0 1 2 3')
  throw Error("MyLogError MISMATCH");
if(stringSequence(10) !== '0 1 2 3 4 5 6 7 8 9 10')
  throw Error("MyLogError MISMATCH");