//TESTED_PROGRAM

if(
    JSON.stringify(filterByPrefix([], 'john')) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      filterByPrefix(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx')
    ) !== JSON.stringify(['xxx', 'xxxAAA', 'xxx'])
  )
  throw Error("MyLogError MISMATCH");