def test():
  "--- test function ---"
  param =[(13,),(27,),(1,),(24,),(98,),(94,),(36,),(41,),(74,),(39,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
