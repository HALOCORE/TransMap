//TESTED_PROGRAM

if(JSON.stringify(count_up_to(5)) !== JSON.stringify([2, 3]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(count_up_to(6)) !== JSON.stringify([2, 3, 5]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(count_up_to(7)) !== JSON.stringify([2, 3, 5]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(count_up_to(10)) !== JSON.stringify([2, 3, 5, 7]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(count_up_to(0)) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(count_up_to(22)) !==
    JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(count_up_to(1)) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(count_up_to(18)) !== JSON.stringify([2, 3, 5, 7, 11, 13, 17])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(count_up_to(47)) !==
    JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(count_up_to(101)) !==
    JSON.stringify([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ])
  )
  throw Error("MyLogError MISMATCH");