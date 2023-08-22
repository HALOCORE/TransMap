//TESTED_PROGRAM

if(count_upper('aBCdEf') !== 1)
  throw Error("MyLogError MISMATCH");
if(count_upper('abcdefg') !== 0)
  throw Error("MyLogError MISMATCH");
if(count_upper('dBBE') !== 0)
  throw Error("MyLogError MISMATCH");
if(count_upper('B') !== 0)
  throw Error("MyLogError MISMATCH");
if(count_upper('U') !== 1)
  throw Error("MyLogError MISMATCH");
if(count_upper('') !== 0)
  throw Error("MyLogError MISMATCH");
if(count_upper('EEEE') !== 2)
  throw Error("MyLogError MISMATCH");