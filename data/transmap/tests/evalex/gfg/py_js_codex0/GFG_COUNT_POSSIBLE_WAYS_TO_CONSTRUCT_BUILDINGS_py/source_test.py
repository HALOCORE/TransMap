def test():
  "--- test function ---"
  param =[(17,),(66,),(53,),(97,),(34,),(54,),(9,),(99,),(59,),(87,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
