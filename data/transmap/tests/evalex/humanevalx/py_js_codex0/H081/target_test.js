//TESTED_PROGRAM

if(
    JSON.stringify(numerical_letter_grade([4.0, 3, 1.7, 2, 3.5])) !==
    JSON.stringify(['A+', 'B', 'C-', 'C', 'A-'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(numerical_letter_grade([1.2])) !== JSON.stringify(['D+'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(numerical_letter_grade([0.5])) !== JSON.stringify(['D-'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(numerical_letter_grade([0.0])) !== JSON.stringify(['E'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(numerical_letter_grade([1, 0.3, 1.5, 2.8, 3.3])) !==
    JSON.stringify(['D', 'D-', 'C-', 'B', 'B+'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(numerical_letter_grade([0, 0.7])) !==
    JSON.stringify(['E', 'D-'])
  )
  throw Error("MyLogError MISMATCH");