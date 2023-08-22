//TESTED_PROGRAM

if(
    JSON.stringify(split_words('Hello world!')) !==
    JSON.stringify(['Hello', 'world!'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(split_words('Hello,world!')) !==
    JSON.stringify(['Hello', 'world!'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(split_words('Hello world,!')) !==
    JSON.stringify(['Hello', 'world,!'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(split_words('Hello,Hello,world !')) !==
    JSON.stringify(['Hello,Hello,world', '!'])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(split_words('abcdef')) !== JSON.stringify(3))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(split_words('aaabb')) !== JSON.stringify(2))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(split_words('aaaBb')) !== JSON.stringify(1))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(split_words('')) !== JSON.stringify(0))
  throw Error("MyLogError MISMATCH");