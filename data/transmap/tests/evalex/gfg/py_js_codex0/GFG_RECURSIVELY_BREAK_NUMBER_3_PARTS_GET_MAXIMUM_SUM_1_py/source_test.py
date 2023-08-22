def test():
  "--- test function ---"
  param =[(50,),(83,),(18,),(24,),(31,),(38,),(94,),(24,),(13,),(53,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
