//TESTED_PROGRAM

if(
    JSON.stringify(sort_array([1, 5, 2, 3, 4])) !==
    JSON.stringify([1, 2, 4, 3, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_array([-2, -3, -4, -5, -6])) !==
    JSON.stringify([-4, -2, -6, -5, -3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_array([1, 0, 2, 3, 4])) !==
    JSON.stringify([0, 1, 2, 4, 3])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_array([2, 5, 77, 4, 5, 3, 5, 7, 2, 3, 4])) !==
    JSON.stringify([2, 2, 4, 4, 3, 3, 5, 5, 5, 7, 77])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_array([3, 6, 44, 12, 32, 5])) !==
    JSON.stringify([32, 3, 5, 6, 12, 44])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_array([2, 4, 8, 16, 32])) !==
    JSON.stringify([2, 4, 8, 16, 32])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_array([2, 4, 8, 16, 32])) !==
    JSON.stringify([2, 4, 8, 16, 32])
  )
  throw Error("MyLogError MISMATCH");