def test():
  "--- test function ---"
  param =[(84,),(41,),(5,),(38,),(79,),(80,),(64,),(62,),(24,),(12,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
