def test():
  "--- test function ---"
  param =[(1,),(4,),(9,),(25,),(36,),(3,),(121,),(14,),(17,),(80,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
