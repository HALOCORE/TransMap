//TESTED_PROGRAM

if(cycpattern_check('xyzw', 'xyw') !== false)
  throw Error("MyLogError MISMATCH");
if(cycpattern_check('yello', 'ell') !== true)
  throw Error("MyLogError MISMATCH");
if(cycpattern_check('whattup', 'ptut') !== false)
  throw Error("MyLogError MISMATCH");
if(cycpattern_check('efef', 'fee') !== true)
  throw Error("MyLogError MISMATCH");
if(cycpattern_check('abab', 'aabb') !== false)
  throw Error("MyLogError MISMATCH");
if(cycpattern_check('winemtt', 'tinem') !== true)
  throw Error("MyLogError MISMATCH");