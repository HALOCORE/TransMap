//TESTED_PROGRAM

if(JSON.stringify(total_match([], [])) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match(['hi', 'admin'], ['hi', 'hi'])) !==
      JSON.stringify(['hi', 'hi'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      total_match(['hi', 'admin'], ['hi', 'hi', 'admin', 'project'])
    ) !== JSON.stringify(['hi', 'admin'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match(['4'], ['1', '2', '3', '4', '5'])) !==
      JSON.stringify(['4'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match(['hi', 'admin'], ['hI', 'Hi'])) !==
      JSON.stringify(['hI', 'Hi'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match(['hi', 'admin'], ['hI', 'hi', 'hi'])) !==
      JSON.stringify(['hI', 'hi', 'hi'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match(['hi', 'admin'], ['hI', 'hi', 'hii'])) !==
      JSON.stringify(['hi', 'admin'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match([], ['this'])) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(total_match(['this'], [])) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");