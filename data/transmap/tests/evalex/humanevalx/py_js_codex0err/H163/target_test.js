//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(generate_integers(2, 10)) !== JSON.stringify([2, 4, 6, 8])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(generate_integers(10, 2)) !== JSON.stringify([2, 4, 6, 8])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(generate_integers(132, 2)) !== JSON.stringify([2, 4, 6, 8])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(generate_integers(17, 89)) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
}

test();
