def test():
  "--- test function ---"
  param =[(57, 5, 33,),(58, 45, 4,),(38, 89, 9,),(5, 39, 30,),(91, 90, 47,),(76, 56, 46,),(38, 43, 84,),(97, 26, 52,),(97, 90, 90,),(99, 2, 26,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
