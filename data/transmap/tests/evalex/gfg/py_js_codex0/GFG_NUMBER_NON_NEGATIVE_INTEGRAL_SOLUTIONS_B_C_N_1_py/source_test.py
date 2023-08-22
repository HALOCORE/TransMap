def test():
  "--- test function ---"
  param =[(41,),(72,),(54,),(75,),(87,),(41,),(78,),(80,),(46,),(9,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
