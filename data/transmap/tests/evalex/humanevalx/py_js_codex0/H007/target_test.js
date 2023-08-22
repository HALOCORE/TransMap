//TESTED_PROGRAM

if(
    JSON.stringify(filterBySubstring([], 'john')) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      filterBySubstring(
        ['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'],
        'xxx'
      )
    ) !== JSON.stringify(['xxx', 'xxxAAA', 'xxx'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      filterBySubstring(
        ['xxx', 'asd', 'aaaxxy', 'john doe', 'xxxAAA', 'xxx'],
        'xx'
      )
    ) !== JSON.stringify(['xxx', 'aaaxxy', 'xxxAAA', 'xxx'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      filterBySubstring(['grunt', 'trumpet', 'prune', 'gruesome'], 'run')
    ) !== JSON.stringify(['grunt', 'prune'])
  )
  throw Error("MyLogError MISMATCH");