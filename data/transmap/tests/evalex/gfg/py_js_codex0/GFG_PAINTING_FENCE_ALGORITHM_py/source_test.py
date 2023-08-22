def test():
  "--- test function ---"
  param =[(6, 30,),(23, 87,),(89, 31,),(63, 36,),(23, 68,),(44, 66,),(81, 18,),(43, 73,),(9, 42,),(41, 98,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
