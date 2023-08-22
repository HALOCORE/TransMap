//TESTED_PROGRAM

function test(){

if(sum_to_n(1) !== 1)
  throw Error("MyLogError MISMATCH");
if(sum_to_n(6) !== 21)
  throw Error("MyLogError MISMATCH");
if(sum_to_n(11) !== 66)
  throw Error("MyLogError MISMATCH");
if(sum_to_n(30) !== 465)
  throw Error("MyLogError MISMATCH");
if(sum_to_n(100) !== 5050)
  throw Error("MyLogError MISMATCH");
}

test();
