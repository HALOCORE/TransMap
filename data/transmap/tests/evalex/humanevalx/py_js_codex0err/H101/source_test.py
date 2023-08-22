#TESTED_PROGRAM

if words_string("Hi, my name is John") != ["Hi", "my", "name", "is", "John"]:
  raise Exception("MyLogError MISMATCH")
if words_string("One, two, three, four, five, six") != ["One", "two", "three", "four", "five", "six"]:
  raise Exception("MyLogError MISMATCH")
if words_string("Hi, my name") != ["Hi", "my", "name"]:
  raise Exception("MyLogError MISMATCH")
if words_string("One,, two, three, four, five, six,") != ["One", "two", "three", "four", "five", "six"]:
  raise Exception("MyLogError MISMATCH")
if words_string("") != []:
  raise Exception("MyLogError MISMATCH")
if words_string("ahmed     , gamal") != ["ahmed", "gamal"]:
  raise Exception("MyLogError MISMATCH")