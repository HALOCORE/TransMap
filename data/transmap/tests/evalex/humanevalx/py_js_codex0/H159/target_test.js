//TESTED_PROGRAM

if(JSON.stringify(eat(5, 6, 10)) !== JSON.stringify([11, 4]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(eat(4, 8, 9)) !== JSON.stringify([12, 1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(eat(1, 10, 10)) !== JSON.stringify([11, 0]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(eat(2, 11, 5)) !== JSON.stringify([7, 0]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(eat(4, 5, 7)) !== JSON.stringify([9, 2]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(eat(4, 5, 1)) !== JSON.stringify([5, 0]))
  throw Error("MyLogError MISMATCH");