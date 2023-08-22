//TESTED_PROGRAM

if(howManyTimes('', 'x') !== 0)
  throw Error("MyLogError MISMATCH");
if(howManyTimes('xyxyxyx', 'x') !== 4)
  throw Error("MyLogError MISMATCH");
if(howManyTimes('cacacacac', 'cac') !== 4)
  throw Error("MyLogError MISMATCH");
if(howManyTimes('john doe', 'john') !== 1)
  throw Error("MyLogError MISMATCH");