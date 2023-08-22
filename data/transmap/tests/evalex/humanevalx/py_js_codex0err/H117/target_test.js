//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(select_words('Mary had a little lamb', 4)) !==
    JSON.stringify(['little'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(select_words('simple white space', 2)) !== JSON.stringify([])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(select_words('Hello world', 4)) !== JSON.stringify(['world'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(select_words('Uncle sam', 3)) !== JSON.stringify(['Uncle'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(select_words('a b c d e f', 1)) !==
    JSON.stringify(['b', 'c', 'd', 'f'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(select_words('Mary had a little lamb', 3)) !==
    JSON.stringify(['Mary', 'lamb'])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(select_words('', 4)) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
}

test();
