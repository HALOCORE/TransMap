def test():
  "--- test function ---"
  param =[(73,),(28,),(33,),(23,),(84,),(31,),(48,),(46,),(45,),(90,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
