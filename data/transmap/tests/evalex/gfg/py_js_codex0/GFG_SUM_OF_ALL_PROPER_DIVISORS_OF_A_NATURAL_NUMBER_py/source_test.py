def test():
  "--- test function ---"
  param =[(2,),(57,),(28,),(43,),(38,),(29,),(45,),(47,),(44,),(3,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
