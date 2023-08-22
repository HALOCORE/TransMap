//TESTED_PROGRAM

if(removeVowels('') !== '')
  throw Error("MyLogError MISMATCH");
if(removeVowels('abcdef\nghijklm') !== 'bcdf\nghjklm')
  throw Error("MyLogError MISMATCH");
if(removeVowels('fedcba') !== 'fdcb')
  throw Error("MyLogError MISMATCH");
if(removeVowels('eeeee') !== '')
  throw Error("MyLogError MISMATCH");
if(removeVowels('acBAA') !== 'cB')
  throw Error("MyLogError MISMATCH");
if(removeVowels('EcBOO') !== 'cB')
  throw Error("MyLogError MISMATCH");
if(removeVowels('ybcd') !== 'ybcd')
  throw Error("MyLogError MISMATCH");