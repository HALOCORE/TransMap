def test():
  "--- test function ---"
  param =[(65,),(94,),(52,),(31,),(9,),(1,),(41,),(98,),(45,),(24,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
