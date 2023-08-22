//TESTED_PROGRAM

if(JSON.stringify(f(5)) !== JSON.stringify([1, 2, 6, 24, 15]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(f(7)) !== JSON.stringify([1, 2, 6, 24, 15, 720, 28])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(f(1)) !== JSON.stringify([1]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(f(3)) !== JSON.stringify([1, 2, 6]))
  throw Error("MyLogError MISMATCH");