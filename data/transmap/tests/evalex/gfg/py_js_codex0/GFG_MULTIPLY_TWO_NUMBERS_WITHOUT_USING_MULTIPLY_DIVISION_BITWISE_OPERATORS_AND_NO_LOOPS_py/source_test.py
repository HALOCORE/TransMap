def test():
  "--- test function ---"
  param =[(18, 94,),(23, 36,),(24, 22,),(75, 92,),(25, 43,),(57, 32,),(31, 57,),(8, 17,),(12, 76,),(74, 70,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
