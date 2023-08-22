#TESTED_PROGRAM

if get_max_triples(5) != 1:
  raise Exception("MyLogError MISMATCH")
if get_max_triples(6) != 4:
  raise Exception("MyLogError MISMATCH")
if get_max_triples(10) != 36:
  raise Exception("MyLogError MISMATCH")
if get_max_triples(100) != 53361:
  raise Exception("MyLogError MISMATCH")