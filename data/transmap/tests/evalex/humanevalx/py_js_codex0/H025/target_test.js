//TESTED_PROGRAM

if(JSON.stringify(factorize(2)) !== JSON.stringify([2]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(factorize(4)) !== JSON.stringify([2, 2]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(factorize(8)) !== JSON.stringify([2, 2, 2]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(factorize(3 * 19)) !== JSON.stringify([3, 19]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(factorize(3 * 19 * 3 * 19)) !==
      JSON.stringify([3, 3, 19, 19])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(factorize(3 * 19 * 3 * 19 * 3 * 19)) !==
      JSON.stringify([3, 3, 3, 19, 19, 19])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(factorize(3 * 19 * 19 * 19)) !==
      JSON.stringify([3, 19, 19, 19])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(factorize(3 * 2 * 3)) !== JSON.stringify([2, 3, 3])
  )
  throw Error("MyLogError MISMATCH");