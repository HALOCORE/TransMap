def test():
  "--- test function ---"
  param =[(9, 40, 38,),(97, 47, 30,),(16, 28, 13,),(16, 82, 70,),(6, 81, 29,),(58, 10, 55,),(6, 47, 20,),(22, 4, 64,),(51, 46, 66,),(58, 25, 53,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
