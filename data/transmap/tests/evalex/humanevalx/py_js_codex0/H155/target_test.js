//TESTED_PROGRAM

if(JSON.stringify(even_odd_count(7)) !== JSON.stringify([0, 1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(even_odd_count(-78)) !== JSON.stringify([1, 1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(even_odd_count(3452)) !== JSON.stringify([2, 2]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_count(346211)) !== JSON.stringify([3, 3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_count(-345821)) !== JSON.stringify([3, 3])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(even_odd_count(-2)) !== JSON.stringify([1, 0]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(even_odd_count(-45347)) !== JSON.stringify([2, 3])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(even_odd_count(0)) !== JSON.stringify([1, 0]))
  throw Error("MyLogError MISMATCH");