def test():
  "--- test function ---"
  param =[(35, 8, 77,),(85, 55, 33,),(22, 23, 64,),(8, 43, 29,),(12, 64, 11,),(58, 25, 26,),(65, 4, 28,),(10, 95, 55,),(23, 13, 54,),(5, 50, 71,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
