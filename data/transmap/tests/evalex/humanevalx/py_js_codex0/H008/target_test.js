//TESTED_PROGRAM

if(JSON.stringify(sumProduct([])) !== JSON.stringify([0, 1]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sumProduct([1, 1, 1])) !== JSON.stringify([3, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sumProduct([100, 0])) !== JSON.stringify([100, 0])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      sumProduct([3, 5, 7])) !== JSON.stringify([3 + 5 + 7, 3 * 5 * 7])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sumProduct([10])) !== JSON.stringify([10, 10]))
  throw Error("MyLogError MISMATCH");