//TESTED_PROGRAM

function test(){

if(same_chars('eabcdzzzz', 'dddzzzzzzzddeddabc') !== true)
  throw Error("MyLogError MISMATCH");
if(same_chars('abcd', 'dddddddabc') !== true)
  throw Error("MyLogError MISMATCH");
if(same_chars('dddddddabc', 'abcd') !== true)
  throw Error("MyLogError MISMATCH");
if(same_chars('eabcd', 'dddddddabc') !== false)
  throw Error("MyLogError MISMATCH");
if(same_chars('abcd', 'dddddddabcf') !== false)
  throw Error("MyLogError MISMATCH");
if(same_chars('eabcdzzzz', 'dddzzzzzzzddddabc') !== false)
  throw Error("MyLogError MISMATCH");
if(same_chars('aabb', 'aaccc') !== false)
  throw Error("MyLogError MISMATCH");
}

test();
