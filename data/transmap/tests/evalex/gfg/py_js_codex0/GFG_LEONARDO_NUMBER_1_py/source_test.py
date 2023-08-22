def test():
  "--- test function ---"
  param =[(75,),(76,),(55,),(14,),(43,),(10,),(16,),(30,),(44,),(65,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
