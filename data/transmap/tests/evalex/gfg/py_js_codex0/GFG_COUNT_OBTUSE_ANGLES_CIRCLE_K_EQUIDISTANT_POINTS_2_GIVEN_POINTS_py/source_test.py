def test():
  "--- test function ---"
  param =[(83, 98, 86,),(3, 39, 87,),(11, 96, 30,),(50, 67, 48,),(40, 16, 32,),(62, 86, 76,),(40, 78, 71,),(66, 11, 74,),(6, 9, 19,),(25, 5, 5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
