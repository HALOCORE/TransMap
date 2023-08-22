#TESTED_PROGRAM
from random import randint, choice
import copy
import string

letters = string.ascii_lowercase
for _ in range(100):
  str_x = ''.join(choice(letters) for i in range(randint(10, 20)))
  encoded_str = encode_shift(str_x)
  if decode_shift(copy.deepcopy(encoded_str)) != str_x:
    raise Exception("MyLogError MISMATCH")