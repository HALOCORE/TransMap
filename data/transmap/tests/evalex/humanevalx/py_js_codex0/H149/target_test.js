//TESTED_PROGRAM

if(
    JSON.stringify(sorted_list_sum(['aa', 'a', 'aaa'])) !== JSON.stringify(['aa'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sorted_list_sum(['school', 'AI', 'asdf', 'b'])) !==
    JSON.stringify(['AI', 'asdf', 'school'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sorted_list_sum(['d', 'b', 'c', 'a'])) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sorted_list_sum(['d', 'dcba', 'abcd', 'a'])) !==
    JSON.stringify(['abcd', 'dcba'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sorted_list_sum(['AI', 'ai', 'au'])) !==
    JSON.stringify(['AI', 'ai', 'au'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sorted_list_sum(['a', 'b', 'b', 'c', 'c', 'a'])) !==
    JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(sorted_list_sum(['aaaa', 'bbbb', 'dd', 'cc'])) !==
    JSON.stringify(['cc', 'dd', 'aaaa', 'bbbb'])
  )
  throw Error("MyLogError MISMATCH");