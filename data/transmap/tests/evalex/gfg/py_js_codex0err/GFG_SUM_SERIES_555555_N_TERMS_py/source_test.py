def test():
  "--- test function ---"
  param =[(18,),(81,),(77,),(84,),(87,),(14,),(15,),(3,),(21,),(60,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
