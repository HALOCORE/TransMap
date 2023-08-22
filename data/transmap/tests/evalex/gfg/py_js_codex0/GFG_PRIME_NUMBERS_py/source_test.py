def test():
  "--- test function ---"
  param =[(2,),(74,),(46,),(38,),(51,),(48,),(6,),(14,),(31,),(10,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
