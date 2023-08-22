def test():
  "--- test function ---"
  param =[(66, 4,),(82, 66,),(12, 38,),(55, 33,),(34, 26,),(22, 23,),(13, 98,),(57, 84,),(76, 94,),(76, 95,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
