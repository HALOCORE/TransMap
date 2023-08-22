#TESTED_PROGRAM

if solve("AsDf") != "aSdF":
  raise Exception("MyLogError MISMATCH")
if solve("1234") != "4321":
  raise Exception("MyLogError MISMATCH")
if solve("ab") != "AB":
  raise Exception("MyLogError MISMATCH")
if solve("#a@C") != "#A@c":
  raise Exception("MyLogError MISMATCH")
if solve("#AsdfW^45") != "#aSDFw^45":
  raise Exception("MyLogError MISMATCH")
if solve("#6@2") != "2@6#":
  raise Exception("MyLogError MISMATCH")
if solve("#$a^D") != "#$A^d":
  raise Exception("MyLogError MISMATCH")
if solve("#ccc") != "#CCC":
  raise Exception("MyLogError MISMATCH")