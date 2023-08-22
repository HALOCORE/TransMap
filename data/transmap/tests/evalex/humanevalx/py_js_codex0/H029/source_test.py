#TESTED_PROGRAM

if filter_by_prefix([], 'john') != []:
  raise Exception("MyLogError MISMATCH")
if filter_by_prefix(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx') != ['xxx', 'xxxAAA', 'xxx']:
  raise Exception("MyLogError MISMATCH")