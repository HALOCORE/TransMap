def test():
  "--- test function ---"
  param =[(6,),(25,),(15,),(30,),(17,),(80,),(27,),(13,),(12,),(67,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
