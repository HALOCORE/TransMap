def test():
  "--- test function ---"
  param =[(82, 5, 94,),(45, 24, 95,),(44, 68, 61,),(88, 24, 43,),(90, 75, 57,),(98, 55, 43,),(80, 54, 88,),(60, 75, 65,),(52, 73, 86,),(71, 26, 45,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
