#TESTED_PROGRAM

if count_distinct_characters('') != 0:
  raise Exception("MyLogError MISMATCH")
if count_distinct_characters('abcde') != 5:
  raise Exception("MyLogError MISMATCH")
if count_distinct_characters('abcde' + 'cade' + 'CADE') != 5:
  raise Exception("MyLogError MISMATCH")
if count_distinct_characters('aaaaAAAAaaaa') != 1:
  raise Exception("MyLogError MISMATCH")
if count_distinct_characters('Jerry jERRY JeRRRY') != 5:
  raise Exception("MyLogError MISMATCH")