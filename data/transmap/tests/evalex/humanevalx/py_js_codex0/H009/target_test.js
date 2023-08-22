//TESTED_PROGRAM

if(JSON.stringify(rollingMax([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(rollingMax([1, 2, 3, 4])) !== JSON.stringify([1, 2, 3, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(rollingMax([4, 3, 2, 1])) !== JSON.stringify([4, 4, 4, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      rollingMax([3, 2, 3, 100, 3])) !== JSON.stringify([3, 3, 3, 100, 100])
  )
  throw Error("MyLogError MISMATCH");