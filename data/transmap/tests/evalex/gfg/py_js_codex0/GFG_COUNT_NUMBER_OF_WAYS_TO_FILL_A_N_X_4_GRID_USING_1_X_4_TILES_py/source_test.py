def test():
  "--- test function ---"
  param =[(61,),(22,),(65,),(57,),(36,),(25,),(16,),(26,),(92,),(5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
