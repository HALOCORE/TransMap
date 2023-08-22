def test():
  "--- test function ---"
  param =[(12,),(89,),(76,),(2,),(81,),(11,),(26,),(35,),(16,),(66,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
