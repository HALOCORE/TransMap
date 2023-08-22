def test():
  "--- test function ---"
  param =[(24,),(1,),(91,),(90,),(89,),(29,),(3,),(60,),(75,),(14,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
