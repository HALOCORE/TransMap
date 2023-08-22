def test():
  "--- test function ---"
  param =[(1,),(4,),(64,),(- 64,),(128,),(1024,),(45,),(33,),(66,),(74,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
