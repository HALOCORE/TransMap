def test():
  "--- test function ---"
  param =[(20,),(95,),(39,),(21,),(94,),(79,),(56,),(62,),(23,),(3,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
