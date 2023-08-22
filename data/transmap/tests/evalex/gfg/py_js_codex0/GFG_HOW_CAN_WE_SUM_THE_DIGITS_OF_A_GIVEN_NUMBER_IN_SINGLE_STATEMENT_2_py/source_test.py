def test():
  "--- test function ---"
  param =[(73,),(91,),(27,),(79,),(31,),(84,),(68,),(9,),(85,),(35,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
