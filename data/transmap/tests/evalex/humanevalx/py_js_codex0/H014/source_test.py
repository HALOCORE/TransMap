#TESTED_PROGRAM

if all_prefixes('') != []:
  raise Exception("MyLogError MISMATCH")
if all_prefixes('asdfgh') != ['a', 'as', 'asd', 'asdf', 'asdfg', 'asdfgh']:
  raise Exception("MyLogError MISMATCH")
if all_prefixes('WWW') != ['W', 'WW', 'WWW']:
  raise Exception("MyLogError MISMATCH")