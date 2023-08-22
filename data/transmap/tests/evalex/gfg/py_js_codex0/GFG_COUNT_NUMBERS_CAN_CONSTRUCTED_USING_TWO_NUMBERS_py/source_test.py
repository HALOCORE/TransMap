def test():
  "--- test function ---"
  param =[(23, 16, 16,),(56, 95, 6,),(30, 63, 1,),(51, 89, 46,),(21, 99, 38,),(69, 63, 50,),(12, 69, 73,),(44, 52, 9,),(99, 65, 10,),(46, 58, 37,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
