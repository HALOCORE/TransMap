//TESTED_PROGRAM

function test(){

if(digitSum('') !== 0)
  throw Error("MyLogError MISMATCH");
if(digitSum('abAB') !== 131)
  throw Error("MyLogError MISMATCH");
if(digitSum('abcCd') !== 67)
  throw Error("MyLogError MISMATCH");
if(digitSum('helloE') !== 69)
  throw Error("MyLogError MISMATCH");
if(digitSum('woArBld') !== 131)
  throw Error("MyLogError MISMATCH");
if(digitSum('aAaaaXa') !== 153)
  throw Error("MyLogError MISMATCH");
if(digitSum(' How are yOu?') !== 151)
  throw Error("MyLogError MISMATCH");
if(digitSum('You arE Very Smart') !== 327)
  throw Error("MyLogError MISMATCH");
}

test();
