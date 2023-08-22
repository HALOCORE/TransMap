//TESTED_PROGRAM

if(
    JSON.stringify(parseNestedParens('(()()) ((())) () ((())()())')) !==
      JSON.stringify([2, 3, 1, 3])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(parseNestedParens('() (()) ((())) (((())))')) !==
      JSON.stringify([1, 2, 3, 4])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(parseNestedParens('(()(())((())))')) !== JSON.stringify([4])
  )
  throw Error("MyLogError MISMATCH");