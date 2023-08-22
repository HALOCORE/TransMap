//TESTED_PROGRAM

if(
    JSON.stringify(bf('Jupiter', 'Neptune')) !==
    JSON.stringify(['Saturn', 'Uranus'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(bf('Earth', 'Mercury')) !== JSON.stringify(['Venus'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(bf('Mercury', 'Uranus')) !==
    JSON.stringify(['Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(bf('Neptune', 'Venus')) !==
    JSON.stringify(['Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus'])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(bf('Earth', 'Earth')) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(bf('Mars', 'Earth')) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(bf('Jupiter', 'Makemake')) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");