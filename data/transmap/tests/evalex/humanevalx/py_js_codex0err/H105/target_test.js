//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(by_length([2, 1, 1, 4, 5, 8, 2, 3])) !==
    JSON.stringify([
      'Eight',
      'Five',
      'Four',
      'Three',
      'Two',
      'Two',
      'One',
      'One',
    ])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(by_length([])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(by_length([1, -1, 55])) !== JSON.stringify(['One'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(by_length([1, -1, 3, 2])) !==
    JSON.stringify(['Three', 'Two', 'One'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(by_length([9, 4, 8])) !==
    JSON.stringify(['Nine', 'Eight', 'Four'])
  )
  throw Error("MyLogError MISMATCH");
}

test();
