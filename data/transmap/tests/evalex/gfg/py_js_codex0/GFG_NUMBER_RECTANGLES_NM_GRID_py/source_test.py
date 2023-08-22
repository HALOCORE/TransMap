def test():
  "--- test function ---"
  param =[(86, 70,),(33, 65,),(3, 5,),(91, 12,),(33, 27,),(13, 75,),(75, 36,),(58, 64,),(50, 51,),(4, 44,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
