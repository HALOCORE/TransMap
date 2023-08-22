def test():
  "--- test function ---"
  param =[(31,),(89,),(92,),(66,),(38,),(34,),(17,),(24,),(54,),(20,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
