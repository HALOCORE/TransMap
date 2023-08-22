def test():
  "--- test function ---"
  param =[(41,),(94,),(80,),(40,),(76,),(5,),(43,),(67,),(24,),(90,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
