//TESTED_PROGRAM

function test(){
if(JSON.stringify(filterIntegers([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(filterIntegers([4, {}, [], 23.2, 9, 'adasd'])) !==
      JSON.stringify([4, 9])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(filterIntegers([3, 'c', 3, 3, 'a', 'b'])) !==
      JSON.stringify([3, 3, 3])
  )
  throw Error("MyLogError MISMATCH");
}

test();
