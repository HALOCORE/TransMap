#TESTED_PROGRAM

if flip_case('') != '':
  raise Exception("MyLogError MISMATCH")
if flip_case('Hello!') != 'hELLO!':
  raise Exception("MyLogError MISMATCH")
if flip_case('These violent delights have violent ends') != 'tHESE VIOLENT DELIGHTS HAVE VIOLENT ENDS':
  raise Exception("MyLogError MISMATCH")