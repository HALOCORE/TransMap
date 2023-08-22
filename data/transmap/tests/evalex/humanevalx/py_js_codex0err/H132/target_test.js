//TESTED_PROGRAM

function test(){

if(is_nested('[[]]') !== true)
  throw Error("MyLogError MISMATCH");
if(is_nested('[]]]]]]][[[[[]') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[][]') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[]') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[[[[]]]]') !== true)
  throw Error("MyLogError MISMATCH");
if(is_nested('[]]]]]]]]]]') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[][][[]]') !== true)
  throw Error("MyLogError MISMATCH");
if(is_nested('[[]') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[]]') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[[]][[') !== true)
  throw Error("MyLogError MISMATCH");
if(is_nested('[[][]]') !== true)
  throw Error("MyLogError MISMATCH");
if(is_nested('') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested('[[[[[[[[') !== false)
  throw Error("MyLogError MISMATCH");
if(is_nested(']]]]]]]]') !== false)
  throw Error("MyLogError MISMATCH");
}

test();
