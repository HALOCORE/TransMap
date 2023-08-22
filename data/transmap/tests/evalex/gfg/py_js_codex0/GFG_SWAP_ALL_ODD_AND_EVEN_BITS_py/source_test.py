def test():
  "--- test function ---"
  param =[(99,),(94,),(11,),(3,),(77,),(57,),(54,),(66,),(98,),(36,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
