def test():
  "--- test function ---"
  param =[(30,),(- 30,),(60,),(90,),(99,),(32,),(21,),(65,),(21,),(99,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
