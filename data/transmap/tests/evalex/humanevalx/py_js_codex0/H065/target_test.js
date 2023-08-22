//TESTED_PROGRAM

if(circular_shift(100, 2) !== '001')
  throw Error("MyLogError MISMATCH");
if(circular_shift(12, 2) !== '12')
  throw Error("MyLogError MISMATCH");
if(circular_shift(97, 8) !== '79')
  throw Error("MyLogError MISMATCH");
if(circular_shift(12, 1) !== '21')
  throw Error("MyLogError MISMATCH");
if(circular_shift(11, 101) !== '11')
  throw Error("MyLogError MISMATCH");