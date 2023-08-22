#TESTED_PROGRAM

from random import randint, choice
import string

letters = string.ascii_lowercase
for _ in range(100):
  str = ''.join(choice(letters) for i in range(randint(10, 20)))
  encoded_str = encode_cyclic(str)
  if decode_cyclic(encoded_str) != str:
    raise Exception("MyLogError MISMATCH")