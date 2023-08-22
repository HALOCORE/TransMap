#TESTED_PROGRAM

if encrypt('hi') != 'lm':
  raise Exception("MyLogError MISMATCH")
if encrypt('asdfghjkl') != 'ewhjklnop':
  raise Exception("MyLogError MISMATCH")
if encrypt('gf') != 'kj':
  raise Exception("MyLogError MISMATCH")
if encrypt('et') != 'ix':
  raise Exception("MyLogError MISMATCH")
if encrypt('faewfawefaewg')!='jeiajeaijeiak':
  raise Exception("MyLogError MISMATCH")
if encrypt('hellomyfriend')!='lippsqcjvmirh':
  raise Exception("MyLogError MISMATCH")
if encrypt('dxzdlmnilfuhmilufhlihufnmlimnufhlimnufhfucufh')!='hbdhpqrmpjylqmpyjlpmlyjrqpmqryjlpmqryjljygyjl':
  raise Exception("MyLogError MISMATCH")
if encrypt('a')!='e':
  raise Exception("MyLogError MISMATCH")