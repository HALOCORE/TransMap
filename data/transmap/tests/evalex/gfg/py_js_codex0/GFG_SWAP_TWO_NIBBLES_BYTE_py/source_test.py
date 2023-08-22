def test():
  "--- test function ---"
  param =[(57,),(99,),(66,),(97,),(95,),(42,),(95,),(89,),(3,),(84,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
