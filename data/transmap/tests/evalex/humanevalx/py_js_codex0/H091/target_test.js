//TESTED_PROGRAM

if(is_bored('Hello world') !== 0)
  throw Error("MyLogError MISMATCH");
if(is_bored('Is the sky blue?') !== 0)
  throw Error("MyLogError MISMATCH");
if(is_bored('I love It !') !== 1)
  throw Error("MyLogError MISMATCH");
if(is_bored('bIt') !== 0)
  throw Error("MyLogError MISMATCH");
if(
  is_bored('I feel good today. I will be productive. will kill It') !== 2
  )
  throw Error("MyLogError MISMATCH");
if(is_bored('You and I are going for a walk') !== 0)
  throw Error("MyLogError MISMATCH");