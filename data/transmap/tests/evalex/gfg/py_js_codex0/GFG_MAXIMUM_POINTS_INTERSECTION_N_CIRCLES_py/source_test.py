def test():
  "--- test function ---"
  param =[(30,),(25,),(69,),(39,),(14,),(60,),(89,),(27,),(29,),(29,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
