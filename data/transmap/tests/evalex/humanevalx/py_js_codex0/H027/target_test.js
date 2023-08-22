//TESTED_PROGRAM

if(flipCase('') !== '')
  throw Error("MyLogError MISMATCH");
if(flipCase('Hello!') !== 'hELLO!')
  throw Error("MyLogError MISMATCH");
if(
    flipCase(
      'These violent delights have violent ends') !==
        'tHESE VIOLENT DELIGHTS HAVE VIOLENT ENDS'
  )
  throw Error("MyLogError MISMATCH");