//TESTED_PROGRAM

if(minSubArraySum([2, 3, 4, 1, 2, 4]) !== 1)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([-1, -2, -3]) !== -6)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([-1, -2, -3, 2, -10]) !== -14)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([-9999999999999999]) !== -9999999999999999)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([0, 10, 20, 1000000]) !== 0)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([-1, -2, -3, 10, -5]) !== -6)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([100, -1, -2, -3, 10, -5]) !== -6)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([10, 11, 13, 8, 3, 4]) !== 3)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([100, -33, 32, -1, 0, -2]) !== -33)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([-10]) !== -10)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([7]) !== 7)
  throw Error("MyLogError MISMATCH");
if(minSubArraySum([1, -1]) !== -1)
  throw Error("MyLogError MISMATCH");