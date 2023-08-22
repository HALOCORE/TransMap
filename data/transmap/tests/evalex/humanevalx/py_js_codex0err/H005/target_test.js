//TESTED_PROGRAM

function test(){

  if(JSON.stringify(intersperse([], 7)) !== JSON.stringify([]))
    throw Error("MyLogError MISMATCH");
  if(
      JSON.stringify(
        intersperse([5, 6, 3, 2], 8)) !== JSON.stringify([5, 8, 6, 8, 3, 8, 2])
    )
    throw Error("MyLogError MISMATCH");
  if(
      JSON.stringify(
        intersperse([2, 2, 2], 2)) !== JSON.stringify([2, 2, 2, 2, 2])
    )
    throw Error("MyLogError MISMATCH");
}

test();
