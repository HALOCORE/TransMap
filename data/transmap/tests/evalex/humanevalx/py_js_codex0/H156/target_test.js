//TESTED_PROGRAM

if(int_to_mini_roman(19) !== 'xix')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(152) !== 'clii')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(251) !== 'ccli')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(426) !== 'cdxxvi')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(500) !== 'd')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(1) !== 'i')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(4) !== 'iv')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(43) !== 'xliii')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(90) !== 'xc')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(94) !== 'xciv')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(532) !== 'dxxxii')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(900) !== 'cm')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(994) !== 'cmxciv')
  throw Error("MyLogError MISMATCH");
if(int_to_mini_roman(1000) !== 'm')
  throw Error("MyLogError MISMATCH");