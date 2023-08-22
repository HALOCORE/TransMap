//TESTED_PROGRAM

if(JSON.stringify(removeDuplicates([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(removeDuplicates([1, 2, 3, 4])) !==
      JSON.stringify([1, 2, 3, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(removeDuplicates([1, 2, 3, 2, 4, 3, 5])) !==
      JSON.stringify([1, 4, 5])
  )
  throw Error("MyLogError MISMATCH");