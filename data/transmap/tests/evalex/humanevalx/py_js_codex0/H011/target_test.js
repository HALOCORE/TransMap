//TESTED_PROGRAM

if(string_xor('111000', '101010') !== '010010')
  throw Error("MyLogError MISMATCH");
if(string_xor('1', '1') !== '0')
  throw Error("MyLogError MISMATCH");
if(string_xor('0101', '0000') !== '0101')
  throw Error("MyLogError MISMATCH");