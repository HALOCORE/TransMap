//TESTED_PROGRAM

if(
    JSON.stringify(common([1, 4, 3, 34, 653, 2, 5], [5, 7, 1, 5, 9, 653, 121]))
     !== JSON.stringify([1, 5, 653])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(common([5, 3, 2, 8], [3, 2]))
     !== JSON.stringify([2, 3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(common([4, 3, 2, 8], [3, 2, 4])) !==
      JSON.stringify([2, 3, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(common([4, 3, 2, 8], [])) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");