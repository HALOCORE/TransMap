def test():
  "--- test function ---"
  param =[(37,),(24,),(13,),(56,),(26,),(67,),(82,),(60,),(64,),(65,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
