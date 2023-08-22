def test():
  "--- test function ---"
  param =[(45,),(26,),(74,),(80,),(46,),(67,),(16,),(87,),(27,),(17,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
