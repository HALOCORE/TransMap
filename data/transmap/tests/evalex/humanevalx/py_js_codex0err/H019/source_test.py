#TESTED_PROGRAM

if sort_numbers('') != '':
  raise Exception("MyLogError MISMATCH")
if sort_numbers('three') != 'three':
  raise Exception("MyLogError MISMATCH")
if sort_numbers('three five nine') != 'three five nine':
  raise Exception("MyLogError MISMATCH")
if sort_numbers('five zero four seven nine eight') != 'zero four five seven eight nine':
  raise Exception("MyLogError MISMATCH")
if sort_numbers('six five four three two one zero') != 'zero one two three four five six':
  raise Exception("MyLogError MISMATCH")