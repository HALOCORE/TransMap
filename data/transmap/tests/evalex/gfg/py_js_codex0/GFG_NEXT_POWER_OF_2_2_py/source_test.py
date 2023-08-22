def test():
  "--- test function ---"
  param =[(63,),(78,),(13,),(5,),(34,),(69,),(63,),(78,),(80,),(19,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
