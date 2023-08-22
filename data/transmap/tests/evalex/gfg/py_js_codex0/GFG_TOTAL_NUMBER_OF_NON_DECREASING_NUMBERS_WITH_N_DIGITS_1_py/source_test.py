def test():
  "--- test function ---"
  param =[(40,),(11,),(94,),(73,),(6,),(73,),(58,),(40,),(64,),(66,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
