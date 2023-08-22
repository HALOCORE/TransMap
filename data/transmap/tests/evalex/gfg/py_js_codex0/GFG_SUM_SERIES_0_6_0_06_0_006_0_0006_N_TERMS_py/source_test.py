def test():
  "--- test function ---"
  param =[(1,),(2,),(3,),(4,),(5,),(74,),(77,),(67,),(9,),(12,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
