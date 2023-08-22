//TESTED_PROGRAM

if(JSON.stringify(pluck([4, 2, 3])) !== JSON.stringify([2, 1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(pluck([1, 2, 3])) !== JSON.stringify([2, 1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(pluck([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(pluck([5, 0, 3, 0, 4, 2])) !== JSON.stringify([0, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(pluck([1, 2, 3, 0, 5, 3])) !== JSON.stringify([0, 3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(pluck([5, 4, 8, 4, 8])) !== JSON.stringify([4, 1])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(pluck([7, 6, 7, 1])) !== JSON.stringify([6, 1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(pluck([7, 9, 7, 1])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");