#TESTED_PROGRAM

if (find_max(["name", "of", "string"]) != "string"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["name", "enam", "game"]) != "enam"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["aaaaaaa", "bb", "cc"]) != "aaaaaaa"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["abc", "cba"]) != "abc"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["play", "this", "game", "of","footbott"]) != "footbott"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["we", "are", "gonna", "rock"]) != "gonna"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["we", "are", "a", "mad", "nation"]) != "nation"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["this", "is", "a", "prrk"]) != "this"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["b"]) != "b"):
  raise Exception("MyLogError MISMATCH")
if (find_max(["play", "play", "play"]) != "play"):
  raise Exception("MyLogError MISMATCH")