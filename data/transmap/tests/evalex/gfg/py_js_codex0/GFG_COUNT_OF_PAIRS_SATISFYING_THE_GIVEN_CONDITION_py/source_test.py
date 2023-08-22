def test():
  "--- test function ---"
  param =[(31, 91,),(72, 85,),(23, 49,),(42, 32,),(13, 7,),(93, 5,),(33, 32,),(94, 76,),(60, 60,),(11, 26,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
