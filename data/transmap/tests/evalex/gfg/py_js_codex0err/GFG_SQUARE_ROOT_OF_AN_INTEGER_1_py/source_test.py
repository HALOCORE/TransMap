def test():
  "--- test function ---"
  param =[(40,),(10,),(46,),(54,),(1,),(67,),(64,),(10,),(75,),(11,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
