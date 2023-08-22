//TESTED_PROGRAM

function test(){

if(
    JSON.stringify(words_string('Hi, my name is John')) !==
    JSON.stringify(['Hi', 'my', 'name', 'is', 'John'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(words_string('One, two, three, four, five, six')) !==
    JSON.stringify(['One', 'two', 'three', 'four', 'five', 'six'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(words_string('Hi, my name')) !==
    JSON.stringify(['Hi', 'my', 'name'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(words_string('One,, two, three, four, five, six,')) !==
    JSON.stringify(['One', 'two', 'three', 'four', 'five', 'six'])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(words_string('')) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(words_string('ahmed     , gamal')) !==
    JSON.stringify(['ahmed', 'gamal'])
  )
  throw Error("MyLogError MISMATCH");
}

test();
