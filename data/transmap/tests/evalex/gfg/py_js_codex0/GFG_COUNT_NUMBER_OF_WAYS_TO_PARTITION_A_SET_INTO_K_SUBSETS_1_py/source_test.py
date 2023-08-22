def test():
  "--- test function ---"
  param =[(84, 99,),(95, 64,),(67, 21,),(92, 22,),(97, 35,),(13, 77,),(37, 46,),(9, 92,),(10, 26,),(90, 94,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
