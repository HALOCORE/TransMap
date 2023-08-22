//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(get_odd_collatz(14)) !== JSON.stringify([1, 5, 7, 11, 13, 17])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_odd_collatz(5)) !== JSON.stringify([1, 5]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_odd_collatz(12)) !== JSON.stringify([1, 3, 5]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_odd_collatz(1)) !== JSON.stringify([1]))
  throw Error("MyLogError MISMATCH");
}

test();
