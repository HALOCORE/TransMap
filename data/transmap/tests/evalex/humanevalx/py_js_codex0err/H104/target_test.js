//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(unique_digits([15, 33, 1422, 1])) !==
    JSON.stringify([1, 15, 33])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(unique_digits([152, 323, 1422, 10])) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(unique_digits([12345, 2033, 111, 151])) !==
    JSON.stringify([111, 151])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(unique_digits([135, 103, 31])) !== JSON.stringify([31, 135])
  )
  throw Error("MyLogError MISMATCH");
}

test();
