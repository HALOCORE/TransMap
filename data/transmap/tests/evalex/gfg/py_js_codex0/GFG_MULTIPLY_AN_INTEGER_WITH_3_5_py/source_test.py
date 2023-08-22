def test():
  "--- test function ---"
  param =[(58,),(16,),(82,),(33,),(88,),(51,),(81,),(38,),(79,),(89,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
