def test():
  "--- test function ---"
  param =[(3,),(19,),(39,),(89,),(96,),(68,),(48,),(5,),(3,),(4,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
