def test():
  "--- test function ---"
  param =[(27,),(72,),(13,),(83,),(75,),(33,),(57,),(51,),(10,),(1,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
