//TESTED_PROGRAM

if(encrypt('hi') !== 'lm')
  throw Error("MyLogError MISMATCH");
if(encrypt('asdfghjkl') !== 'ewhjklnop')
  throw Error("MyLogError MISMATCH");
if(encrypt('gf') !== 'kj')
  throw Error("MyLogError MISMATCH");
if(encrypt('et') !== 'ix')
  throw Error("MyLogError MISMATCH");
if(encrypt('faewfawefaewg') !== 'jeiajeaijeiak')
  throw Error("MyLogError MISMATCH");
if(encrypt('hellomyfriend') !== 'lippsqcjvmirh')
  throw Error("MyLogError MISMATCH");
if(
    encrypt('dxzdlmnilfuhmilufhlihufnmlimnufhlimnufhfucufh') !==
    'hbdhpqrmpjylqmpyjlpmlyjrqpmqryjlpmqryjljygyjl'
  )
  throw Error("MyLogError MISMATCH");
if(encrypt('a') !== 'e')
  throw Error("MyLogError MISMATCH");