#TESTED_PROGRAM

if total_match([], []) != []:
  raise Exception("MyLogError MISMATCH")
if total_match(['hi', 'admin'], ['hi', 'hi']) != ['hi', 'hi']:
  raise Exception("MyLogError MISMATCH")
if total_match(['hi', 'admin'], ['hi', 'hi', 'admin', 'project']) != ['hi', 'admin']:
  raise Exception("MyLogError MISMATCH")
if total_match(['4'], ['1', '2', '3', '4', '5']) != ['4']:
  raise Exception("MyLogError MISMATCH")
if total_match(['hi', 'admin'], ['hI', 'Hi']) != ['hI', 'Hi']:
  raise Exception("MyLogError MISMATCH")
if total_match(['hi', 'admin'], ['hI', 'hi', 'hi']) != ['hI', 'hi', 'hi']:
  raise Exception("MyLogError MISMATCH")
if total_match(['hi', 'admin'], ['hI', 'hi', 'hii']) != ['hi', 'admin']:
  raise Exception("MyLogError MISMATCH")
if total_match([], ['this']) != []:
  raise Exception("MyLogError MISMATCH")
if total_match(['this'], []) != []:
  raise Exception("MyLogError MISMATCH")