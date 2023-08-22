//TESTED_PROGRAM

if(solve('AsDf') !== 'aSdF')
  throw Error("MyLogError MISMATCH");
if(solve('1234') !== '4321')
  throw Error("MyLogError MISMATCH");
if(solve('ab') !== 'AB')
  throw Error("MyLogError MISMATCH");
if(solve('#a@C') !== '#A@c')
  throw Error("MyLogError MISMATCH");
if(solve('#AsdfW^45') !== '#aSDFw^45')
  throw Error("MyLogError MISMATCH");
if(solve('#6@2') !== '2@6#')
  throw Error("MyLogError MISMATCH");
if(solve('#$a^D') !== '#$A^d')
  throw Error("MyLogError MISMATCH");
if(solve('#ccc') !== '#CCC')
  throw Error("MyLogError MISMATCH");