def test():
  "--- test function ---"
  param =[(96,),(66,),(67,),(13,),(75,),(78,),(1,),(83,),(27,),(65,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
