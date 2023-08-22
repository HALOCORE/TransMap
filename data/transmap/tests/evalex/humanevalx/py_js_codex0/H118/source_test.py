#TESTED_PROGRAM

if get_closest_vowel("yogurt") != "u":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("full") != "u":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("easy") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("eAsy") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("ali") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("bad") != "a":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("most") != "o":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("ab") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("ba") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("quick") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("anime") != "i":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("Asia") != "":
  raise Exception("MyLogError MISMATCH")
if get_closest_vowel("Above") != "o":
  raise Exception("MyLogError MISMATCH")