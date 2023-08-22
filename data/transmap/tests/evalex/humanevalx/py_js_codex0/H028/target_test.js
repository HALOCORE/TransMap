//TESTED_PROGRAM

if(concatenate([]) !== '')
  throw Error("MyLogError MISMATCH");
if(concatenate(['x', 'y', 'z']) !== 'xyz')
  throw Error("MyLogError MISMATCH");
if(concatenate(['x', 'y', 'z', 'w', 'k']) !== 'xyzwk')
  throw Error("MyLogError MISMATCH");