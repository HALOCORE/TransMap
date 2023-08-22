def test():
  "--- test function ---"
  param =[(9,),(50,),(7,),(21,),(21,),(91,),(11,),(25,),(62,),(4,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
