def test():
  "--- test function ---"
  param =[(6, 27, 51,),(32, 88, 69,),(99, 18, 48,),(22, 1, 74,),(26, 78, 95,),(67, 51, 27,),(69, 57, 91,),(39, 8, 9,),(7, 82, 41,),(91, 56, 7,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
