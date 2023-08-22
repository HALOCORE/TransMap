#TESTED_PROGRAM

if parse_nested_parens('(()()) ((())) () ((())()())') != [2, 3, 1, 3]:
  raise Exception("MyLogError MISMATCH")
if parse_nested_parens('() (()) ((())) (((())))') != [1, 2, 3, 4]:
  raise Exception("MyLogError MISMATCH")
if parse_nested_parens('(()(())((())))') != [4]:
  raise Exception("MyLogError MISMATCH")