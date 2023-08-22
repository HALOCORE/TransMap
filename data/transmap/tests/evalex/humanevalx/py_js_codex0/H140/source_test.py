#TESTED_PROGRAM

if fix_spaces("Example") != "Example":
  raise Exception("MyLogError MISMATCH")
if fix_spaces("Mudasir Hanif ") != "Mudasir_Hanif_":
  raise Exception("MyLogError MISMATCH")
if fix_spaces("Yellow Yellow  Dirty  Fellow") != "Yellow_Yellow__Dirty__Fellow":
  raise Exception("MyLogError MISMATCH")
if fix_spaces("Exa   mple") != "Exa-mple":
  raise Exception("MyLogError MISMATCH")
if fix_spaces("   Exa 1 2 2 mple") != "-Exa_1_2_2_mple":
  raise Exception("MyLogError MISMATCH")