def test():
  "--- test function ---"
  param =[(89,),(11,),(14,),(92,),(76,),(63,),(51,),(16,),(83,),(66,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
