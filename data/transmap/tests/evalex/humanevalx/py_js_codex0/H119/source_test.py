#TESTED_PROGRAM

if match_parens(['()(', ')']) != 'Yes':
  raise Exception("MyLogError MISMATCH")
if match_parens([')', ')']) != 'No':
  raise Exception("MyLogError MISMATCH")
if match_parens(['(()(())', '())())']) != 'No':
  raise Exception("MyLogError MISMATCH")
if match_parens([')())', '(()()(']) != 'Yes':
  raise Exception("MyLogError MISMATCH")
if match_parens(['(())))', '(()())((']) != 'Yes':
  raise Exception("MyLogError MISMATCH")
if match_parens(['()', '())']) != 'No':
  raise Exception("MyLogError MISMATCH")
if match_parens(['(()(', '()))()']) != 'Yes':
  raise Exception("MyLogError MISMATCH")
if match_parens(['((((', '((())']) != 'No':
  raise Exception("MyLogError MISMATCH")
if match_parens([')(()', '(()(']) != 'No':
  raise Exception("MyLogError MISMATCH")
if match_parens([')(', ')(']) != 'No':
  raise Exception("MyLogError MISMATCH")
if match_parens(['(', ')']) != 'Yes':
  raise Exception("MyLogError MISMATCH")
if match_parens([')', '(']) != 'Yes':
  raise Exception("MyLogError MISMATCH")