def test():
  "--- test function ---"
  param =[(74,),(70,),(85,),(78,),(71,),(32,),(97,),(90,),(64,),(48,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
