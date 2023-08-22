//TESTED_PROGRAM

function test(){

if(JSON.stringify(sort_array([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([5])) !== JSON.stringify([5]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([2, 4, 3, 0, 1, 5])) !== JSON.stringify([0, 1, 2, 3, 4, 5]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([2, 4, 3, 0, 1, 5, 6])) !== JSON.stringify([6, 5, 4, 3, 2, 1, 0]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([2, 1])) !== JSON.stringify([1, 2]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([15, 42, 87, 32, 11, 0])) !== JSON.stringify([0, 11, 15, 32, 42, 87]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(sort_array([21, 14, 23, 11])) !== JSON.stringify([23, 21, 14, 11]))
  throw Error("MyLogError MISMATCH");
}

test();
