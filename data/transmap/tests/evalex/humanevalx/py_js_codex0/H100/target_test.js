//TESTED_PROGRAM

if(JSON.stringify(make_a_pile(3)) !== JSON.stringify([3, 5, 7]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(make_a_pile(4)) !== JSON.stringify([4, 6, 8, 10]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(make_a_pile(5)) !== JSON.stringify([5, 7, 9, 11, 13])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(make_a_pile(6)) !== JSON.stringify([6, 8, 10, 12, 14, 16])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(make_a_pile(8)) !==
    JSON.stringify([8, 10, 12, 14, 16, 18, 20, 22])
  )
  throw Error("MyLogError MISMATCH");