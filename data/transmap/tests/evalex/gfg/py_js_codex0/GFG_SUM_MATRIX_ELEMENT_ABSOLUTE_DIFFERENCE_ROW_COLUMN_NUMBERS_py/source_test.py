def test():
  "--- test function ---"
  param =[(60,),(44,),(72,),(90,),(99,),(45,),(27,),(11,),(65,),(52,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
