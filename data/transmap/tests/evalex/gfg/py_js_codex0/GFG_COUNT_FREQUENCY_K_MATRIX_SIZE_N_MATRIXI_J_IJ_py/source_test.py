def test():
  "--- test function ---"
  param =[(90, 74,),(86, 36,),(92, 38,),(72, 71,),(25, 57,),(11, 53,),(94, 80,),(91, 75,),(66, 58,),(34, 88,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
