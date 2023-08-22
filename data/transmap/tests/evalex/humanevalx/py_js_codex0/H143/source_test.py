#TESTED_PROGRAM

if words_in_sentence("This is a test") != "is":
  raise Exception("MyLogError MISMATCH")
if words_in_sentence("lets go for swimming") != "go for":
  raise Exception("MyLogError MISMATCH")
if words_in_sentence("there is no place available here") != "there is no place":
  raise Exception("MyLogError MISMATCH")
if words_in_sentence("Hi I am Hussein") != "Hi am Hussein":
  raise Exception("MyLogError MISMATCH")
if words_in_sentence("go for it") != "go for it":
  raise Exception("MyLogError MISMATCH")
if words_in_sentence("here") != "":
  raise Exception("MyLogError MISMATCH")
if words_in_sentence("here is") != "is":
  raise Exception("MyLogError MISMATCH")