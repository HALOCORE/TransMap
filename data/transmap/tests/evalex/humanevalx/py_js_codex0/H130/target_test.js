//TESTED_PROGRAM

if(JSON.stringify(tri(3)) !== JSON.stringify([1, 3, 2.0, 8.0]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(4)) !== JSON.stringify([1, 3, 2.0, 8.0, 3.0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(5)) !== JSON.stringify([1, 3, 2.0, 8.0, 3.0, 15.0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(6)) !== JSON.stringify([1, 3, 2.0, 8.0, 3.0, 15.0, 4.0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(7)) !==
    JSON.stringify([1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(8)) !==
    JSON.stringify([1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(9)) !==
    JSON.stringify([1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0, 35.0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(tri(20)) !==
    JSON.stringify([
      1, 3, 2.0, 8.0, 3.0, 15.0, 4.0, 24.0, 5.0, 35.0, 6.0, 48.0, 7.0, 63.0,
      8.0, 80.0, 9.0, 99.0, 10.0, 120.0, 11.0,
    ])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(tri(0)) !== JSON.stringify([1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(tri(1)) !== JSON.stringify([1, 3]))
  throw Error("MyLogError MISMATCH");