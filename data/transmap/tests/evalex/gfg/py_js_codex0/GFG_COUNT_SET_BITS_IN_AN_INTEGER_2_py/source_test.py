def test():
  "--- test function ---"
  param =[(32,),(94,),(33,),(99,),(17,),(64,),(80,),(42,),(12,),(86,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
