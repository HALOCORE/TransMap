#TESTED_PROGRAM

if split_words("Hello world!") != ["Hello","world!"]:
  raise Exception("MyLogError MISMATCH")
if split_words("Hello,world!") != ["Hello","world!"]:
  raise Exception("MyLogError MISMATCH")
if split_words("Hello world,!") != ["Hello","world,!"]:
  raise Exception("MyLogError MISMATCH")
if split_words("Hello,Hello,world !") != ["Hello,Hello,world","!"]:
  raise Exception("MyLogError MISMATCH")
if split_words("abcdef") != 3:
  raise Exception("MyLogError MISMATCH")
if split_words("aaabb") != 2:
  raise Exception("MyLogError MISMATCH")
if split_words("aaaBb") != 1:
  raise Exception("MyLogError MISMATCH")
if split_words("") != 0:
  raise Exception("MyLogError MISMATCH")