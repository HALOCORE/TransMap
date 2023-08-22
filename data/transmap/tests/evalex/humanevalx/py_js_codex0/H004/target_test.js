//TESTED_PROGRAM

if(
    Math.abs(meanAbsoluteDeviation([1.0, 2.0, 3.0]) - 2.0 / 3.0) >= 1e-6
  )
  throw Error("MyLogError MISMATCH");
if(
    Math.abs(meanAbsoluteDeviation([1.0, 2.0, 3.0, 4.0]) - 1.0) >= 1e-6
  )
  throw Error("MyLogError MISMATCH");
if(
    Math.abs(meanAbsoluteDeviation([1.0, 2.0, 3.0, 4.0, 5.0]) - 6.0 / 5.0) >= 1e-6
  )
  throw Error("MyLogError MISMATCH");