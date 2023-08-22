def test():
  "--- test function ---"
  param =[(95, 88, 97, 92,),(16, 26, 59, 42,),(55, 56, 40, 41,),(75, 35, 79, 30,),(90, 12, 59, 34,),(58, 65, 25, 19,),(69, 64, 17, 94,),(5, 1, 59, 38,),(36, 33, 97, 44,),(62, 69, 66, 9,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
