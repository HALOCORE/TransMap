def test():
  "--- test function ---"
  param =[(64,),(36,),(21,),(3,),(18,),(82,),(76,),(99,),(70,),(31,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
