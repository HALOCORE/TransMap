//TESTED_PROGRAM

if(JSON.stringify(incr_list([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(incr_list([3, 2, 1])) !== JSON.stringify([4, 3, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(incr_list([5, 2, 5, 2, 3, 3, 9, 0, 123])) !==
      JSON.stringify([6, 3, 6, 3, 4, 4, 10, 1, 124])
  )
  throw Error("MyLogError MISMATCH");