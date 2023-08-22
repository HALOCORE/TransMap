//TESTED_PROGRAM

function test(){

if(move_one_ball([3, 4, 5, 1, 2]) !== true)
  throw Error("MyLogError MISMATCH");
if(move_one_ball([3, 5, 10, 1, 2]) !== true)
  throw Error("MyLogError MISMATCH");
if(move_one_ball([4, 3, 1, 2]) !== false)
  throw Error("MyLogError MISMATCH");
if(move_one_ball([3, 5, 4, 1, 2]) !== false)
  throw Error("MyLogError MISMATCH");
if(move_one_ball([]) !== true)
  throw Error("MyLogError MISMATCH");
}

test();
