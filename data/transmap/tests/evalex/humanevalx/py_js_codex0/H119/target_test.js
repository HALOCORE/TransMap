//TESTED_PROGRAM

if(match_parens(['()(', ')']) !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(match_parens([')', ')']) !== 'No')
  throw Error("MyLogError MISMATCH");
if(match_parens(['(()(())', '())())']) !== 'No')
  throw Error("MyLogError MISMATCH");
if(match_parens([')())', '(()()(']) !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(match_parens(['(())))', '(()())((']) !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(match_parens(['()', '())']) !== 'No')
  throw Error("MyLogError MISMATCH");
if(match_parens(['(()(', '()))()']) !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(match_parens(['((((', '((())']) !== 'No')
  throw Error("MyLogError MISMATCH");
if(match_parens([')(()', '(()(']) !== 'No')
  throw Error("MyLogError MISMATCH");
if(match_parens([')(', ')(']) !== 'No')
  throw Error("MyLogError MISMATCH");
if(match_parens(['(', ')']) !== 'Yes')
  throw Error("MyLogError MISMATCH");
if(match_parens([')', '(']) !== 'Yes')
  throw Error("MyLogError MISMATCH");