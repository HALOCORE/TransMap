def test():
  "--- test function ---"
  param =[(21,),(4,),(31,),(79,),(38,),(75,),(36,),(32,),(23,),(65,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
