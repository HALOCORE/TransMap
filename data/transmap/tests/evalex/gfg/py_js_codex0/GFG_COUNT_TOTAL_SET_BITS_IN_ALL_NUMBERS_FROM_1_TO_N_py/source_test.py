def test():
  "--- test function ---"
  param =[(90,),(56,),(43,),(31,),(77,),(35,),(43,),(66,),(15,),(95,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
