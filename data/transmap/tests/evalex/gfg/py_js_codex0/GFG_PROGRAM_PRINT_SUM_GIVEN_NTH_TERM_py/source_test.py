def test():
  "--- test function ---"
  param =[(39,),(20,),(10,),(39,),(70,),(21,),(21,),(80,),(89,),(99,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
