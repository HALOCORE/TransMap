def test():
  "--- test function ---"
  param =[(57,),(21,),(11,),(64,),(88,),(62,),(17,),(49,),(22,),(19,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
