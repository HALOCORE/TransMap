def test():
  "--- test function ---"
  param =[(94, 36,),(11, 79,),(88, 63,),(85, 43,),(74, 89,),(96, 33,),(49, 51,),(50, 24,),(21, 26,),(81, 19,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
