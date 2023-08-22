//TESTED_PROGRAM

if(choose_num(12, 15) !== 14)
  throw Error("MyLogError MISMATCH");
if(choose_num(13, 12) !== -1)
  throw Error("MyLogError MISMATCH");
if(choose_num(33, 12354) !== 12354)
  throw Error("MyLogError MISMATCH");
if(choose_num(5234, 5233) !== -1)
  throw Error("MyLogError MISMATCH");
if(choose_num(6, 29) !== 28)
  throw Error("MyLogError MISMATCH");
if(choose_num(27, 10) !== -1)
  throw Error("MyLogError MISMATCH");
if(choose_num(7, 7) !== -1)
  throw Error("MyLogError MISMATCH");
if(choose_num(546, 546) !== 546)
  throw Error("MyLogError MISMATCH");