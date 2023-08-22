//TESTED_PROGRAM

function test(){

if(words_in_sentence('This is a test') !== 'is')
  throw Error("MyLogError MISMATCH");
if(words_in_sentence('lets go for swimming') !== 'go for')
  throw Error("MyLogError MISMATCH");
if(
  words_in_sentence('there is no place available here') !== 'there is no place'
  )
  throw Error("MyLogError MISMATCH");
if(words_in_sentence('Hi I am Hussein') !== 'Hi am Hussein')
  throw Error("MyLogError MISMATCH");
if(words_in_sentence('go for it') !== 'go for it')
  throw Error("MyLogError MISMATCH");
if(words_in_sentence('here') !== '')
  throw Error("MyLogError MISMATCH");
if(words_in_sentence('here is') !== 'is')
  throw Error("MyLogError MISMATCH");
}

test();
