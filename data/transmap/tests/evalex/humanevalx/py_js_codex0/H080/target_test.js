//TESTED_PROGRAM

if(is_happy('a') !== false)
  throw Error("MyLogError MISMATCH");
if(is_happy('aa') !== false)
  throw Error("MyLogError MISMATCH");
if(is_happy('abcd') !== true)
  throw Error("MyLogError MISMATCH");
if(is_happy('aabb') !== false)
  throw Error("MyLogError MISMATCH");
if(is_happy('adb') !== true)
  throw Error("MyLogError MISMATCH");
if(is_happy('xyy') !== false)
  throw Error("MyLogError MISMATCH");
if(is_happy('iopaxpoi') !== true)
  throw Error("MyLogError MISMATCH");
if(is_happy('iopaxioi') !== false)
  throw Error("MyLogError MISMATCH");