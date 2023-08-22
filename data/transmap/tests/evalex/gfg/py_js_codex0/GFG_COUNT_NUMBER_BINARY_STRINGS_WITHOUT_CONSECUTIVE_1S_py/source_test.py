def test():
  "--- test function ---"
  param =[(86,),(75,),(14,),(5,),(41,),(35,),(30,),(89,),(84,),(53,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
