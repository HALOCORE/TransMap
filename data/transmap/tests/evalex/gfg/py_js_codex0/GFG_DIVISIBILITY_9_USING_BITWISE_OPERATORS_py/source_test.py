def test():
  "--- test function ---"
  param =[(96,),(85,),(54,),(14,),(47,),(11,),(49,),(99,),(28,),(82,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
