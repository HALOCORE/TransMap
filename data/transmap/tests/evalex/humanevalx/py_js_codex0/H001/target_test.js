//TESTED_PROGRAM

if(
    JSON.stringify(separateParenGroups('(()()) ((())) () ((())()())')) !==
      JSON.stringify(['(()())', '((()))', '()', '((())()())'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(separateParenGroups('() (()) ((())) (((())))')) !==
      JSON.stringify(['()', '(())', '((()))', '(((())))'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(separateParenGroups('(()(())((())))')) !==
      JSON.stringify(['(()(())((())))'])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(separateParenGroups('( ) (( )) (( )( ))')) !==
      JSON.stringify(['()', '(())', '(()())'])
  )
  throw Error("MyLogError MISMATCH");