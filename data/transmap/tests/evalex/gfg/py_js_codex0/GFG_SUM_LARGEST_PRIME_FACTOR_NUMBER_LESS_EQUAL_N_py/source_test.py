def test():
  "--- test function ---"
  param =[(6,),(35,),(87,),(91,),(63,),(11,),(66,),(17,),(92,),(81,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
