//TESTED_PROGRAM

function test(){

if(simplify('1/5', '5/1') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('1/6', '2/1') !== false)
  throw Error("MyLogError MISMATCH");
if(simplify('5/1', '3/1') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('7/10', '10/2') !== false)
  throw Error("MyLogError MISMATCH");
if(simplify('2/10', '50/10') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('7/2', '4/2') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('11/6', '6/1') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('2/3', '5/2') !== false)
  throw Error("MyLogError MISMATCH");
if(simplify('5/2', '3/5') !== false)
  throw Error("MyLogError MISMATCH");
if(simplify('2/4', '8/4') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('2/4', '4/2') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('1/5', '5/1') !== true)
  throw Error("MyLogError MISMATCH");
if(simplify('1/5', '1/5') !== false)
  throw Error("MyLogError MISMATCH");
}

test();
