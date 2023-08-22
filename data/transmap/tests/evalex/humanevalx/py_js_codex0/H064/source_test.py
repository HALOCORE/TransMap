#TESTED_PROGRAM

if vowels_count("abcde") != 2:
  raise Exception("MyLogError MISMATCH")
if vowels_count("Alone") != 3:
  raise Exception("MyLogError MISMATCH")
if vowels_count("key") != 2:
  raise Exception("MyLogError MISMATCH")
if vowels_count("bye") != 1:
  raise Exception("MyLogError MISMATCH")
if vowels_count("keY") != 2:
  raise Exception("MyLogError MISMATCH")
if vowels_count("bYe") != 1:
  raise Exception("MyLogError MISMATCH")
if vowels_count("ACEDY") != 3:
  raise Exception("MyLogError MISMATCH")