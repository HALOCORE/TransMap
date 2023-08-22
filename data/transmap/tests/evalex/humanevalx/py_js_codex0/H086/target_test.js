//TESTED_PROGRAM

if(anti_shuffle('Hi') !== 'Hi')
  throw Error("MyLogError MISMATCH");
if(anti_shuffle('hello') !== 'ehllo')
  throw Error("MyLogError MISMATCH");
if(anti_shuffle('number') !== 'bemnru')
  throw Error("MyLogError MISMATCH");
if(anti_shuffle('abcd') !== 'abcd')
  throw Error("MyLogError MISMATCH");
if(anti_shuffle('Hello World!!!') !== 'Hello !!!Wdlor')
  throw Error("MyLogError MISMATCH");
if(anti_shuffle('') !== '')
  throw Error("MyLogError MISMATCH");
if(
    anti_shuffle('Hi. My name is Mister Robot. How are you?') !==
    '.Hi My aemn is Meirst .Rboot How aer ?ouy'
  )
  throw Error("MyLogError MISMATCH");