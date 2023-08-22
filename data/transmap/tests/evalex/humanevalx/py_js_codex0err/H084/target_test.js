//TESTED_PROGRAM

function test(){

if(solve(1000) !== '1')
  throw Error("MyLogError MISMATCH");
if(solve(150) !== '110')
  throw Error("MyLogError MISMATCH");
if(solve(147) !== '1100')
  throw Error("MyLogError MISMATCH");
if(solve(333) !== '1001')
  throw Error("MyLogError MISMATCH");
if(solve(963) !== '10010')
  throw Error("MyLogError MISMATCH");
}

test();
