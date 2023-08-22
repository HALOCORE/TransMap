#TESTED_PROGRAM

if concatenate([]) != '':
  raise Exception("MyLogError MISMATCH")
if concatenate(['x', 'y', 'z']) != 'xyz':
  raise Exception("MyLogError MISMATCH")
if concatenate(['x', 'y', 'z', 'w', 'k']) != 'xyzwk':
  raise Exception("MyLogError MISMATCH")