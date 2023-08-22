def test():
  "--- test function ---"
  param =[(64, 4,),(16, 2,),(27, 3,),(81, 72,),(1, 9,),(69, 17,),(8, 20,),(31, 79,),(43, 81,),(54, 89,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
