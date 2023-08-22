//TESTED_PROGRAM

if(true !== iscube(1))
  throw Error("MyLogError MISMATCH");
if(false !== iscube(2))
  throw Error("MyLogError MISMATCH");
if(true !== iscube(-1))
  throw Error("MyLogError MISMATCH");
if(true !== iscube(64))
  throw Error("MyLogError MISMATCH");
if(false !== iscube(180))
  throw Error("MyLogError MISMATCH");
if(true !== iscube(1000))
  throw Error("MyLogError MISMATCH");
if(true !== iscube(0))
  throw Error("MyLogError MISMATCH");
if(false !== iscube(1729))
  throw Error("MyLogError MISMATCH");