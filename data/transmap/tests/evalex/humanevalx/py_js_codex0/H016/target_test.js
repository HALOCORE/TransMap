//TESTED_PROGRAM

if(count_distinct_characters('') !== 0)
  throw Error("MyLogError MISMATCH");
if(count_distinct_characters('abcde') !== 5)
  throw Error("MyLogError MISMATCH");
if(count_distinct_characters('abcde' + 'cade' + 'CADE') !== 5)
  throw Error("MyLogError MISMATCH");
if(count_distinct_characters('aaaaAAAAaaaa') !== 1)
  throw Error("MyLogError MISMATCH");
if(count_distinct_characters('Jerry jERRY JeRRRY') !== 5)
  throw Error("MyLogError MISMATCH");