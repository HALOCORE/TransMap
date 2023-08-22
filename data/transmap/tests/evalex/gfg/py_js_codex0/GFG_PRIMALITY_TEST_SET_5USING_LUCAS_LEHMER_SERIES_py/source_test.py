def test():
  "--- test function ---"
  param =[(11,),(27,),(31,),(47,),(3,),(14,),(41,),(72,),(39,),(22,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
