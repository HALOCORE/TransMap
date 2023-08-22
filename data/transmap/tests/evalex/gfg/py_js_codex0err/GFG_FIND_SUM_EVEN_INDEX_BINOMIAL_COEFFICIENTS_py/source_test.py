def test():
  "--- test function ---"
  param =[(18,),(54,),(67,),(17,),(47,),(99,),(26,),(93,),(57,),(98,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
