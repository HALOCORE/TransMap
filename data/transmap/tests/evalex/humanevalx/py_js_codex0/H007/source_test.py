#TESTED_PROGRAM

if filter_by_substring([], 'john') != []:
  raise Exception("MyLogError MISMATCH")
if filter_by_substring(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx') != ['xxx', 'xxxAAA', 'xxx']:
  raise Exception("MyLogError MISMATCH")
if filter_by_substring(['xxx', 'asd', 'aaaxxy', 'john doe', 'xxxAAA', 'xxx'], 'xx') != ['xxx', 'aaaxxy', 'xxxAAA', 'xxx']:
  raise Exception("MyLogError MISMATCH")
if filter_by_substring(['grunt', 'trumpet', 'prune', 'gruesome'], 'run') != ['grunt', 'prune']:
  raise Exception("MyLogError MISMATCH")