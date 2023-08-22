def test():
  "--- test function ---"
  param =[(68,),(91,),(99,),(79,),(61,),(48,),(89,),(20,),(83,),(1,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
