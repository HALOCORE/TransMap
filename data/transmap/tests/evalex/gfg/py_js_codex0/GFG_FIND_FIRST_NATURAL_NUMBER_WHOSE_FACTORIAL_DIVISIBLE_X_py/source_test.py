def test():
  "--- test function ---"
  param =[(67,),(47,),(57,),(89,),(67,),(40,),(16,),(83,),(93,),(43,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
