def test():
  "--- test function ---"
  param =[(33, 55,),(95, 7,),(21, 63,),(3, 62,),(40, 53,),(64, 24,),(17, 23,),(58, 74,),(44, 13,),(27, 54,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
