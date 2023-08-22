//TESTED_PROGRAM

if(
    JSON.stringify(derivative([3, 1, 2, 4, 5])) !==
      JSON.stringify([1, 4, 12, 20])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(derivative([1, 2, 3])) !== JSON.stringify([2, 6])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(derivative([3, 2, 1])) !== JSON.stringify([2, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(derivative([3, 2, 1, 0, 4])) !==
      JSON.stringify([2, 2, 0, 16])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(derivative([1])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");