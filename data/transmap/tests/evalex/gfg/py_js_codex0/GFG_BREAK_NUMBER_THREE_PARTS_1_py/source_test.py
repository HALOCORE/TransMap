def test():
  "--- test function ---"
  param =[(71,),(71,),(36,),(3,),(97,),(69,),(15,),(48,),(77,),(6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
