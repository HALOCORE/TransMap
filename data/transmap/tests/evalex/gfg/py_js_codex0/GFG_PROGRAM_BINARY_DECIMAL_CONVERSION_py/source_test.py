def test():
  "--- test function ---"
  param =[(70,),(95,),(41,),(97,),(8,),(16,),(41,),(57,),(81,),(78,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
