//TESTED_PROGRAM

if(
    JSON.stringify(get_positive([-1, -2, 4, 5, 6])) !== JSON.stringify([4, 5, 6])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(get_positive([5, 3, -5, 2, 3, 3, 9, 0, 123, 1, -10])) !==
      JSON.stringify([5, 3, 2, 3, 3, 9, 123, 1])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_positive([-1, -2])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_positive([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");