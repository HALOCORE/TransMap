//TESTED_PROGRAM

function test(){

if(encode('TEST') !== 'tgst')
  throw Error("MyLogError MISMATCH");
if(encode('Mudasir') !== 'mWDCSKR')
  throw Error("MyLogError MISMATCH");
if(encode('YES') !== 'ygs')
  throw Error("MyLogError MISMATCH");
if(encode('This is a message') !== 'tHKS KS C MGSSCGG')
  throw Error("MyLogError MISMATCH");
if(
    encode('I DoNt KnOw WhAt tO WrItE') !== 'k dQnT kNqW wHcT Tq wRkTg'
  )
  throw Error("MyLogError MISMATCH");
}

test();
