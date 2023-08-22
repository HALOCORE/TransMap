#TESTED_PROGRAM

if separate_paren_groups('(()()) ((())) () ((())()())') != [
        '(()())', '((()))', '()', '((())()())'
    ]:
  raise Exception("MyLogError MISMATCH")
if separate_paren_groups('() (()) ((())) (((())))') != [
        '()', '(())', '((()))', '(((())))'
    ]:
  raise Exception("MyLogError MISMATCH")
if separate_paren_groups('(()(())((())))') != [
        '(()(())((())))'
    ]:
  raise Exception("MyLogError MISMATCH")
if separate_paren_groups('( ) (( )) (( )( ))') != ['()', '(())', '(()())']:
  raise Exception("MyLogError MISMATCH")