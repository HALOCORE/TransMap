def test():
  "--- test function ---"
  param =[(23, 16, 23, 18,),(62, 76, 81, 97,),(32, 46, 1, 78,),(82, 48, 72, 58,),(94, 99, 62, 38,),(44, 21, 46, 60,),(4, 57, 2, 77,),(53, 23, 80, 5,),(9, 55, 26, 85,),(23, 15, 73, 42,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
