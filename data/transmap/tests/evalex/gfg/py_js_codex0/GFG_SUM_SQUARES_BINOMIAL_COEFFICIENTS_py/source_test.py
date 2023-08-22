def test():
  "--- test function ---"
  param =[(57,),(44,),(19,),(24,),(64,),(60,),(57,),(22,),(15,),(63,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
