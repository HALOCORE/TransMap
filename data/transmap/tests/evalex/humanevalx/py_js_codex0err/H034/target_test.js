//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(unique([5, 3, 5, 2, 3, 3, 9, 0, 123])) !==
      JSON.stringify([0, 2, 3, 5, 9, 123])
  )
  throw Error("MyLogError MISMATCH");
}

test();
