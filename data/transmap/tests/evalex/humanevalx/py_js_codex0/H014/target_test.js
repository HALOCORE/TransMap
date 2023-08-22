//TESTED_PROGRAM

if(JSON.stringify(allPrefixes('')) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      allPrefixes('asdfgh')) !==
        JSON.stringify(['a', 'as', 'asd', 'asdf', 'asdfg', 'asdfgh'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(allPrefixes('WWW')) !== JSON.stringify(['W', 'WW', 'WWW'])
  )
  throw Error("MyLogError MISMATCH");