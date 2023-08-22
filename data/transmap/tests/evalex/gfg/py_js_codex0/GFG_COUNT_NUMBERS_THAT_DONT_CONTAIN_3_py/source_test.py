def test():
  "--- test function ---"
  param =[(85,),(86,),(3,),(35,),(59,),(38,),(33,),(15,),(75,),(74,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
