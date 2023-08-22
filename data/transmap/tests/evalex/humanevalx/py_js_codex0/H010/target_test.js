//TESTED_PROGRAM

if(makePalindrome('') !== '')
  throw Error("MyLogError MISMATCH");
if(makePalindrome('x') !== 'x')
  throw Error("MyLogError MISMATCH");
if(makePalindrome('xyz') !== 'xyzyx')
  throw Error("MyLogError MISMATCH");
if(makePalindrome('xyx') !== 'xyx')
  throw Error("MyLogError MISMATCH");
if(makePalindrome('jerry') !== 'jerryrrej')
  throw Error("MyLogError MISMATCH");