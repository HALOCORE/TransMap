#TESTED_PROGRAM

if check_if_last_char_is_a_letter("apple") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("apple pi e") != True:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("eeeee") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("A") != True:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("Pumpkin pie ") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("Pumpkin pie 1") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("eeeee e ") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("apple pie") != False:
  raise Exception("MyLogError MISMATCH")
if check_if_last_char_is_a_letter("apple pi e ") != False:
  raise Exception("MyLogError MISMATCH")