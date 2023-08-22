//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(sort_third([1, 2, 3])) !== JSON.stringify([1, 2, 3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_third([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10])) !==
      JSON.stringify([1, 3, -5, 2, -3, 3, 5, 0, 123, 9, -10])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_third([5, 8, -12, 4, 23, 2, 3, 11, 12, -10])) !==
      JSON.stringify([-10, 8, -12, 3, 23, 2, 4, 11, 12, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_third([5, 6, 3, 4, 8, 9, 2])) !==
      JSON.stringify([2, 6, 3, 4, 8, 9, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_third([5, 8, 3, 4, 6, 9, 2])) !==
      JSON.stringify([2, 8, 3, 4, 6, 9, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_third([5, 6, 9, 4, 8, 3, 2])) !==
      JSON.stringify([2, 6, 9, 4, 8, 3, 5])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sort_third([5, 6, 3, 4, 8, 9, 2, 1])) !==
      JSON.stringify([2, 6, 3, 4, 8, 9, 5, 1])
  )
  throw Error("MyLogError MISMATCH");
}

test();
