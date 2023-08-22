#TESTED_PROGRAM

# Check some simple cases
if select_words("Mary had a little lamb", 4) != ["little"]:
  raise Exception("MyLogError MISMATCH")
if select_words("Mary had a little lamb", 3) != ["Mary", "lamb"]:
  raise Exception("MyLogError MISMATCH")
if select_words("simple white space", 2) != []:
  raise Exception("MyLogError MISMATCH")
if select_words("Hello world", 4) != ["world"]:
  raise Exception("MyLogError MISMATCH")
if select_words("Uncle sam", 3) != ["Uncle"]:
  raise Exception("MyLogError MISMATCH")
if select_words("", 4) != []:
  raise Exception("MyLogError MISMATCH")
if select_words("a b c d e f", 1) != ["b", "c", "d", "f"]:
  raise Exception("MyLogError MISMATCH")