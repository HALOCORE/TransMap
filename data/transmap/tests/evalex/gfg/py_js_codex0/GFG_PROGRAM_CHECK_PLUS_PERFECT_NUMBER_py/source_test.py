def test():
  "--- test function ---"
  param =[(371,),(9474,),(85,),(35,),(54,),(17,),(97,),(63,),(12,),(43,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
