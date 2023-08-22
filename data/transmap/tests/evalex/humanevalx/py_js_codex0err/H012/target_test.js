//TESTED_PROGRAM

function test(){
  if(longest([]) !== null)
    throw Error("MyLogError MISMATCH");
  if(longest(['x', 'y', 'z']) !== 'x')
    throw Error("MyLogError MISMATCH");
  if(longest(['x', 'yyy', 'zzzz', 'www', 'kkkk', 'abc']) !== 'zzzz')
    throw Error("MyLogError MISMATCH");
}

test();
