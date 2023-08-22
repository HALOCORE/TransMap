def test():
  "--- test function ---"
  param =[(11, 5,),(36, 69,),(71, 28,),(74, 1,),(66, 84,),(38, 14,),(2, 11,),(73, 87,),(79, 11,),(30, 55,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
