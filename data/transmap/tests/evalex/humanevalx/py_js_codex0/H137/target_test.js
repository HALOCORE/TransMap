//TESTED_PROGRAM

if(compare_one(1, 2) !== 2)
  throw Error("MyLogError MISMATCH");
if(compare_one(1, 2.5) !== 2.5)
  throw Error("MyLogError MISMATCH");
if(compare_one(2, 3) !== 3)
  throw Error("MyLogError MISMATCH");
if(compare_one(5, 6) !== 6)
  throw Error("MyLogError MISMATCH");
if(compare_one(1, '2,3') !== '2,3')
  throw Error("MyLogError MISMATCH");
if(compare_one('5,1', '6') !== '6')
  throw Error("MyLogError MISMATCH");
if(compare_one('1', '2') !== '2')
  throw Error("MyLogError MISMATCH");
if(compare_one('1', 1) !== null)
  throw Error("MyLogError MISMATCH");