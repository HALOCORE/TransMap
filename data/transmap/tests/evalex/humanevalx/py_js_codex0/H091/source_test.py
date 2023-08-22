#TESTED_PROGRAM

if is_bored("Hello world") != 0:
  raise Exception("MyLogError MISMATCH")
if is_bored("Is the sky blue?") != 0:
  raise Exception("MyLogError MISMATCH")
if is_bored("I love It !") != 1:
  raise Exception("MyLogError MISMATCH")
if is_bored("bIt") != 0:
  raise Exception("MyLogError MISMATCH")
if is_bored("I feel good today. I will be productive. will kill It") != 2:
  raise Exception("MyLogError MISMATCH")
if is_bored("You and I are going for a walk") != 0:
  raise Exception("MyLogError MISMATCH")