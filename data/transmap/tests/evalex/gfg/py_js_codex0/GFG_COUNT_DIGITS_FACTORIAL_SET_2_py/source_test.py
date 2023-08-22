def test():
  "--- test function ---"
  param =[(56,),(92,),(52,),(96,),(96,),(63,),(51,),(79,),(70,),(9,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
