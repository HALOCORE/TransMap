//TESTED_PROGRAM

function test(){

if(find_max(['name', 'of', 'string']) !== 'string')
  throw Error("MyLogError MISMATCH");
if(find_max(['name', 'enam', 'game']) !== 'enam')
  throw Error("MyLogError MISMATCH");
if(find_max(['aaaaaaa', 'bb', 'cc']) !== 'aaaaaaa')
  throw Error("MyLogError MISMATCH");
if(find_max(['abc', 'cba']) !== 'abc')
  throw Error("MyLogError MISMATCH");
if(
    find_max(['play', 'this', 'game', 'of', 'footbott']) !== 'footbott'
  )
  throw Error("MyLogError MISMATCH");
if(find_max(['we', 'are', 'gonna', 'rock']) !== 'gonna')
  throw Error("MyLogError MISMATCH");
if(find_max(['we', 'are', 'a', 'mad', 'nation']) !== 'nation')
  throw Error("MyLogError MISMATCH");
if(find_max(['this', 'is', 'a', 'prrk']) !== 'this')
  throw Error("MyLogError MISMATCH");
if(find_max(['b']) !== 'b')
  throw Error("MyLogError MISMATCH");
if(find_max(['play', 'play', 'play']) !== 'play')
  throw Error("MyLogError MISMATCH");
}

test();
