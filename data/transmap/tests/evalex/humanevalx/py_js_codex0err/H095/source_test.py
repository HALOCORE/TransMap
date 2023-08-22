#TESTED_PROGRAM

# Check some simple cases
if check_dict_case({"p":"pineapple", "b":"banana"}) != True:
  raise Exception("MyLogError MISMATCH")
if check_dict_case({"p":"pineapple", "A":"banana", "B":"banana"}) != False:
  raise Exception("MyLogError MISMATCH")
if check_dict_case({"p":"pineapple", 5:"banana", "a":"apple"}) != False:
  raise Exception("MyLogError MISMATCH")
if check_dict_case({"Name":"John", "Age":"36", "City":"Houston"}) != False:
  raise Exception("MyLogError MISMATCH")
if check_dict_case({"STATE":"NC", "ZIP":"12345" }) != True:
  raise Exception("MyLogError MISMATCH")
if check_dict_case({"fruit":"Orange", "taste":"Sweet" }) != True:
  raise Exception("MyLogError MISMATCH")
if check_dict_case({}) != False:
  raise Exception("MyLogError MISMATCH")