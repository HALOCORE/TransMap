def test():
  "--- test function ---"
  param =[(2,),(39,),(31,),(45,),(35,),(94,),(67,),(50,),(4,),(63,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
