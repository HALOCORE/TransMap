#TESTED_PROGRAM

if not correct_bracketing("<>"):
  raise Exception("MyLogError MISMATCH")
if not correct_bracketing("<<><>>"):
  raise Exception("MyLogError MISMATCH")
if not correct_bracketing("<><><<><>><>"):
  raise Exception("MyLogError MISMATCH")
if not correct_bracketing("<><><<<><><>><>><<><><<>>>"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("<<<><>>>>"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("><<>"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("<"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("<<<<"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing(">"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("<<>"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("<><><<><>><>><<>"):
  raise Exception("MyLogError MISMATCH")
if correct_bracketing("<><><<><>><>>><>"):
  raise Exception("MyLogError MISMATCH")