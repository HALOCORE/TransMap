#TESTED_PROGRAM

if remove_vowels('') != '':
  raise Exception("MyLogError MISMATCH")
if remove_vowels("abcdef\nghijklm") != 'bcdf\nghjklm':
  raise Exception("MyLogError MISMATCH")
if remove_vowels('fedcba') != 'fdcb':
  raise Exception("MyLogError MISMATCH")
if remove_vowels('eeeee') != '':
  raise Exception("MyLogError MISMATCH")
if remove_vowels('acBAA') != 'cB':
  raise Exception("MyLogError MISMATCH")
if remove_vowels('EcBOO') != 'cB':
  raise Exception("MyLogError MISMATCH")
if remove_vowels('ybcd') != 'ybcd':
  raise Exception("MyLogError MISMATCH")