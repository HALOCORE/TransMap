//TESTED_PROGRAM

if(
    JSON.stringify(largest_smallest_integers([2, 4, 1, 3, 5, 7])) !==
    JSON.stringify([null, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([2, 4, 1, 3, 5, 7, 0])) !==
    JSON.stringify([null, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([1, 3, 2, 4, 5, 6, -2])) !==
    JSON.stringify([-2, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([4, 5, 3, 6, 2, 7, -7])) !==
    JSON.stringify([-7, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([7, 3, 8, 4, 9, 2, 5, -9])) !==
    JSON.stringify([-9, 2])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([])) !== JSON.stringify([null, null])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([0])) !==
    JSON.stringify([null, null])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([-1, -3, -5, -6])) !==
    JSON.stringify([-1, null])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([-1, -3, -5, -6, 0])) !==
    JSON.stringify([-1, null])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([-6, -4, -4, -3, 1])) !==
    JSON.stringify([-3, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(largest_smallest_integers([-6, -4, -4, -3, -100, 1])) !==
    JSON.stringify([-3, 1])
  )
  throw Error("MyLogError MISMATCH");