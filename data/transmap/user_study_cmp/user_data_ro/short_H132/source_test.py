#TESTED_PROGRAM

if is_nested('[[]]') != True:
  raise Exception("MyLogError MISMATCH")
if is_nested('[]]]]]]][[[[[]') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested('[][]') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested(('[]')) != False:
  raise Exception("MyLogError MISMATCH")
if is_nested('[[[[]]]]') != True:
  raise Exception("MyLogError MISMATCH")
if is_nested('[]]]]]]]]]]') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested('[][][[]]') != True:
  raise Exception("MyLogError MISMATCH")
if is_nested('[[]') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested('[]]') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested('[[]][[') != True:
  raise Exception("MyLogError MISMATCH")
if is_nested('[[][]]') != True:
  raise Exception("MyLogError MISMATCH")
if is_nested('') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested('[[[[[[[[') != False:
  raise Exception("MyLogError MISMATCH")
if is_nested(']]]]]]]]') != False:
  raise Exception("MyLogError MISMATCH")