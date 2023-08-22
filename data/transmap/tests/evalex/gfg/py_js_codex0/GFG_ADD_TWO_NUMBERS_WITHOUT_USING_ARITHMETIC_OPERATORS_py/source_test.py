def test():
  "--- test function ---"
  param =[(56, 60,),(17, 44,),(73, 96,),(75, 3,),(27, 54,),(61, 1,),(65, 63,),(22, 19,),(61, 9,),(97, 23,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
