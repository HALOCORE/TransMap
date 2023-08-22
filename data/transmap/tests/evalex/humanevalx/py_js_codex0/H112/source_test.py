#TESTED_PROGRAM

if reverse_delete("abcde","ae") != ('bcd',False):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("abcdef", "b") != ('acdef',False):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("abcdedcba","ab") != ('cdedc',True):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("dwik","w") != ('dik',False):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("a","a") != ('',True):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("abcdedcba","") != ('abcdedcba',True):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("abcdedcba","v") != ('abcdedcba',True):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("vabba","v") != ('abba',True):
  raise Exception("MyLogError MISMATCH")
if reverse_delete("mamma", "mia") != ("", True):
  raise Exception("MyLogError MISMATCH")