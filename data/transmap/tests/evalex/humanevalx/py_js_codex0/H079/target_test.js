//TESTED_PROGRAM

if(decimal_to_binary(0) !== 'db0db')
  throw Error("MyLogError MISMATCH");
if(decimal_to_binary(32) !== 'db100000db')
  throw Error("MyLogError MISMATCH");
if(decimal_to_binary(103) !== 'db1100111db')
  throw Error("MyLogError MISMATCH");
if(decimal_to_binary(15) !== 'db1111db')
  throw Error("MyLogError MISMATCH");