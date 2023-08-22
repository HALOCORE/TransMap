//TESTED_PROGRAM

function test(){

if(do_algebra(['**', '*', '+'], [2, 3, 4, 5]) !== 37)
  throw Error("MyLogError MISMATCH");
if(do_algebra(['+', '*', '-'], [2, 3, 4, 5]) !== 9)
  throw Error("MyLogError MISMATCH");
if(do_algebra(['//', '*'], [7, 3, 4]) !== 8)
  throw Error("MyLogError MISMATCH");
}

test();
