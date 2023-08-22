#TESTED_PROGRAM

if bf("Jupiter", "Neptune") != ("Saturn", "Uranus"):
    raise Exception("MyLogError MISMATCH")
if bf("Earth", "Mercury") != ("Venus",):
  raise Exception("MyLogError MISMATCH")
if bf("Mercury", "Uranus") != ("Venus", "Earth", "Mars", "Jupiter", "Saturn"):
  raise Exception("MyLogError MISMATCH")
if bf("Neptune", "Venus") != ("Earth", "Mars", "Jupiter", "Saturn", "Uranus"):
  raise Exception("MyLogError MISMATCH")
if bf("Earth", "Earth") != ():
  raise Exception("MyLogError MISMATCH")
if bf("Mars", "Earth") != ():
  raise Exception("MyLogError MISMATCH")
if bf("Jupiter", "Makemake") != ():
  raise Exception("MyLogError MISMATCH")