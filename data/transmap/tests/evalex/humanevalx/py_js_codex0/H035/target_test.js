//TESTED_PROGRAM

if(max_element([1, 2, 3]) !== 3)
  throw Error("MyLogError MISMATCH");
if(max_element([5, 3, -5, 2, -3, 3, 9, 0, 124, 1, -10]) !== 124)
  throw Error("MyLogError MISMATCH");