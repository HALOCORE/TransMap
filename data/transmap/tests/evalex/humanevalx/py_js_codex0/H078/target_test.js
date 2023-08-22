//TESTED_PROGRAM

if(1 !== hex_key('AB'))
  throw Error("MyLogError MISMATCH");
if(2 !== hex_key('1077E'))
  throw Error("MyLogError MISMATCH");
if(4 !== hex_key('ABED1A33'))
  throw Error("MyLogError MISMATCH");
if(2 !== hex_key('2020'))
  throw Error("MyLogError MISMATCH");
if(6 !== hex_key('123456789ABCDEF0'))
  throw Error("MyLogError MISMATCH");
if(12 !== hex_key('112233445566778899AABBCCDDEEFF00'))
  throw Error("MyLogError MISMATCH");
if(0 !== hex_key(''))
  throw Error("MyLogError MISMATCH");