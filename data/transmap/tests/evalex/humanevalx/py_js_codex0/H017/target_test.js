//TESTED_PROGRAM

if(JSON.stringify(parseMusic('')) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(parseMusic('o o o o')) !== JSON.stringify([4, 4, 4, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(parseMusic('.| .| .| .|')) !== JSON.stringify([1, 1, 1, 1])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(parseMusic('o| o| .| .| o o o o')) !==
      JSON.stringify([2, 2, 1, 1, 4, 4, 4, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(parseMusic('o| .| o| .| o o| o o|')) !==
      JSON.stringify([2, 1, 2, 1, 4, 2, 4, 2])
  )
  throw Error("MyLogError MISMATCH");